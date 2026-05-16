import { getRequestConfig } from "next-intl/server";

// TODO: Implement getRequestConfig
// - Accept a `locale` parameter
// - Load the correct message file from `../messages/${locale}.json`
// - Return { messages }

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || "en";
  return {
    locale,
    messages: {},
  };
});
