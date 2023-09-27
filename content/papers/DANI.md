---
title: "DANI: Fast Diffusion Aware Network Inference with Preserving Topological Structure Property" 
date: 2023-09-18
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
    alt: "The generative Bayesian probabilistic representation of the proposed model"
    relative: true
editPost:
    URL: "https://arxiv.org/pdf/1706.00941.pdf"
    Text: "arXiv"

---

---

##### Links

+ [arXiv preprint](https://arxiv.org/pdf/2010.01400.pdf)
+ [Code and Data](https://github.com/AryanAhadinia/DANI)

---

##### Abstract

The fast growth of social networks and their data access limitations in recent years has led to increasing difficulty in obtaining the complete topology of these networks. However, diffusion information over these networks is available, and many algorithms have been proposed to infer the underlying networks using this information. The previously proposed algorithms only focus on inferring more links and ignore preserving the critical topological characteristics of the underlying social networks. In this paper, we propose a novel method called DANI to infer the underlying network while preserving its structural properties. It is based on the Markov transition matrix derived from time series cascades, as well as the node-node similarity that can be observed in the cascade behavior from a structural point of view. In addition, the presented method has linear time complexity (increases linearly with the number of nodes, number of cascades, and square of the average length of cascades), and its distributed version in the MapReduce framework is also scalable. We applied the proposed approach to both real and synthetic networks. The experimental results showed that DANI has higher accuracy and lower run time while maintaining structural properties, including modular structure, degree distribution, connected components, density, and clustering coefficients, than well-known network inference methods.

---

<!-- ##### Citation

Maryam Ramezani, Aryan Ahadinia, Amirmohammad Ziaei Bideh, and Hamid R. Rabiee. 2023. Joint Inference of Diffusion and Structure in Partially Observed Social Networks Using Coupled Matrix Factorization. ACM Transaction on Knowledge Discovery from Data 17, 9, Article 132 (November 2023), 28 pages. <https://doi.org/10.1145/3599237>

```bibtex
@article{10.1145/3599237,
    author = {Ramezani, Maryam and Ahadinia, Aryan and Ziaei Bideh, Amirmohammad and Rabiee, Hamid R.},
    title = {Joint Inference of Diffusion and Structure in Partially Observed Social Networks Using Coupled Matrix Factorization},
    year = {2023},
    issue_date = {November 2023},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    volume = {17},
    number = {9},
    issn = {1556-4681},
    url = {https://doi.org/10.1145/3599237},
    doi = {10.1145/3599237},
    abstract = {Access to complete data in large-scale networks is often infeasible. Therefore, the problem of missing data is a crucial and unavoidable issue in the analysis and modeling of real-world social networks. However, most of the research on different aspects of social networks does not consider this limitation. One effective way to solve this problem is to recover the missing data as a pre-processing step. In this paper, a model is learned from partially observed data to infer unobserved diffusion and structure networks. To jointly discover omitted diffusion activities and hidden network structures, we develop a probabilistic generative model called “DiffStru.” The interrelations among links of nodes and cascade processes are utilized in the proposed method via learning coupled with low-dimensional latent factors. Besides inferring unseen data, latent factors such as community detection may also aid in network classification problems. We tested different missing data scenarios on simulated independent cascades over LFR networks and real datasets, including Twitter and Memetracker. Experiments on these synthetic and real-world datasets show that the proposed method successfully detects invisible social behaviors, predicts links, and identifies latent features.},
    journal = {ACM Trans. Knowl. Discov. Data},
    month = {jul},
    articleno = {132},
    numpages = {28},
    keywords = {cascade completion, matrix factorization, social network, link prediction, Information diffusion, network structure, partially observed data}
}
```

--- -->
