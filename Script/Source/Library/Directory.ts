import WalkUntilGit from "./WalkUntilGit.js";

/**
 * The function `Directory` takes a set of file globs, walks through the directories
 * until it finds a Git repository, and returns a map where the keys are the directories
 * and the values are sets of globs associated with each directory.
 * @param Globs - Globs is a Set of strings representing file globs. A file glob is a
 * pattern used to match file paths. For example, "*.js" would match all JavaScript
 * files in a directory. The Globs parameter is a set of these file globs that will be
 * used to search for files in
 * @returns The function `Directory` returns a `Map` object where the keys are directory
 * paths and the values are sets of glob patterns associated with each directory.
 */
export default async (Globs: Set<string>) => {
	const Results = new Map();

	for (const Glob of Globs) {
		const Dir = await WalkUntilGit(Glob);

		if (Results.has(Dir)) {
			Results.set(Dir, Results.get(Dir).add(Glob));
		} else {
			Results.set(Dir, new Set<string>([Glob].sort()));
		}
	}

	return Results;
};
