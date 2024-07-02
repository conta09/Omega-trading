"use client"

import { SessionProvider } from "next-auth/react";
import { Children } from "react";

export const NextAuthProvider =({ children}) => {
    return<SessionProvider>{children}</SessionProvider>
};


