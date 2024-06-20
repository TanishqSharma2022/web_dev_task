import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAsyncError, useNavigate } from "react-router-dom";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function onSubmit(data) {
    // console.log(data);
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        credentials: "include", // Include credentials like cookies, authorization headers, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {return data})
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
    //   console.log(error);
      toast.error("There was an error. Try again!");
    } finally {
      setLoading(false);
      toast.success("Sign in successful!");
      navigate("/login");
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <Input name="name" type="text" id="name" register={register} />

            <Input
              name="Email Address"
              type="email"
              id="email"
              register={register}
            />

            <Input
              name="password"
              type="password"
              id="password"
              register={register}
            />

            <Button loading={loading} />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Registered Already ?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log In here.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

const Button = ({loading}) => {
  return (
    <div>
      <button
        disabled={loading}
        type="submit"
        className={`
            ${loading ? "opacity-50" : "opacity-100"}
            flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        Sign in
      </button>
    </div>
  );
};

const Input = ({ name, id, type, register }) => {
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <div className="flex items-center ">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        {/* <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div> */}
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register(id)}
        />
      </div>
    </div>
  );
};

// const PasswordInput
