import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://vercel.com/docs/integrations/ai",
  match: "https://vercel.com/docs/integrations/ai",
  maxPagesToCrawl: 109,
  outputFileName: "output.json",
  maxTokens: 500000,
};
