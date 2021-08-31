// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "Choose a name",
    hint: "(Use <kebab-case>, e.g. api-handler)",
    validate: (input) => {
      if (!input) {
        return "Name cannot be empty!";
      }

      return true;
    },
  },
  {
    type: "multiselect",
    name: "options",
    message: "Choose files to create",
    hint: "(Use <space> to select, <return> to submit)",
    initial: ["api"],
    choices: [
      {
        name: "api",
        message: "API handler (NextJS)",
        value: true,
        hint: "(<api-handler>.ts)",
      },
      {
        name: "tests",
        message: "Tests (no-op, not supported yet)",
        value: true,
        hint: "(<api-handler>.test.ts)",
      },
    ],
  },
];
