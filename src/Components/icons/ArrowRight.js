import * as React from "react";

function SvgArrowRight(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#arrow_right_svg__clip0)" fill="#000">
        <path d="M19.891 15.978H.978a.979.979 0 010-1.957h18.913a.979.979 0 010 1.957z" />
        <path d="M14.674 21.195a.979.979 0 01-.691-1.67l4.526-4.527-4.527-4.526a.979.979 0 011.385-1.384l5.217 5.218a.979.979 0 010 1.384l-5.217 5.217a.971.971 0 01-.693.288z" />
      </g>
      <defs>
        <clipPath id="arrow_right_svg__clip0">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgArrowRight;
