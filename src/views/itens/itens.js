import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import axios from 'axios';
import { Utils } from '@/model/utils';
import { Itens } from '@/model/Itens';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  data() {
    return {
      previewImage: '',
      showModal: false,
      form: new Itens(),
      itens: []
    }
  },
  mounted() {
    this.onGet();
  },
  methods: {
    onSave(){
      axios.post(new Utils().url + 'itens/save', this.form, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
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
      axios.get(new Utils().url + 'itens/getAll', { headers: { authorization: 'Bearer ' + sessionStorage.getItem("token") } }).then(res => {
        if(res.data instanceof Array)
          this.itens = res.data
        else
          this.itens.push(res.data)
        console.log(this.itens)
      }).catch(err => {
        alert(err);
      })
    },
    onGetById(id){
      console.log(sessionStorage.getItem("token"))
      var config = {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem("token")
        }
      }
      axios.get(new Utils().url + 'itens/getByID/'+ id , config).then(res => {
        this.form = res.data
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
    Column
  }
}
