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
	data: UpdateTodoQuery,
) => {
	const todo = await prisma.todo.update({
		where: {
			id,
		},
		data,
	});

	return todo;
};

export const deleteTodo = async (prisma: PrismaClient, id: number) => {
	await prisma.todo.delete({
		where: {
			id,
		},
	});
};
