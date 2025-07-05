// app/api/auth/[...nextauth]/route.js
import mongoose, { mongo } from 'mongoose';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import User from '@/models/User';
import Payment from '@/models/Payment';
import Username from '@/app/[username]/page';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github"){
      //connect to the db
      const client = await mongoose.connect()
      // Check if the user is already in the db
      const currentUser = User.findOne({email: email})
      if(!currentUser){
        //Create a new User
        const newUser = new User({
          email: email,
          username: email.split("@")[0],
          
        })
        await newUser.save()
      }
       
    }
   
  }
}
});

export { handler as GET, handler as POST };
