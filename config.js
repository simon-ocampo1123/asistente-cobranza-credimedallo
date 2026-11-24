// Clave de la API de Gemini
const _k = "QVEuQWI4Uk42THNtZjlHcVg1NmtIeU9KYk9uaEZ1dkJWNnNCQV9lcXFMZkk1ZkI1c0tBZVE=";
const _decode = (s) => (typeof atob === "function" ? atob(s) : Buffer.from(s, "base64").toString("utf-8"));

let API_KEY = (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("key"))
  || (typeof localStorage !== "undefined" && localStorage.getItem("GEMINI_API_KEY"))
  || _decode(_k);

const MODEL = "gemini-3.5-flash-lite";
