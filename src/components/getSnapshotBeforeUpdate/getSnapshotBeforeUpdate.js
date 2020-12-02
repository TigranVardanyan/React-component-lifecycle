import React from "react";
import styles from './getSnapshotBeforeUpdate.module.css';


const receivingMessages = () => {
  let message = document.createElement("div");
  message.className = styles.message;
  let messageText = document.createTextNode("Some new message");
  message.appendChild(messageText);
  document.getElementById("App").prepend(message);
}

function GetSnapshotBeforeUpdate() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        Excellent problem for <br/>getSnapshotBeforeUpdate hook
      </h1>
      <button onClick={() => {receivingMessages()}}>Simulate received messages</button>
      <div className={styles.App} id={"App"}>
        <div className={styles.message}>
          Lorem ipsum
        </div>
        <div className={styles.message}>
          sit amet
        </div>
        <div className={styles.messageeye}>
          <span>consectetur adipisicing</span>
          <div className={styles.round}>
            <div className={styles.dot}></div>
          </div>
        </div>
        <div className={styles.message}>
          elit. Dignissimos
        </div>
        <div className={styles.message}>
          error itaque
        </div>
        <div className={styles.message}>
          nisi quo tenetur veniam.
        </div>

      </div>
    </div>
  );
}

export default GetSnapshotBeforeUpdate;
