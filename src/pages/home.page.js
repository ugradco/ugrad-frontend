import React from "react";
import HomeComponent from "../Components/Home/Home.component";

export default function HomePage(props) {
  const { loginAPI, login, history } = props;
  const [comment, commentSet] = React.useState("");
  const [textVal, textValSet] = React.useState("Merhaba arkadaslar! Hava uzucu.");
  const [user, userSet] = React.useState({ name: "Furkan Şahbaz", department: "EEE/CS" });
  return (
    <div>
      <HomeComponent user={user} textVal={textVal} commentVal={comment} />
    </div>
  );
}
