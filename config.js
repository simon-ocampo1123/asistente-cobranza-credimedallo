// Configuración del Asistente de Cobranza CrediMedallo Hogar
// Obtiene la API Key desde parámetro URL (?key=...), localStorage o valor por defecto.
const URL_KEY = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("key") : null;
if (URL_KEY) {
  try { localStorage.setItem("GEMINI_API_KEY", URL_KEY); } catch (e) {}
}

let API_KEY = (typeof localStorage !== "undefined" && localStorage.getItem("GEMINI_API_KEY")) || "PEGA_AQUI_TU_API_KEY";
const MODEL = "gemini-flash-latest";
