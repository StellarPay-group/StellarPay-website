// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function authMiddleware(request: NextRequest) {
//   // Protect all routes under /(protected)
//   if (request.nextUrl.pathname.startsWith("/(protected)")) {
//     const sessionToken = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");
//     if (!sessionToken) {
//       const signInUrl = new URL("/api/auth/signin", request.url);
//       return NextResponse.redirect(signInUrl);
//     }
//   }
//   return NextResponse.next();
// } 