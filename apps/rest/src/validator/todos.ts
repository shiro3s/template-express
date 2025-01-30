import { checkSchema } from "express-validator";

export const findALlTodoValidator = checkSchema({
	is_deleted: {
		isBoolean: true,
		errorMessage: "The is_deleted must be boolean",
		optional: true,
	},
	limit: {
		isNumeric: true,
		errorMessage: "The limit must be numeric",
		optional: true,
	},
	offset: {
		isNumeric: true,
		errorMessage: "The offset must be numeric",
		optional: true,
	},
});
