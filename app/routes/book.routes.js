const controller = require("../controllers/book.controller");
const { authJwt } = require("../middleware");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/books", controller.createBook);
  app.get("/api/books", controller.readBook);
  app.get("/api/books/:uuid", controller.findBook);
  app.delete("/api/books/:uuid", controller.deleteBook);
  app.put("/api/books/:uuid", controller.updateBook);
};
