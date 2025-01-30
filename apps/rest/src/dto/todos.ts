import type {
	CreateTodoQuery,
	ExpressFindAllTodoQuery,
	FindAllTodoQuery,
} from "@/models/todos";
import { bool, numeric } from "@/utils/convert";

export const findAllTodoDto = (query: ExpressFindAllTodoQuery) => {
	const todo: FindAllTodoQuery = {
		title: query.title,
		done: bool(query.done),
		is_deleted: bool(query.is_deleted),
		sortKey: query.sortKey || "id",
		order: query.order || "desc",
		limit: numeric(query.limit) || 50,
		offset: numeric(query.offset),
	};

	return todo;
};

export const createTodoDto = (query: CreateTodoQuery) => {
	const todo: Required<CreateTodoQuery> = {
		title: query.title || "",
		done: query.done || false,
	};

	return todo;
};
