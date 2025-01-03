import { useResponseSuccess } from "~/utils/response";
export default defineEventHandler(() =>  {
  const codes = 1;
  return useResponseSuccess(codes);
});
