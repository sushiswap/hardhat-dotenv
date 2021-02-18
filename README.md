# Hardhat Dotenv

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Dotenv wrapper for Hardhat

## Usage

```ts 
// Get the exposed env function from hre
const { env } = hre

// Second parameter is optional but serves as a fallback
env("MNEMONIC", "test test test test test test test test test test test junk")
```