var express = require("express");
const router = express.Router();
const sql = require("../SqlConnection/SqlConnection");
var _ = require("lodash");

router.get("", (req, res) => {
  console.log("test login");
  var s = "name" in req.session;
  if (!s) {
    console.log("session");
    res.json({ session: "false" });
  } else {
    console.log("session");
    res.json(req.session);
  }
});

router.post("", (req, res) => {
  // console.log(req.session);
  var s = "name" in req.session;
  console.log("main");
  if (!s) {
    console.log("if");
    sql.sqlconnection(
      // `SELECT * FROM test WHERE name = "sunny" and password ="123"`
      `select * from test where name="${req.body.name}" and password="${
        req.body.password
      }"`,
      (errors, rows) => {
        if (_.isEmpty(rows)) {
          res.json({ sucess: false });
        } else {
          req.session.name = rows[0].name;
          req.session.password = rows[0].password;
          console.log(req.session.name);

          rows[0].sucess = true;
          res.json(rows[0]);
        }
      }
    );
  } else {
    console.log("else");
    // console.log(req.session.name);
    res.json(req.session);
  }
  //   console.log(req.body);
});

module.exports = router;
