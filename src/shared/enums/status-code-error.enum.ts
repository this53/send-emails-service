import { HttpStatus } from '@nestjs/common';

export enum StatusCodeError {
  INTERNAL = HttpStatus.INTERNAL_SERVER_ERROR
}
