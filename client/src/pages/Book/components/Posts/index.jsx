import React, { useEffect } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadPosts, deletePost } from "../../../../actions/post";

import userLogo from "../../../../assets/img/user.png";

const Posts = ({ bookId, post, loadPosts, deletePost }) => {
  useEffect(() => {
    loadPosts(bookId);
  }, [loadPosts, bookId]);

  const { posts, loading, error } = post;

  const handleDelete = (id) => {
    deletePost(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <PostList>
      {posts.map((post) => {
        return (
          <PostItem key={post.id}>
            <UserContainer>
              <Avatar
                src={userLogo}
                alt="User avatar"
                width="100"
                height="100"
              ></Avatar>
              <UserName>Joe Doe</UserName>
            </UserContainer>
            <TextContainer>
              <Text>{post.text}</Text>
              <Date>
                Posted on <Moment format="YYYY/MM/DD">{post.createdAt}</Moment>
              </Date>
            </TextContainer>
            <DeleteButton onClick={(e) => handleDelete(post.id)}>
              delete
            </DeleteButton>
          </PostItem>
        );
      })}
    </PostList>
  );
};

const PostList = styled.ul`
  width: 100%;
`;

const PostItem = styled.li`
  position: relative;

  display: flex;
  margin-bottom: 20px;
  padding: 10px 10px 10px 30px;

  border: 2px solid #1a237e;
  border-radius: 4px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  text-align: center;
`;
const TextContainer = styled.div`
  width: 100%;
`;

const Avatar = styled.img`
  margin-bottom: 5px;

  border: 2px solid #1a237e;
  border-radius: 50%;
`;

const UserName = styled.span`
  font-family: "Oxygen Bold";
  color: #1a237e;
`;

const Text = styled.p`
  padding-right: 10px;

  word-break: break-all;
`;

const Date = styled.span`
  font-family: "Oxygen Bold";
  font-size: 12px;
  color: gray;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;

  box-sizing: border-box;

  font-family: "Oxygen Bold";
  color: #cc9a9a;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #af5b5e;
  }
`;

Posts.propTypes = {
  bookId: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ post }) => ({
  post: post,
});

export default connect(mapStateToProps, { loadPosts, deletePost })(Posts);
