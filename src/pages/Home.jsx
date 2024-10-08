import React from "react";
import "../App.css";
import { useState } from "react";
import {
  sigininWithEmailAndPassword,
  siginupWithEmailAndPassword,
} from "../firebase";
const Home = () => {
  const initialValues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  function LoginButton() {
    const Login = async (e) => {
      //firebaseを使ってログイン処理を行う

      e.preventDefault();
      const user = await sigininWithEmailAndPassword(
        formValues.username,
        formValues.mailAddress,
        formValues.password
      );
      console.log("サインインUser情報 : ", user);
    };
    return (
      <button className="submitButton" onClick={Login}>
        ログイン
      </button>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //ログイン情報を送信する
    //バリデーション
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      const user = await siginupWithEmailAndPassword(
        formValues.username,
        formValues.mailAddress,
        formValues.password
      );
      console.log(user);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.username) {
      errors.username = "ユーザー名を入力してください";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "メールアドレスの形式が正しくありません";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 4 || values.password.length > 15) {
      errors.password = "パスワードは4文字以上15文字以下で入力してください";
    }
    return errors;
  };

  return (
    <div className="Home">
      <h1>Welcome to the Home Page</h1>
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>ログインフォーム</h1>
          <hr />
          <div className="uiForm">
            <div className="formField">
              <label>ユーザー名</label>
              <input
                type="text"
                placeholder="ユーザー名"
                name="username"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <p className="errorMsg">{formErrors.username}</p>
            <div className="formField">
              <label>メールアドレス</label>
              <input
                type=""
                placeholder="メールアドレス"
                name="mailAddress"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <p className="errorMsg">{formErrors.mailAddress}</p>
            <div className="formField">
              <label>パスワード</label>
              <input
                type="text"
                placeholder="パスワード"
                name="password"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <p className="errorMsg">{formErrors.password}</p>
            <LoginButton />
            <SignUpButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

function SignUpButton() {
  const SignUp = () => {
    //firebaseを使って新規登録を行う
    //おかしくないか？
  };
  return (
    <button className="submitButton" onClick={SignUp}>
      新規登録
    </button>
  );
}
