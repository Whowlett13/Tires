import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Auto Solutions",
  DESCRIPTION: "Welcome to the place to be if you need seasonal maintenance.",
  AUTHOR: "Wyatt Howlett",
}

// Work Page
// export const WORK: Page = {
//   TITLE: "Work",
//   DESCRIPTION: "Places I have worked.",
// }

// Blog Page
// export const BLOG: Page = {
//   TITLE: "Blog",
//   DESCRIPTION: "Writing on topics I am passionate about.",
// }

// // Projects Page 
// export const PROJECTS: Page = {
//   TITLE: "Projects",
//   DESCRIPTION: "Recent projects I have worked on.",
// }

// // Search Page
// export const SEARCH: Page = {
//   TITLE: "Search",
//   DESCRIPTION: "Search all posts and projects by keyword.",
// }

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Contact", 
    HREF: "#contact", 
  },
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  // { 
  //   TEXT: "Projects", 
  //   HREF: "/projects", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "howltechsolutions@gmail.com",
    HREF: "mailto:howltechsolutions@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Whowlett13",
    HREF: "https://github.com/whowlett13/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

