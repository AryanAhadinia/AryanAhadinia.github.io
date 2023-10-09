---
title: "SecChat: A Perfectly Private Messenger" 
date: 2023-07-18
order: 4
show_date: false
url: /SecChat/
aliases: 
    - /SecChat.html
tags: ["Messenger", "Security", "Privacy", "Cryptography", "RSA", "Double Ratchet", "Diffie-Hellman"]
author: "Aryan Ahadinia, in a group work"
summary: "Private messaging is a huge concern in these days. The requirements for a perfectly private messenger are conflicting to each other and its very hard to aggregate all of them in one messenger so even the most popular messengers like WhatsApp and Telegram are not implementing all of these requirements. In this project, we have tried to implement a messenger which meets all of the requirements for a perfectly private messenger. We have implemented all of the algorithms and protocols from scratch in Python." 
cover:
    image: ""
    alt: ""
    relative: true
editPost:
    URL: "https://github.com/AryanAhadinia/SecChat"
    Text: "GitHub"

---

---

##### Links

+ [GitHub](https://github.com/AryanAhadinia/SecChat)
+ [Report](https://github.com/AryanAhadinia/SecChat/blob/main/DNS_Project.pdf)

---

##### Abstract

Private messaging is a huge concern in these days. The requirements for a perfectly private messenger are conflicting to each other and its very hard to aggregate all of them in one messenger so even the most popular messengers like WhatsApp and Telegram are not implementing all of these requirements. In this project, we have tried to implement a messenger which meets all of the requirements for a perfectly private messenger. We have implemented all of the algorithms and protocols from scratch in Python.

---

##### Technical Requirements

+ End-to-end Encryption
+ Perfect Forward Secrecy
+ Perfect Backward Secrecy
+ Scalability
+ Key Freshness
+ Messages Integrity
+ Replay Attack Protection
+ Man-in-the-middle Attack Protection
+ Consistency Against Network Errors
+ Authentication
+ Deniability Protection
+ Restricted Access Control
+ Non-interactive Key Exchange
+ Group Chat Protection
+ Traffic Analysis Protection
+ Secure Key Storage
+ Secure Local Storage
+ Key Revocation and Expiration Options
+ Key Verification in a Secondary Channel

---

##### Implementation

Since the implementation was all from scratch, we had to implement our algorithms and protocols in Python. We have used three different protocol to meet technical requirements.

###### HTTPSL

We proposed HTTPSL protocol for asymmetric communication between two parties. The protocol is somehow similar to the well-known HTTPS protocol, since we names it HTTPSL. Since this kind of communication is rarely used, we had to provide a light-weight protocol for this purpose to speedup and to be able to scale the process. The protocol is as follows:

$$A \longrightarrow B: E(PU_B, M || E(PR_A, H(M)) || TS)$$

which guarantees all of the requirements for an asymmetric request-response communication with only one step of handshaking. This protocol is used for the first time that two parties want to communicate with each other. After that, they can use the other protocols.

###### SSE

Since messaging requires a high speed symmetric communication, we proposed SSE protocol for symmetric communication between two parties. The protocol is as follows:

$$A \longrightarrow B: E(K_{A,B}, M || E(PR_A, H(M)) || TS) || E(PU_B, Token)$$

which guarantees all of the security requirements.

###### Double Ratchet

Since we need both forward and backward secrecy, we need double ratchet algorithm which is a follow. THis protocol renew the keys after each message and also provides a way to decrypt the messages in the past. The is a schema of the protocol retrieved from [1]:

![Double Ratchet](/SecChat/rat1.png)

![Double Ratchet](/SecChat/rat2.png)

![Double Ratchet](/SecChat/rat3.png)

---

##### Collaborators

This project has been done in collaboration with Rouzbeh Pirayadi and Arian Yazdanparast as a part of _Data and Network Security_ course at Sharif University of Technology.

---

##### References

[1] Implementing Signal’s Double Ratchet algorithm. nikofil’s blog. 2020. url: <https://nfil.dev/coding/encryption/python/double-ratchet-example/> (visited on 07/01/2023).

---
