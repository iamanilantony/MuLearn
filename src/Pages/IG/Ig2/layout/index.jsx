import React from "react";
import ContentsMenu from "../components/menu";
import styles from "./index.module.css";
import Dashboard from "../IntersestGroup2";

const IgLayout = () => {
  return (
    <div
      className={`${styles.roboto_font} flex  items-start justify-start bg-[rgba(255,255,255,1)] w-full relative`}
    >
      <ContentsMenu />

      <Dashboard />
    </div>
  );
};

export default IgLayout;
