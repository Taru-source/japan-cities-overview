type Ragion = {
  name: RegionName;
  code: RagionCode;
  roma: string;
};

enum RegionName {
  Hokkaido = "北海道",
  Tohoku = "東北",
  Kanto = "関東",
  Chubu = "中部",
  Kinki = "近畿",
  Chugoku = "中国",
  Shikoku = "四国",
  Kyushu = "九州",
  Okinawa = "沖縄",
}

enum RagionCode {
  Hokkaido = 1,
  Tohoku = 2,
  Kanto = 3,
  Chubu = 4,
  Kinki = 5,
  Chugoku = 6,
  Shikoku = 7,
  Kyushu = 8,
  Okinawa = 9,
}

export const Ragion = (prefectureNumber: number): Ragion => {
  switch (true) {
    case prefectureNumber === 1:
      return {
        name: RegionName.Hokkaido,
        code: RagionCode.Hokkaido,
        roma: Object.keys(RegionName)[RagionCode.Hokkaido - 1],
      };
    case prefectureNumber >= 2 && prefectureNumber <= 7:
      return {
        name: RegionName.Tohoku,
        code: RagionCode.Tohoku,
        roma: Object.keys(RegionName)[RagionCode.Tohoku - 1],
      };
    case prefectureNumber >= 8 && prefectureNumber <= 14:
      return {
        name: RegionName.Kanto,
        code: RagionCode.Kanto,
        roma: Object.keys(RegionName)[RagionCode.Kanto - 1],
      };
    case prefectureNumber >= 15 && prefectureNumber <= 23:
      return {
        name: RegionName.Chubu,
        code: RagionCode.Chubu,
        roma: Object.keys(RegionName)[RagionCode.Chubu - 1],
      };
    case prefectureNumber >= 24 && prefectureNumber <= 30:
      return {
        name: RegionName.Kinki,
        code: RagionCode.Kinki,
        roma: Object.keys(RegionName)[RagionCode.Kinki - 1],
      };
    case prefectureNumber >= 31 && prefectureNumber <= 35:
      return {
        name: RegionName.Chugoku,
        code: RagionCode.Chugoku,
        roma: Object.keys(RegionName)[RagionCode.Chugoku - 1],
      };
    case prefectureNumber >= 36 && prefectureNumber <= 39:
      return {
        name: RegionName.Shikoku,
        code: RagionCode.Shikoku,
        roma: Object.keys(RegionName)[RagionCode.Shikoku - 1],
      };
    case prefectureNumber >= 40 && prefectureNumber <= 46:
      return {
        name: RegionName.Kyushu,
        code: RagionCode.Kyushu,
        roma: Object.keys(RegionName)[RagionCode.Kyushu - 1],
      };
    case prefectureNumber === 47:
      return {
        name: RegionName.Okinawa,
        code: RagionCode.Okinawa,
        roma: Object.keys(RegionName)[RagionCode.Okinawa - 1],
      };
    default:
      throw new Error("Invalid prefecture number");
  }
};
