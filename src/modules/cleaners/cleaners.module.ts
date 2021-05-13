import { Module, Global } from '@nestjs/common';
import { CleanersService } from './cleaners.service';

@Global()
@Module({
	providers: [
		CleanersService,
	],
	exports: [
		CleanersService,
	]
})
export class CleanersModule { }
