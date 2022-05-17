import React, { useEffect, useState } from 'react';
import SignOut from './SignOut.js';
import { auth, db } from '../firebase.js';
import SendMessage from './SendMessage.js';

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div>
        {console.log(messages)}
        <SignOut />
        <div className="msgs">
            {messages.map(({id, text, photoURL, createdAt, uid}) => (
                <div>
                    <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                        <img src={photoURL} alt="" />
                        <p>{text}</p>
                        {/* <p>{createdAt.nanoseconds}</p> */}
                    </div>
                </div>
            ))}
        </div>
        <SendMessage />
    </div>
  );
}

export default Line