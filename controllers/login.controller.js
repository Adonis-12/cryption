const bcrypt = require('bcrypt')
const pool = require('../db')
async function login(req,res){
    const {email,password} = req.body
    
    const exists = await pool.query(
        'SELECT email FROM users WHERE email = $1',
        [email]
    )
    if(!exists.rowCount){
        return res.status(400).json({
            message : "User does not exist"
        })
    }
    const result = await pool.query(
        'SELECT password_hash FROM users WHERE email = $1',
        [email]
    )
    const hash = result.rows[0].password_hash
    const matched = await bcrypt.compare(
        password,
        hash
    )
    if(matched === true){
        return res.status(200).json({
            message : "login successful"
        })
    }else{
        return res.status(400).json({
            message : "Wrong Credentials"
        })
    }

}
module.exports = login