import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhotoItem from "./PhotoItem";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px 50px",
  },
}));

const PhotoGrid = (
  {
    /* 전달받은 props를 써주세요. (feedList) */
  }
) => {
  const classes = useStyles();

  return (
    <>
      {/* 삼항연산자를 사용해주세요. */}
      {/* feedList 가 있으면, map함수를 이용하여 feed 와 key를 props 각 PhotoItem 컴포넌트로 넘겨주세요. */}
      {/* feedList 가 없다면, 피드가 없습니다. 사진을 업로드 하세요.. 등 알림 글이 나타나게 해주세요.  */}
      <Grid container spacing={3} className={classes.container}>
        {/* {feedList ? (
          feedList.map((feed, idx) => <PhotoItem feed={feed} key={idx} />)
        ) : (
          <p>피드가 없습니다. 사진을 업로드하세요.</p>
        )} */}
      </Grid>
    </>
  );
};

export default PhotoGrid;
