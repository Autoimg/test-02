import axios from "axios";
const ajax =axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/300433",
});
export const getCartList = () => {
  return ajax.get("/shopCart");
};
// 请求拦截器
axios.interceptors.request.use((req) => {
  console.log(req);
});
// 响应拦截器
axios.interceptors.response.use((res) => {
  console.log(res);
});
export const loginIn = () => {
    return ajax.get("/example/11");
  };