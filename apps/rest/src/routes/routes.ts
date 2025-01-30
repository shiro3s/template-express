import {
	createTodo,
	deleteTodo,
	findALlTodo,
	findTodoById,
	updateTodo,
} from "@/handlers/todos";
import { findALlTodoValidator } from "@/validator/todos";
import {param} from "express-validator"
import { Router } from "express";
import { group } from "./group";

const router = Router();

router.use(
	"/api/v1/",
	group((v1) => {
		v1.use(
			"/todos",
			group((r) => {
				r.get("/", findALlTodoValidator, findALlTodo);
				r.get("/:id", param("id", "Invalid parameter: id").isNumeric(), findTodoById);
				r.post("/", createTodo);
				r.put("/:id", updateTodo);
				r.delete("/:id", deleteTodo);
			}),
		);
	}),
);

export default router;
