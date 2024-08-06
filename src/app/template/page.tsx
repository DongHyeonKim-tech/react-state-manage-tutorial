"use client";
import React, { useState, useEffect } from "react";
import LayoutPage from "@/utils/layout/Layout";

import TemplateMenu1 from "@/components/template/TemplateMenu1";
import TemplateMenu2 from "@/components/template/TemplateMenu2";

import { useRecoilState } from "recoil";
import { menuState } from "@/utils/recoil/recoilState";
import { Button } from "antd";

import { useDataStore } from "@/utils/zustand/store";
import { CategoryStateType, CategoryDataType } from "../AdminInterface";

const TemplatePage = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  useEffect(() => console.log("template menu: ", menu), [menu]);

  const { data, insertData, updateData, removeData } = useDataStore(
    (state: CategoryStateType) => ({
      data: state.data,
      insertData: state.insertData,
      updateData: state.updateData,
      removeData: state.removeData,
    })
  );

  const [ojtCategory, setOjtCategory] = useState<CategoryDataType>({
    key: data.length ? data.length + 1 : 0,
    category: null,
    all: 0,
    bim: 0,
    name: "",
  });

  const changeCategoryHandler = (
    name: string,
    value: string | number | null
  ) => {
    setOjtCategory((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const setCategoryHandler = (data: CategoryDataType) => {
    setOjtCategory(data);
  };

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
        <TemplateMenu1
          ojtCategory={ojtCategory}
          setCategoryHandler={setCategoryHandler}
          changeCategoryHandler={changeCategoryHandler}
          data={data}
          insertData={insertData}
          updateData={updateData}
          removeData={removeData}
        />
      ) : menu.path === "template2" ? (
        <TemplateMenu2 />
      ) : (
        <></>
      )}
    </LayoutPage>
  );
};

export default TemplatePage;
