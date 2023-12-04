import { Link, useLocation, useNavigate } from "react-router-dom";
import { SigninValidation } from "./SigninValidation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocailSignin from "./SocailSignin";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    email: "",
    password: "",
};


const Signin = () => {

    const { login } = useContext(AuthContext)
    const location = useLocation()

    const navigate = useNavigate()
    const handleSubmit = (values, { resetForm }) => {
        // Log form data
        console.log(values);
        login(values.email, values.password)
            .then(result => {
                toast.success('Great to see you again! Lets get you logged in ')
                console.log(result.user);

                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
        resetForm();
    };

    console.log(location);
    return (
        <div>
            <Helmet>
                <title>PP | Login</title>
            </Helmet>
            <Formik initialValues={initialValues} validationSchema={SigninValidation} onSubmit={handleSubmit} >
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
                        <p className="mt-4 text-gray-500">
                            Log in to your account to access all the amazing features.
                        </p>

                    </div>

                    {/* Use render props to access Formik props */}
                    <Form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
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

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account? <Link to='/signup' className="underline" >Sign up</Link>
                            </p>

                            <button
                                type="submit"
                                className="inline-block uppercase rounded-lg  px-5 py-3 text-sm font-medium  text-white hover:bg-[#f28583] bg-[#FA524F]"
                            >
                                Sign in
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

export default Signin;
