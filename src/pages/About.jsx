import React, { useState, useEffect } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //データベースからデータを取得
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      //console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    //リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div className="About">
      <h1>About Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h3>{post.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default About;
