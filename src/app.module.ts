import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ModulesModule } from './modules/modules.module';
import { AllExceptionsFilter } from './shared/errors/all-exceptions.filter';

@Module({
	imports: [
		//DatabaseModule,
		ModulesModule,
	],
	controllers: [],
	providers: [
		{
			provide: APP_FILTER,
			useClass: AllExceptionsFilter
		},
		{
		  provide: APP_PIPE,
		  useClass: ValidationPipe,
		},
	],
})
export class AppModule { }