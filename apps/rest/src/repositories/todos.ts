import { createTodo, findAllTodo, findTodoById } from "@/dao/todos";
import type { CreateTodoQuery, FindAllTodoQuery } from "@/models/todos";
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

export const todoRepositoryUpdate = () => {};

export const todoRepositoryDelete = () => {};
