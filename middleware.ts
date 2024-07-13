import { withAuth } from "next-auth/middleware"

// protecting the routes 
export default withAuth();

// pages to protect
export const config = {
    matcher: ["/chat", "/chat/:id*","/register"],
    }