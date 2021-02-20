<template>
  <div class="contact-us container">
    <div class="row">
      <div class="col">
        <h2 class="text-center">Contact Us</h2>
      </div>
    </div>
    <div class="row content justify-content-center">
      <div class="pemberitahuan" style="display: none;">
        <div class="text">
          <div :class="`title ${cond == 'success' ? 'text-success' : 'text-danger'}`"><span :class="`fa fa-${cond == 'success' ? 'check' : 'close'} fa-fw`"></span> {{alert}}</div>
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
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  data(){
    return {
      cond: 'success',
      alert: '',
      info: ''
    }
  },
  methods: {
    show_alert(){
      const alert_ = document.querySelector('.pemberitahuan');
      alert_.style.display = 'block';
      setTimeout(() => { 
        alert_.style.display = 'none';
      }, 3000);
    },
    sendEmail(e) {
      emailjs.sendForm('service_jtl7n6j', 'template_wupyt4e', e.target, 'user_wQPrq7qQmAjwrddaXRAFO')
        .then(() => {
          var vm = this;
          vm.alert = 'Berhasil';
          vm.info = 'Pesan anda berhasil terkirim';
        }, (error) => {
          var vm = this;
          vm.cond = 'danger';
          vm.alert = 'Gagal';
          vm.info = 'Pesan anda gagal terkirim';
          console.log(error);
        }).then(() => {
          this.show_alert();
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 900px;

  .row h2{
    margin: 0;
  }

  .content{
    position: relative;
    background-color: #e3e8ea;
    padding: 15px 0;
    border-radius: 20px;

    .pemberitahuan{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(255,255,255, 0.8);
      border-radius: 20px;

      .text{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        
        .title{
          font-size: 40px;
        }

        .info{
          font-size: 20px;
          text-align: center;
        }
      }
    }

    .social-media{
      margin: 5px;

      i{
        font-size: 30px;
      }

      p{
        margin: 0;
        padding: 0;
      }
    }

    .form{
      .form-group{
        margin-bottom: 7px;
      }

      button{
        margin-top: 5px;
      }
    }
  }
}
</style>