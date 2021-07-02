import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import db from '../../firestores/db';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: '3rem',
  },
  label: {
    fontWeight: 'bold',
  },
}));

const EditForm = ({ updateMode, photoUrl, author }) => {
  const classes = useStyles();
  const router = useRouter();
  const { feedUid } = router.query;
  const uid = uuidv4();

  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [tag, setTag] = useState('');

  async function submitHandler(event) {
    event.preventDefault();

    try {
      if (updateMode) {
        updateFeed();
      } else {
        await updateUserFeedList();
        await createFeed();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUserFeedList() {
    try {
      const userRef = db.collection('myuser').doc(author.uid);
      const userSnapshot = await userRef.get();
      const userFeedList = await userSnapshot.data().feedList;
      let newFeedList;
      if (userFeedList) {
        newFeedList = [...userFeedList, { feedId: uid }];
      } else {
        newFeedList = [{ feedId: uid }];
      }
      await userRef.update({ feedList: newFeedList });
    } catch (error) {
      console.log(error);
    }
  }

  async function createFeed() {
    const createParams = {
      uid,
      photoUrl,
      content,
      location,
      tag,
      author,
      create_at: new Date(),
      like: 0,
    };

    try {
      const feedRef = db.collection('feed').doc(uid);
      await feedRef.set(createParams);
      router.push('/feed');
    } catch (error) {
      console.log(error);
    }
  }

  async function updateFeed() {
    const updateParams = {
      content,
      location,
      tag,
      author,
    };

    try {
      const feedRef = db.collection('feed').doc(feedUid);
      await feedRef.update(updateParams);
      router.push('/feed');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form id='edit' className={classes.form} onSubmit={submitHandler}>
        <Grid container direction='row' alignItems='center'>
          <Grid item md={2} xs={12}>
            <label htmlFor='caption' className={classes.label}>
              문구입력
            </label>
          </Grid>
          <Grid item md={10} xs={12}>
            <TextField
              id='caption'
              multiline
              rows='4'
              placeholder='문구 입력...'
              variant='outlined'
              margin='dense'
              fullWidth
              autoFocus
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container direction='row' alignItems='center'>
          <Grid item md={2} xs={12}>
            <label htmlFor='location' className={classes.label}>
              위치 추가
            </label>
          </Grid>
          <Grid item md={10} xs={12}>
            <TextField
              id='location'
              type='text'
              placeholder='위치 추가'
              variant='outlined'
              margin='dense'
              fullWidth
              autoFocus
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container direction='row' alignItems='center'>
          <Grid item md={2} xs={12}>
            <label htmlFor='tagging' className={classes.label}>
              사람 태그
            </label>
          </Grid>
          <Grid item md={10} xs={12}>
            <TextField
              id='tagging'
              type='text'
              placeholder='태그하기'
              variant='outlined'
              margin='dense'
              fullWidth
              autoFocus
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EditForm;
