---
title: "DANI: Fast Diffusion Aware Network Inference with Preserving Topological Structure Property" 
date: 2023-09-18
order: 2
url: /DANI/
aliases: 
    - /DANI.html
tags: ["Network Science", "Social Networks", "Network Inference", "Diffusion Information", "Topological Structure"]
author: "Maryam Ramezani, Aryan Ahadinia, Erfan Farhadi, and Hamid R. Rabiee"
publisher: "arXiv"
publisher_abbrev: "arXiv"
summary: "The fast growth of social networks and their data access limitations in recent years has led to increasing difficulty in obtaining the complete topology of these networks. However, diffusion information over these networks is available, and many algorithms have been proposed to infer the underlying networks using this information. The previously proposed algorithms only focus on inferring more links and ignore preserving the critical topological characteristics of the underlying social networks. In this paper, we propose a novel method called DANI to infer the underlying network while preserving its structural properties. It is based on the Markov transition matrix derived from time series cascades, as well as the node-node similarity that can be observed in the cascade behavior from a structural point of view. In addition, the presented method has linear time complexity (increases linearly with the number of nodes, number of cascades, and square of the average length of cascades), and its distributed version in the MapReduce framework is also scalable. We applied the proposed approach to both real and synthetic networks. The experimental results showed that DANI has higher accuracy and lower run time while maintaining structural properties, including modular structure, degree distribution, connected components, density, and clustering coefficients, than well-known network inference methods." 
cover:
    image: "/DANI.png"
    alt: "Architecture of DANI in map-reduce framework"
    relative: true
editPost:
    URL: "https://arxiv.org/abs/2310.01696"
    Text: "arXiv"

---

---

##### Links

+ [arXiv preprint](https://arxiv.org/abs/2310.01696)
+ [Code and Data](https://github.com/AryanAhadinia/DANI)

---

##### Abstract

The fast growth of social networks and their data access limitations in recent years has led to increasing difficulty in obtaining the complete topology of these networks. However, diffusion information over these networks is available, and many algorithms have been proposed to infer the underlying networks using this information. The previously proposed algorithms only focus on inferring more links and ignore preserving the critical topological characteristics of the underlying social networks. In this paper, we propose a novel method called DANI to infer the underlying network while preserving its structural properties. It is based on the Markov transition matrix derived from time series cascades, as well as the node-node similarity that can be observed in the cascade behavior from a structural point of view. In addition, the presented method has linear time complexity (increases linearly with the number of nodes, number of cascades, and square of the average length of cascades), and its distributed version in the MapReduce framework is also scalable. We applied the proposed approach to both real and synthetic networks. The experimental results showed that DANI has higher accuracy and lower run time while maintaining structural properties, including modular structure, degree distribution, connected components, density, and clustering coefficients, than well-known network inference methods.

---

##### Citation

M. Ramezani, A. Ahadinia, E. Farhadi, and H. R. Rabiee, DANI: Fast diffusion aware network inference with preserving topological structure property, 2023. arXiv: 2310.01696 [cs.SI]. <https://arxiv.org/abs/2310.01696>

```bibtex
@misc{2023/arXiv/arXiv/DANI,
      title={{DANI}: Fast Diffusion Aware Network Inference with Preserving Topological Structure Property}, 
      author={Maryam Ramezani and Aryan Ahadinia and Erfan Farhadi and Hamid R. Rabiee},
      year={2023},
      eprint={2310.01696},
      archivePrefix={arXiv},
      primaryClass={cs.SI}
}
```
