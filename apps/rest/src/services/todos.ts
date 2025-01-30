import type {
	CreateTodoQuery,
	FindAllTodoQuery,
	UpdateTodoQuery,
} from "@/models/todos";
import {
	todoRepositoryCreate,
	todoRepositoryFindAll,
	todoRepositoryFindById,
	todoRepositoryUpdate,
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

export const todoServiceUpdate = async (
	prisma: PrismaClient,
	id: number,
	data: UpdateTodoQuery,
) => {
	return await todoRepositoryUpdate(prisma, id, data);
};

export const todoServiceDelete = () => {};
