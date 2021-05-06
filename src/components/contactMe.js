import React from "react";
import axios from "axios";

import { Typography, Button, Input, Form, message } from "antd";

import "../App.css";

const key = "updatable";

export default function ContactMe() {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("https://farhansportfolioapp.herokuapp.com/api/contacts/", {
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
          "Awesome! I'll be in touch with you shortly! Thanks for expressing an interest!\nLooking forward to speaking to you",
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
    <div>
      <Title level={3} className="section-title">
        Wanna get in touch?
      </Title>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          className="form-item"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input
            className="form-input"
            placeholder="Drop your email here!"
          ></Input>
        </Form.Item>
        <Form.Item>
          <Button
            className="btn"
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
