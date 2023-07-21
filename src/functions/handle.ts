import { readdirSync } from "fs";
import { resolve } from "path";

export function _handle(directory: string): string[] {
    let result: string[] = [];
    const files = readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
        if (file.isDirectory())
            result = [...result, ..._handle(resolve(directory, file.name))];
        else if (file.isFile() && file.name.endsWith(".js"))
            result.push(resolve(directory, file.name));
    }

    return result;
}
