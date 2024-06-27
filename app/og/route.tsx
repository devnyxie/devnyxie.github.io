import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "experimental-edge"; // Enables the Edge Runtime
export const dynamic = "force-dynamic"; // Ensure this route is always treated as dynamic

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Tim's Website";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          fontSize: 40,
        }}
      >
        <h2>{title}</h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
