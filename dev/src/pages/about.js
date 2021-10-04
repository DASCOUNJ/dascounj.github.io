import React from "react";
import Seo from "components/seo";
import Layout from "components/layout";
import dev from "../media/images/on-development.gif";
import * as style from "../style/about.module.scss";

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="About Us" />
      <div className={style.about}>
        <div className={style.wrapperImg}>
          <h2 className={style.text}>Under development</h2>
          <img src={dev} alt="On Development" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
