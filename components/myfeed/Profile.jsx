import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  profile: {
    paddingTop: "3rem",
  },
}));

const Profile = (
  {
    /* 전달받은 props를 써주세요. ( user, feedList ) */
  }
) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.profile}
        spacing={4}
      >
        <Grid item>
          {/* Avatar 컴포넌트를 불러오고 필요한 props를 전달해주세요. */}
          {/* <Avatar
            size={2}
            displayName={user.displayName}
            photoUrl={user.photoUrl}
          /> */}
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" component="h2" paragraph>
                {/* user의 displayName을 가져와주세요. */}
                {/* {user.displayName} */}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <Typography variant="body1" component="h2" paragraph>
                    게시물 {/* {feedList.length} */}
                    {/* 게시물 갯수를 가져와주세요. feedList의 길이나, user의 likeFeeds 길이를 가져오면 됩니다. 여기여기여기여기 물어보기*/}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="h2" paragraph>
                    좋아하는 피드 수 {/* {user.likeFeeds.length} */}
                    {/* 좋아하는 피드 수를 가져와주세요. user의 likeFeeds 길이를 가져오면 됩니다. 여기여기여기 변경 */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" component="h2">
                {/* {user.caption} */}
                {/* user의 caption을 가져와주세요. */}
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                component="h2"
                gutterBottom
              >
                {/* <a href={user.webpage} target="_blank">
                  {user.webpage}
                </a> */}
                {/* a 링크를 사용하여 user의 webpage로 새창을 열어 이동할 수 있게 해주세요. */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
