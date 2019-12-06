import userResolvers from './user/userResolvers';
import scooterResolvers from './scooter/scooterResolvers';
import sparepartResolvers from './sparepart/sparepartResolvers';
import textareaResolvers from './textarea/textareaResolvers';
import mailResolvers from './mail/mailResolvers';
import categoryResolvers from './category/categoryResolvers';

const resolvers = [
  userResolvers,
  scooterResolvers,
  sparepartResolvers,
  textareaResolvers,
  mailResolvers,
  categoryResolvers
];
module.exports = resolvers;
