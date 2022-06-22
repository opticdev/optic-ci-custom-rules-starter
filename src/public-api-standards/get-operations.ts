import { OperationRule, ResponseRule, Ruleset } from "@useoptic/rulesets-base";

export default new Ruleset({
  name: "GET Operations",
  matches: (context) => context.operation.method === "get",
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

new ResponseRule({
  name: "Has 201 status codes",
  docsLink: "https://optic.com/standards/post-operations#statuscode201",
  rule: (response, context) => {
    response.added;
  },
});
