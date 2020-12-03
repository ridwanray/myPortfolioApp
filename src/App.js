import React, { useState } from "react";
import Particles from "react-particles-js";
import Logo from "./images/OP_Logo_White.png";
//import 'antd/dist/antd.css';
import "./App.css";
import SC from "./images/soundcloud.png";
import * as Backgrounds from "./Background";

import {
  Card,
  Typography,
  Button,
  Popover,
  Input,
  Form,
  message,
  Switch,
} from "antd";
import Fade from "react-reveal/Fade";
import axios from "axios";

import {
  GithubFilled,
  InstagramOutlined,
  LinkedinFilled,
  FacebookFilled,
  MediumOutlined,
} from "@ant-design/icons";

var ReactRotatingText = require("react-rotating-text");
var fileDownload = require("js-file-download");

const key = "updatable";

const { Paragraph } = Typography;

function App() {
  const { Title } = Typography;
  const [btnPos, setbtnPos] = useState(false);
  const [toggleBackground, setToggleBackground] = useState(false);

  const [form] = Form.useForm();

  const toggleBtnPos = () => {
    setbtnPos(!btnPos);
  };

  const handleBackgroundChange = () => {
    setToggleBackground(!toggleBackground);
  };

  const handleResumeDownload = () => {
    axios
      .get("http://farhansportfolioapp.herokuapp.com/download/", {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "Resume.pdf");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <Switch
        unCheckedChildren="Try Me!"
        checkedChildren="Try Me!"
        onClick={() => handleBackgroundChange()}
        style={{
          margin: "auto",
          right: 30,
          top: 30,
          float: "right",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          width: 70,
        }}
      />
      <Particles
        className={toggleBackground ? "custom-bubbles" : "custom-particles"}
        params={{
          particles: toggleBackground
            ? Backgrounds.Bubbles
            : Backgrounds.Particles,
          interactivity: Backgrounds.Interactivity,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 200,
          left: 0,
        }}
      >
        <div>
          <Fade cascade>
            <Title
              level={3}
              style={{
                float: "topLeft",
                color: "white",
                fontSize: 50,
                textAlign: "center",
                fontFamily: `Do Hyeon', sans-serif`,
              }}
            >
              <ReactRotatingText
                items={[
                  "Hey there! 😊",
                  "I'm Farhan! ",
                  "I like to code and build stuff 🛠️ ",
                  "This is my personal portfolio 📜",
                  `It's still a work in progress! 👨‍💻`,
                  `You can learn a little bit more about me below 🧐!`,
                  "Also, feel free to grab a copy of my resume from below!",
                ]}
              />
            </Title>
          </Fade>
        </div>
        <div className="centered-text">
          <p>View my socials!</p>
        </div>
        <div className="centered-text">
          <Button
            className="button"
            onClick={() =>
              window.open("https://github.com/farhanghazi97", "_blank")
            }
            icon={<GithubFilled />}
          ></Button>
          <Button
            className="button"
            onClick={() =>
              window.open("https://www.instagram.com/farhan.ghazi97/", "_blank")
            }
            icon={<InstagramOutlined />}
          ></Button>
          <Button
            className="button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/farhan-ghazi-901b69177/",
                "_blank"
              )
            }
            icon={<LinkedinFilled />}
          ></Button>
          <Button
            className="button"
            onClick={() =>
              window.open("https://medium.com/@farhanghazi17", "_blank")
            }
            icon={<MediumOutlined />}
          ></Button>
          <Button
            className="button"
            onClick={() =>
              window.open("https://www.facebook.com/farhanghazi97", "_blank")
            }
            icon={<FacebookFilled />}
          ></Button>
          <Button
            className="button"
            onClick={() =>
              window.open("https://soundcloud.com/farhan-ghazi", "_blank")
            }
            icon={
              <img
                alt="soundcloud_logo"
                style={{
                  position: "relative",
                  bottom: 2,
                  width: 30,
                  height: 30,
                }}
                src={SC}
              />
            }
          ></Button>
        </div>
        <div className="centered-text">
          <Popover
            content={
              <div>
                <p>
                  Hey! I'm Farhan! I'm a highly-enthusiastic individual whose
                  currently pursuing a B.Sc in Computer<br></br>Science at UNSW.
                  I am a full-stack software developer, working primarily with
                  the Django-React stack.<br></br>
                  At university, I was the designated technical lead for our
                  capstone project. I enjoy working in both<br></br>
                  team-oriented and self-directed environments and offer great
                  communication skills and work ethic.<br></br>
                  My work experience includes a summer internship at Macrovue, a
                  FinTech company formerly based<br></br>in Circular Quay (now
                  located at Pitt Street)
                </p>
              </div>
            }
            title="About Me"
            placement="left"
          >
            <Button
              className="about-me-hobbies"
              type="primary"
              style={{ border: "1px solid black" }}
            >
              About Me
            </Button>
          </Popover>
          <Popover
            content={
              <div>
                <p>
                  - Coding (DUH!) 👨‍💻<br></br>- Piano Covers 🎹<br></br>- Soccer
                  ⚽<br></br>- Anime Art 🎨<br></br>- Gaming 🎮<br></br>
                </p>
              </div>
            }
            title="My Hobbies"
            placement="right"
          >
            <Button
              className="about-me-hobbies"
              type="primary"
              style={{ border: "1px solid black" }}
            >
              My Hobbies
            </Button>
          </Popover>
        </div>
        <div className="centered-text">
          <Popover
            content={
              <div>
                <p>
                  Languages: C, Python, JS, Java<br></br>
                  Backend: Django, NodeJS<br></br>
                  Frontend: React, Vue, Angular<br></br>
                  Data: PostgreSQL, MySQL<br></br>
                  <b>and learning a ton more...</b>
                </p>
              </div>
            }
            title="Technologies I Use"
            placement="bottom"
          >
            <Button
              onMouseEnter={() => toggleBtnPos()}
              onMouseLeave={() => toggleBtnPos()}
              className="tech-use"
              type="primary"
              style={{ border: "1px solid black" }}
            >
              Tech I Use
            </Button>
          </Popover>
        </div>
        <div>
          <Title
            level={3}
            style={{
              margin: "auto",
              position: "relative",
              color: "white",
              fontSize: 25,
              textAlign: "center",
              textDecoration: "underline",
              fontFamily: `Do Hyeon', sans-serif`,
              top: btnPos ? 300 : 120,
              paddingBottom: 10,
            }}
          >
            Recent Projects
          </Title>
          <div
            className="centered-text"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              title="OrdinaryPlaylists"
              extra={
                <Button
                  type="primary"
                  href="https://www.ordinaryplaylists.com/"
                  target="_blank"
                >
                  View
                </Button>
              }
              cover={<img src={Logo} style={{ padding: 20 }}></img>}
              bordered={false}
              headStyle={{
                background: "black",
                color: "white",
                width: 400,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                border: "none",
              }}
              style={{
                width: 400,
                borderRadius: 10,
                top: btnPos ? 300 : 120,
                color: "white",
                background:
                  "linear-gradient(180deg, rgba(31, 31, 31, 0.33) 0%, rgba(31, 31, 31, 0.41) 75%, #1F1F1F 100%)",
              }}
            >
              A "content-discovery" platform where aspiring artists (such as
              writers, musicians, graphic art designers etc) can contribute
              their work to get recognition on my client's social media
              platforms. Moderators of the platform primarly use this platform
              to put together work from different artists into a single piece of
              "art".
            </Card>
          </div>
        </div>
        <div style={{ postion: "relative", top: 100 }}></div>
        <div style={{ paddingTop: 50 }}>
          <Title
            level={3}
            style={{
              margin: "auto",
              position: "relative",
              color: "white",
              fontSize: 25,
              textAlign: "center",
              textDecoration: "underline",
              fontFamily: `Do Hyeon', sans-serif`,
              top: btnPos ? 300 : 120,
            }}
          >
            My Resume
          </Title>
          <div className="centered-text">
            <Paragraph
              style={{
                position: "relative",
                color: "white",
                top: btnPos ? 300 : 120,
              }}
              ellipsis={{
                rows: 5,
              }}
            >
              A resume does a much better job at showcasing one's skillset.
              Click below to grab mine!
            </Paragraph>
          </div>
          <div className={btnPos ? "centered-button-drop" : "centered-button"}>
            <Button
              style={{ border: "1px solid black" }}
              onClick={() => handleResumeDownload()}
              type="primary"
            >
              Grab Resume!
            </Button>
          </div>
        </div>
        <div>
          <Title
            level={3}
            style={{
              margin: "auto",
              position: "relative",
              color: "white",
              fontSize: 25,
              textAlign: "center",
              textDecoration: "underline",
              fontFamily: `Do Hyeon', sans-serif`,
              top: btnPos ? 330 : 150,
            }}
          >
            Wanna get in touch?
          </Title>
          <div>
            <Form form={form} onFinish={onFinish}>
              <Form.Item
                name="email"
                style={{
                  textAlign: "center",
                  margin: "auto",
                  position: "relative",
                  top: btnPos ? 340 : 160,
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input
                  style={{
                    margin: "auto",
                    border: "1px solid black",
                    width: "20%",
                    textAlign: "center",
                  }}
                  placeholder="Drop your email here and I'll be notified!"
                ></Input>
              </Form.Item>
              <Form.Item
                style={{
                  textAlign: "center",
                  margin: "auto",
                  position: "relative",
                }}
              >
                <Button
                  style={{
                    marginBottom: "20px",
                    border: "1px solid black",
                    top: btnPos ? 360 : 175,
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
