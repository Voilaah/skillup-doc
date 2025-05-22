import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SkillUp Documentation",
  description:
    "Official SkillUp Global Documentation for features, backend users and API integration",
  lang: "en-US",
  base: "/skillup-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: "/skillup-logo-dark.png",
      dark: "/skillup-logo-light.png",
    },
    siteTitle: false,
    lastUpdated: {
      text: "Last updated",
    },
    externalLinkIcon: true,
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
      {
        text: "Integration",
        link: "/integration/",
        activeMatch: "/integration/",
      },
      {
        text: "Development",
        link: "/development/",
        activeMatch: "/development/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          collapsed: false,
          items: [
            { text: "Getting Started", link: "/guide/" },
            { text: "Installation", link: "/guide/introduction/installation" },
            {
              text: "Configuration",
              link: "/guide/introduction/configuration",
            },
          ],
        },
        {
          text: "Usage",
          collapsed: false,
          items: [
            { text: "Courses", link: "/guide/usage/properties" },
            { text: "Categories", link: "/guide/usage/categories" },
            { text: "Reviews", link: "/guide/usage/reviews" },
            { text: "Settings", link: "/guide/usage/settings" },
            { text: "Going Live", link: "/guide/usage/going-live" },
          ],
        },
        {
          text: "Components",
          collapsed: true,
          items: [
            { text: "Course", link: "/guide/components/product" },
            { text: "Courses", link: "/guide/components/products" },
            { text: "CoursesFilter", link: "/guide/components/courses-filter" },
            { text: "CourseReview", link: "/guide/components/course-reviews" },
            { text: "MyAccount", link: "/guide/components/my-account" },
          ],
        },
      ],
      "/integration/": [
        {
          text: "Courses Integration",
          collapsed: false,
          items: [
            { text: "Getting Started", link: "/integration/courses/" },
            { text: "Data Model", link: "/integration/courses/models/",
              items: [
                { text: "Course", link: "/integration/courses/models/course" },
                { text: "Module", link: "/integration/courses/models/module" },
                { text: "Lesson", link: "/integration/courses/models/lesson" },
                { text: "Engagement", link: "/integration/courses/models/engagement" },
                { text: "Assignment", link: "/integration/courses/models/assignment" },
                { text: "Summary", link: "/integration/courses/models/summary" },
              ]
             },
            {
              text: "API Requirements",
              items: [
                { text: "Courses ", link: "/integration/courses/list" },
                { text: "Course", link: "/integration/courses/item" }
              ]
            },
            { text: "Webhooks", link: "/integration/courses/webhooks",
              items: [
                { text: "Create a course", link: "/integration/courses/create" },
                { text: "Update a course", link: "/integration/courses/update" },
                { text: "Delete a course", link: "/integration/courses/delete" },
                { text: "Create a module", link: "/integration/courses/module_create" },
                { text: "Update a module", link: "/integration/courses/module_update" },
                { text: "Create a lesson", link: "/integration/courses/lesson_create" },
                { text: "Update a lesson", link: "/integration/courses/lesson_update" },
              ]
             }
          ],
        },
        {
          text: "Students Integration",
          collapsed: true,
          items: [
            {
              text: "Getting Started", link: "/integration/students/index"
            },
            {
              text: "API Requirements",
              items: [
                { text: "Students", link: "/integration/students/list" },
                { text: "Student", link: "/integration/students/item" }
              ]
            },
            { text: "Webhooks", link: "/integration/students/webhooks",
              items: [
                { text: "Create a student", link: "/integration/students/create" },
                { text: "Update a student", link: "/integration/students/update" }
              ]
             }
          ],
        },
      ],
      "/development/": [
        {
          text: "Working with SkillUp",
          collapsed: false,
          items: [
            { text: "Course Model", link: "/development/core/course-model" },
            {
              text: "Enrollment Model",
              link: "/development/core/enrollment-model",
            },
            { text: "Events", link: "/development/core/events" },
            { text: "PDF", link: "/development/core/pdf" },
            { text: "Integration", link: "/development/core/integration" },
            {
              text: "Artisan Console",
              link: "/development/core/console-commands",
            },
          ],
        },
        {
          text: "Extending SkillUp",
          collapsed: false,
          items: [
            { text: "Unit Testing", link: "/development/extend/unit-testing" },
          ],
        },
      ],
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2025 <a href="https://skillhup.global">SkillUp Global</a>'
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg width="100%" height="100%" viewBox="0 0 9 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" fill="currentColor"><path d="M7.42,4.068c-0.13,-2.124 -2.444,-3.962 -3.397,-3.983c-0.953,-0.02 -2.735,2.23 -2.808,4.515c-0.067,2.144 1.762,3.614 2.549,3.8c0.022,-1.008 0.103,-4.721 0.117,-5.154c0.028,-0.885 0.072,-2.261 0.219,-2.307c0.085,-0.026 0.201,0.748 0.186,1.205c-0.003,0.087 -0.004,0.37 -0.004,0.771c0.16,-0.162 0.326,-0.331 0.428,-0.43c0.277,-0.273 0.4,-0.24 0.267,0.003c-0.082,0.149 -0.435,0.647 -0.694,1.008c0.002,0.727 0.005,1.642 0.008,2.495c0.366,-0.429 0.814,-0.942 1.05,-1.171c0.494,-0.478 0.546,-0.418 0.313,0.085c-0.143,0.307 -0.843,1.129 -1.36,1.776c0.003,0.757 0.006,1.393 0.006,1.697c1.386,-0.305 3.248,-2.224 3.12,-4.31" /></svg>',
        },
        link: "https://octobercms.com/plugin/skillup",
      },
      {
        icon: "github",
        link: "https://github.com/voilaah/skillup-docs",
      },
    ],
  },
});
