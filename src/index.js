import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repository.js";
const app = express();

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

  const tweetRepo = new TweetRepository();

  let tweets = await tweetRepo.deleteTweet({ "_id": "649832f04858402121a1f780" });
  console.log(tweets);
});
