import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default [
  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "tests/**",
      "e2e/**",
      "unitTests/**"
    ]
  }
];