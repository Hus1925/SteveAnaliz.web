import type { AnySQLiteSelect } from "../sqlite-core/index.cjs";
import { SQLiteRelationalQuery } from "../sqlite-core/query-builders/query.cjs";
export declare const useLiveQuery: <T extends Pick<AnySQLiteSelect, "_" | "then"> | SQLiteRelationalQuery<"sync", unknown>>(query: T, deps?: unknown[]) => {
    readonly data: Awaited<T>;
    readonly error: Error | undefined;
    readonly updatedAt: Date | undefined;
};
