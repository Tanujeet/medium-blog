import { Link } from "react-router-dom";
import { ChangeEvent } from "react";
import { useState } from "react";
import { SignupInput } from "commonharsh";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInput, setPostInput] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className=" flex justify-center">
        <div>
          <div>
            <div className=" text-4xl font-bold ">
              {type === "signin" ? "Create a Account" : "Login your Account"}
            </div>
            <div className="text-slate-400">
              {type === "signin"
                ? "Dont have a account ?"
                : "Already have a account"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div>
            <LabelledInput
              label="Username"
              placeholder="Enter your username"
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label="Email"
              placeholder="me@example.com"
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label="Password"
              placeholder=""
              type={"password"}
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
