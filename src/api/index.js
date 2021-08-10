import axios from 'axios';

export async function getSomething() {
  try {
    const { data } = await axios.get('/api');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllMerchandise() {

  try {

      const {data} = await axios.get(`/api/products`)
      console.log(data, 'from getAllMerchandise')
      return data;

  } catch (error) {
      throw error;
  }
}

export async function getMerchandiseByCat(category) {
  try {

    const {data} = await axios.get(`/api/products/${category}`)
    console.log(data, 'from getMerchandiseByCat')
    return data;

  } catch (error) {
    throw error;
  }
}