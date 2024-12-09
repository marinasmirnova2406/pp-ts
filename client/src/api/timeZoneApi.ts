import axios from "axios";

type TimeZoneResult = string | null;

export async function timeZoneApi(): Promise<TimeZoneResult> {
  try {
    const response = await axios.get("https://worldtimeapi.org/api/ip");
    const data = response.data;

    if (!data || !data.utc_offset) {
      throw new Error("UTC offset not found in API response");
    }

    const utcOffset = data.utc_offset;

    switch (utcOffset) {
      case "-12:00":
        return "UTC-12";
      case "-11:00":
        return "UTC-11";
      case "-10:00":
        return "UTC-10";
      case "-09:00":
        return "UTC-9";
      case "-08:00":
        return "UTC-8";
      case "-07:00":
        return "UTC-7";
      case "-06:00":
        return "UTC-6";
      case "-05:00":
        return "UTC-5";
      case "-04:00":
        return "UTC-4";
      case "-03:00":
        return "UTC-3";
      case "-02:00":
        return "UTC-2";
      case "-01:00":
        return "UTC-1";
      case "+00:00":
        return "UTC+0";
      case "+01:00":
        return "UTC+1";
      case "+02:00":
        return "UTC+2";
      case "+03:00":
        return "UTC+3";
      case "+03:30":
        return "UTC+3:30";
      case "+04:00":
        return "UTC+4";
      case "+04:30":
        return "UTC+4:30";
      case "+05:00":
        return "UTC+5";
      case "+05:30":
        return "UTC+5:30";
      case "+05:45":
        return "UTC+5:45";
      case "+06:00":
        return "UTC+6";
      case "+06:30":
        return "UTC+6:30";
      case "+07:00":
        return "UTC+7";
      case "+08:00":
        return "UTC+8";
      case "+09:00":
        return "UTC+9";
      case "+09:30":
        return "UTC+9:30";
      case "+10:00":
        return "UTC+10";
      case "+10:30":
        return "UTC+10:30";
      case "+11:00":
        return "UTC+11";
      case "+12:00":
        return "UTC+12";
      case "+12:45":
        return "UTC+12:45";
      case "+13:00":
        return "UTC+13";
      default:
        return null;
    }
  } catch (error) {
    console.error("Error fetching timezone:", error);
    return null;
  }
}
