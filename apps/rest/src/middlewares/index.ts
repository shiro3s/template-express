import bodyParser from "body-parser";
import cors from "cors";
import type { Express } from "express";
import morgan from "morgan";

export const initMiddleware = (app: Express) => {
	app.use(
		cors({
			origin: "*",
			methods: ["HEAD", "GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
		}),
	);
	app.use(morgan("tiny"));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
};
