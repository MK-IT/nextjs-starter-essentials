// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "Choose a name",
    hint: "(Use <param-case>, e.g. my-component)",
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
    initial: ["index", "component"],
    choices: [
      {
        name: "index",
        message: "Index (re-export)",
        value: true,
        hint: "(index.tsx)",
      },
      {
        name: "component",
        message: "Component (React)",
        value: true,
        hint: "(<my-component>.tsx)",
      },
      {
        name: "interface",
        message: "Interface (props)",
        value: true,
        hint: "(<my-component>.props.tsx)",
      },
      {
        name: "styles",
        message: "Styles (Sass module)",
        value: true,
        hint: "(<my-component>.modules.scss)",
      },
      {
        name: "tests",
        message: "Tests (no-op, not supported yet)",
        value: true,
        hint: "(<my-component>.test.tsx)",
      },
    ],
  },
];
