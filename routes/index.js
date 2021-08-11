const { 
  getAllMerchandise,
  getMerchandiseByCategory
} = require('../db');

const apiRouter = require('express').Router();

// apiRouter.get("/", (req, res, next) => {
//   res.send({
//     message: "API is under construction!"
//   });
// });

/******************************************** Product Routes ********************************************/

apiRouter.get("/", async (req, res, next) => {
  try {
    const merch = await getAllMerchandise();

    console.log(merch)

    res.send(merch);
                                                         
  } catch (error) {

    throw error;
  }
})

apiRouter.get("/products", async (req, res, next) => {
  try {
    const merchandise = await getAllMerchandise();

    console.log(merchandise)

    res.send(merchandise);

  } catch (error) {

    throw error;
  }
})

apiRouter.get('/products/contemporary', async (req, res, next) => {

  try {
      const category = 'Contemporary'
      const merchandise = await getMerchandiseByCategory(category)

      res.send(merchandise)

  } catch (error) {
    throw error;
  }
})

apiRouter.get('/products/cubism', async (req, res, next) => {

  try {
    const category = 'Cubism'
    const merchandise = await getMerchandiseByCategory(category)

    res.send(merchandise)

  } catch (error) {
    throw error;
  }
})

apiRouter.get('/products/impressionism', async (req, res, next) => {
  try {
    const category = 'Impressionism'
    const merchandise = await getMerchandiseByCategory(category)

    res.send(merchandise)

  } catch (error) {
    throw error;
  }
})

apiRouter.get('/products/popart', async (req, res, next) => {

  try {
    const category = 'Popart'
    const merchandise = await getMerchandiseByCategory(category)

    res.send(merchandise)

  } catch (error) {
    throw error;
  }
})

apiRouter.get('/products/PostImpressionism', async (req, res, next) => {
  
  try {
    const category = 'PostImpressionism'
    const merchandise = await getMerchandiseByCategory(category)

    res.send(merchandise)

  } catch (error) {
    throw error;
  }
})

module.exports = apiRouter;


