import { Ragion } from "@/libs/ragion";
import exp from "constants";

describe("Ragion", () => {
  it("return ragion by prefNumber Hokkaido", () => {
    const prefNumber = 1;
    expect(Ragion(prefNumber)).toEqual({
      name: "北海道",
      code: 1,
      roma: "Hokkaido",
    });
  });

  it("return ragion by prefNumber Tohoku", () => {
    const prefNumber = 6;
    expect(Ragion(prefNumber)).toEqual({
      name: "東北",
      code: 2,
      roma: "Tohoku",
    });
  });

  it("return ragion by prefNumber Kanto", () => {
    const prefNumber = 14;
    expect(Ragion(prefNumber)).toEqual({
      name: "関東",
      code: 3,
      roma: "Kanto",
    });
  });

  it("return ragion by prefNumber Chubu", () => {
    const prefNumber = 23;
    expect(Ragion(prefNumber)).toEqual({
      name: "中部",
      code: 4,
      roma: "Chubu",
    });
  });

  it("return ragion by prefNumber Kinki", () => {
    const prefNumber = 30;
    expect(Ragion(prefNumber)).toEqual({
      name: "近畿",
      code: 5,
      roma: "Kinki",
    });
  });

  it("return ragion by prefNumber Chugoku", () => {
    const prefNumber = 32;
    expect(Ragion(prefNumber)).toEqual({
      name: "中国",
      code: 6,
      roma: "Chugoku",
    });
  });

  it("return ragion by prefNumber Shikoku", () => {
    const prefNumber = 38;
    expect(Ragion(prefNumber)).toEqual({
      name: "四国",
      code: 7,
      roma: "Shikoku",
    });
  });

  it("return ragion by prefNumber Kyushu", () => {
    const prefNumber = 44;
    expect(Ragion(prefNumber)).toEqual({
      name: "九州",
      code: 8,
      roma: "Kyushu",
    });
  });

  it("return ragion by prefNumber Okinawa", () => {
    const prefNumber = 47;
    expect(Ragion(prefNumber)).toEqual({
      name: "沖縄",
      code: 9,
      roma: "Okinawa",
    });
  });

  it("return Error by Invalid prefNumber", () => {
    const prefNumber = 48;
    expect(() => Ragion(prefNumber)).toThrow("Invalid prefecture number");
  });
});
