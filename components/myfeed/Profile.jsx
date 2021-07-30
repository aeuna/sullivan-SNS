import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../../components/common/Avatar";

const useStyles = makeStyles(() => ({
  profile: {
    paddingTop: "3rem",
  },
}));

const Profile = ({
  user,
  /* 전달받은 props를 써주세요. */
}) => {
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
          <Avatar
            size={2}
            displayName={user.displayName}
            photoUrl={user.photoUrl}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" component="h2" paragraph>
                {/* 유저의 이름 */}
                {user.displayName}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <Typography variant="body1" component="h2" paragraph>
                    게시물 {user.feedList.length}
                    {/* 게시물 갯수 */}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component="h2" paragraph>
                    좋아하는 피드 수 {user.likeFeeds.length}
                    {/* 좋아하는 피드 수 */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" component="h2">
                {user.caption}
                {/* 유저의 설명문 */}
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                component="h2"
                gutterBottom
              >
                <a href={user.webpage} target="_blank">
                  {user.webpage}
                </a>
                {/* 유저의 웹페이지를 새 탭으로 이동할 수 있게 해주세요. */}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
