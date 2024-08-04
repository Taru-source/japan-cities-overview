import { generateFilters } from "@/libs/client";

describe("generateFilters", () => {
  it("should generate correct filter string for a single query", () => {
    const queries = { city: "Tokyo" };
    const result = generateFilters(queries);
    expect(result).toBe("city[equals]Tokyo");
  });

  it("should generate correct filter string for multiple queries", () => {
    const queries = { city: "Tokyo", population: 1000000 };
    const result = generateFilters(queries);
    expect(result).toBe("city[equals]Tokyo[and]population[equals]1000000");
  });

  it("should handle string and number values correctly", () => {
    const queries = { name: "John", age: 30 };
    const result = generateFilters(queries);
    expect(result).toBe("name[equals]John[and]age[equals]30");
  });

  it("should return an empty string for an empty query object", () => {
    const queries = {};
    const result = generateFilters(queries);
    expect(result).toBe("");
  });

  it("should handle special characters in query values", () => {
    const queries = { city: "New York", description: "Big & Busy" };
    const result = generateFilters(queries);
    expect(result).toBe(
      "city[equals]New York[and]description[equals]Big & Busy"
    );
  });
});
