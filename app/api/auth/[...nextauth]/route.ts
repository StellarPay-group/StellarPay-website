// import { NextAuthHandler } from "@auth/nextjs";
// import { authConfig } from "@/controllers/authController";

// const handler = NextAuthHandler(authConfig);

// export { handler as GET, handler as POST };

export function GET() {
          return new Response("Auth route disabled");
        }
        
        export function POST() {
          return new Response("Auth route disabled");
        }