
import axios from 'axios';
const HTTP = axios.create({
    baseURL: 'https://randomuser.me/api'
})

const usuarios = {
    us:  " "

}

export default {
    getUsers () {
     HTTP.get('/?results=100&seed=seed').then(res => usuarios.us = res.data.results);
       return HTTP.get('/?results=100&seed=seed').then(res => res.data.results);
    },
    Usuarios(){
        return usuarios.us;
    },

    getUserById(users, id){
           
            var item = users.find(item => item.email === 'steinar.eskedal@example.com');
            const objectArray = Object.entries(item);
            console.log("ENTRAAAAAAAAAAAAAA"+ objectArray);
            return objectArray;
           //  console.log("ENTRAAAAAAAAAAAAAA"+ objectArray);
           // console.log("ENTRAAAAAAAAAAAAAA"+ JSON.parse(JSON.stringify(item)));
       //  var user = users.find(users, ['email', id])

      //console.log("API"+usuarios.us);
        //return 0;
    }

}