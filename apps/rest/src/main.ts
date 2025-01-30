import { initMiddleware } from "@/middlewares";
import { initRoutes } from "@/routes";
import { PrismaClient } from "@prisma/client";
import express from "express";

const port = process.env.PORT || 8080;
const prisma = new PrismaClient({
	log: ["query"],
});

try {
	const app = express();
	app.set("prisma", prisma);

	initMiddleware(app);
	initRoutes(app);

	app.listen(port, () => {
		console.log(`server listening on port: ${port}`);
	});
} catch (error) {
	console.log(error);
	prisma.$disconnect();
}
