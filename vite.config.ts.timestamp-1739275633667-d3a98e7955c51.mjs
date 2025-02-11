// vite.config.ts
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///C:/Users/iselivanov.REALX.000/projects/viteKit/node_modules/glob/dist/esm/index.js";
import { defineConfig } from "file:///C:/Users/iselivanov.REALX.000/projects/viteKit/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/iselivanov.REALX.000/projects/viteKit/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/iselivanov.REALX.000/projects/viteKit/node_modules/vite-plugin-svgr/dist/index.js";
import dts from "file:///C:/Users/iselivanov.REALX.000/projects/viteKit/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\iselivanov.REALX.000\\projects\\viteKit";
var __vite_injected_original_import_meta_url = "file:///C:/Users/iselivanov.REALX.000/projects/viteKit/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg"
    }),
    dts({ include: ["lib"] })
  ],
  ssr: {
    noExternal: true
  },
  server: {
    host: "0.0.0.0"
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    minify: true,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob.sync("lib/**/*.{ts,tsx}", {
          ignore: ["lib/**/*.d.ts"]
        }).map((file) => [
          relative("lib", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpc2VsaXZhbm92LlJFQUxYLjAwMFxcXFxwcm9qZWN0c1xcXFx2aXRlS2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpc2VsaXZhbm92LlJFQUxYLjAwMFxcXFxwcm9qZWN0c1xcXFx2aXRlS2l0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9pc2VsaXZhbm92LlJFQUxYLjAwMC9wcm9qZWN0cy92aXRlS2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRwbHVnaW5zOiBbXHJcblx0XHRyZWFjdCgpLFxyXG5cdFx0c3Zncih7XHJcblx0XHRcdHN2Z3JPcHRpb25zOiB7IGV4cG9ydFR5cGU6ICdkZWZhdWx0JywgcmVmOiB0cnVlLCBzdmdvOiBmYWxzZSwgdGl0bGVQcm9wOiB0cnVlIH0sXHJcblx0XHRcdGluY2x1ZGU6ICcqKi8qLnN2ZycsXHJcblx0XHR9KSxcclxuXHRcdGR0cyh7IGluY2x1ZGU6IFsnbGliJ10gfSksXHJcblx0XSxcclxuXHRzc3I6IHtcclxuXHRcdG5vRXh0ZXJuYWw6IHRydWUsXHJcblx0fSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdGhvc3Q6ICcwLjAuMC4wJyxcclxuXHR9LFxyXG5cdGJ1aWxkOiB7XHJcblx0XHRjb3B5UHVibGljRGlyOiBmYWxzZSxcclxuXHRcdGxpYjoge1xyXG5cdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvbWFpbi50cycpLFxyXG5cdFx0XHRmb3JtYXRzOiBbJ2VzJ10sXHJcblx0XHR9LFxyXG5cdFx0bWluaWZ5OiB0cnVlLFxyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC9qc3gtcnVudGltZSddLFxyXG5cdFx0XHRpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG5cdFx0XHRcdGdsb2JcclxuXHRcdFx0XHRcdC5zeW5jKCdsaWIvKiovKi57dHMsdHN4fScsIHtcclxuXHRcdFx0XHRcdFx0aWdub3JlOiBbJ2xpYi8qKi8qLmQudHMnXSxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQubWFwKChmaWxlKSA9PiBbXHJcblx0XHRcdFx0XHRcdHJlbGF0aXZlKCdsaWInLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcclxuXHRcdFx0XHRcdFx0ZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxyXG5cdFx0XHRcdFx0XSlcclxuXHRcdFx0KSxcclxuXHRcdFx0b3V0cHV0OiB7XHJcblx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNVLFNBQVMsU0FBUyxVQUFVLGVBQWU7QUFDalgsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBTmhCLElBQU0sbUNBQW1DO0FBQW9LLElBQU0sMkNBQTJDO0FBUTlQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNKLGFBQWEsRUFBRSxZQUFZLFdBQVcsS0FBSyxNQUFNLE1BQU0sT0FBTyxXQUFXLEtBQUs7QUFBQSxNQUM5RSxTQUFTO0FBQUEsSUFDVixDQUFDO0FBQUEsSUFDRCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDekI7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLFlBQVk7QUFBQSxFQUNiO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sZUFBZTtBQUFBLElBQ2YsS0FBSztBQUFBLE1BQ0osT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQjtBQUFBLE1BQ3ZDLE9BQU8sT0FBTztBQUFBLFFBQ2IsS0FDRSxLQUFLLHFCQUFxQjtBQUFBLFVBQzFCLFFBQVEsQ0FBQyxlQUFlO0FBQUEsUUFDekIsQ0FBQyxFQUNBLElBQUksQ0FBQyxTQUFTO0FBQUEsVUFDZCxTQUFTLE9BQU8sS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQ2pFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzdDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
