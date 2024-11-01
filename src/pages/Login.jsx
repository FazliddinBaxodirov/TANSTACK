import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { loginSchema } from '../validation';

function Login({ setToken }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            if (values.name.toLowerCase() === 'fazliddin' && 
                values.email.toLowerCase() === 'fazliddin@gmail.com' && 
                values.password === '112233') {
                setToken(true);
            } else {
                setToken(false);
                window.location.pathname = '/';
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className='w-[600px] mx-auto mt-[180px] space-y-[15px]'>
            <h2 className='text-[30px] font-semibold text-blue-500 text-center'>Kirish uchun ma'lumotlaringizni kiriting</h2>
            <Input
                id='name'
                value={formik.values.name}
                name='name'
                type='text'
                size='large'
                placeholder='Enter your name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${formik.touched.name && formik.errors.name ? "!border-red-500 placeholder:!text-red-500" : ""}`}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
            ) : null}

            <Input
                id='email'
                value={formik.values.email}
                name='email'
                type='email'
                size='large'
                placeholder='Enter your email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${formik.touched.email && formik.errors.email ? "!border-red-500 placeholder:!text-red-500" : ""}`}

            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
            ) : null}

            <Input
                id='password'
                value={formik.values.password}
                name='password'
                type='password'
                size='large'
                placeholder='Enter your password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${formik.touched.password && formik.errors.password ? "!border-red-500 placeholder:!text-red-500" : ""}`}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
            ) : null}

            <Button htmlType='submit' type='primary' className='w-full' size='large'>Kirish</Button>
        </form>
    );
}

export default Login;
