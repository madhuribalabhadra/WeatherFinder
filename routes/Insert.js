var express = require("express");
const router = express.Router();
const sql = require("../SqlConnection/SqlConnection");
var app = express();

router.get("", (req, res) => {
  console.log(req.session);
  var s = "name" in req.session;
  if (!s) {
    console.log("session");
    res.json({ session: "false" });
  } else {
    console.log("session");
    res.json(req.session);
  }
  // res.render("form.html");
});

router.post("", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const phone = req.body.phone;
  //   res.send("hello");
  sql.sqlconnection(
    `insert into test (name,password,phone) values('${name}','${password}','${phone}')`,
    (errors, rows) => {
      console.log("errors", errors);
      console.log(rows);
      res.send(rows);
    }
  );
});
module.exports = router;
