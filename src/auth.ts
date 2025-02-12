import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = { id: "1", name: "admin", email: "admin@smart.com", role: "admin" }
                if (credentials?.username === user.name && credentials?.password === "admin") {
                    console.log(`🔐 Login successful for ${user.name}`)
                    return user
                }
                console.log("❌ Invalid credentials")
                return null
            }
        }),
    ],
    session: {
        strategy: "jwt", // ใช้ JWT แทน Session-based storage
        maxAge: 60 * 60 * 0.01, // 2 ชั่วโมง (หน่วยเป็นวินาที)
    },
    jwt: {
        maxAge: 60 * 60 * 0.01, // 2 ชั่วโมง (หน่วยเป็นวินาที)
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.role = user.role
                token.expires = Math.floor(Date.now() / 1000) + 60 * 60 * 0.01 // หมดอายุใน 2 ชั่วโมง
            }
            // 🔥 ถ้า JWT หมดอายุ ให้ return null เพื่อบังคับ Logout
            if (Date.now() >= token.expires * 1000) {
                return null
            }
            return token
        },


        async session({ session, token }) {
            session.user.id = token.id
            session.user.role = 'BROOO'
            session.expires = new Date(token.expires * 1000).toISOString() // ให้ session หมดอายุตาม JWT
            return session
        }
    }
})
