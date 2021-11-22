
const app = new Vue({

  el: '#app',

  data: {
    eMail:[]
  },

  methods:{
    getMail(){
      for(let i=0; i<10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{

        console.log('response.data',response.data);
        const data = response.data;
        const mail = data.response;
        console.log(mail);
        this.eMail.push(mail);

        })
      }
      }

    },

  mounted(){
    this.getMail();
  }
})