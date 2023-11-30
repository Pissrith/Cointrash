import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                const res = await fetch("https://www.melivecode.com/api/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const respon = await res.json()
                if (respon.status === 'ok') {
                    respon.user.image = respon.user.avatar
                    respon.user.name = respon.user.fname
                    return respon.user
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/signin',
    }
})

export { handler as GET, handler as POST }