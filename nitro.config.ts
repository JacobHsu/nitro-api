//https://nitro.unjs.io/config
import errorHandler from "./error";
export default defineNitroConfig({
  compatibilityDate: "2025-01-02",
  errorHandler: "~/error",
  devErrorHandler: errorHandler,
  routeRules: {
    "/server/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Expose-Headers": "*",
      },
    },
  },
});
