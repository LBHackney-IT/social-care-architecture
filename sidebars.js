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
            {
              type: "category",
              label: "Social Care Search Functionality",
              items: [
                {
                  type: "category",
                  label: "Residents Search",
                  items: ["runbooks/case-viewer/search-functionality/resident-search"],
                },
              ],
            },
          ],
        },
        {
          type: "category",
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
        },
      ],
    },
    {
      type: "category",
      label: "Incidents",
      items: [
        {
          type: "category",
          label: "2022",
          items: [
            {
              type: "category",
              label: "02-03-2022",
              items: ["incidents/2022/02-03-2022"],
            },
          ],
        },
      ],
    },
  ],
};
