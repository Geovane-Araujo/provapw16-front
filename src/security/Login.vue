<template>
  <div class="center">
    <div class="login">
      <div class="p-fluid">
        <div class="p-fluid inputs">
          <span class="p-float-label">
            <InputText id="username" type="text" v-model="form.email" />
            <label for="username">Email</label>
          </span>
        </div>
        <div class="inputs">
          <span class="p-float-label">
            <Password v-model="form.senha"></Password>
              <label for="username">Senha</label>
          </span>
        </div>
        <div class="inputs">
          <Button label="Login" @click="onLogin()"/>
        </div>
        <div class="inputs">
          <Button label="Esqueci a senha"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js">
</script>

<style lang="scss" scoped>
  .inputs{
    margin: 10px;
  }
.center{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login{
  width: 40%;
  background-color: rgba($color: #f7c3e7, $alpha: 1.0);
  height: 50%;
  border-radius: 10px;
  box-shadow: 9px 13px 12px -11px rgba(0,0,0,0.75);
  -webkit-box-shadow: 9px 13px 12px -11px rgba(0,0,0,0.75);
  -moz-box-shadow: 9px 13px 12px -11px rgba(0,0,0,0.75);
}
</style>