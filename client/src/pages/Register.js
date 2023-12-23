import React from 'react';
import {Form, Input } from "antd";
import { Link } from "react-router-dom"

const Register = () => {

    

    const onfinishhandler = (values) =>{
        console.log(values);
        
    }
  return (
    <>
                
        <div className='flex flex-col gap-10 items-center justify-center h-screen  '>
                <h1>REGISTER</h1>
            <Form className='w-[70%] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
            layout='vertical' onFinish={onfinishhandler}>
                <Form.Item label="Name :" name="name">
                    <Input type='text' required/>
                </Form.Item>
                <Form.Item label="Email :" name="email">
                    <Input type='email' required/>
                </Form.Item>
                <Form.Item label="Password :" name="password">
                    <Input type='password' required/>
                </Form.Item>
                <div className='flex flex-col gap-5 '>
                <button className='p-2 bg-blue-500 text-white border-2  rounded-md' type='submit'>Register</button>
                <Link className="text-blue-500 underline" to={"/login"}>Already Registered? Please Login</Link>

                </div>
            </Form>
        </div>
    </>
  )
}

export default Register