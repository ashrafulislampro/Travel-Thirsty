const jwt = require("jsonwebtoken");

exports.getToken = (req, res) => {
  const email = req.query.email;

  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
  res.send({ accessToken: token });
};

exports.verifyJwt = (req, res, next) => {
  const clientToken = req.headers.authorization;
  const userEmail = req.query.email;
  if (!clientToken) {
    return res
      .status(401)
      .send({ success: false, message: "Unauthorized Access" });
  }
  const token = clientToken.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ success: false, message: "forbidden access" });
    }
    if (userEmail !== decoded.email) {
      return res
        .status(401)
        .send({ success: false, message: "Unauthorized Access" });
    }
    req.decoded = decoded;
    next();
  });
};
