import { Router } from "express";

type Callback = (router: Router) => void;

export const group = (callback: Callback) => {
	const router = Router();
	callback(router);
	return router;
};
