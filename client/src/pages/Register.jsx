import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Nice to Meet U</h1>
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
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
            REGISTER
          </Button>
          <Link to="/login" className="anchor mt-2">
            CLICK HERE TO LOGIN
          </Link>
        </Form>
      </div>
    </div>
  );
};
