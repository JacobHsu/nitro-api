//https://nitro.unjs.io/config
import errorHandler from "./error";
export default defineNitroConfig({
  compatibilityDate: "2025-01-02",
  errorHandler: "~/error",
  devErrorHandler: errorHandler,
});