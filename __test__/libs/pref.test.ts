import { city } from "@/libs/city";
import { Endpoint } from "@/libs/client";
import { avgPrefRent, fetchCities, prefName } from "@/libs/pref";
import { createClient } from "microcms-js-sdk";

describe("prefName", () => {
  it("should return prefName by prefCode", () => {
    const prefCode = 1;
    expect(prefName(prefCode)).toBe("北海道");
  });

  it("should return prefName by prefCode", () => {
    const prefCode = 13;
    expect(prefName(prefCode)).toBe("東京都");
  });

  it("should return prefName by prefCode", () => {
    const prefCode = 47;
    expect(prefName(prefCode)).toBe("沖縄県");
  });

  it("should return N/A if prefCode is not found", () => {
    const prefCode = 100;
    expect(prefName(prefCode)).toBe("N/A");
  });
});

describe("avgPrefRent", () => {
  it("渡されたcitiesのrentの平均値を返す", () => {
    const cities = [
      { rentPerSqm: 1000 },
      { rentPerSqm: 2000 },
      { rentPerSqm: 3000 },
    ] as city[];
    expect(avgPrefRent(cities)).toBe(2000);
  });
});
