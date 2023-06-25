import express, { urlencoded } from "express";
import { connect } from "./config/database.js";
import router from "./routes/index.js";
import TweetRepository from "./repository/tweet-repository.js";
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(3000, async () => {
  console.log(`Server started on PORT 3000`);
  // mongodb connection establishment
  connect();
  console.log("Mongo DB connected");

  //   Tweet.create({
  //     content: "This is my first Tweet",
  //     likes: 25,
  //     noOfRetweets: 5,
  //     comment: "This is my first comment",
  //   });

  // Hashtag.create({
  //     text: "travel",
  //     tweets: ["649832de8d6bab421527156f"]
  // })

  // const tweetRepo = new TweetRepository();

  // let tweets = await tweetRepo.deleteTweet({ _id: "649832f04858402121a1f780" });
  // console.log(tweets);
});
