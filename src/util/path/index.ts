export function pathMatches(path: string, match: string) {
    if (path === "/")
        return match === "/";

    if (path.startsWith("/"))
        path = path.slice(1);

    if (match.startsWith("/"))
        match = match.slice(1);

    return match.startsWith(path);
}