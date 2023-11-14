import type { Config } from "drizzle-kit"
import { join } from "path"

const path = join(
  import.meta.url.replace(/\\/g, "/").replace(/^file:\/\/+/i, ""),
  "../"
)

export default {
  schema: join(path, "schema.ts").replaceAll("\\", "/"),
  out: "./migrations",
  driver: "libsql",
  dbCredentials: {
    url: "file:///" + join(path, "sqlite.db").replaceAll("\\", "/"),
  },
} satisfies Config
