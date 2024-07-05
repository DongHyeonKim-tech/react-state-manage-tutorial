"use client";
import React, { useEffect } from "react";
import LayoutPage from "@/utils/layout/Layout";

import TemplateMenu1 from "@/components/template/TemplateMenu1";
import TemplateMenu2 from "@/components/template/TemplateMenu2";

import { useRecoilState } from "recoil";
import { menuState } from "@/recoilState";
import { Button } from "antd";

const TemplatePage = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  useEffect(() => console.log("template menu: ", menu), [menu]);
  return (
    <LayoutPage>
      <Button
        onClick={() => {
          console.log("menu: ", menu);
        }}
      >
        Template
      </Button>
      {menu.path === "template1" ? (
        <TemplateMenu1 />
      ) : menu.path === "template2" ? (
        <TemplateMenu2 />
      ) : (
        <></>
      )}
    </LayoutPage>
  );
};

export default TemplatePage;
