import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostFeatureItem from "../post/PostFeatureItem";
import { collection, limit, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase-app/firebase-config";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(colRef, 
      where("status", "==", 1), 
      where("hot", "==", true),
      limit(3)
      );
      onSnapshot(queries, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
          ...doc.data(),
        });
       });
       setPosts(results);
    });
  }, []);
  if(posts.length <= 0 )return null;
  
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout">
          {posts.map((posts) => (
            <PostFeatureItem key={posts.id} data={posts}></PostFeatureItem>
          ))
          }
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;