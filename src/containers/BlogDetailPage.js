import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Moment from "react-moment";
import Markdown from "react-markdown";
import { blogActions } from "redux/actions";
import ReviewList from "components/ReviewList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewForm from "../components/ReviewForm";
import ReactionList from "../components/ReactionList";

const BlogDetailPage = () => {
  const [text, setText] = useState("");
  const logined = useSelector((state) => state.auth.isAuthenticated);
  const params = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.selectedBlog);
  const loading = useSelector((state) => state.blog.loading);
  const currentUser = useSelector((state) => state.auth.user);
  const history = useHistory();

  useEffect(() => {
    if (params.id) {
      dispatch(blogActions.getSingleBlog(params.id));
    }
  }, [dispatch, params]);

  const handleGoBackClick = (e) => {
    history.goBack();
  };
  const handleEmojiClick = (targetType, targetId, emoji) => {
    dispatch(blogActions.sendReaction(targetType, targetId, emoji));
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    dispatch(blogActions.createReview(params.id, text));
    setText("");
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBackClick}>
          <FontAwesomeIcon icon="chevron-left" size="1x" /> Back
        </Button>
        {/* {currentUser?.id === blog?.author?._id ? (
          <Link to={`/blog/edit/${blog._id}`}>
            <Button variant="primary">
              <FontAwesomeIcon icon="edit" size="1x" /> Edit
            </Button>
          </Link>
        ) :
         (
          <></>
        )} */}
      </div>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <>
          {blog && (
            <div className="mb-5">
              <h4>{blog.title}</h4>
              <span className="text-muted">
                @{blog?.author?.name} wrote{" "}
                <Moment fromNow>{blog.createdAt}</Moment>
              </span>
              <hr />
              <Markdown source={blog.content} />
              <ReactionList
                reactionsData={blog.reactions}
                targetType="Blog"
                targetId={blog._id}
                handleEmojiClick={handleEmojiClick}
                loading={loading}
                size="lg"
              />
              <hr />
              <ReviewList
                reviews={blog.reviews}
                handleEmojiClick={handleEmojiClick}
                loading={loading}
              />
            </div>
          )}
          {logined && (
            <ReviewForm
              reviewText={text}
              handleInputChange={handleInputChange}
              handleSubmitReview={handleSubmitReview}
              loading={loading}
            />
          )}
        </>
      )}
    </>
  );
};

export default BlogDetailPage;
