require('dotenv').config();
const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (typeof token !== "undefined") {
      const bearer = token.split(" ");
      const bearerToken = bearer[1];

    //   jwt.verify(bearerToken, "secret");
    //   next();

    if(bearerToken === process.env.SECRETKEY){
      let token2 = jwt.sign({
        data : bearerToken,
    }, 
    'secret', 
    {expiresIn: '1h'}
    );

      jwt.verify(token2, 'secret', function(err, decoded) {
        if (err) {
            res.sendStatus(403);
        }else{
            next();
        }
      });

    }else{
      res.sendStatus(403);
    }

    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    // console.log(error);
  }
};

module.exports = { checkAuth };
