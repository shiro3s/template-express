import type {
	CreateTodoQuery,
	FindAllTodoQuery,
	UpdateTodoQuery,
} from "@/models/todos";
import type { PrismaClient } from "@prisma/client";

export const findAllTodo = async (
	prisma: PrismaClient,
	cond: FindAllTodoQuery,
) => {
	const todos = await prisma.todo.findMany({
		where: {
			title: {
				contains: cond.title,
			},
			done: {
				equals: cond.done,
			},
			is_deleted: {
				equals: cond.is_deleted,
			},
		},
		skip: cond.offset,
		take: cond.limit,
		orderBy: {
			[cond.sortKey]: cond.order,
		},
	});

	return { todos };
};

export const findTodoById = async (prisma: PrismaClient, id: number) => {
	const todo = await prisma.todo.findFirstOrThrow({
		where: {
			id: {
				equals: id,
			},
		},
	});

	return { todo };
};

export const createTodo = async (
	prisma: PrismaClient,
	todo: Required<CreateTodoQuery>,
) => {
	await prisma.todo.create({
		data: {
			title: todo.title,
			done: todo.done,
		},
	});
};

export const updateTodo = async (
	prisma: PrismaClient,
	id: number,
	cond: UpdateTodoQuery,
) => {
	const todo = await prisma.todo.update({
		where: {
			id: id,
		},
		data: {
			title: cond.title,
			done: cond.done,
			is_deleted: cond.is_deleted,
		},
	});

	return todo;
};
