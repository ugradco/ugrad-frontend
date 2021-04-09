import * as React from "react";

function SvgFeed(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 640 640"
      {...props}
    >
      <path d="M85.206 469.305C38.197 469.305 0 507.632 0 554.345c0 46.95 38.197 84.876 85.206 84.876 47.15 0 85.324-37.926 85.324-84.876 0-46.713-38.162-85.04-85.324-85.04zM.083 217.42v122.683c79.89 0 154.963 31.24 211.514 87.84 56.492 56.434 87.686 131.872 87.686 212.07h123.202c0-232.987-189.57-422.556-422.403-422.556v-.036zM.236-.012v122.706c284.885 0 516.727 232.078 516.727 517.282l123.037.012C640 287.188 352.953 0 .248 0L.236-.012z" />
    </svg>
  );
}

export default SvgFeed;
