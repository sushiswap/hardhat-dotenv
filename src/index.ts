import { extendEnvironment } from "hardhat/config";
import { lazyFunction } from "hardhat/plugins";

import { env } from "./env";
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import "./type-extensions";

// Load dovenv/config
import "dotenv/config";

extendEnvironment((hre) => {
  // We add a field to the Hardhat Runtime Environment here.
  // We use lazyObject to avoid initializing things until they are actually
  // needed.
  hre.env = lazyFunction(() => env);
});
