import { users } from '../dummyData/data.js';
import User from '../models/user.models.js';
const userResolver = {
    Mutation: {
        signUp: async (_,{input},context) => {
            try {
                const {username,name,email,password,gender} = input;
                if( !username || !name || ! email || !password  || !gender){
                    throw new Error("Please fill all fields");
                }
                const existingUser = User.findOne({username});
                if(existingUser){
                    throw new Error("User already exists");
                }
                const salt = brcrypt.genSalt(10);
                const hashedPassword = brcrypt.hash(password,salt);

                const manPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
                const womanPic = `https://avatar.iran.liara.run/public/girl?username=${username}`


                const newUser = new User({
                    username,
                    name,
                    email,
                    password: hashedPassword,
                    gender,
                    profilePicture : gender === "male" ? manPic : womanPic
                })

                await newUser.save();
                context.login(newUser);
                return newUser;
                
            } catch (error) {
                console.log("Error in signUp :",error);
                throw new Error(error.message || "Internal server error"); ;
            }
        },

        //Login Resolver

        login: async (_,{input},context) => {
            try {
                const {username,password} = input;
                const {user} = await context.authenticate("graphql-local",{username,password});
                if(!user){
                    throw new Error("Invalid credentials");
                }
                await context.login(user);
                return user;
            } catch (error) {
                console.log("Error in login :",error);
                throw new Error(error.message || "Internal server error"); ;
            }
        },

        //Logout Resolver
        logOut: async (_,__,context) => {
            try {
                await context.logout();
                req.session.destroy((error) => {
                    if(error) throw error;
                });
                res.clearCookie("connect.sid");
                return {message: "Logged out successfully"};

            } catch (error) {
                console.log("Error in logout :",error);
                throw new Error(error.message || "Internal server error"); ;
            }
        },

        //Update User Resolver
        updateUser: async (_,{input},context) => {
            try {
                const {username,name,email,password} = input;
                if( !username || !name || ! email || !password){
                    throw new Error("Please fill all fields");
                }
                const updatedUser = await User.findByIdAndUpdate(context.req.user._id, input, {new: true});
                return updatedUser;
            } catch (error) {
                console.log("Error in updateUser :",error);
                throw new Error(error.message || "Internal server error"); ;
            }
        }
    },

    Query: {
        authUser: async(_,__,context) => {
            try {
                const user = await context.getUser();
                return user;
            } catch (error) {
                console.log("Error in authenticating User :",error);
                throw new Error(error.message || "Internal server error");
            }
        },
        users: async (_,{userId}) => {
            try {
                const user = await User.findById(userId);
                if(!user){
                    throw new Error("User not found");
                }
                return user;                
            } catch (error) {
                console.log("Error in getting User :",error);
                throw new Error(error.message || "Error in getting User");
            }
        }
    } 
    //TODO: add user/transcation resolver relation
};

export default userResolver;