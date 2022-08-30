import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Login = () => {

  const navigate = useNavigate();

    const onFinish = async(values)=>{

      try{
        const response = await axios.post("/api/user/login", values);
        
        if(response.data.success){
          toast.success(response.data.message);
          localStorage.setItem("token", response.data.data);
          navigate("/");
        }else {
          toast.error(response.data.message);
        }
      }catch(err){
        toast.error("Something went wrong");
      }
    }
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">WelcomeBack</h1>
        <Form layout="vertical" onFinish={onFinish}>
         
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
           LOGIN
          </Button>
          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
        </Form>
      </div>
    </div>
  );
};
