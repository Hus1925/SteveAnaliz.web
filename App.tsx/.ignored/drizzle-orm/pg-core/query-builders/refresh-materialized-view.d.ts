import { entityKind } from "../../entity.js";
import type { PgDialect } from "../dialect.js";
import type { PgPreparedQuery, PgQueryResultHKT, PgQueryResultKind, PgSession, PreparedQueryConfig } from "../session.js";
import type { PgMaterializedView } from "../view.js";
import { QueryPromise } from "../../query-promise.js";
import type { RunnableQuery } from "../../runnable-query.js";
import type { Query, SQLWrapper } from "../../sql/sql.js";
export interface PgRefreshMaterializedView<TQueryResult extends PgQueryResultHKT> extends QueryPromise<PgQueryResultKind<TQueryResult, never>>, RunnableQuery<PgQueryResultKind<TQueryResult, never>, 'pg'>, SQLWrapper {
    readonly _: {
        readonly dialect: 'pg';
        readonly result: PgQueryResultKind<TQueryResult, never>;
    };
}
export declare class PgRefreshMaterializedView<TQueryResult extends PgQueryResultHKT> extends QueryPromise<PgQueryResultKind<TQueryResult, never>> implements RunnableQuery<PgQueryResultKind<TQueryResult, never>, 'pg'>, SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private config;
    constructor(view: PgMaterializedView, session: PgSession, dialect: PgDialect);
    concurrently(): this;
    withNoData(): this;
    toSQL(): Query;
    prepare(name: string): PgPreparedQuery<PreparedQueryConfig & {
        execute: PgQueryResultKind<TQueryResult, never>;
    }>;
    private authToken?;
    execute: ReturnType<this['prepare']>['execute'];
}
