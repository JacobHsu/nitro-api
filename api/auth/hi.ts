import { unAuthorizedResponse, useResponseSuccess } from "~/utils/response";
export default defineEventHandler((event) => {
  return unAuthorizedResponse(event);
  const codes = 1;
  return useResponseSuccess(codes);
});
