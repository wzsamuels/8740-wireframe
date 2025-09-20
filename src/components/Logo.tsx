import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 250 30"
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current text-plum ${props.className || ''}`}
  >
    <path
      d="M26.25 15.75V11.25H22.5V8.25H19.5V11.25H15.75V15.75H19.5V18.75H22.5V15.75H26.25Z"
      fill="#B794F4"
    />
    <path d="M19.5 8.25H22.5V5.25H19.5V8.25Z" fill="#B794F4" />
    <path d="M19.5 21.75H22.5V18.75H19.5V21.75Z" fill="#B794F4" />
    <path d="M15 15H9.75V12H15V15Z" />
    <path d="M12 18.75V15H9V18.75H12Z" />
    <path d="M6 18.75V15H3V18.75H6Z" />
    <text
      x="35"
      y="22"
      fontFamily="Inter, sans-serif"
      fontSize="24"
      fontWeight="900"
      letterSpacing="-0.05em"
    >
      Useless Gadgets
    </text>
  </svg>
);

export default Logo;
