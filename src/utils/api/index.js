import axios from 'axios';

class Api {
  static postAxios(route, formData, config) {
    return this.axiosPost(route, formData, config);
  }

  static getAxios(route) {
    return this.axiosGet(route);
  }

  static putAxios(route, params, config) {
    return this.axiosPut(route, params, config);
  }

  static deleteAxios(route, params, config) {
    return this.axiosDelete(route, params, config);
  }

  static postRequest = async (endpoint, formData, config) => {
    console.log('[URL API]', endpoint, formData);
    return axios
      .post(endpoint, formData)
      .then(response => {
        console.log('SUCCESS!!', response);
        return response.data;
      })
      .catch(error => {
        console.log('FAILURE!!', error);
        return error;
      });
  };

  static axiosPost = async (endpoint, formData, config) => {
    console.log('[URL API]', endpoint, formData, config);
    return axios
      .post(endpoint, formData, config)
      .then(response => {
        console.log('SUCCESS!!', response);
        return response.data;
      })
      .catch(error => {
        console.log('FAILURE!!', error);
        return error;
      });
  };

  static axiosGet = async endpoint => {
    return axios
      .get(endpoint)
      .then(response => {
        console.log('SUCCESS!!', response);
        return response;
      })
      .catch(error => {
        console.log('FAILURE!!', error);
        return error;
      });
  };

  static axiosDelete = async (endpoint, formData, config) => {
    console.log('[URL API]', endpoint);
    if (config) {
      return axios
        .delete(endpoint, formData, config)
        .then(response => {
          console.log('SUCCESS!!', response);
          return response.data;
        })
        .catch(error => {
          console.log('FAILURE!!', error);
          return error;
        });
    } else {
      // without header request
      return axios
        .delete(endpoint, formData)
        .then(response => {
          console.log('SUCCESS!!', response);
          return response.data;
        })
        .catch(error => {
          console.log('FAILURE!!', error);
          return error;
        });
    }
  };

  static axiosPut = async (endpoint, formData) => {
    return fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJOSN => {
        console.log('SUCCESS!!', responseJOSN);
        return responseJOSN;
      })
      .catch(error => {
        console.log('FAILURE!!', error);
        return error;
      });
  };
}

export default Api;
