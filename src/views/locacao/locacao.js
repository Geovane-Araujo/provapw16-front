import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import axios from 'axios';
import { Utils } from '@/model/utils';

import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import moment from 'moment';
import Dropdown from 'primevue/dropdown';
import { Cliente } from '@/model/Cliente';
import Calendar from 'primevue/calendar';
import { Locacao } from '@/model/Locacao';

export default {
  data() {
    return {
      previewImage: '',
      showModal: false,
      form: new Locacao(),
      itens: [],
      cliente: new Cliente(),
      clientes: []
    }
  },
  mounted() {
    this.onGetCliente();
    this.onGet();
  },
  methods: {
    onPrepareData(){
      this.form.idCliente = this.cliente.id;
      this.form.nomecliente = this.cliente.nome;
    },
    onSave(){
      this.onPrepareData()
      axios.post(new Utils().url + 'locacao/save', this.form, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
        alert("salvo com sucesso")
        this.showModal = false;
        this.onGet();
      }).catch(err => {
        alert(err);
      })
    },
    onOpen(r){
      this.showModal = true
    },
    onGet(){
      axios.get(new Utils().url + 'locacao/getAll', this.form, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
        if(res.data instanceof Array)
          this.itens = res.data
        else
          this.itens.push(res.data)

        this.itens.forEach(e => {
          e.data = moment(e.data).format('DD/MM/YYYY');
        })
        console.log(this.itens)
      }).catch(err => {
        alert(err);
      })
    },
    onGetCliente(){
      axios.get(new Utils().url + 'cliente/getAll', this.form, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
        if(res.data instanceof Array)
          this.clientes = res.data
        else
          this.clientes.push(res.data)

      }).catch(err => {
        alert(err);
      })
    },
    onGetById(id){
      console.log(id)
      axios.get(new Utils().url + 'locacao/getByID/'+ id , this.form, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
        this.form = res.data
        this.cliente.id = this.form.idcliente;
        this.cliente.nome = this.form.nome;
        console.log(this.cliente)
        this.showModal = true;
        
      }).catch(err => {
        alert(err);
      })
    },
    onDelete(id) {

    },
    onUpload (e) {
      var files = e.target.files;
      console.log(e)
      Array.from(files).forEach(element => {
        var reader = new FileReader();
        reader.readAsDataURL(element);
        reader.onload = e => {
          this.form.image = e.target.result
        };
      });
    },
    onClearImages () {
      this.form.image = '';
    }
  
  },
  components: {
    InputText,
    Password,
    Button,
    Dialog,
    DataTable,
    Column,
    Dropdown,
    Calendar
  }
}
