import { City } from "@/libs/city";
import { avgPrefRent, prefName } from "@/libs/pref";

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
    const cities: City[] = [
      { rentPerSqm: 1000, cityName: "city1", id: "1", prefCode: 1 },
      { rentPerSqm: 3000, cityName: "city2", id: "2", prefCode: 1 },
      { rentPerSqm: 2000, cityName: "city3", id: "3", prefCode: 1 },
    ];
    expect(avgPrefRent(cities)).toBe(2000);
  });
});
