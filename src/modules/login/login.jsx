import React from "react";
import SocialLogin from "../socialLogin/socialLogin";

const Login = () => {
  return (
    <div className="min-h-[650px] pt-[150px] pb-20 lg:px-0 px-4 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-slate-900 shadow-xl rounded p-10">
        <div className="text-center text-white py-4 text-base">
          Sign in with
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
