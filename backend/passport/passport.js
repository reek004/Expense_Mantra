import passport from "passport";
import bcrypt from "bcryptjs";
import User from "../models/user.resolver.js";
import { GraphQLLocalStrategy } from "graphql-passport";

export const passportConfig = async () => {
    passport.serializeUser((user, done) => {
        console.log("serializing user");
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        console.log("Deserializing user");
        try{
            const users = await User.findById(id);
            done(null, users);
        }
        catch(err){
            done(err);
        }
    });
    passport.use(
        new GraphQLLocalStrategy(async (username, password, done) => {
          
          try {
            const user = await user.findOne({username});
            if(!user){
              return done(new Error("Invalid User"));
            }
            const validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword){
              return done(new Error("Invalid password"));
            }
            done(null, user);
          } catch (error) {
            return done(error);            
          }
          const users = User.getUsers();
          const matchingUser = users.find(
            user => email === user.email && password === user.password
          );
          const error = matchingUser ? null : new Error("no matching user");
          done(error, matchingUser);
        })
      );
};
