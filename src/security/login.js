import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import axios from 'axios';
import { Utils } from '@/model/utils';

export default {
  data() {
    return {
      form: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    onLogin(){
      axios.post(new Utils().url + 'authentication/login', this.form).then(res => {
        sessionStorage.setItem("token", res.data);
        this.$router.push('/');
      }).catch(err => {
        alert(err);
      })
    }
  },
  components: {
    InputText,
    Password,
    Button
  }
}
