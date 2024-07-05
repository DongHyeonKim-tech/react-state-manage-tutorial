"use client";
import React, { useEffect } from "react";
import LayoutPage from "@/utils/layout/Layout";
import { useRecoilState } from "recoil";
import { menuState } from "@/recoilState";
import LibraryMenu1 from "@/components/library/LibraryMenu1";
import LibraryMenu2 from "@/components/library/LibraryMenu2";

const LibraryPage = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  useEffect(() => console.log("library menu: ", menu), [menu]);
  return (
    <LayoutPage>
      Library{" "}
      {menu.path === "library1" ? (
        <LibraryMenu1 />
      ) : menu.path === "library2" ? (
        <LibraryMenu2 />
      ) : (
        <></>
      )}
    </LayoutPage>
  );
};

export default LibraryPage;
