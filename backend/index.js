import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';

import passport from 'passport';
import session from 'express-session';
import connectMongo from 'connect-mongodb-session';


import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';


import mergedResolvers from "./resolvers/merger.js";
import mergedTypeDefs from "./typeDefs/merger.js";

import connectDB  from "./db/connectDB.js";

dotenv.config();

const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

const MongoDBStore = connectMongo(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: 'sessions',
});

store.on('error',(error) => console.log(error));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
    },
  })
)
app.use(passport.initialize());
app.use(passport.session());


const server = new ApolloServer({
	typeDefs: mergedTypeDefs,
	resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();


app.use(
  '/',
  cors(),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  }),
);

await new Promise((resolve) =>
  httpServer.listen({ port: 4000 }, resolve),
);
await connectDB();
console.log(`🚀 Server ready at http://localhost:4000/`);