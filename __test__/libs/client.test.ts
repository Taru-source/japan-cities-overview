import { Endpoint, getCities } from "@/libs/client";
import { createClient } from "microcms-js-sdk";

jest.mock("microcms-js-sdk", () => ({
  createClient: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
}));

describe("get function", () => {
  it("should call client.get with correct parameters", async () => {
    const mockGet = jest.fn();
    (createClient as jest.Mock).mockReturnValue({
      get: mockGet,
    });

    const mockQueries = { city: "Tokyo" };
    await getCities(Endpoint.cities, mockQueries, 100);

    expect(mockGet).toHaveBeenCalledWith({
      endpoint: Endpoint.cities,
      queries: { filters: "city[equals]Tokyo", limit: 100 },
    });
  });

  it("should use default limit if no limit is provided", async () => {
    const mockGet = jest.fn();
    (createClient as jest.Mock).mockReturnValue({
      get: mockGet,
    });

    const mockQueries = { city: "Tokyo" };
    await getCities(Endpoint.cities, mockQueries);

    expect(mockGet).toHaveBeenCalledWith({
      endpoint: Endpoint.cities,
      queries: { filters: "city[equals]Tokyo", limit: 2000 },
    });
  });
});
