export class IsValidID extends Error {
	constructor(message: string = '') {
		super(`Error it is possible that the parameters are not defined or the id is not of numeric type. check that id or name is different from undefine.
		${message}.`);
		this.name = 'IsValidIDError';
	}
}
