import { createTodoDto, findAllTodoDto } from "@/dto/todos";
import type { ExpressFindAllTodoQuery } from "@/models/todos";
import {
	todoServiceCreate,
	todoServiceFindAll,
	todoServiceFindById,
} from "@/services/todos";
import { numeric } from "@/utils/convert";
import type { PrismaClient } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const findALlTodo = async (
	req: Request<undefined, undefined, undefined, ExpressFindAllTodoQuery>,
	res: Response,
	next: NextFunction,
) => {
	const validate = validationResult(req);

	if (!validate.isEmpty())
		return res.status(400).json({ error: validate.array() });

	const todoDto = findAllTodoDto(req.query);
	const prisma = req.app.get("prisma") as PrismaClient;
	const { todos } = await todoServiceFindAll(prisma, todoDto);

	res.set("x-count", `${todos.length}`);
	return res.status(200).json({ todos: todos });
};

export const findTodoById = async (
	req: Request<{ id: string }, undefined, undefined, undefined>,
	res: Response,
	next: NextFunction,
) => {
	const validate = validationResult(req);

	if (!validate.isEmpty())
		return res.status(400).json({ error: validate.array() });

	try {
		const id = numeric(req.params.id);
		const prisma = req.app.get("prisma") as PrismaClient;
		const todo = await todoServiceFindById(prisma, id);

		return res.status(200).send(todo);
	} catch (error) {
		return next(error);
	}
};

export const createTodo = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const todoDto = createTodoDto(req.body);
		const prisma = req.app.get("prisma") as PrismaClient;
		await todoServiceCreate(prisma, todoDto);

		return res.status(200).send("ok");
	} catch (error) {
		return next(error);
	}
};

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).send("update");
};

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).send("delete");
};
