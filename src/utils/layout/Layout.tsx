"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/sidebar.module.css";
import { Stack } from "@mui/material";

import { Sidebar } from "@/utils/layout/components/Sidebar";
import { TopNav } from "@/utils/layout/components/TopNav";

const LayoutPage = ({ children }: any) => {
  const [openList, setOpenList] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <div
        className={
          openList ? styles.pageContainerExpanded : styles.pageContainer
        }
      >
        <div
          className={styles.leftPane}
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            borderRight: "1px solid #eaeaea",
          }}
        >
          <Sidebar openList={openList} setOpenList={setOpenList} />
        </div>

        <div
          className={styles.rightPane}
          style={{
            // flex: openList ? 3.8 : 4.89,
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <TopNav />
          <Stack className={styles.childrenContainer}>{children}</Stack>
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
