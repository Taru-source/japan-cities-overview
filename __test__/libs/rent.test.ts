import { rentForSingle } from "@/libs/rent";

describe("rentForSingle", () => {
  it("should return rent for single", () => {
    expect(rentForSingle(1000)).toBe("35,000");
  });
});
