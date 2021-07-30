import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(6, 0),
  },
}));

const myfeed = () => {
  const classes = useStyles();

  const user = {
    caption: "안녕하세요 반가워요 🙂",
    displayName: "헬렌",
    feedList: [1, 2, 3, 4],
    likeFeeds: [1],
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/sullivan-sns.appspot.com/o/SFCKJmd9KzCpO5H77wz1%2F40ce6140-e770-479b-98ac-61a636308b43?alt=media&token=083b8736-cbba-445c-b4cd-bebd41e76468",
    uid: "SFCKJmd9KzCpO5H77wz1",
    webpage: "https://sullivanproject.io/",
  };

  const feedList = [
    {
      uid: 1,
      photoUrl:
        "//t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/oeE/image/Kq8LnsZRAMtEOfILEXIGsu9VTRE.jpg",
      author: userData,
    },
    {
      uid: 2,
      photoUrl:
        "//t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/oeE/image/3t40iGS1RdVqrL8rm29-_16UPE8",
      author: userData,
    },
    {
      uid: 3,
      photoUrl:
        "//t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/oeE/image/sh4vBIgywdcjODOoGWb3ZCXqgt4",
      author: userData,
    },
    {
      uid: 4,
      photoUrl:
        "//t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/oeE/image/1ukYKsDSrArjOc-YwmRamJcs5zw",
      author: userData,
    },
  ];

  return (
    <>
      {/* Profile 컴포넌트에는 props로 user와 feedList 들을 전달해주세요. (유저의 프로필 정보가 뜨는 컴포넌트) feedList 전달 안해줘도 될듯? */}
      {/* <Profile user={user} feedList={feedList} /> */}
      <Divider variant="middle" light className={classes.divider} />
      {/* PhotoGrid 컴포넌트에는 props로 feedList 들을 전달해주세요. (유저가 올린 피드가 뜨는 컴포넌트) */}
      {/* <PhotoGrid feedList={feedList} /> */}
    </>
  );
};

export default myfeed;
