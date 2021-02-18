# Hardhat Dotenv

Dotenv wrapper for Hardhat

## Usage

```ts 
// Get the exposed env function from hre
const { env } = hre

// Second parameter is optional but serves as a fallback
env("MNEMONIC", "test test test test test test test test test test test junk")
```