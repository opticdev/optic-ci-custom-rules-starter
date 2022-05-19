#!/usr/bin/env node

import { initializeCli } from "@useoptic/optic-ci/build/initialize";
import { publicApiStandards } from "./public-api-standards";
import {
  NamingChangesRuleset,
  BreakingChangesRuleset,
} from "@useoptic/standard-rulesets";
import { internalApiStandards } from "./internal-api-standards";

(async () => {
  const cli = await initializeCli({
    rules: [
      // Configure naming rules for your API
      new NamingChangesRuleset({
        applies: "always", // also available: 'added' | 'addedOrChanged'
        options: {
          // valid formats are: 'camelCase' | 'Capital-Param-Case' | 'param-case' | 'PascalCase' | 'snake_case'
          properties: "camelCase",
          queryParameters: "camelCase",
          requestHeaders: "camelCase",
          responseHeaders: "camelCase",
        },
      }),
      // Catch breaking changes
      new BreakingChangesRuleset(),
      // Register your custom Optic Rulesets
      ...(() => {
        // make public rules the default
        if (!Boolean(process.env.STANDARD) || process.env.STANDARD === "public")
          return publicApiStandards;
        if (process.env.STANDARD === "internal") return internalApiStandards;
        return [];
      })(),
    ],
    token: process.env.OPTIC_TOKEN || "",
    gitProvider: {
      token: process.env.GITHUB_TOKEN || "",
    },
  });

  cli.parse(process.argv);
})();
