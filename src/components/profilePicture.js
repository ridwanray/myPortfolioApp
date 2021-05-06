import React from "react";
import "../App.css";

export default function ProfilePicture(props) {
  return (
    <div>
      {props.userData ? (
        <img
        alt="gitprofilpicture"
        src={props.userData.profile_pic}
        style={{
            borderRadius: "50%",
            marginBottom: 20,
            width: 300,
            height: 300,
        }}
        ></img>
    ) : null}
    </div>
  );
}
