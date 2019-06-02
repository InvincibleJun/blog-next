import React, { Component } from "react";
import Layout from "../../components/Layout";
import style from "./index.scss";

export default function({ children, title }) {
  return (
    <Layout title={title}>
      <div className={style.header} />
      <div className={style.box}>{children}</div>
    </Layout>
  );
}
