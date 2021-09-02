import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  connectTimeoutMS: 5000
};
