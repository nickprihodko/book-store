import React, { useEffect } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import styled from "styled-components";

import { loadReviews, deleteReview } from "actions/reviews";

const Reviews = ({
  bookId,
  review,
  user,
  isAuthenticated,
  loadReviews,
  deleteReview,
}) => {
  useEffect(() => {
    loadReviews(bookId);
  }, [loadReviews, bookId]);

  const { data: reviews, loading, error } = review;

  let avatar = "";
  let username = "";
  if (user) {
    avatar = user.avatar;
    username = user.name;
  }

  const handleDelete = (id) => {
    deleteReview(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <ReviewList>
      {reviews.map((review) => {
        return (
          <ReviewItem key={review.id}>
            <UserContainer>
              <Avatar
                style={
                  review.avatar || avatar
                    ? {
                        backgroundImage: `url(${review.avatar || avatar})`,
                      }
                    : {
                        backgroundImage: `url(${"/images/user.png"})`,
                      }
                }
              />
              <UserName>{review.username || username}</UserName>
            </UserContainer>
            <TextContainer>
              <Text>{review.text}</Text>
              <Date>
                Posted on{" "}
                <Moment format="YYYY/MM/DD">{review.createdAt}</Moment>
              </Date>
            </TextContainer>
            {isAuthenticated && user.id === review.userId && (
              <DeleteButton onClick={(e) => handleDelete(review.id)}>
                delete
              </DeleteButton>
            )}
          </ReviewItem>
        );
      })}
    </ReviewList>
  );
};

const ReviewList = styled.ul`
  width: 100%;
`;

const ReviewItem = styled.li`
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

const Avatar = styled.div`
  margin-bottom: 5px;
  width: 100px;
  height: 100px;

  background-size: cover;
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

Reviews.propTypes = {
  bookId: PropTypes.number.isRequired,
  review: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.number,
        rate: PropTypes.number,
        description: PropTypes.string,
        fragment: PropTypes.string,
        cover: PropTypes.string,
        rates: PropTypes.array,
      })
    ),
    loading: PropTypes.bool,
    error: PropTypes.object,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    avatar: PropTypes.string,
    about: PropTypes.string,
  }),
  loadReviews: PropTypes.func.isRequired,
  deleteReview: PropTypes.func.isRequired,
};

const mapStateToProps = ({ review, auth }) => ({
  review: review,
  user: auth.user,
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadReviews, deleteReview })(Reviews);
