import { initializeCli } from "@useoptic/optic-ci/build/initialize";
import { publicApiStandards } from "./public-api-standards";
import { internalApiStandards } from "./internal-api-standards";

(async () => {
  const cli = await initializeCli({
    rules: (() => {
      // make public rules the default
      if (!Boolean(process.env.STANDARD) || process.env.STANDARD === "public")
        return publicApiStandards;
      if (process.env.STANDARD === "internal") return internalApiStandards;
      return [];
    })(),

    // these will be properly set in CI
    token: process.env.OPTIC_TOKEN || "",
    gitProvider: {
      token: process.env.GITHUB_TOKEN || "",
    },
  });

  cli.parse(process.argv);
})();
