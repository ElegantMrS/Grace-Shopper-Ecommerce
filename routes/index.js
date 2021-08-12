const { 
  getAllMerchandise,
  getMerchandiseByCategory,
  createUser,
  getUserByUsername,
  getUser
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

/********************************************************** user methods **********************************************************/

apiRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const userExists = await getUserByUsername(username);

    if (userExists) {
      // 
      return next({
        name: "UserExistsError",
        message: "A user by that username already exists",
      });
    } else if (password.length < 8) {
      res.status(401);
      return next({
        name: "InvalidPassword",
        message: "All passwords to be atleast 8 characters long",
      });
    }
    const postUser = await createUser({ username, password, email });
    res.send(postUser);
  } catch (error) {
    next(error);
  }
});

apiRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  // 
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUser({ username, password });

    if (user) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET
      );

      res.send({ message: "Login Successful!", token });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = apiRouter;


