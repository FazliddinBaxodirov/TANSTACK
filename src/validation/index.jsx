import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    name:yup.string().required('Name is required!'),
    email:yup.string().email('Invalid email address').required('Email is required!'),
    password:yup.string().min('4','Minimum length is 4').max(8, 'MAximum length is 8').required('Password is required'),
})