import { writeFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SkillUp Documentation",
  description:
    "Official SkillUp Global Documentation for features, backend users and API integration",
  // lang: "en-US",
  // base: "/skillup-docs/",
  buildEnd() {
    writeFileSync(resolve(__dirname, "dist/CNAME"), "docs.skillup.global");
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
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
          /* {
            text: "Development",
            link: "/development/",
            activeMatch: "/development/",
          }, */
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
            /* {
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
            }, */
          ],
          "/integration/": [
            {
              text: "Courses Integration",
              collapsed: false,
              items: [
                { text: "Getting Started", link: "/integration/courses/" },
                {
                  text: "Data Model",
                  link: "/integration/courses/models/",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/integration/courses/models/course" },
                    { text: "Module", link: "/integration/courses/models/module" },
                    { text: "Lesson", link: "/integration/courses/models/lesson" },
                    {
                      text: "Engagement",
                      link: "/integration/courses/models/engagement",
                    },
                    {
                      text: "Assignment",
                      link: "/integration/courses/models/assignment",
                    },
                    {
                      text: "Summary",
                      link: "/integration/courses/models/summary",
                    },
                  ],
                },
                {
                  text: "API Requirements",
                  collapsed: true,
                  items: [
                    { text: "Courses ", link: "/integration/courses/list" },
                    { text: "Course", link: "/integration/courses/item" },
                  ],
                },
                {
                  text: "Webhooks",
                  link: "/integration/courses/webhooks",
                  collapsed: true,
                  items: [
                    {
                      text: "Create a course",
                      link: "/integration/courses/create",
                    },
                    {
                      text: "Update a course",
                      link: "/integration/courses/update",
                    },
                    {
                      text: "Delete a course",
                      link: "/integration/courses/delete",
                    },
                    {
                      text: "Create a module",
                      link: "/integration/courses/module_create",
                    },
                    {
                      text: "Update a module",
                      link: "/integration/courses/module_update",
                    },
                    {
                      text: "Create a lesson",
                      link: "/integration/courses/lesson_create",
                    },
                    {
                      text: "Update a lesson",
                      link: "/integration/courses/lesson_update",
                    },
                  ],
                },
              ],
            },
            {
              text: "Students Integration",
              collapsed: true,
              items: [
                {
                  text: "Getting Started",
                  link: "/integration/students/index",
                },
                {
                  text: "API Requirements",
                  items: [
                    { text: "Students", link: "/integration/students/list" },
                    { text: "Student", link: "/integration/students/item" },
                  ],
                },
                {
                  text: "Webhooks",
                  link: "/integration/students/webhooks",
                  items: [
                    {
                      text: "Create a student",
                      link: "/integration/students/create",
                    },
                    {
                      text: "Update a student",
                      link: "/integration/students/update",
                    },
                  ],
                },
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
          message: "",
          copyright:
            'Copyright © 2025 <a href="https://skillhup.global">SkillUp Global</a>',
        },
        socialLinks: [
          {
            icon: "facebook",
            link: "https://www.facebook.com/SkillUp.Global.official",
          },
          {
            icon: "instagram",
            link: "https://www.instagram.com/skillupglobal?igsh=bGZrM2t0czRqaHlq",
          },
          {
            icon: "linkedin",
            link: "https://www.linkedin.com/company/skills-up-global",
          },
        ],
      },
    },

    th: {
      label: 'ไทย',
      lang: 'th-TH',
      link: '/th/',
        themeConfig: {
          logo: {
            light: "/skillup-logo-dark.png",
            dark: "/skillup-logo-light.png",
          },
          siteTitle: false,
          outlineTitle: 'ในหน้านี้', // "On this page"
          docFooter: {
            prev: 'หน้าก่อนหน้า', // "Previous page"
            next: 'หน้าถัดไป',    // "Next page"
          },
          lastUpdatedText: 'อัปเดตล่าสุดเมื่อ', // "Last updated"
          darkModeSwitchLabel: 'โหมดกลางคืน',
          sidebarMenuLabel: 'เมนู',
          returnToTopLabel: 'กลับไปด้านบน',
          langMenuLabel: 'เปลี่ยนภาษา',
          search: {
            placeholder: 'ค้นหาเอกสาร...',
          },
          externalLinkIcon: true,
          search: {
            provider: "local",
          },
          nav: [
            { text: "หน้าหลัก", link: "/th/" },
            {
              text: "การเชื่อมต่อระบบ",
              link: "/th/integration/",
              activeMatch: "/th/integration/",
            },
          ],
          sidebar: {
            "/th/integration/": [
              {
                text: "การเชื่อมต่อระบบคอร์สเรียน",
                collapsed: false,
                items: [
                  { text: "เริ่มต้นใช้งาน", link: "/th/integration/courses/" },
                  {
                    text: "โมเดลข้อมูล",
                    link: "/th/integration/courses/models/",
                    collapsed: true,
                    items: [
                      { text: "คอร์ส", link: "/th/integration/courses/models/course" },
                      { text: "โมดูล", link: "/th/integration/courses/models/module" },
                      { text: "บทเรียน", link: "/th/integration/courses/models/lesson" },
                      { text: "กิจกรรม", link: "/th/integration/courses/models/engagement" },
                      { text: "แบบฝึกหัด", link: "/th/integration/courses/models/assignment" },
                      { text: "สรุป", link: "/th/integration/courses/models/summary" },
                    ],
                  },
                  {
                    text: "ข้อกำหนดของ API",
                    collapsed: true,
                    items: [
                      { text: "คอร์สทั้งหมด", link: "/th/integration/courses/list" },
                      { text: "คอร์สเดียว", link: "/th/integration/courses/item" },
                    ],
                  },
                  {
                    text: "Webhook",
                    link: "/th/integration/courses/webhooks",
                    collapsed: true,
                    items: [
                      { text: "สร้างคอร์ส", link: "/th/integration/courses/create" },
                      { text: "อัปเดตคอร์ส", link: "/th/integration/courses/update" },
                      { text: "ลบคอร์ส", link: "/th/integration/courses/delete" },
                      { text: "สร้างโมดูล", link: "/th/integration/courses/module_create" },
                      { text: "อัปเดตโมดูล", link: "/th/integration/courses/module_update" },
                      { text: "สร้างบทเรียน", link: "/th/integration/courses/lesson_create" },
                      { text: "อัปเดตบทเรียน", link: "/th/integration/courses/lesson_update" },
                    ],
                  },
                ],
              },
              {
                text: "การเชื่อมต่อระบบนักเรียน",
                collapsed: true,
                items: [
                  { text: "เริ่มต้นใช้งาน", link: "/th/integration/students/index" },
                  {
                    text: "ข้อกำหนดของ API",
                    items: [
                      { text: "นักเรียนทั้งหมด", link: "/th/integration/students/list" },
                      { text: "นักเรียนคนเดียว", link: "/th/integration/students/item" },
                    ],
                  },
                  {
                    text: "Webhook",
                    link: "/th/integration/students/webhooks",
                    items: [
                      { text: "สร้างนักเรียน", link: "/th/integration/students/create" },
                      { text: "อัปเดตนักเรียน", link: "/th/integration/students/update" },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            message: "",
            copyright:
              'สงวนลิขสิทธิ์ © 2025 <a href="https://skillhup.global">SkillUp Global</a>',
          },
          socialLinks: [
            {
              icon: "facebook",
              link: "https://www.facebook.com/SkillUp.Global.official",
            },
            {
              icon: "instagram",
              link: "https://www.instagram.com/skillupglobal?igsh=bGZrM2t0czRqaHlq",
            },
            {
              icon: "linkedin",
              link: "https://www.linkedin.com/company/skills-up-global",
            },
          ],
        }
      }
    }

});
