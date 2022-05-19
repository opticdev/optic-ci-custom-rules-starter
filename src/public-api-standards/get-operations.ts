import { Rule, Ruleset, OperationRule } from "@useoptic/rulesets-base";

export default new Ruleset({
  name: "Public GET Operations",
  matches: (context) => context.operation.method === "GET",
  rules: [
    new OperationRule({
      name: "have correct status codes",
      rule: (operation) => {
        operation.requirement.hasResponses([{ statusCode: "200" }]);
      },
    }),
  ],
});
