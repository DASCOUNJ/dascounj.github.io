<template>
  <div class="home">
    <div class="wrapper">
      <video src="../assets/background.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <img class="logo" alt="logo" src="../assets/logo dasco.png" />
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

<style lang="scss" scoped>
.wrapper{
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
</style>