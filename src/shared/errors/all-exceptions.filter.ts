
import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { StatusCodeError } from '../enums/status-code-error.enum';

@Catch()
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Observable<any> {
        return super.catch(new RpcException({
            status: StatusCodeError.INTERNAL,
            message: exception.message,
            timestamp: (new Date()).toLocaleString()
        }), host);
    }
}