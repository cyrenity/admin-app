import axios from 'axios';

const SERVER_URL = "http://127.0.0.1:8000";

const login = async (data) => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/api/token/`;
  try {
      let response = await axios.post(LOGIN_ENDPOINT, data);
      console.log(response);

      if(response.status === 200 && response.data.access && response.data.refresh){
          let access_token = response.data.access;
          let refresh_token = response.data.refresh;

          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
      }
  } catch(e){
      console.log(e);
  }
}

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expire_at");
}


export default { login, logout }