import jwt from 'jsonwebtoken';

const secret = 'app';

const auth = async (req, res,next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        
        let decodedData;
        
        if(token && isCustomAuth) {
        decodedData = jwt.verify(token, secret );
        req.userId = decodedData?.id;//ارجع له لو فيه ايرور
        } else {
        decodedData = jwt.decode(token);
        req.userId = decodedData?.sub;//ارجع له لو فيه ايرور
        }
       next();

    } catch (error) {
       console.log(error);
   } 
} 
export default auth;








