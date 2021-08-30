// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "multiselect",
    name: "options",
    message: "Files to create",
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
        hint: "(<Component>.tsx)",
      },
      {
        name: "interface",
        message: "Interface (props)",
        value: true,
        hint: "(<Component>.props.tsx)",
      },
      {
        name: "styles",
        message: "Styles (CSS module)",
        value: true,
        hint: "(<Component>.modules.css)",
      },
      {
        name: "tests",
        message: "Tests (no-op, not supported yet)",
        value: true,
        hint: "(<Component>.test.tsx)",
      },
    ],
  },
];
