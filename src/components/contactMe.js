import React, { useState } from "react";
import axios from "axios";

import { Typography, Button, Input, Form, message } from "antd";

import "../App.css";

const key = "updatable";

export default function ContactMe() {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("http://farhansportfolioapp.herokuapp.com/api/contacts/", {
        email: values.email,
      })
      .then((res) => {
        emailDispatchSuccess();
        console.log(res);
      })
      .catch((err) => {
        emailDispatchError();
        console.log(err);
      });
    console.log(values);
  };

  const emailDispatchSuccess = () => {
    message.loading({ content: "Processing...", key });
    setTimeout(() => {
      message.success({
        content:
          "Awesome! I'll be in touch with you shortly! \
          Thanks for expressing an interest!\nLooking forward to \
          speaking to you",
        key,
        duration: 7,
      });
    }, 1000);
  };

  const emailDispatchError = () => {
    message.loading({ content: "Processing...", key });
    setTimeout(() => {
      message.error({
        content: "Oops! Looks like something went wrong! Please try again.",
        key,
        duration: 7,
      });
    }, 1000);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <Title level={3} className="component-header" style={{ color: "white" }}>
        Wanna get in touch?
      </Title>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input
            style={{
              border: "1px solid black",
              textAlign: "center",
            }}
            placeholder="Drop your email here!"
          ></Input>
        </Form.Item>
        <Form.Item className="centered-text">
          <Button
            style={{
              border: "1px solid black",
              textAlign: "center",
            }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
