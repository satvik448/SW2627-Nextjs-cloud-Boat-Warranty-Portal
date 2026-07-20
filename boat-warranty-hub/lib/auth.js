import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/services/auth.service";
import logger from "@/lib/logger";
export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:"Email",
                    type:"email"
                },
                password:{
                    label:"Password",
                    type:"password"
                }
            },

            async authorize(credentials){
                try {
                    const user = await loginUser(credentials);
                    if (user) {
                        logger.info({ userId: user.id, role: user.role }, "User logged in successfully");
                    }
                    return user;
                } catch(error){
                    logger.warn({ email: credentials?.email }, "Failed login attempt");
                    return null;
                }
            }
        })
    ],

    session:{
        strategy:"jwt"
    },

    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id;
                token.role=user.role;
            }

            return token;
        },

        async session({session,token}){
            session.user = {
                ...session.user,
                id: token.id,
                role: token.role,
            };

            return session;
        }
    },
    
    secret: process.env.NEXTAUTH_SECRET,
}