import React from "react";
import routes from "../../Constants/route.constants";

import { Button } from "../../UI";

const LoginComponent = (props) => {
  const { history } = props;

  return (
    <div>
      LOGIN PAGE
      <Button
        text="login"
        onClick={() => {
          history.push(routes.home);
        }}
      />
    </div>
  );
};

export default LoginComponent;
