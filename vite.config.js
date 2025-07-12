import dotenvExpand from "dotenv-expand";
import { loadEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  if (mode === "development") {
    const env = loadEnv(mode, process.cwd(), "");
    dotenvExpand.expand({ parsed: env });
  }

  return {
    plugins: [vue()],
    assetsInclude: ["**/*.JPG"],
  };
});
