"use client";
import React, { useEffect } from "react";
import LayoutPage from "@/utils/layout/Layout";
import { useRecoilState } from "recoil";
import { menuState } from "@/utils/recoil/recoilState";
import LibraryMenu1 from "@/components/library/LibraryMenu1";
import LibraryMenu2 from "@/components/library/LibraryMenu2";
import { useCountStore } from "@/utils/zustand/store";
import {
  CountStoreType,
  CategoryStateType,
  MenuStateType,
} from "../AdminInterface";
import { useDataStore, useMenuStore } from "@/utils/zustand/store";

const LibraryPage = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  useEffect(() => console.log("library menu: ", menu), [menu]);

  const { count, increment, decrement } = useCountStore(
    (state: CountStoreType) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
    })
  );

  const { data, insertData, updateData, removeData } = useDataStore(
    (state: CategoryStateType) => ({
      data: state.data,
      insertData: state.insertData,
      updateData: state.updateData,
      removeData: state.removeData,
    })
  );

  const { arrMenu, isLoading, error, getMenuList } = useMenuStore(
    (state: MenuStateType) => ({
      arrMenu: state.data,
      isLoading: state.isLoading,
      error: state.error,
      getMenuList: state.fetchData,
    })
  );

  useEffect(() => console.log("arrMenu: ", arrMenu), [arrMenu]);

  useEffect(() => console.log("isLoading: ", isLoading), [isLoading]);

  useEffect(() => {
    getMenuList();
  }, []);

  useEffect(() => console.log("data: ", data), [data]);

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
