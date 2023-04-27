import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth(
    {
        providers:[

            GoogleProvider({
                clientId :"1057612743533-5opks3i5goqifnplqpkmcs71vke8k8v7.apps.googleusercontent.com",
                clientSecret: "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"
            }
                )
        ]
    }
)