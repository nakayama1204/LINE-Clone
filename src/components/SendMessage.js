import React, { useState } from 'react';
import { db, auth } from '../firebase.js';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


function SendMessage() {
  const [message, setMassage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMassage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
          <div className='sendMsg'>
            <Input
              placeholder='メッセージを入力してください'
              type='text'
              onChange={(e) => setMassage(e.target.value)}
              value={message}  
            />
            <SendIcon />
          </div>
      </form>
    </div>
  );
}

export default SendMessage