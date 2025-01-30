import type { Express, NextFunction, Request, Response } from "express";
import routes from "./routes";

export const initRoutes = (app: Express) => {
	app.use(routes);
	app.use((req, res, next) => {
		res.status(404).send("Page Not Found");
	});
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		res.status(500).json(err);
	});
};
