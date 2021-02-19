<template>
  <div class="home">
    <div class="wrapper-video">
      <video src="../assets/background.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <img class="logo" alt="logo" src="../assets/logo dasco.png" />
    </div>

    <div class="wrapper-brief bg-dark">
      <div class="container">
        <div class="row vertical">
          <img src="../assets/logo dasco.jpg" class="col-m mx-auto d-block" alt="banner">
          <div class="col-lg text-light">
            <h2>DASCO</h2>
            <p style="text-align: justify;">
              DASCO UNJ adalah kelompok studi data science di UNJ yang membantu kamu dalam mempersiapkan diri untuk mulai berkarir sebagai 
              Data Scientist. DASCO menyediakan tempat untuk kamu bisa belajar, berdiskusi, dan sharing - sharing tentang data science 
              secara fun, aplikatif, dan praktis.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper-banner bg-light">
      <div class="container">
        <div class="row vertical">
          <div class="col mx-auto d-block">
            <Contact />
            <!-- <h2>Open Recruitment</h2>
            <p style="text-align: justify;">
              Kamu mahasiswa Statistika FMIPA UNJ, tertarik dengan dunia <span class="fw-bold">Data Science</span> namun ragu dan perlu
              teman dan tempat untuk berdiskusi? Yuk join <span class="fw-bold">DASCO</span> 
            </p>
            <a v-bind:href="baseURL + '/pendaftaran'" class="btn btn-dark">Join Dasco</a> -->
          </div>
          <!-- <img src="../assets/Banner.jpeg" class="col mx-auto d-block tada" alt="banner"> -->
        </div>
        <div class="row">
          <figure class="col quote-wrapper text-center">
            <blockquote class="blockquote-sm">
              <p>"<span class="fw-bold">#MulaiAjaDulu</span>, kalau kamu gak memulai maka kamu tidak akan berada disana."</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              <cite title="Source Title">Nadiem Makariem</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Contact
  },data(){
    return {
      baseURL: "https://dascounj.github.io"
    }
  },created () {
    document.title = "DASCO";
  }
};
</script>

<style lang="scss">
.wrapper-video{
  position: relative;
  width: 100%;
  height: 550px;

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #50576f;
  }

  .logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 150px;
    box-shadow: 0px 0px 8px 10px rgba(0, 0, 0, 0.08);
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    mix-blend-mode: overlay;
  }
}

.wrapper-brief{
  position: relative;
  padding: 20px 0;
  width: 100%;

  .vertical{
    display: flex;
    align-items: center;
  }

  .col-lg, .col-m{
    margin: 10px 0;

    h2{
      margin-bottom: 15px;
    }
  }

  img{
    object-fit: cover;
    max-width: 200px;
    border-radius: 2rem;
  }
}

.wrapper-banner{
  position: relative;
  padding: 10px 0;
  width: 100%;

  .vertical{
    display: flex;
    align-items: center;
  }

  .col-lg, .col{
    margin: 10px 0;

    h2{
      margin-bottom: 15px;
    }
  }

  img{
    object-fit: cover;
    height: 200px;
    max-width: 500px;
    border-radius: 1.5rem;
  }

  .quote-wrapper{
    margin-bottom: 0;
  }
}
</style>