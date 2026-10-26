---
author: Aryan Ahadinia
pubDatetime: 2026-01-26T09:00:00+01:00
title: Paper Accepted at ICLR 2026
featured: false
draft: false
description: My EPFL semester project on symmetry-aware Bayesian optimization.
---

Our paper "Symmetry-Aware Bayesian Optimization via Max Kernels" is accepted at [ICLR '26](https://openreview.net/forum?id=zUbBaWAM1Q)! This paper was the outcome of my semester project at INDY, EPFL, under supervision of [Dr. Anthony Bardou](https://abardou.github.io) and [Prof. Dr. Patrick Thiran](https://people.epfl.ch/patrick.thiran).

<video src="/videos/2025-sabo.mp4" autoplay muted loop playsinline controls aria-label="Animation comparing a naive GP with a rotation-invariant GP on a rotation-symmetric objective"></video>

The animation above compares a naive GP with a rotation-invariant GP on a rotation-symmetric objective.

When the objective of a Bayesian optimization problem is invariant under a group of transformations, such as rotations, exploiting that symmetry can make the optimization much more efficient. A natural way to do so is the max kernel, which compares two points by their maximum similarity over all of their symmetric copies. However, the max kernel is not positive semidefinite, which has so far kept it out of Bayesian optimization. In this paper, we use a positive semidefinite projection of the max kernel, which achieves significantly lower regret than existing invariant and non-invariant kernels on synthetic and real-world benchmarks, without increasing computational complexity.

_Animation © Anthony Bardou, from [abardou.github.io](https://abardou.github.io/)._
