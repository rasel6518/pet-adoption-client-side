import *as Yup from 'yup'

export const SignupValidation = Yup.object({
    name: Yup.string().min('3').max('20').required("Please Enter  Name"),
    email: Yup.string().email("Please Enter Valid Email").required("Please Enter  Email"),
    password: Yup.string().min(6).required("Please Enter Password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")]).required("Please Enter Confirm Password"),
    image: Yup.string().required("Please Give Your Image")
})