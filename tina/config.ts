import { defineConfig } from "tinacms";
import Post from "./collections/post";
import CompanyService from "./collections/company-service";
import HomepageSection from "./collections/homepage-section";
import IndexConfig from "./collections/index-config";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      Post,
      CompanyService,
      HomepageSection,
      IndexConfig,
    ],
  },
  client: {
    skip: true
  }
});
