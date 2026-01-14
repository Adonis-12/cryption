const pool = require('../db')

async function guestUsersOnly(req,res,next){
    if(!req.cookies || !req.cookies.session_id){
        console.log(1)
        return next()
    }
    console.log(1)
    const sessionId = req.cookies.session_id
    const result = await pool.query(
        `SELECT 1 FROM sessions WHERE session_id = $1 AND expires_at > NOW()`,
        [sessionId]
    )
    if(!result.rowCount){
        next()
    }
    return res.redirect('/profile')
}

async function authenticatedUsersOnly(req,res,next){
    if(!req.cookies || !req.cookies.session_id){
            return res.redirect('/login')
    }
        const sessionCookie = req.cookies.session_id
        const result = await pool.query(
            `SELECT u.name FROM 
             users u 
             JOIN sessions s
             ON u.id = s.user_id
             WHERE session_id = $1
             AND expires_at > NOW()`,
            [sessionCookie]
        )
        if(!result.rowCount){
                return res.redirect('/login')
        }
        const name = result.rows[0].name
        req.user = name
        next()
}   

module.exports = {
    guestUsersOnly,
    authenticatedUsersOnly
}