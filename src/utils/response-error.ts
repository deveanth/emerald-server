import { HttpException, HttpStatus } from '@nestjs/common';

export class ResponseError {

	constructor(private readonly error: Error) {
		let index = this.error.message.indexOf('for key');
		if (index > -1) this.error.message = error.message.slice(0, index - 1);
		index = this.error.message.indexOf(' «');
		if (index > -1) this.error.message = this.error.message.slice(0, index - 1);
		throw new HttpException(
			{
				status: HttpStatus.BAD_REQUEST,
				error: {
					name: this.error.name,
					message: this.error.message,
				},
			},
			HttpStatus.BAD_REQUEST,
		);
	}
}
