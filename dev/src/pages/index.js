import React from "react";
import Seo from "components/seo";
import Layout from "components/layout";
import vid from "../media/videos/background.mp4";
import logo1 from "../media/images/logo dasco.png";
import logo2 from "../media/images/logo dasco.jpg";
import Contact from "components/contact/contact";
import "../style/index.scss";

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Home" />
      <div className="home">
        <div className="wrapper-video">
          <video src={vid} autoPlay muted loop></video>
          <div className="overlay"></div>
          <img className="logo" alt="logo" src={logo1} />
        </div>

        <div className="wrapper-brief bg-dark">
          <div className="container">
            <div className="row vertical">
              <img src={logo2} className="col-m mx-auto d-block" alt="banner" />
              <div className="col-lg text-light">
                <h2>DASCO</h2>
                <p style={{ textAlignlign: "justify" }}>
                  DASCO UNJ adalah kelompok studi data science di UNJ yang membantu kamu dalam
                  mempersiapkan diri untuk mulai berkarir sebagai Data Scientist. DASCO menyediakan
                  tempat untuk mahasiswa statistika Universitas Negeri Jakarta bisa belajar,
                  berdiskusi, dan sharing - sharing tentang data science secara fun, aplikatif, dan
                  praktis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-banner bg-light">
          <div className="container">
            <div className="row vertical">
              <div className="col mx-auto d-block">
                <Contact />
              </div>
            </div>
            <div className="row">
              <figure className="col quote-wrapper text-center">
                <blockquote className="blockquote-sm">
                  <p>
                    "<span className="fw-bold">#MulaiAjaDulu</span>, kalau kamu gak memulai maka
                    kamu tidak akan berada disana."
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="Source Title">Nadiem Makariem</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
