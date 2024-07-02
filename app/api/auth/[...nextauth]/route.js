import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "829201218705-n9o50gh4i9vg4t58eeb89p2bj7uu4l7b.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
