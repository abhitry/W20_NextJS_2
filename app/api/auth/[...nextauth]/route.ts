import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Email from "next-auth/providers/email";

const handler=NextAuth({
    providers:[
        CredentialsProvider({
            name:"Login with Email",
            credentials:{
                username:{label:"Username",type:"text"},
                password:{label:"Password",type:"text"},
            },
            async authorize(credentials:any)
            {
                const username=credentials?.username;
                const password=credentials?.password;

                const user={
                    name:"harkirat",
                    id:"1",
                    email:"harkirat@gmail.com"
                }
                if(user){
                    return user
                }
                else{
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })
    ],
    secret:process.env.NEXTAUTH_SECRET
})

export {handler as GET,handler as POST}


