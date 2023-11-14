import { sqliteTable, integer } from "drizzle-orm/sqlite-core"

export const user = sqliteTable("user", {
  id: integer("id").primaryKey(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).$default(
    () => new Date()
  ),
})
