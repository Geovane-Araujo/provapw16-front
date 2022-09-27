<template>
  <div class="center">
    <div>
      <h3>Cadastro de Locacoes</h3>
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
            <Column field="nome" header="Nome"></Column>
            <Column field="data" header="Data"></Column>
            <Column field="valortotal" header="Valor Total"></Column>
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
    <Dialog header="Cadastro de Locacao" v-model:visible="showModal" :style="{width: '70vw'}" :modal="true">
        <div class="p-fluid grid">
          <div class="field col-6">
            <label for="username">Data</label>
            <Calendar inputId="dateformat" v-model="form.data" dateFormat="dd-mm-yy"/>
          </div>
          <div class="field col-6">
              <label for="username">Cliente</label>
              <Dropdown id="username" :filter="true" v-model="cliente" :options="clientes" optionLabel="nome"/>
          </div>
          <div class="field col-8">
            <label for="username">Itens</label>
            <Dropdown id="username" :filter="true" v-model="produto" :options="produtos" optionLabel="descricao"/>
          </div>
          <div class="field col-2">
            <label for="username">Quantidade</label>
            <InputNumber id="username" type="text" v-model="quantidade" />
          </div>
          <div class="field col-2">
            <label for="username" style="color:white"> .</label>
            <Button label="Adicionar" icon="pi pi-plus" @click="onAdd()"/>
          </div>
          <div class="field col-12">
            <DataTable :value="form.itensLocacao" responsiveLayout="scroll">
            <Column field="descricao" header="Descricao"></Column>
            <Column field="quantidade" header="Quantidade"></Column>
            <Column field="valor" header="Valor"></Column>
            <Column field="total" header="Valor Total"></Column>
            <Column header="">
              <template #body="slotProps">
                <Button  label="" icon="pi pi-times" @click="onRemove(slotProps.data.iditem)" />
              </template>
            </Column>
        </DataTable>
          </div>
        </div>
        <template #footer>
            <Button label="Cancelar" icon="pi pi-times"  class="p-button-text"/>
            <Button label="Salvar" icon="pi pi-check" @click="onSave()" autofocus />
        </template>
    </Dialog>
  </div>
</template>

<script src="./locacao.js">
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

.campos{
  display: flex;
  padding: 20px;
}
.form{
  width: 100%;
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