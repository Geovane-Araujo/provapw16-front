<template>
  <div class="center">
    <div>
      <h3>Cadastro de Produtos</h3>
    </div>
    <div class=buttons>
      <div class="inputs">
        <Button label="Inserir" @click="onOpen()"/>
      </div>
    </div>
    <div class="table">
      <div>
        <DataTable :value="itens" responsiveLayout="scroll">
            <Column field="id" header="id"></Column>
            <Column field="descricao" header="Descricao"></Column>
            <Column field="valor" header="valor"></Column>
            <Column header="">
              <template #body="slotProps">
                <Button label="" icon="pi pi-check" @click="onGetById(slotProps.data.id)" autofocus />
                <Button style="margin-right: 10px" label="" icon="pi pi-times" @click="onDelete(slotProps.id)" autofocus />
                
              </template>
            </Column>
        </DataTable>
    </div>
    </div>
  </div>
  <div class="container-cadastro">
    <Dialog header="Cadastro de Itens" v-model:visible="showModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
        <div class="campos">
          <div class="image">
            <div class="mini-images">
              <img :src="form.image" alt="" height="150" width="150">
              <div class="group-buttons">
                <div class="p-ripple container-input-file" ripple>
                  <label for="file-selector"><div class="btn-file"><i class="pi pi-check"></i></div></label>
                  <input id="file-selector" @change="onUpload" type="file" name="selec" accept="image/*" multiple/>
                </div>
                <Button label="" icon="pi pi-check" @click="closeBasic" autofocus />
              </div>
            </div>
          </div>
          <div class="form">
            <div class="p-fluid inputs input-fields">
              <span class="p-float-label">
                <InputText id="username" type="text" v-model="form.descricao" />
                <label for="username">Descricao</label>
              </span>
            </div>
            <div class="p-fluid inputs input-fields">
              <span class="p-float-label">
                <InputText id="username" type="text" v-model="form.valor" />
                <label for="username">Valor</label>
              </span>
            </div>
          </div>
        </div>
        <template #footer>
            <Button label="Cancelar" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
            <Button label="Salvar" icon="pi pi-check" @click="onSave()" autofocus />
        </template>
    </Dialog>
  </div>
</template>

<script src="./itens.js">
</script>

<style lang="scss" scoped>
.table{
  margin-top: 20px;
}
.group-buttons{
  display: flex;
}
  .groupp{
  display: flex;
  height: 40px;
  margin-top:20px;
}
.container-input-file{
  margin-right: 10px;
  input[type='file']{
    display: none;
  }
  .btn-file{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-align: center;
    color: white;
    width: 50px;
    height: 40px;
    background-color: #8C239E;
  }
}
.mini-images {
  margin: 10px;
  width: 150px;
  height: 150px;
}
.campos{
  display: flex;
  padding: 20px;
}
.image{
  width: 30%;
  flex-wrap: wrap;
}
.form{
  width: 70%;
}
.buttons{
  display: flex;
}
.inputs{
  margin-right: 5px;
}
.input-fields{
    margin-top: 20px;
  }
.center{
  margin-left: 10px;
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