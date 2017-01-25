import assert from "power-assert";
import { makeRuleTester } from "../../src/";

const tester = makeRuleTester(assert, "numeric");


describe("Rules#numeric", () => {
  it("Should be return true", () => {
    tester([
      null,
      undefined,
      0,
      0.0,
      0.82,
      12,
      999.12,
      -78,
      -0.008,
      "+8",
      "918",
      "0"
    ], true);
  });

  it("Should be return false", () => {
    tester([
      "",
      "-",
      "+",
      [[], true],
      {},
      new Date()
    ], false);
  });
});
