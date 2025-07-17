import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authMiddleware } from "./middleware/auth";

// Compose all middleware here
export function middleware(request: NextRequest) {
  // Add more middleware calls here as needed
  return authMiddleware(request);
}

export const config = {
  matcher: ["/(protected)/:path*"],
}; 