import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "./firebase";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider.js";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // some sign in stuff ..
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
          className="object-contain h-36"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
          className="object-contain h-36"
        />
      </div>
      <Button
        class=" w-32 rounded-full bg-blue-600 text-white font-extrabold hover:bg-white hover:text-blue-700"
        type="submit"
        onClick={signIn}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
