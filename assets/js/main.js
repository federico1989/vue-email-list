//Crea una nuova istanza
let app = new Vue({
  el: "#root",
  data: {
    emails: [
      
    ]
  },

  mounted(){
    for (let index = 0; index < 10; index++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(response => {
       this.emails.push(response.data.response);
      });
    }
   }
});
