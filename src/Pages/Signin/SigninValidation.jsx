import *as Yup from 'yup'

export const SigninValidation = Yup.object({
    email: Yup.string().email("Please Enter Valid Email").required("Please Enter  Email"),
    password: Yup.string().min(6).required("Please Enter Password")
})