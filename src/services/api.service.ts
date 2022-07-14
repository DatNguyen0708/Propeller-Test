import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

class ApiService {
  constructor() {
    axiosApiInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  get(endpoint: string, params?: any) {
    return new Promise(async (resolve, reject) => {
      axiosApiInstance
        .get(endpoint, { params })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(this.handleError(error));
        });
    });
  }

  handleError(error: any) {
    if (error) alert("Something went wrong. Please try again!");
  }
}

export default new ApiService();
