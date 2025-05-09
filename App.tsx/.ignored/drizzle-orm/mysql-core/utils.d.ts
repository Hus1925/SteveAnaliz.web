import type { Check } from "./checks.js";
import type { ForeignKey } from "./foreign-keys.js";
import type { Index } from "./indexes.js";
import type { PrimaryKey } from "./primary-keys.js";
import type { IndexForHint } from "./query-builders/select.js";
import { MySqlTable } from "./table.js";
import { type UniqueConstraint } from "./unique-constraint.js";
import type { MySqlView } from "./view.js";
export declare function getTableConfig(table: MySqlTable): {
    columns: import("./index.js").MySqlColumn<import("../column.js").ColumnBaseConfig<import("../column-builder.js").ColumnDataType, string>, {}, {}>[];
    indexes: Index[];
    foreignKeys: ForeignKey[];
    checks: Check[];
    primaryKeys: PrimaryKey[];
    uniqueConstraints: UniqueConstraint[];
    name: string;
    schema: string | undefined;
    baseName: string;
};
export declare function getViewConfig<TName extends string = string, TExisting extends boolean = boolean>(view: MySqlView<TName, TExisting>): {
    algorithm?: "undefined" | "merge" | "temptable";
    sqlSecurity?: "definer" | "invoker";
    withCheckOption?: "cascaded" | "local";
    name: TName;
    originalName: TName;
    schema: string | undefined;
    selectedFields: import("../index.js").ColumnsSelection;
    isExisting: TExisting;
    query: TExisting extends true ? undefined : import("../index.js").SQL<unknown>;
    isAlias: boolean;
};
export declare function convertIndexToString(indexes: IndexForHint[]): string[];
export declare function toArray<T>(value: T | T[]): T[];
