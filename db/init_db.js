// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    console.log("Dropping all tables...");

    await client.query(`
        DROP TABLE IF EXISTS payments;
        DROP TABLE IF EXISTS blogs;
        DROP TABLE IF EXISTS wishlist;
        DROP TABLE IF EXISTS userPreferences;
        DROP TABLE IF EXISTS orderItem;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS images;
        DROP TABLE IF EXISTS reviews;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS merchandise;
        DROP TABLE IF EXISTS categories;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS users;
    `);

    console.log("All tables dropped.");

    // build tables in correct order
    console.log("Building all tables")

    console.log('Creating users...')
    await client.query(`
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            firstname VARCHAR(255) NOT NULL,
            lastname VARCHAR(255) NOT NULL,
            save_pmt BOOLEAN DEFAULT false,
            active BOOLEAN DEFAULT true
        );
    `);

    console.log('Creating categories...');
    await client.query(`
        CREATE TABLE IF NOT EXISTS categories(
            cat_id SERIAL PRIMARY KEY,
            "Catname" VARCHAR(255) NOT NULL
        );
    `);

    console.log('Creating merchandise...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS merchandise(
            merch_id SERIAL PRIMARY KEY,
            img_url TEXT,
            name VARCHAR(255) NOT NULL,
            artist TEXT,
            price MONEY NOT NULL,
            rating INTEGER,
            cats TEXT
        );
    `);

    console.log('Creating reviews...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS reviews(
            review_id SERIAL PRIMARY KEY,
            author INTEGER REFERENCES users(user_id) NOT NULL,
            "merchId" INTEGER REFERENCES merchandise(merch_id)NOT NULL,
            rating INTEGER,
            description TEXT NOT NULL
        );
    `);

    console.log('Creating images...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS images(
            imageId SERIAL PRIMARY KEY,
            merch_id SERIAL REFERENCES merchandise(merch_id)
        );
    `);

    console.log('Creatings blogs...');
    await client.query(` 
        CREATE TABLE IF NOT EXISTS blogs(
            blog_id SERIAL PRIMARY KEY,
            "merchId" INTEGER REFERENCES merchandise(merch_id),
            title VARCHAR(255) NOT NULL,
            "blogText" TEXT NOT NULL,
            "authorId" INTEGER REFERENCES users(user_id)
        );
    `);

    console.log('Creating wishlist...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS wishlist(
            wish_id SERIAL PRIMARY KEY,
            "merchId" INTEGER REFERENCES merchandise(merch_id),
            title VARCHAR(255),
            "userId" INTEGER REFERENCES users(user_id),
            CONSTRAINT UC_wishlist UNIQUE ("userId", "merchId")
        );
    `);

    console.log('Creating orders...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS orders(
            "orderId" SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(user_id),
            status BOOLEAN DEFAULT true
        );
    `);

    console.log('Creating orderItem...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS orderitem(
            item_id SERIAL PRIMARY KEY,
            "orderId" INTEGER REFERENCES orders("orderId"),
            "merchId" INTEGER REFERENCES merchandise(merch_id),
            quantity INTEGER DEFAULT 1,
            price NUMERIC NOT NULL
        );
    `);

    console.log('Creating userPreferences...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS userPreferences(
            preference_id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(user_id),
            street VARCHAR(255) NOT NULL,
            city TEXT NOT NULL,
            state TEXT NOT NULL,
            zip VARCHAR(255) NOT NULL,
            save_pmt BOOLEAN DEFAULT FALSE,
            shipping VARCHAR(255)
        );
    `);

    console.log('Creating payments...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS payments(
            payment_id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(user_id),
            name VARCHAR(255) NOT NULL,
            number INTEGER UNIQUE NOT NULL,
            cardType VARCHAR(255),
            CID INTEGER NOT NULL,
            expiration DATE NOT NULL
        );
    `);

    console.log("All tables built.")

  } catch (error) {
    console.error("Error running buildTables.")
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());