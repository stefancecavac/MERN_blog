import jwt from 'jsonwebtoken'

const authorize = async(req,res , next) => {
    const token = req.cookies.token
    try{
        if(!token){
            return res.status(400).json({error: 'no authorization token'})
        }

        const decodedToken = jwt.verify(token , process.env.SECRET)
        if (!decodedToken || !decodedToken.isAdmin) {
            console.log(decodedToken)
            return res.status(403).json({ error: 'Forbidden - Not an admin' });
        }
        req.user = decodedToken
        next()
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export default authorize