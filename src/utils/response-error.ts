import { BadRequestException } from '@nestjs/common';
export class ResponseError extends BadRequestException {
	constructor(error: Error) {
		super(error.message, error.name);
	}
}
