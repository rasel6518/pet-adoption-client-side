import { Link, useNavigate } from "react-router-dom";
import { SignupValidation } from "./SignupValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocailSignin from "../Signin/SocailSignin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name: "",
    email: "",
    image: "",
    password: "",
    cpassword: "",
};
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Signup = () => {
    const { createUser, updateUserProfile, logout } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleSubmit = (values, { resetForm }) => {
        // Log form data
        console.log(values);
        createUser(values.email, values.password)
            .then(res => {

                updateUserProfile(values.name, values.image)
                    .then(() => {
                        const userInfo = {
                            name: values.name,
                            email: values.email,
                            image: values.image,
                        }


                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {

                                    toast.success('Account Successfully Created. Start Exploring!')
                                    logout()
                                    navigate('/signin ')
                                    resetForm();
                                }
                            })


                    })
                    .catch(err => {
                        console.log(err);
                    })
            })


    };
    return (
        <div>
            <Helmet>
                <title>PP | Signup</title>
            </Helmet>
            <Formik initialValues={initialValues} validationSchema={SignupValidation} onSubmit={handleSubmit}>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Create Your Account</h1>
                        <p className="mt-4 text-gray-500">
                            Start your journey with us by creating your account. Join our community and experience all the amazing features we offer.
                        </p>
                    </div>

                    {/* Use render props to access Formik props */}
                    <Form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Name
                            </label>

                            <div className="relative">
                                <Field
                                    type="text"
                                    name="name"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Name"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>

                                {/* Use ErrorMessage component to display error */}
                                <ErrorMessage name="name" className="text-red-500" component="small" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>

                            <div className="relative">
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>

                                {/* Use ErrorMessage component to display error */}
                                <ErrorMessage name="email" className="text-red-500" component="small" />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>

                            <div className="relative">
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>

                                {/* Use ErrorMessage component to display error */}
                                <ErrorMessage name="password" className="text-red-500" component="small" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cpassword" className="sr-only">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <Field
                                    type="password"
                                    name="cpassword"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Confirm Password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>

                                {/* Use ErrorMessage component to display error */}
                                <ErrorMessage name="cpassword" className="text-red-500" component="small" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="image" className="sr-only">
                                image
                            </label>

                            <div className="relative">
                                <Field
                                    type="text"
                                    name="image"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter image"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>

                                {/* Use ErrorMessage component to display error */}
                                <ErrorMessage name="image" className="text-red-500" component="small" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Haave you already an account? <Link to='/signin' className="underline" href="">Sign in</Link>
                            </p>

                            <button
                                type="submit"
                                className="inline-block uppercase rounded-lg  px-5 py-3 text-sm font-medium  text-white hover:bg-[#f28583] bg-[#FA524F]"
                            >
                                Sign up
                            </button>
                        </div>
                    </Form>
                </div>
            </Formik>
            <div className="mx-auto max-w-md ">
                <div className="text-center">-----OR-----</div>
                <SocailSignin></SocailSignin>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Signup;
