// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "Choose a name",
    hint: "(Use <kebab-case>, e.g. my-utils)",
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
    initial: ["index", "utils"],
    choices: [
      {
        name: "index",
        message: "Index (re-export)",
        value: true,
        hint: "(index.ts)",
      },
      {
        name: "utils",
        message: "Utility",
        value: true,
        hint: "(<my-utils>.ts)",
      },
      {
        name: "tests",
        message: "Tests (no-op, not supported yet)",
        value: true,
        hint: "(<my-utils>.test.ts)",
      },
    ],
  },
];
