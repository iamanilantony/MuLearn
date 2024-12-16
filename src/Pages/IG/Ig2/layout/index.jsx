import React from "react";
import ContentsMenu from "../components/menu";
import styles from "./index.module.css";
import Dashboard from "../IntersestGroup2";

const IgLayout = () => {
  return (
    <div
      className={`${styles.roboto_font} flex gap-3 items-start justify-start bg-[rgba(255,255,255,1)]`}
    >
      <div className="hidden md:block p-8">
        <ContentsMenu />
      </div>
      <Dashboard />
    </div>
  );
};

export default IgLayout;
