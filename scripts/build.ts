import { build, BuildOptions } from "esbuild";

const config = {
  entryPoints: ["src/index.ts"],
  outdir: "./dist",
  format: "esm",
  outExtension: {
    ".js": ".mjs",
  },
  platform: "node",
  bundle: true,
  minify: true,
  sourcemap: false,
  banner: {
    js: `
    const require = (await import("node:module")).createRequire(import.meta.url);
    const __filename = (await import("node:url")).fileURLToPath(import.meta.url);
    const __dirname = (await import("node:path")).dirname(__filename);
    `,
  },
} satisfies BuildOptions;

try {
  await build(config);
  console.log("⚡️ Build success");
  process.exit(0);
} catch (e) {
  console.log("☠️ Build failed");
  process.exit(1);
}
