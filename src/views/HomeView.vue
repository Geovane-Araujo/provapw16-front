<template>
  <div class="home">
    <div class="menu">
      <div class="btns" @click="onPushedRouter('itens')">
        <h5 class="text-button">Produtos</h5>
      </div>
      <div class="btns" @click="onPushedRouter('locacao')">
        <h5 class="text-button">Locações</h5>
      </div>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    onPushedRouter(router){
      this.$router.push('/'+router)
    }
  },
  components: {
  },
};
</script>
<style lang="scss" scoped>
.btns{
  cursor: pointer;
  height: 30px;
  background-color: gray;
  display: flex;
  margin: 2px;
  align-items: center;
  .text-button{
    color: white;
    margin: 10px;
  }
}
.home{
  height: 100vh;
  width: 100vw;
  display: flex;

}
.menu{
  height: 100%;
  width: 15%;
  background-color: black;
}
.router{
  height: 100%;
  width: 85%;
  overflow: auto;
}
</style>
