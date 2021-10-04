import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import * as style from "./contact.module.scss";

const Contact = () => {
  const [alert, setAlert] = useState("");
  const [condition, setCondition] = useState("success");
  const [info, setInfo] = useState("");
  const pemberitahuan = useRef(null);

  const Submit = e => {
    e.preventDefault();
    pemberitahuan.current.style.display = "block";

    emailjs
      .sendForm("service_bik7vme", "template_wupyt4e", e.target, "user_wQPrq7qQmAjwrddaXRAFO")
      .then(
        result => {
          setAlert("Berhasil");
          setInfo("Pesan anda berhasil terkirim");
        },
        error => {
          setCondition("danger");
          setAlert("Gagal");
          setInfo("Pesan anda gagal terkirim");
        }
      )
      .then(() => {
        setTimeout(() => {
          pemberitahuan.current.style.display = "none";
          setAlert("");
          setInfo("");
        }, 3000);
      });
  };

  return (
    <div className={`container ${style.container}`}>
      <div className={`row ${style.row}`}>
        <div className="col">
          <h2 className="text-center">Contact Us</h2>
        </div>
      </div>
      <div className={`row ${style.row} content ${style.content} justify-content-center`}>
        <div className={style.pemberitahuan} style={{ display: "none" }} ref={pemberitahuan}>
          <div className={`text ${style.text}`}>
            {alert === "" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="spinner-border text-dark"
                  role="status"
                  style={{ margin: "0 10px" }}
                ></div>
                Loading...
              </span>
            ) : (
              <div
                className={`${style.title} ${
                  condition === "success" ? "text-success" : "text-danger"
                }`}
              >
                <span
                  className={`fa fa-${condition === "success" ? "check" : "close"} fa-fw`}
                ></span>
                {alert}
              </div>
            )}
            <p className={style.info}>{info}</p>
          </div>
        </div>
        <div className="col-sm-5 align-self-center">
          <div className="container-fluid">
            <div className={`row ${style.row}`}>
              <div className={`col ${style.socialMedia} text-center`}>
                <i className="fa fa-envelope fa-fw"></i>
                <p className="text">dascounj@gmail.com</p>
              </div>
              <div className={`col ${style.socialMedia} text-center`}>
                <i className="fa fa-phone fa-fw"></i>
                <p className="text">
                  +6283872123970 <span className="fw-bold">(Kuncoro)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 form-wrapper">
          <form className={`contact-form ${style.form}`} onSubmit={Submit}>
            <div className={style.formGroup}>
              <label className="form-label" htmlFor="user_name">
                Nama
              </label>
              <input
                id="user_name"
                type="text"
                className="form-control"
                placeholder="Masukkan Nama"
                name="user_name"
                required
              />
            </div>
            <div className={style.formGroup}>
              <label className="form-label" htmlFor="exampleInputEmail1">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Masukkan email"
                name="user_email"
                required
              />
            </div>
            <div className={style.formGroup}>
              <label className="form-label" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                id="pesan"
                className="form-control"
                placeholder="Masukkan pesan anda"
                name="message"
                required
              ></textarea>
            </div>
            <button className="btn btn-dark" type="submit">
              <span className="fa fa-paper-plane fa-fw"></span> Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
