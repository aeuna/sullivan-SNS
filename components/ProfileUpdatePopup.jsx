import React, { useState, useRef, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  Link,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "./common/Avatar";
import firebase from "../firestores/firebase";
import db from "../firestores/db";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  primary: {
    color: "#2196f3",
    fontWeight: "bold",
  },
  popupBtn: {
    cursor: "pointer",
    margin: "1rem 0",
    color: "#2196f3",
    fontWeight: "bold",
  },
  formGroup: {
    padding: "2rem",
  },
  label: {
    fontWeight: "bold",
  },
}));

export default function ProfileUpdatePopup({
  open,
  closeHandler,
  openResultMessageHandler,
  user,
}) {
  const classes = useStyles();

  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [webpage, setWebpage] = useState(user.webpage);
  const [caption, setCaption] = useState(user.caption);
  const fileButton = useRef();
  const uid = uuidv4();

  async function getPhotoUrl() {
    const file = fileButton.current.files[0];
    const storageRef = firebase.storage().ref(user.uid + "/" + uid);
    const saveFileTask = await storageRef.put(file);
    const downloadedPhotoUrl = await saveFileTask.ref.getDownloadURL();
    setPhotoUrl(downloadedPhotoUrl);
  }

  const handleClose = () => {
    closeHandler();
  };

  async function submitHandler(event) {
    event.preventDefault();

    const profileUpdateParams = {
      photoUrl,
      displayName,
      webpage,
      caption,
    };
    try {
      await updateUserProfile(profileUpdateParams);
      handleClose();
      openResultMessageHandler();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUserProfile(profileUpdateParams) {
    try {
      const userRef = db.collection("myuser").doc("SFCKJmd9KzCpO5H77wz1");
      await userRef.update(profileUpdateParams);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <form id="profileUpdate" onSubmit={submitHandler}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Avatar displayName={displayName} photoUrl={photoUrl} />
              <Link
                component="label"
                className={classes.popupBtn}
                underline="none"
              >
                프로필 사진 바꾸기
                <input
                  type="file"
                  hidden
                  ref={fileButton}
                  onChange={getPhotoUrl}
                />
              </Link>
            </Grid>
            <Divider variant="middle" light />
            <div className={classes.formGroup}>
              <Grid container direction="row" alignItems="center">
                <Grid item md={2} xs={12}>
                  <label htmlFor="userName" className={classes.label}>
                    사용자 이름
                  </label>
                </Grid>
                <Grid item md={10} xs={12}>
                  <TextField
                    id="userName"
                    type="text"
                    value={displayName}
                    placeholder="사용자 이름"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" alignItems="center">
                <Grid item md={2} xs={12}>
                  <label htmlFor="webPage" className={classes.label}>
                    웹사이트
                  </label>
                </Grid>
                <Grid item md={10} xs={12}>
                  <TextField
                    id="webPage"
                    type="text"
                    value={webpage}
                    placeholder="웹사이트"
                    autoFocus
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setWebpage(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container direction="row" alignItems="center">
                <Grid item md={2} xs={12}>
                  <label htmlFor="caption" className={classes.label}>
                    소개
                  </label>
                </Grid>
                <Grid item md={10} xs={12}>
                  <TextField
                    id="caption"
                    multiline
                    value={caption}
                    placeholder="소개"
                    autoFocus
                    margin="dense"
                    variant="outlined"
                    rows="4"
                    fullWidth
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </Grid>
              </Grid>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="large">
            취소
          </Button>
          <Button
            className={classes.primary}
            size="large"
            type="submit"
            form="profileUpdate"
          >
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
