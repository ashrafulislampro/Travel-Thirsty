import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UseHooks from "../../Components/ashraful.Component/UseHooks/UseHooks";
import Loading from "../../Components/Loading";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SignupRight = () => {
  const { baseURL } = UseHooks();
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, cuser, cloading, cerror] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [SignInWithGithub, gituser, gitloading, giterror] =
    useSignInWithGithub(auth);
  const [SignInWithFacebook, fuser, floading, ferror] =
    useSignInWithFacebook(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let signupError;

  const token = useToken(user?.email);
  console.log(user?.email, token);

  useEffect(() => {
    if (user) {
      fetch(`${baseURL}/api/v1/user/add-user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: user?.displayName,
          email: user?.email,
        }),
      });
    }
  }, [user, baseURL]);

  if (cloading || gloading || gitloading || floading) {
    return (
      <div className="text-center items-center h-40">
        <Loading />
      </div>
    );
  }

  if (cerror || gerror || giterror || ferror) {
    signupError = (
      <p className="text-red-700">
        {cerror?.message ||
          gerror?.message ||
          giterror?.message ||
          ferror?.message}
      </p>
    );
  }

  if (token) {
    navigate(from, { replace: true });
    toast.success("Signin User Successfully");
  }

  const handleSignupform = async (data) => {
    const displayName = data.displayName;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName }).then(() => {
      reset();
    });
  };

  const handleGoogleSignin = async () => {
    await signInWithGoogle();
  };

  const handleGithubSignin = async () => {
    await SignInWithGithub();
  };

  const handleFacebookSignin = async () => {
    await SignInWithFacebook();
  };

  return (
    <div className="w-full text-center mx-auto rounded">
      <h2 className="font-bold text-2xl py-5">Create Account</h2>
      <div className="py-5">
        <button onClick={handleGoogleSignin}>
          <FontAwesomeIcon
            className="mx-3 p-2 rounded-full border hover:bg-secondary hover:text-white"
            size="1x"
            color="gray"
            icon={faGoogle}
          />
        </button>
        <button onClick={handleGithubSignin}>
          <FontAwesomeIcon
            className="mx-3 p-2 rounded-full border hover:bg-secondary hover:text-white"
            size="1x"
            color="gray"
            icon={faGithub}
          />
        </button>
        <button onClick={handleFacebookSignin}>
          <FontAwesomeIcon
            className="mx-3 p-2 rounded-full border hover:bg-secondary hover:text-white"
            size="1x"
            color="gray"
            icon={faFacebook}
          />
        </button>
      </div>
      <span className="text-gray-400">or use your account</span>
      <form
        onSubmit={handleSubmit(handleSignupform)}
        action=""
        className="py-3"
      >
        <input
          {...register("displayName")}
          type="text"
          placeholder="Enter Your Name"
          required
          className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Enter Your Email"
          required
          className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Enter Your Password"
          required
          className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
        />
        {signupError}
        <input
          className="btn btn-outline px-7 btn-secondary my-5 block mx-auto"
          type="submit"
          value="SIGN UP"
        />
      </form>
    </div>
  );
};

export default SignupRight;
