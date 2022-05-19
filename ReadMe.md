## Final setup: Custom Optic Rules

**Steps to take after forking:**
1. Choose a name for your Optic-Powered CLI tool by setting it in `package.json`. This becomes the command developers and CI pipelines use to run your custom rules. We suggest something like: `company-apis`
   ```bash
   2|  "name": "company-apis"
   ```
2. Choose license:
   ```bash
   2|  "license": "company-apis"
   ```

### Pick a distribution strategy

1. Publish on GitHub or GitLab in a place where other engineers at your company can access it. This repo is setup to be installable by URL using yarn:
    ```bash
    yarn global add https://github.com/yourorg/this-repo
    ```


> Alternatively you can publish to NPM.

To build this project and publish it:
```bash
  yarn run build
  npm publish
```

NPM allows you to publish private packages (your team only) or public ones. Please read their guides for more information and talk to people at your company about what is best.

2. [Publish to private NPM](https://docs.npmjs.com/creating-and-publishing-private-packages)
3. [Publish to public NPM](https://docs.npmjs.com/creating-and-publishing-an-organization-scoped-package)

---

## Get started writing rules!
[Read the SDK docs here]()
