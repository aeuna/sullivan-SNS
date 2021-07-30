import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles(() => ({
  imgContainer: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  feedImg: {
    margin: "0 auto",
    height: "400px",
    width: "400px",
    display: "block",
    "&:hover": {
      cursor: "pointer",
      filter: "brightness(70%)",
    },
  },
}));

const PhotoItem = (
  {
    /* 전달받은 props를 써주세요. (feed) */
  }
) => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={4} sm={6} xs={12}>
        <div className={classes.imgContainer}>
          {/* 삼항연산자를 사용해주세요. */}
          {/* img 태그 속성으로는 src alt className 이 필요해요. 이때, className 은 useStyles의 feedImg를 써주세요. */}
          {/* 전달받은 feed를 이용하여 feed의 photoUrl이 있는 경우, img 태그를 써서 feed의 photoUrl 을 가져와 주세요. */}
          {/* 전달받은 feed를 이용하여 feed의 photoUrl이 없는 경우 (글만 작성 한 경우), img 태그를 써서 feed author의 photoUrl을 가져와 주세요. */}
          {/* 이미지를 누르면 feed의 상세페이지로 이동 할 수 있도록 해주세요. 구글에 검색해서 어떻게 구성하면 좋을 지 한번 찾아보세요/ */}
          {/* <Link href={`/feed/${feed.uid}`}>
            {feed.photoUrl ? (
              <img
                src={feed.photoUrl}
                alt={feed.photoUrl}
                className={classes.feedImg}
              />
            ) : (
              <img
                width="100%"
                height="100%"
                src={feed.author.photoUrl}
                alt={feed.photoUrl}
                className={classes.feedImg}
              />
            )}
          </Link> */}
        </div>
      </Grid>
    </>
  );
};

export default PhotoItem;
