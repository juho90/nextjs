import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API 테스트 정상 동작 중 🚀" });
}
