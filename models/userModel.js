const pool = require("../config/db");
/*const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5433,
})*/



const getUsers = () => {
  console.log("/api/USERS database query made");
  return pool
    .query("SELECT * FROM korisnik order by idkorisnika asc")
    .then((results) => results["rows"])
    .catch((err) => console.log(err));
}
  


  const getUserById = async (id) => {
   
    return pool
    .query('SELECT * FROM korisnik WHERE idkorisnika = $1', [id])
    .then((results) => results["rows"])
    .catch((err) => console.log(err));
    /*pool.query('SELECT * FROM korisnik WHERE idkorisnika = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })*/
  }

  const updateUser = (user) => {
    console.log("updated : "+user.username);
    
    return pool
    .query('UPDATE Korisnik SET korisnicko_ime = $1, email = $2 WHERE korisnicko_ime = $3', [user.korisnicko_ime,user.email,user.username])
    .then((results) => results["rows"])
    .catch((err) => console.log(err));
  }

  const deleteUser =async (user) => {
    console.log("deleted : "+user.username);
    
    return pool
    .query('DELETE FROM korisnik where korisnicko_ime = $1', [user.username])
    .then((results) => results["rows"])
    .catch((err) => console.log(err));
  }

  const createUser = async (user) => {

    const client = await pool.connect()
    const data=await client.query('SELECT idkorisnika FROM korisnik order by idkorisnika  desc limit 1')
    client.release() 
    
    let id = data["rows"][0]["idkorisnika"];
    id++;
    console.log(user);
    
    
    return pool.query(`INSERT INTO Korisnik (IdKorisnika, ime, prezime, korisnicko_ime, datum_rodenja, email, lozinka) VALUES
    ($1, $2, $3,$4, $5, $6,$7);`, [id, user.firstName,user.lastName,user.username,user.birthDate,user.email,user.password], (error, results) => {
      if (error) {
        console.log(error)
      }
     
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }