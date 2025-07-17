import NextAuth from "next-auth";
import { AuthController } from "@/controllers/authController";

const handler = NextAuth(AuthController.getAuthOptions());

export { handler as GET, handler as POST }; 