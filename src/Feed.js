import React, { useEffect, useState } from "react";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

// reference to the firestore
// const postsRef = collection(db, "posts");

// reference to the firestore and ordering data in descending order
const postsRef = query(collection(db, "posts"), orderBy("timestamp", "desc"));

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const q = query(postsRef, orderBy("timestamp", "desc"));
    // onSnapshot(query(postsRef, orderBy("timestamp", "desc")), (snapshot) => {
    //   setPosts(
    //     snapshot.docs.map((doc) => {
    //       console.log("ordered snapshot", doc.data());
    //       return doc.data();
    //     })
    //   );
    // });

    getDocs(postsRef)
      .then((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => ({
            // we are retrieveing id so that each document can be uniquley identified with that id
            // and further this is is passsed as key key={post.data.id} so it uniquely identifies our posts here
            id: doc.id,
            data: doc.data(),
          }))
        );
        //const data = querySnapshot.docs.map((doc) => doc.data()); // this one is also correct
        // console.log(data);
        // console.log("I am new firebase");
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="flex-1 py-7 px-36 flex flex-col justify-center items-center">
      <StoryReel />
      <MessageSender />

      {/* //curly----return
      //for returning multiple components we use {}
      // after using {} this we also use the return keyword */}

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profielPic={post.data.profielPic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* <Post
        profielPic="https://i.brecorder.com/primary/2022/11/63700d061eaf4.jpg"
        message="WOW this works"
        timestamp="this is a timestamp"
        username="faizan khan"
        image="http://blog.scielo.org/en/wp-content/uploads/sites/2/2022/02/markus-spiske-70Rir5vB96U-unsplash.jpg"
      /> */}
      {/* <Post
        profielPic="https://i.brecorder.com/primary/2022/11/63700d061eaf4.jpg"
        message="WOW this works"
        timestamp="this is a timestamp"
        username="faizan khan"
        image="https://startuppakistan.com.pk/wp-content/uploads/2023/01/babar-azam-moves-up-in-latest-t20i-rankings-1668611688-6470.jpeg"
      /> */}
      {/* <Post message="i am hard coded" /> */}
    </div>
  );
}

export default Feed;
