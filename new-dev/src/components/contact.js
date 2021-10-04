import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [alert, setAlert] = useState("");
  const [condition, setCondition] = useState("success");
  const [info, setInfo] = useState("");

  return {
    /* <div className="contact-us container">
    <div className="row">
      <div className="col">
        <h2 className="text-center">Contact Us</h2>
      </div>
    </div>
    <div className="row content justify-content-center">
      <div className="pemberitahuan" style="display: none;">
        <div className="text">
          <div v-if="alert === ''" class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div v-else :class="`title ${cond == 'success' ? 'text-success' : 'text-danger'}`">
            <span :class="`fa fa-${cond == 'success' ? 'check' : 'close'} fa-fw`"></span>
            {{alert}}
          </div>
          <p class="info">{{info}}</p>
        </div>
      </div>
      <div class="col-sm-5 align-self-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col social-media text-center">
              <i class="fa fa-envelope fa-fw"></i>
              <p class="text">dascounj@gmail.com</p>
            </div>
            <div class="col social-media text-center">
              <i class="fa fa-phone fa-fw"></i>
              <p class="text">+6283872123970 <span class="fw-bold">(Kuncoro)</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 form-wrapper">
        <form class="contact-form form" @submit.prevent="sendEmail">
          <div class="form-group">
            <label class="form-label">Nama</label>
            <input type="text" class="form-control" placeholder="Masukkan Nama" name="user_name" required>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan email" name="user_email" required>
          </div>
          <div class="form-group">
            <label class="form-label">Pesan</label>
            <textarea class="form-control" placeholder="Masukkan pesan anda" name="message" required></textarea>
          </div>
          <button class="btn btn-dark" type="submit"><span class="fa fa-paper-plane fa-fw"></span> Kirim</button>
        </form>
      </div>
    </div>
  </div> */
  };
};

export default Contact;
