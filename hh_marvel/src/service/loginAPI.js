import Db from '../dataBase/db.json';
const database = Db;


const doLogin = (email, pass) => {

    const result = database.filter(login => login.email == email && login.password == pass);

    
    if (result)
        return console.log("logado") //gerar token
    else
        return console.log("nao logado")

}


export default doLogin;