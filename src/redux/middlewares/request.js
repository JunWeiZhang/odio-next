import axios from "axios";
// import rax from "retry-axios";
// import Config from "../../../../config/config";

const apiMiddleware = () => next => action => {
  next(action);
  if (action.type !== "API") return;

  const { url, method, data, headers, baseURL } = action.payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  axios.defaults.baseURL = baseURL || "";

  if (!headers || !headers["Content-Type"]) {
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  return axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    })
    .catch(e => {
      return Promise.reject(e);
    });
  // .finally(() => {
  //   if (withLoader) dispatch(UIActions.setLoader(false));
  // });
};

export default apiMiddleware;
