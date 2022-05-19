import { Rule, Ruleset } from "@useoptic/rulesets-base";

export const publicApiStandards: (Ruleset | Rule)[] = [
  require("./all-operations"),
  require("./get-operations"),
  require("./post-operations"),
];
