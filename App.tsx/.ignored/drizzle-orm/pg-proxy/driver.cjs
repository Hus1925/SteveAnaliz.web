"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var driver_exports = {};
__export(driver_exports, {
  PgRemoteDatabase: () => PgRemoteDatabase,
  drizzle: () => drizzle
});
module.exports = __toCommonJS(driver_exports);
var import_entity = require("../entity.cjs");
var import_logger = require("../logger.cjs");
var import_db = require("../pg-core/db.cjs");
var import_dialect = require("../pg-core/dialect.cjs");
var import_relations = require("../relations.cjs");
var import_session = require("./session.cjs");
class PgRemoteDatabase extends import_db.PgDatabase {
  static [import_entity.entityKind] = "PgRemoteDatabase";
}
function drizzle(callback, config = {}, _dialect = () => new import_dialect.PgDialect({ casing: config.casing })) {
  const dialect = _dialect();
  let logger;
  if (config.logger === true) {
    logger = new import_logger.DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  let schema;
  if (config.schema) {
    const tablesConfig = (0, import_relations.extractTablesRelationalConfig)(
      config.schema,
      import_relations.createTableRelationsHelpers
    );
    schema = {
      fullSchema: config.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const session = new import_session.PgRemoteSession(callback, dialect, schema, { logger });
  return new PgRemoteDatabase(dialect, session, schema);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PgRemoteDatabase,
  drizzle
});
//# sourceMappingURL=driver.cjs.map