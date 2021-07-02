import React, { useEffect, useState, useRef } from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import db from '../firestores/db';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../firestores/firebase';
import PhotoPreview from '../components/edit/PhotoPreview';
import SubmitButton from '../components/edit/SubmitButton';
import EditForm from '../components/edit/EditForm';

const useStyles = makeStyles((theme) => ({
  fileInput: {
    display: 'none',
  },
}));

const edit = () => {
  const classes = useStyles();
  const router = useRouter();
  const { feedUid } = router.query;
  const uid = uuidv4();

  const [updateMode, setUpdateMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');

  const [author, setAuthor] = useState({});
  const fileButton = useRef();

  useEffect(() => {
    if (feedUid) {
      setUpdateMode(true);
      getFeedDetail();
    }
    getUser();
  }, []);

  const getUser = async () => {
    const userRef = db.collection('myuser').doc('SFCKJmd9KzCpO5H77wz1');
    const userSnapshot = await userRef.get();
    const userInfo = userSnapshot.data();
    setAuthor({
      uid: userInfo.uid,
      photoUrl: userInfo.photoUrl,
      displayName: userInfo.displayName,
    });
  };

  async function getFeedDetail() {
    try {
      const feedRef = db.collection('feed').doc(feedUid);
      const feedSnapshot = await feedRef.get();
      const feedDetail = feedSnapshot.data();
      setPhotoUrl(feedDetail.photoUrl);
      setContent(feedDetail.content);
      setLocation(feedDetail.location);
      setTag(feedDetail.tag);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPhotoUrl() {
    setLoading(true);
    const file = fileButton.current.files[0];
    const storageRef = firebase.storage().ref(author.uid + '/' + uid);
    const saveFileTask = await storageRef.put(file);
    const downloadedPhotoUrl = await saveFileTask.ref.getDownloadURL();
    setLoading(false);
    setPhotoUrl(downloadedPhotoUrl);
  }

  const attachFile = () => {
    fileButton.current.click();
  };

  return (
    <div>
      <Card variant='outlined'>
        <CardContent>
          <PhotoPreview
            photoUrl={photoUrl}
            attachFile={attachFile}
            loading={loading}
          />
        </CardContent>
      </Card>
      <Card variant='outlined'>
        <CardContent>
          <input
            id='file'
            type='file'
            ref={fileButton}
            onChange={getPhotoUrl}
            className={classes.fileInput}
          />
          <EditForm />
          <CardActions>
            <SubmitButton
              updateMode={updateMode}
              photoUrl={photoUrl}
              author={author}
            />
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default edit;
