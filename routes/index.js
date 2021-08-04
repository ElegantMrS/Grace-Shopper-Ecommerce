const { getAllMerchandise } = require('../db');

const apiRouter = require('express').Router();

// apiRouter.get("/", (req, res, next) => {
//   res.send({
//     message: "API is under construction!"
//   });
// });

/******************************************** Product Routes ********************************************/

apiRouter.get("/products", async (req, res, next) => {
  try {
    const merch = await getAllMerchandise();

    console.log(merch)

    res.send(merch);

  } catch (error) {

    throw error;
  }
})

module.exports = apiRouter;
