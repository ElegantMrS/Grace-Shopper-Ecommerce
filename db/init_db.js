// code to build and initialize DB goes here
const {
  client,
  getAllMerchandise,
  getMerchandiseByCategory,
  getMerchandiseById,
  getMerchandiseByName,
  createMerchandise,
  deleteMerchandise,
  addCategory,
  updateMerchandise,
  searchMerchandise
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
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
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
            author INTEGER REFERENCES users(id) NOT NULL,
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
            "authorId" INTEGER REFERENCES users(id)
        );
    `);

    console.log('Creating wishlist...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS wishlist(
            wish_id SERIAL PRIMARY KEY,
            "merchId" INTEGER REFERENCES merchandise(merch_id),
            title VARCHAR(255),
            "userId" INTEGER REFERENCES users(id),
            CONSTRAINT UC_wishlist UNIQUE ("userId", "merchId")
        );
    `);

    console.log('Creating orders...')
    await client.query(`
        CREATE TABLE IF NOT EXISTS orders(
            "orderId" SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
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
            "userId" INTEGER REFERENCES users(id),
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
            "userId" INTEGER REFERENCES users(id),
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

async function createInitialMerchandise() {
  try {
    console.log('Starting to create merchandise...');

    const merchandiseToCreate = [
      { img: `https://chairish-prod.freetls.fastly.net/image/product/sized/5d247484-3849-470a-98f2-ecb1e72bdc56/1943-original-picasso-femme-dans-un-fauteuil-lithograph-7268?aspect=fit&width=1600&height=1600`, name: 'Femme Dans Un Fauteuil', artist: '1943 Original Picasso Lithograph.', price: '1025', rating: '10', cat: 'Cubism' },
      { img: `https://www.tate.org.uk/art/images/work/T/T05/T05010_10.jpg`, name: 'Weeping Woman', artist: 'Old Master Signed Picasso 1962', price: '2542', rating: '10', cat: 'Cubism' },
      { img: `http://paintingandframe.com/art-imgs/juan_gris/figure_of_a_woman-6178.jpg`, name: 'Figure of a Woman', artist: 'Juan Gris.', price: '132', rating: '8', cat: 'Cubism' },
      { img: `https://i.imgur.com/55cRyMW.jpg`, name: 'Three Women', artist: 'Fernand Leger', price: '108', rating: '6', cat: 'Cubism' },
      { img: `https://i.imgur.com/vZnJhWj.jpg`, name: 'The Knife Grinder', artist: 'Kazimir Severinovich Malevich', price: '101', rating: '10', cat: 'Cubism' },
      { img: `https://i.imgur.com/fVJMWeU.jpg`, name: 'Symphony', artist: 'Michail Menkov', price: '101', rating: '9', cat: 'Cubism' },
      { img: `https://i.imgur.com/ANt7SdY.jpg`, name: 'The Confetti Garden', artist: 'Jinlu', price: '1976', rating: '8', cat: 'Impressionism' },
      { img: `https://i.imgur.com/3dzVMcH.jpg`, name: 'Impressionist Lake Scene', artist: 'John Clymer', price: '975', rating: '10', cat: 'Impressionism' },
      { img: `https://i.imgur.com/XMLtXHc.jpg`, name: 'Impressionist French Landscape', artist: 'Unknown', price: '750', rating: '7', cat: 'Impressionism' },
      { img: `https://i.imgur.com/e6VBJ35.jpg`, name: 'Spring in Central Park', artist: 'Natasha Kramskaya', price: '725', rating: '10', cat: 'Impressionism' },
      { img: `https://i.imgur.com/XTUfn8P.jpg`, name: 'Signed Original Street Scene Paris', artist: 'Unknown', price: '695', rating: '9', cat: 'Impressionism' },
      { img: `https://i.imgur.com/QrkyVTP.jpg`, name: 'Floral Landscape Flower Fields IV', artist: 'Michael Budden', price: '600', rating: '10', cat: 'Impressionism' },
      { img: `https://a.1stdibscdn.com/a_2612/a_74472821611844664915/HIRST_Damien_Spin_N330_FRAMED_HR_Large__master.jpg?disable=upscale&auto=webp&quality=60&width=1318`, name: 'Spin (2001)', artist: 'Damien Hirst', price: '32,000', rating: '10', cat: 'Popart' },
      { img: `https://ik.imagekit.io/theartling/p/products/Product/9101370e619244749ddeb8fe237247ce.jpg?tr=cm-pad_resize,w-1072,h-1072,bg-FFFFFF`, name: 'Massive Stars Collapse III', artist: 'Resatio Adi Putra', price: '258', rating: '8', cat: 'Popart' },
      { img: `https://ik.imagekit.io/theartling/p/products/Product/1cab7371a0da4759b29a83645d899690.jpg?tr=cm-pad_resize,w-1072,h-1072,bg-FFFFFF`, name: 'Piss Off', artist: 'Jirapat Tatsanasomboon', price: '13000', rating: '10', cat: 'Popart' },
      { img: `https://ik.imagekit.io/theartling/p/products/Product/bd346e519f8841d29e844463e272ca58.jpeg?tr=cm-pad_resize,w-1072,h-1072,bg-FFFFFF`, name: 'Desire Ingrained', artist: 'Jirapat Tatsanasomboon', price: '13000', rating: '9', cat: 'Popart' },
      { img: `https://i.pinimg.com/originals/a8/a3/04/a8a3047e0985825ff3c30efd1acfeda1.png`, name: 'Silaturahmi Gorilla Glass', artist: 'Hendra Hehe Harsono', price: '3000', rating: '7', cat: 'Popart' },
      { img: `https://ik.imagekit.io/theartling/p/artworks/Hendra_Hehe_Harsono_CapitalNoise.jpg?tr=cm-pad_resize,w-1072,h-1072,bg-FFFFFF`, name: 'Capital Noise', artist: 'Hendra Hehe Harsono', price: '5000', rating: '10', cat: 'Popart' },
      { img: `https://i.imgur.com/qRwj1Sq.jpg`, name: 'The River Seine', artist: 'Adolph Clary Baroux', price: '28500', rating: '9', cat: 'PostImpressionism' },
      { img: `https://i.imgur.com/cfLkUpf.jpg`, name: 'Ballerinas Paris Opera', artist: 'Jean Louis Marcel Cosson', price: '13605', rating: '10', cat: 'PostImpressionism' },
      { img: `https://i.imgur.com/wZ0kJ65.jpg`, name: 'Early Morning Hyde Park London', artist: 'Elliott Seabrooke', price: '7396', rating: '7', cat: 'PostImpressionism' },
      { img: `https://i.imgur.com/3nB1NrO.jpg`, name: 'Cafe Porto Fino Italy', artist: 'Forrest Hewit', price: '5973', rating: '10', cat: 'PostImpressionism' },
      { img: `https://i.imgur.com/cEwoIwJ.jpg`, name: 'Village in Mexico', artist: 'Jacques Zucker', price: '5250', rating: '9', cat: 'PostImpressionism' },
      { img: `https://i.imgur.com/rgROuVZ.jpg`, name: 'Rural Farm Scene', artist: 'Ludvig Jaconbsen', price: '4800', rating: '10', cat: 'PostImpressionism' },
      { img: `https://i.imgur.com/NTgAzLHh.jpg`, name: 'True Story', artist: 'A Contemporary Artpiece.', price: '675', rating: '10', cat: 'Contemporary' },
      { img: `https://i.imgur.com/8WWncJM.jpg`, name: 'Celebration', artist: 'A Contemporary Artpiece.', price: '649', rating: '6', cat: 'Contemporary' },
      { img: `https://i.imgur.com/hAYx7R8.jpg`, name: 'Envisioning', artist: 'A Contemporary Artpiece.', price: '659', rating: '8', cat: 'Contemporary' },
      { img: `https://i.imgur.com/cZOxU1b.jpg`, name: 'Safe and Sound', artist: 'A Contemporary Artpiece.', price: '685', rating: '5', cat: 'Contemporary' },
      { img: `https://i.imgur.com/WZNpYSy.jpg`, name: 'Zone 1', artist: 'A Contemporary Artpiece.', price: '166', rating: '9', cat: 'Contemporary' },
      { img: `https://i.imgur.com/JC3k8yp.jpg`, name: `You Can't Keep Spring From Coming`, artist: 'A Contemporary Artpiece.', price: '399', rating: '7', cat: 'Contemporary' }
    ]
    const merchandise = await Promise.all(merchandiseToCreate.map(createMerchandise));

    console.log('merchandise created:');
    console.log(merchandise);

    console.log('Finished creating merchandise!');
  } catch (error) {
    console.error('Error creating merchandise!');
    throw error;
  }
}

buildTables()
  .then(createInitialMerchandise)
  .catch(console.error)
  .finally(() => client.end());