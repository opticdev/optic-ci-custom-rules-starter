import { Rule, Ruleset, OperationRule } from "@useoptic/rulesets-base";

/*
  Rules included in this ruleset will run on every kind of API operation.
  This is where you should define standards that hold across your entire API
 */

export default new Ruleset({
  name: "All Public API Operations",
  /*
    Need these rules to apply to every API operation except 1 or 2 of them?
    You can use a matcher to exclude them.
   */
  // matches: context => {
  // not our health check....
  //   return !ourHealthCheckEndpoint
  // },
  rules: [
    new OperationRule({
      name: "includes required headers",
      rule: (operation) => {
        operation.requirement.hasHeaderParameterMatching({
          name: "request-id",
        });
        operation.requirement.hasHeaderParameterMatching({
          name: "client-id",
        });
      },
    }),
  ],
});
