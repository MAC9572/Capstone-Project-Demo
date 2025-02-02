
const jwt = require('jsonwebtoken');



function checkAuthToken(req, res, next) {
   
    const authToken = req.cookies.authToken;
    const refreshToken = req.cookies.refreshToken;



    // console.log(authToken, refreshToken);
    // check authtoken
    // check refresh
    // authtoken is not exp -> user logged in

    // authtoken is exp but refresh token is not -> regenerate authtoken and refresh token
    // authtoken is exp and refresh token is exp ->user not logged in



    if (!authToken || !refreshToken) {
        return res.status(401).json({ message: 'Authentication failed: No authToken or refreshToken provided', ok: false });
    }


    jwt.verify(authToken, process.env.JWT_SECRET_KEY , (err, decoded) => {
        if (err) {
            // authtoken expired

            // check refresh token 
            jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (refreshErr, refreshDecoded) => {
                if (refreshErr) {
                    // Both tokens are invalid, send an error message and prompt for login
                    return res.status(401).json({ message: 'Authentication failed: Both tokens are invalid', ok: false });
                }

                else {
                    const newAuthToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_SECRET_KEY, { expiresIn: '50m' });
                    const newRefreshToken = jwt.sign({ userId: refreshDecoded.userId }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '1d' });

                    res.cookie('authToken', authToken,  { httpOnly: true, secure: true, sameSite: 'None' });
                    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None' });

                    req.userId = refreshDecoded.userId;
                    req.ok = true;
                    next();
                }
            })
            // 1. expired

            // 2. not expired
        }

        else {
            req.userId = decoded.userId;
            req.ok = true;
            next();
        }
    })
}

module.exports = checkAuthToken;