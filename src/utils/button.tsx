// import back_arrow from "@/public/images/back_arrow.svg";
import back_arrow from "@/../public/images/back-arrow.png";
import { Button, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const BlueMiddleButton = styled(Button)`
  width: 123px;
  height: 43px;

  background: #006edd;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: #006edd;
    color: white;
  }
`;

export const BackArrow = (props: any) => {
  const router = useRouter();

  const BackArrow = styled("div")`
    position: absolute;
    width: 24px;
    height: 16px;
    left: 32px;
    top: 128px;
  `;

  const handleClickBack = (path: string) => {
    router.push(path);
  };

  return (
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        width: "24px",
        height: "16px",
        left: "32px",
        top: "128px",
      }}
    >
      <Image
        src={back_arrow}
        priority
        alt="Logo"
        onClick={() => handleClickBack(props.path)}
      />
    </div>
  );
};
