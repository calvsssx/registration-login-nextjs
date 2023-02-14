import { useForm } from "react-hook-form";
import Input from "./Input";
import InputSpacer from "./InputSpacer";

const FormError = ({ errorMessage }: { errorMessage: any }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddRegistrationFormProps {
  onSubmit: any;
}

export default function RegisterForm(props: AddRegistrationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    // <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
    //   <InputSpacer>
    //     <input {...register("userName", { required: true })}></input>
    //     {errors.userName && <FormError errorMessage="User Name is required" />}
    //   </InputSpacer>
    //   <InputSpacer>
    //     <input {...register("password", { required: true })}></input>
    //     {errors.userName && <FormError errorMessage="Password is required" />}
    //   </InputSpacer>
    //   <InputSpacer>
    //     <input {...register("email", { required: true })}></input>
    //     {errors.userName && <FormError errorMessage="Email is required" />}
    //   </InputSpacer>
    //   <button
    //     className="bg-blue-500 rounded-md p-4 text-blue-100"
    //     type="submit"
    //   >
    //     Submit
    //   </button>
    // </form>
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(props.onSubmit)}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      {/* <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} /> */}
                      <input {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"></input>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input {...register("password", { required: true })} type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  {/* <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input {...register("confirm-password", { required: true })} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                  </div> */}
                  {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div> */}
                  <div>
                  <div className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-red-700/60 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white/80 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {errors.userName && <FormError errorMessage="Password is required" />}
                  {errors.userName && <FormError errorMessage="Email is required" />}
                  </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
  );
}
