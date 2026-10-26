import type { ImageMetadata } from "astro";

import epflAiCenterLogo from "@/assets/images/logos/epfl-ai-center.png";
import ethAiCenterLogo from "@/assets/images/logos/eth-ai-center.png";
import oracleLogo from "@/assets/images/logos/oracle.png";
import epflLogo from "@/assets/images/logos/epfl.png";
import sharifLogo from "@/assets/images/logos/sharif.png";

export type TimelineLogo = {
  src: ImageMetadata;
  alt: string;
};

export type TimelineEntry = {
  /** Date range shown under the organisation, e.g. "Sep 2024 – Present". */
  period: string;
  role: string;
  org: string;
  orgUrl?: string;
  /** One tile per logo, shown side by side. */
  logos: TimelineLogo[];
};

/** Career milestones, newest first. */
export const timeline: TimelineEntry[] = [
  {
    period: "Feb 2026 – Present",
    role: "Research Assistant",
    org: "ETH/EPFL AI Center (Apertus)",
    orgUrl: "https://ai.epfl.ch/",
    logos: [
      { src: epflAiCenterLogo, alt: "EPFL AI Center logo" },
      { src: ethAiCenterLogo, alt: "ETH AI Center logo" },
    ],
  },
  {
    period: "Jul 2025 – Jan 2026",
    role: "Research Intern",
    org: "Oracle Labs",
    orgUrl: "https://labs.oracle.com/",
    logos: [{ src: oracleLogo, alt: "Oracle Labs logo" }],
  },
  {
    period: "Sep 2024 – Present",
    role: "M.Sc. in Computer Science",
    org: "EPFL",
    orgUrl: "https://www.epfl.ch/en/",
    logos: [{ src: epflLogo, alt: "EPFL logo" }],
  },
  {
    period: "Sep 2019 – Sep 2023",
    role: "B.Sc. in Computer Engineering",
    org: "Sharif University of Technology",
    orgUrl: "https://en.sharif.edu/",
    logos: [{ src: sharifLogo, alt: "Sharif University of Technology logo" }],
  },
];
