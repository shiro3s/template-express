import type { components, operations } from "@/gen/schema";

type SchemaFindAllTodoQuery = operations["FindAllTodo"]["parameters"]["query"];
export type ExpressFindAllTodoQuery = Partial<
	Record<keyof Exclude<SchemaFindAllTodoQuery, undefined>, string>
> & {
	order?: Exclude<SchemaFindAllTodoQuery, undefined>["order"];
};

export type FindAllTodoQuery = Omit<
	{
		[K in Required<keyof Exclude<SchemaFindAllTodoQuery, undefined>>]: Exclude<
			Exclude<SchemaFindAllTodoQuery, undefined>[K],
			undefined
		>;
	},
	"title"
> & {
	title: Exclude<SchemaFindAllTodoQuery, undefined>["title"];
};

export type CreateTodoQuery = components["schemas"]["TodoPostBody"];

export type UpdateTodoQuery = components["schemas"]["TodoUpdateBody"];
