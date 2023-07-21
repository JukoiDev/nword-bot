import { _handle } from "@root/functions/handle";

export function registerEvents(directory: string): void {
    for (const file of _handle(directory)) {
        require(file);
    }
}
