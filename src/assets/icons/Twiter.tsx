import React from "react";

export const TwiterIcon = ({
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
          d="M55 19C54.0424 19.6755 52.9821 20.1921 51.86 20.53C51.2577 19.8375 50.4573 19.3467 49.567 19.1239C48.6767 18.9012 47.7395 18.9572 46.8821 19.2845C46.0247 19.6117 45.2884 20.1944 44.773 20.9537C44.2575 21.713 43.9877 22.6123 44 23.53V24.53C42.2426 24.5756 40.5013 24.1858 38.931 23.3954C37.3607 22.6051 36.0103 21.4386 35 20C35 20 31 29 40 33C37.9405 34.398 35.4872 35.0989 33 35C42 40 53 35 53 23.5C52.9991 23.2215 52.9723 22.9436 52.92 22.67C53.9406 21.6635 54.6608 20.3927 55 19V19Z"
          fill={fill}
        />
      </svg>
    );
  };