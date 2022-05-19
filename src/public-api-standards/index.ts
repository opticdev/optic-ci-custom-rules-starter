import { Rule, Ruleset } from "@useoptic/rulesets-base";
import allOperations from "./all-operations";
import getOperations from "./get-operations";
import postOperations from "./post-operations";

export const publicApiStandards: (Ruleset | Rule)[] = [
  allOperations,
  getOperations,
  postOperations,
];
