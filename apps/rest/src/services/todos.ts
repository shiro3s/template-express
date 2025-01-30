import type { CreateTodoQuery, FindAllTodoQuery } from "@/models/todos";
import {
	todoRepositoryCreate,
	todoRepositoryFindAll,
	todoRepositoryFindById,
} from "@/repositories/todos";
import type { PrismaClient } from "@prisma/client";

export const todoServiceFindAll = async (
	prisma: PrismaClient,
	cond: FindAllTodoQuery,
) => {
	return await todoRepositoryFindAll(prisma, cond);
};

export const todoServiceFindById = async (prisma: PrismaClient, id: number) => {
	return await todoRepositoryFindById(prisma, id);
};

export const todoServiceCreate = async (
	prisma: PrismaClient,
	todo: Required<CreateTodoQuery>,
) => {
	return await todoRepositoryCreate(prisma, todo);
};

export const todoServiceUpdate = () => {};

export const todoServiceDelete = () => {};
