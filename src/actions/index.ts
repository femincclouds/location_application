import axios from "axios";
import { API_KEY, http } from "../utils/http";

export const getLocationDetails = async (
  lat: number,
  lng: number
): Promise<any> => {
  try {
    const data = await http.get(`?key=${API_KEY}&q=${lat}+${lng}`);
    if (data?.data?.results?.length) {
      const locationObject = data.data.results[0];
      return {
        success: true,
        data: locationObject?.formatted || "",
      };
    }
  } catch (err) {
    console.log(err);
  }
  return {
    success: false,
    data: "Data not found",
  };
};

export const checkHttpStat = async (name: string): Promise<any> => {
  const body = {
    location_name: name,
    time: new Date().getTime(),
  };

  try {
    const data = await axios.post("https://httpstat.us/200", body);
    if (data?.data?.code === 200) {
      return {
        success: true,
        data: "OK",
      };
    }
  } catch (err) {}
  return {
    success: false,
    data: "HTTP check failed",
  };
};
