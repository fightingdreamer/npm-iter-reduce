import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/iter/reduce.ts"),
      name: "@fightingdreamer/iter-reduce",
      formats: ["es", "cjs"],
      fileName: "iter-reduce",
    },
  },
});
