const dummyData = {
  name: "Board",
  isActive: true,
  columns: [
    {
      name: "Todo",
      tasks: [
        {
          title: "Build UI for onboarding flow",
          description: "",
          status: "Todo",
          subtasks: [
            {
              title: "Sign up page",
              isCompleted: true,
            },
            {
              title: "Sign in page",
              isCompleted: false,
            },
            {
              title: "Welcome page",
              isCompleted: false,
            },
          ],
        },
        {
          title: "Build UI for search",
          description: "",
          status: "Todo",
          subtasks: [
            {
              title: "Search page",
              isCompleted: false,
            },
          ],
        },
        {
          title: "Build settings UI",
          description: "",
          status: "Todo",
          subtasks: [
            {
              title: "Account page",
              isCompleted: false,
            },
            {
              title: "Billing page",
              isCompleted: false,
            },
          ],
        },
        {
          title: "QA and test all major user journeys",
          description:
            "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
          status: "Todo",
          subtasks: [
            {
              title: "Internal testing",
              isCompleted: false,
            },
            {
              title: "External testing",
              isCompleted: false,
            },
          ],
        },
      ],
    },
  ],
};
