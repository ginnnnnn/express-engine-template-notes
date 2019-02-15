const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars"); //express-handlebars needs to import unlike pug

const app = express();

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts", //set layout path here
//     defaultLayout: "main-layout", // set default layout here
//     extname: "hbs" // set layout subfilename here. default is XXX.handlebars
//   })
// ); //set expressHbs as subfile name hbs
app.set("view engine", "ejs");
// app.set("view engine", "hbs"); //same to pug here

// app.set("view engine", "pug"); //pug is set globely
app.set("views", "views"); // not nessersary it's default

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.route);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
