module.exports = {
  docs: [
    {
      type: "category",
      label: "About",
      items: [
        "index",
        "related-repositories",
        "process",
        {
          type: "category",
          label: "System Logbook",
          items: ["mash-referrals/introduction"],
        },
      ],
    },
    {
      type: "category",
      label: "Architecture decision records (ADRs)",
      items: [
        "decisions/introduction",
        "decisions/record-architecture-decisions",
        "decisions/use-iso-8601-format-for-dates",
        "decisions/prefer-open-source-software",
      ],
    },
  ],
};
