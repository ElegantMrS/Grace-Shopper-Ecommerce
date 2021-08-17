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

/********************************************************** user methods **********************************************************/

export async function registerUser(username, password, email) {
  try {
    const payload = { username: username, password: password, email: email };
    const { data } = await axios.post(`/api/register`, payload);

    console.log(data, 'from registerUser api')
    
    return data;
  } catch (error) {
    throw error;
  }
}
export async function login(username, password) {
  try {
    const payload = { username: username, password: password };
    const { data } = await axios.post(`/api/login`, payload);

    // console.log(data, 'from login api')

    return data;

  } catch (error) {
    throw error;
  }
}