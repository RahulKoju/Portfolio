import { logger } from "@/lib/logger";
import { NextResponse } from "next/server";

export async function GET() {
  logger.info("health_check_ok");
  return NextResponse.json({ status: "ok" });
}
