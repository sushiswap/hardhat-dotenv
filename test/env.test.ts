import { assert } from "chai";
import path from "path";

import { env } from "../src/env";

import { resetHardhatContext } from "hardhat/plugins-testing";
import { HardhatRuntimeEnvironment } from "hardhat/types";

declare module "mocha" {
  interface Context {
    hre: HardhatRuntimeEnvironment;
  }
}

export function useEnvironment() {
  beforeEach("Loading hardhat environment", function () {
    process.chdir(path.join(__dirname, "fixture"));

    this.hre = require("hardhat");
  });

  afterEach("Resetting hardhat", function () {
    resetHardhatContext();
  });
}

describe("Integration tests examples", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment();

    it("extends hardhat runtime environment", function () {
      assert.isDefined(this.hre.env);
      assert.isFunction(this.hre.env);
    });

    it("env('FOO') returns BAR", function () {
      assert.equal(this.hre.env("FOO"), "BAR");
    });
  });
});
