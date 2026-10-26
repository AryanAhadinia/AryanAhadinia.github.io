import type { ImageMetadata } from "astro";

import apertus15 from "@/assets/images/papers/2026-apertus-1-5.png";
import sabo from "@/assets/images/papers/2025-sabo.png";
import dani from "@/assets/images/papers/2024-dani.png";
import diffstru from "@/assets/images/papers/2023-diffstru.png";

export type PublicationLink = {
  label: string;
  url: string;
};

export type Publication = {
  title: string;
  /** Author list. The entry matching `highlightAuthor` is rendered in bold. */
  authors: string[];
  /** Short venue badge shown over the thumbnail, e.g. "ICLR". */
  venueShort: string;
  /** Full venue string shown under the author list. */
  venue: string;
  image: ImageMetadata;
  /** Optional looping teaser video (path under `public/`); `image` becomes its poster. */
  video?: string;
  links: PublicationLink[];
  /** Optional highlighted remark, e.g. "Oral", "Best paper". */
  note?: string;
};

export const HIGHLIGHT_AUTHOR = "Aryan Ahadinia";

export const publications: Publication[] = [
  {
    title: "Apertus 1.5: From Open Text Models to Open Multimodal Reasoners",
    authors: [
      "Project Apertus",
      "…",
      "Aryan Ahadinia",
      "…",
      "Antoine Bosselut",
      "Martin Jaggi",
      "Imanol Schlag",
    ],
    venueShort: "arXiv",
    venue: "arXiv preprint, 2026",
    image: apertus15,
    note: "Core Team Member and Writing Coordinator",
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2610.15542" },
      {
        label: "Hugging Face",
        url: "https://huggingface.co/collections/swiss-ai/apertus-v15",
      },
      { label: "arXiv", url: "https://arxiv.org/abs/2610.15542" },
    ],
  },
  {
    title: "Symmetry-Aware Bayesian Optimization via Max Kernels",
    authors: [
      "Anthony Bardou",
      "Antoine Gonon",
      "Aryan Ahadinia",
      "Patrick Thiran",
    ],
    venueShort: "ICLR",
    venue: "International Conference on Learning Representations (ICLR), 2026",
    image: sabo,
    video: "/videos/2025-sabo.mp4",
    links: [
      { label: "PDF", url: "https://openreview.net/forum?id=zUbBaWAM1Q" },
      {
        label: "OpenReview",
        url: "https://openreview.net/forum?id=zUbBaWAM1Q",
      },
    ],
  },
  {
    title:
      "DANI: Fast Diffusion Aware Network Inference with Preserving Topological Structure Property",
    authors: [
      "Maryam Ramezani",
      "Aryan Ahadinia",
      "Erfan Farhadi",
      "Hamid R. Rabiee",
    ],
    venueShort: "Scientific Reports",
    venue: "Nature Scientific Reports, 2024",
    image: dani,
    links: [
      {
        label: "PDF",
        url: "https://www.nature.com/articles/s41598-024-82286-x.pdf",
      },
      { label: "Code", url: "https://github.com/AryanAhadinia/DANI" },
      {
        label: "Nature",
        url: "https://www.nature.com/articles/s41598-024-82286-x",
      },
    ],
  },
  {
    title:
      "Joint Inference of Diffusion and Structure in Partially Observed Social Networks Using Coupled Matrix Factorization",
    authors: [
      "Maryam Ramezani",
      "Aryan Ahadinia",
      "Amirmohammad Ziaei Bideh",
      "Hamid R. Rabiee",
    ],
    venueShort: "arXiv",
    venue: "arXiv preprint, 2023",
    image: diffstru,
    links: [
      { label: "PDF", url: "https://arxiv.org/pdf/2010.01400" },
      { label: "arXiv", url: "https://arxiv.org/abs/2010.01400" },
    ],
  },
];
