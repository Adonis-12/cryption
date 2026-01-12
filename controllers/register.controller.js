const pool = require('../db')
const bcrypt = require('bcrypt')
async function registerUser(req,res){
    const {email,password} = req.body
    const exists = await pool.query(
        'SELECT email FROM users WHERE email = $1',
        [email]
    )
    if(exists.rowCount > 0){
        return res.status(409).json({
            messsage : "User already exists"
        })
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)// hashing password
    await pool.query(
        'INSERT INTO users(email,password_hash) VALUES ($1,$2)',
        [email,hash]
    )
    return res.status(201).json({
        message : "user registered successfully"
    })
}

module.exports = registerUser