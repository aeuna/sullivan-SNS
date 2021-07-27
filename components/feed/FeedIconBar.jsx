import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import {
  CardActions,
  IconButton,
  Typography,
  Tooltip,
} from "@material-ui/core";

const FeedIconBar = ({
  tag,
  likeBtn,
  commentExpanded,
  handleHeartClick,
  handleExpandComment,
  type,
}) => {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick={handleHeartClick}>
        {likeBtn.clicked ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
      </IconButton>
      <Typography>
        {likeBtn.displayNum <= 0 || !likeBtn.displayNum
          ? 0
          : likeBtn.displayNum}
      </Typography>
      {type && (
        <IconButton
          aria-label="comment"
          onClick={handleExpandComment}
          aria-expanded={commentExpanded}
        >
          <ChatIcon />
        </IconButton>
      )}
      <Tooltip title={tag || "태그 없음"} placement="top" arrow>
        <IconButton aria-label="tag" className>
          <LocalOfferIcon />
        </IconButton>
      </Tooltip>
    </CardActions>
  );
};

export default FeedIconBar;
