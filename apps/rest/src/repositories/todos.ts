import { createTodo, findAllTodo, findTodoById, updateTodo } from "@/dao/todos";
import type {
	CreateTodoQuery,
	FindAllTodoQuery,
	UpdateTodoQuery,
} from "@/models/todos";
import type { PrismaClient } from "@prisma/client";

export const todoRepositoryFindAll = async (
	prisma: PrismaClient,
	cond: FindAllTodoQuery,
) => {
	return await findAllTodo(prisma, cond);
};

export const todoRepositoryFindById = async (
	prisma: PrismaClient,
	id: number,
) => {
	return await findTodoById(prisma, id);
};

export const todoRepositoryCreate = async (
	prisma: PrismaClient,
	todo: Required<CreateTodoQuery>,
) => {
	return await createTodo(prisma, todo);
};

export const todoRepositoryUpdate = async (
	prisma: PrismaClient,
	id: number,
	data: UpdateTodoQuery,
) => {
	return await updateTodo(prisma, id, data);
};

export const todoRepositoryDelete = () => {};
