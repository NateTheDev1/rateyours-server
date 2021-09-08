import { ApolloError } from 'apollo-server-express';
import User from '../../../db/models/User';
import {
	AuthenticationService,
	signJWT
} from '../../../services/AuthenticationService';
import { verifyAuthentication } from '../../../utils/verifyAuthentication';
import sgMail from '@sendgrid/mail';

export const createUser: Resolvers.MutationResolvers['createUser'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	context.logger.info('Mutation: createUser');

	verifyAuthentication(context, true);

	const existing = await User.query()
		.where({ email: args.user.email })
		.first();

	sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

	if (existing) {
		throw new ApolloError('A user with this name already exists.', '409');
	}

	const authService = new AuthenticationService(args.user.password);

	const created = await User.query().insertAndFetch({
		...args.user,
		password: await authService.hashPassword(),
		accountType: 'default'
	});

	await sgMail.send({
		to: [created.email],
		from: {
			email: 'corporate@yourateit.io',
			name: 'Rateit'
		},
		subject: 'Thank you for signing up for Rateit!',
		templateId: 'd-029b5ef1fb8c473daa553028f48ccdd9'
	});

	context.session = {
		username: created.email,
		userId: created.id
	};

	const token = await signJWT(context);

	return { user: created, token };
};
