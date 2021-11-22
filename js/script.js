
const app = new Vue({

  el: '#app',

  data: {
    eMail:[],
    isLoading: true,
    isError: false
  },

  methods:{
    getMail(){
      this.isLoading = true;
      this.eMail = [];
      for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{

        console.log('response.data',response.data);
        const data = response.data;
        const mail = data.response;
        console.log(mail);
        this.eMail.push(mail);

// quando l'array di e-mail è pieno il loading finisce
        if(this.eMail.length == 10){
          this.isLoading = false;
        }
        })
        .catch((error) =>{
          console.log('Errore', error);
          this.isError = true;
        })
      }
    }

  },

  mounted(){
    this.getMail();
  }
})