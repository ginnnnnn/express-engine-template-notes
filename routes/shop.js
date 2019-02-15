const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prds: products,
    pageTitle: "Shop",
    path: "/",
    hasproduct: products.length > 0,
    productCSS: true,
    shopActive: true
  }); //alreday set path in views so just shop it will go pug
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
