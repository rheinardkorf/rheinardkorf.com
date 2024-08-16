---
id: beginning-solana-development
aliases: []
tags: []
date: 2021-12-03T18:32:30.367Z
hidden: true
title: Beginning Solana Development
---

* There are 2 ways to develop for the Solana blockchain.
  1. **dApps** -- Creating off-chain applications that interact with Solana (via [solana-web3.js][solana-web3] or other JSON RPC API libraries). A great onboarding point for those unfamiliar with Rust.
  2. **Programs** (smart contracts) -- Creating on-chain that run on the Solana Runtime, forever. These are built with Rust, C or C++
* Programs (smart contracts) come in 2 types:
  1. [Native Programs][native-programs] -- Core Solana programs like: **System**, **Staking**, **Voting**
  2. [Solana Program Library (SPL)][spl] -- Other common use programs like: **Token** (ERC20 equivalent, includes NFTs)

[Solana Workflow Diagram][solana-diagram]  

* Solana is not EVM (Ethereum Virtual Machine) compatible, but there is a [bidirectional token bridge][evm-token-bridge] for Solana-Ethereum projects.
* Solana uses Proof-of-History (PoH) for ordering transactions and Proof-of-Stake (PoS) for consensus.
* State in Solana is [an account][solana-account] (think of it as a file, but you're paying rent for keeping it). There are other accounts too! -- this can be confusing.
* Solana's native token is **SOL** and can be sub-divided into small units called **lamports**.

Resources:
* [Getting Started with Solana Development][solana]
* [SPL Token Wallet][splt-token-wallet]
* [solana-web3.js][solana-web3]
* [Solana 101][figment]
* [Solana Developers][developers]

[solana-web3]: https://github.com/solana-labs/solana-web3.js
[splt-token-wallet]: https://github.com/project-serum/spl-token-wallet
[solana-diagram]: https://lh5.googleusercontent.com/Z1UcGnLLqEeCTWLm0QjMscPfFKhRumOcuFc8uadpn7wqO7OlsQiNe60CpGsPZf1zjsLTpj-69IeQf9MwCdMnFdyyDNkI8x0uPHPyPf5DUX_uqKWYuJq7o5p9TZ5_TqpFCO7ZS6pO?w=1600&h=1035&fmt=webp
[solana]: https://solana.com/news/getting-started-with-solana-development
[native-programs]: https://docs.solana.com/developing/runtime-facilities/programs
[spl]: https://spl.solana.com/
[figment]: https://learn.figment.io/pathways/solana-pathway
[developers]: https://solana.com/developers
[evm-token-bridge]: https://solana.com/wormhole
[solana-account]: https://docs.solana.com/developing/programming-model/accounts
