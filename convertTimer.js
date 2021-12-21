function timeConversion(s) {
  // Write your code here
  const ifPM = s.endsWith("PM");
  const ifAM = s.endsWith("AM");

  if (ifPM) {
    if (s.startsWith("12")) {
      const responsePm = s.substring(0, 8);
      console.log(responsePm);
      return responsePm;
    } else {
      const initialValorPm = s.substring(0, 2);
      const parseInitialValorPm = parseInt(initialValorPm);
      const militaryHoursPm = (parseInitialValorPm + 12).toString();
      const finalMilitaryHourPm = `${militaryHoursPm}${s.substring(2, 8)}`;
      console.log(finalMilitaryHourPm);
      return finalMilitaryHourPm;
    }
  } else if (ifAM) {
    if (s.startsWith("12")) {
      const responseAm = `00${s.substring(2, 8)}`;
      console.log(responseAm);
      return responseAm;
    } else {
      const finalMilitaryHourAm = s.substring(0, 8);
      console.log(finalMilitaryHourAm);
      return finalMilitaryHourAm;
    }
  }
}

timeConversion("07:05:45PM");
