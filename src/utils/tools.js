export const convertNameCinema = (currentCinema) => {
  switch (currentCinema) {
    case "bttx":
      return "Beta Thanh Xuân";
    case "btmd":
      return "Beta Mỹ Đình";
    case "btqt":
      return "Beta Quang Trung";
    case "btbg":
      return "Beta Bắc Giang";
    default:
      return "Beta Thanh Xuân";
  }
};
