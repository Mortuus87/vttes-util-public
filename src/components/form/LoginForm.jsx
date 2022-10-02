import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormError from "./FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import { HOMEPAGE_PATH } from "../../constants/site";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;
console.log(url);

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    // TODO: find a more elegant way to do this, if it exists
    const inputs = document.querySelector('form.login').elements;
    data.username = inputs['username'].value;
    data.password = inputs['password'].value;
    // data.username = process.env.REACT_APP_TEST_USER_NAME;
    // data.password = process.env.REACT_APP_TEST_USER_PASS;

    setSubmitting(true);
    setLoginError(null);


    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      navigate(HOMEPAGE_PATH + "/gallery");
    } catch (error) {
      console.log("error", error);
      setLoginError('Login failed. Try again');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form className='login' onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <div className="form-group">
            <label htmlFor="username"><span>Username</span></label>
            <input {...register("username")} className="form-control" type='text' name="username" placeholder="" />

          </div>
          <div className="form-group">
            <label htmlFor=""><span>password</span></label>
            <input {...register("password")} className="form-control" name="password" placeholder="" type="password" />
          </div>
          {loginError && <FormError>{loginError}</FormError>}
          <input className="btn btn-bg btn-primary" type="submit" value={submitting ? "Loggin in..." : "Login"}/>
        </fieldset>
      </form>
    </>
  );
}
