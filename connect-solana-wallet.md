---
title: Connect Solana Wallet
date: 2022-01-14T00:14:21.342Z
---

Source: https://twitter.com/haomaaax/status/1478622476481736713?s=20

```javascript
const connectWallet= async () => {
    const { solana } = window;
    if (solana) {
        const response = await solana.connect();
        setWalletAddress(response.publicKey.toString());
    }
};
```