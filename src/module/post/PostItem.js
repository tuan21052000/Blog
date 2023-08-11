import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import  slugify  from 'slugify';

const PostItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-radius: 16px;
    }
    &-category {
      margin-bottom: 16px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #6b6b6b;
      margin-top: auto;
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
    &-title {
      margin-bottom: 12px;
    }
  }
`;

const PostItem = ({data}) => {
  if(!data) return null;
  const date =  data?.createAt?.seconds ? new Date(data?.createAt?.second * 1000) : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VN");
  return (
    <PostItemStyles>
    <PostImage url={data.image} alt="" to={data.slug}></PostImage>
      <PostCategory to={data.category?.slug}>{data.category?.name}</PostCategory>
      <PostTitle to={data?.slug}>{data.title}</PostTitle>
      <PostMeta 
          to={slugify(data.user?.username || "",{lower: true})} 
          authorName={data.user?.fullname} 
          date={formatDate}></PostMeta>
    </PostItemStyles>
  );
};

export default PostItem;