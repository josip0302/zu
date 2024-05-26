const pool = require("../config/db");

const getUsers = () => {
    pool.query('SELECT * FROM korisnik order by idkorisnika asc', (error, results) => {
      if (error) {
        throw error
      }
      return results.rows;
    })
  }


  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM korisnik WHERE idkorisnika = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE korisnik SET korisnicko_ime = $1, email = $2 WHERE idkorisnika = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM korisnik WHERE idkorisnika = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Korisnik deleted with ID: ${id}`)
    })
  }

  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO korisnik (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }