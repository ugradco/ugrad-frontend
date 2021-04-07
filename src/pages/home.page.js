import React from "react";
import HomeComponent from "../Components/Home/Home.component";

export default function HomePage() {
  const [comment, commentSet] = React.useState("");
  return (
    <div>
      <HomeComponent commentVal={comment} />
    </div>
  );
}
