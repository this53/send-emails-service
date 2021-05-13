import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from '~/config/database';
import { DB_URL } from '~/environments';

@Module({
    imports: [
        MongooseModule.forRoot(DB_URL, databaseConfig),
    ],
})
export class DatabaseModule { }