type LogLevel = "info" | "warn" | "error";

function write(
  level: LogLevel,
  event: string,
  meta: Record<string, unknown> = {},
) {
  const entry = {
    time: new Date().toISOString(),
    level,
    service: "portfolio",
    event,
    ...meta,
  };

  const line = JSON.stringify(entry);

  if (level === "error") {
    process.stderr.write(line + "\n");
  } else {
    process.stdout.write(line + "\n");
  }
}

export const logger = {
  info(event: string, meta: Record<string, unknown> = {}) {
    write("info", event, meta);
  },
  warn(event: string, meta: Record<string, unknown> = {}) {
    write("warn", event, meta);
  },
  error(event: string, meta: Record<string, unknown> = {}) {
    write("error", event, meta);
  },
};
