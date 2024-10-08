// App.js
import React, { useState } from "react";
import db from "../firebase"; // Firebaseの初期化ファイルをインポート
import { collection, addDoc } from "firebase/firestore"; // Firestore用

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Firestoreにデータを追加
      const docRef = await addDoc(collection(db, "users"), {
        name: inputValue,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
