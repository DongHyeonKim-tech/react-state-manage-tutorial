import axios from "axios";
// import jwt_decode from "jwt-decode";

export const iisClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IIS_HOST,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

export const djangoClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DJANGO_HOST,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});
