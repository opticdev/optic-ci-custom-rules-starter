import { OperationRule, Ruleset } from "@useoptic/rulesets-base";

export default new Ruleset({
  name: "POST Operations",
  matches: (context) => context.operation.method === "post",
  rules: [
    new OperationRule({
      name: "have correct status codes",
      rule: (operation) => {
        operation.requirement.hasResponses([
          { statusCode: "201", contentType: "application/json" },
        ]);
      },
    }),
  ],
});
