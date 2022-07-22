import * as Loc from "expo-location"

const LIMIT = 30;

export const getLocation = async (): Promise<Loc.LocationObject | null> => {
    try {
        const { status } = await Loc.requestForegroundPermissionsAsync();
        if (status === "granted") {
            const data = await Loc.getCurrentPositionAsync({});
            return data;
        }
    } catch (err) { }
    return null;
}

export const getNewLocationHistory = (current: any, history: any[]): any[] => {

    const newHistory = current?.name ?
        [current, ...history] :
        history;

    if (history.length > LIMIT) {
        newHistory.pop();
    }
    return newHistory;
}