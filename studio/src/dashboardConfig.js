export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6190fec053d3bbc6acec24d0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-mh6n2puw",
                  apiId: "2f2bfe65-c3ac-48e6-92cf-f75a62caf459",
                },
                {
                  buildHookId: "6190fec0f11ca88fcc03c459",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-74vu29et",
                  apiId: "e1731f3e-f876-4315-9408-64625aa159c4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ritajeong/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-74vu29et.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
