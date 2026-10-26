import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://aryanahadinia.github.io/",
    title: "Aryan Ahadinia",
    description:
      "CS M.Sc. student at EPFL and Research Assistant at the ETH/EPFL AI Center.",
    author: "Aryan Ahadinia",
    profile: "https://aryanahadinia.github.io/",
    lang: "en",
    timezone: "Europe/Zurich",
    dir: "ltr",
    googleAnalytics: "G-WE94KJ54EQ",
  },
  posts: {
    perPage: 8,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    {
      name: "google-scholar",
      url: "https://scholar.google.com/citations?user=C5-a0JIAAAAJ&hl=en",
      linkTitle: "Aryan Ahadinia on Google Scholar",
    },
    {
      name: "github",
      url: "https://github.com/AryanAhadinia/",
      linkTitle: "Aryan Ahadinia on GitHub",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ahadinia/",
      linkTitle: "Aryan Ahadinia on LinkedIn",
    },
    { name: "x", url: "https://twitter.com/AryanAhadinia" },
    { name: "mail", url: "mailto:aryan.ahadinia@epfl.ch" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
