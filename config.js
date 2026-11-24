// Clave de la API de Gemini (CrediMedallo Hogar)
const _k = "QVEuQWI4Uk42THNtZjlHcVg1NmtIeU9KYk9uaEZ1dkJWNnNCQV9lcXFMZkk1ZkI1c0tBZVE=";
const _decode = (s) => (typeof atob === "function" ? atob(s) : Buffer.from(s, "base64").toString("utf-8"));

let storedKey = null;
try {
  storedKey = localStorage.getItem("GEMINI_API_KEY");
  if (storedKey && storedKey.startsWith("PEGA")) storedKey = null;
} catch (e) {}

let API_KEY = (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("key"))
  || storedKey
  || _decode(_k);

// Modelo activo de Gemini
const MODEL = "gemini-3.5-flash-lite";
