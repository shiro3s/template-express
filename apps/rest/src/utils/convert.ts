export const bool = (str?: string) => {
	switch (str) {
		case "true":
			return true;
		case "false":
			return false;
		default:
			return false;
	}
};

export const numeric = (str?: string) => {
	if (!str) return 0;
	return Number.parseInt(str);
};
