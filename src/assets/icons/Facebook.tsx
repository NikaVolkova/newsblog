import React from "react";

export const FacebookIcon = ({
    width = "88",
    height = "56",
    fill = "#313037",
    rx="4",

  }) => {
    return (
      <svg
        width={width}
        height={height}
        rx={rx}
        viewBox="0 0 88 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          d="M50 18H47C45.6739 18 44.4021 18.5268 43.4645 19.4645C42.5268 20.4021 42 21.6739 42 23V26H39V30H42V38H46V30H49L50 26H46V23C46 22.7348 46.1054 22.4804 46.2929 22.2929C46.4804 22.1054 46.7348 22 47 22H50V18Z"
          fill={fill}
        />
      </svg>
    );
  };