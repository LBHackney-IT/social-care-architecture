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
        "decisions/drop-mash-mongodb-collection",
      ],
    },
    {
      type: "category",
      label: "Runbooks",
      items: [
        {
          type: "category",
          label: "Case Viewer",
          items: [
            {
              type: "category",
              label: "Everyday",
              items: ["runbooks/case-viewer/every-day/adding-a-new-team"],
            },
            {
              type: "category",
              label: "Development",
              items: ["runbooks/case-viewer/development/connect-to-social-care-case-viewer-api"],
            },
          ],
        },
        {
          type: 'category',
          label: "Core Pathways",
          items: [
            {
              type: "category",
              label: "Every Day",
              items: [
                "runbooks/core-pathways/every-day/connecting-to-live-databases",
                "runbooks/core-pathways/every-day/working-with-audit-tables",
              ],
            },
          ],
        }
      ],
    },
  ],
};
