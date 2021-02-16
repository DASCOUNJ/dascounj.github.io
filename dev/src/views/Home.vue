<template>
  <div class="home">
    <div class="wrapper-video">
      <video src="../assets/background.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <img class="logo" alt="logo" src="../assets/logo dasco.png" />
    </div>

    <div class="wrapper-banner bg-dark">
      <div class="container">
        <div class="text-light">
          <h2>Open Recruitment</h2>
          <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et veritatis molestiae eius ipsum. Corrupti non veniam, reiciendis velit blanditiis, harum minima dicta nemo, tempora eaque eius error est eveniet.</p>
        </div>
        <img src="../assets/Banner.jpeg" class="banner" alt="banner">
      </div>
    </div>

    <div class="last-content bg-light">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  created () {
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

.wrapper-banner{
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    object-fit: cover;
    height: 200px;
    max-width: 500px;
    border-radius: 20px;
  }
}

.last-content{
  width: 100%;
  height: 400px;
}
</style>