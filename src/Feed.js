import React from "react";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="flex-1 py-7 px-36 flex flex-col justify-center items-center">
      <StoryReel />
      <MessageSender />
      <Post
        profielPic="https://i.brecorder.com/primary/2022/11/63700d061eaf4.jpg"
        message="WOW this works"
        timestamp="this is a timestamp"
        username="faizan khan"
        image="http://blog.scielo.org/en/wp-content/uploads/sites/2/2022/02/markus-spiske-70Rir5vB96U-unsplash.jpg"
      />
      <Post
        profielPic="https://i.brecorder.com/primary/2022/11/63700d061eaf4.jpg"
        message="WOW this works"
        timestamp="this is a timestamp"
        username="faizan khan"
        image="https://startuppakistan.com.pk/wp-content/uploads/2023/01/babar-azam-moves-up-in-latest-t20i-rankings-1668611688-6470.jpeg"
      />
      <Post />
    </div>
  );
}

export default Feed;
