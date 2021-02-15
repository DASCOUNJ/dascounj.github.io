<template>
  <div class="about">
    <div class="wrapper">
        <h2 class="text">Under development</h2>
        <img src="../assets/on-development.gif" alt="On Development" class="image">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {},
  created () {
    document.title = "About";
  }
};
</script>

<style lang="scss" scoped>
.about{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper{
    max-width: 700px;

    img{
      width: 100%;
    }

    .text{
      position: absolute;
      padding: 8px;
      margin: 20px 10px;
      cursor: default;
      font-weight: normal;
      font-size: 25px;
      background-color: #303337;
      color: white;
      border-radius: 15px;
    }

    @media(max-width: 400px){
      .text{
        margin: 20px 15px;
        font-size: 5vw;
      }
    }
  }
}
</style>