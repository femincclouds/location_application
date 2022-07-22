import moment from "moment";
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import { checkHttpStat, getLocationDetails } from "../actions";
import CurrentLocation from "../components/current";
import PreviousLocations from "../components/previous";
import { SET_CURRENT_LOCATION, SET_LOCATION_HISTORY } from "../context/reducer";
import { useAppState, useDispatch } from "../hooks/appstate";
import { useInterval } from "../hooks/intervals";
import { getLocation, getNewLocationHistory } from "../utils/helper";
const Home: React.FC = () => {
  const state = useAppState();
  const dispatch = useDispatch();
  const stateRef = useRef<any>(state);

  const saveCurrentLocation = async () => {
    const data = await getLocation();
    if (data) {
      const coords = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      };
      const locationDetails = await getLocationDetails(
        coords.latitude,
        coords.longitude
      );
      if (locationDetails.success) {
        const statusData = await checkHttpStat(locationDetails.data);
        if (statusData.success) {
          const newHistory = getNewLocationHistory(
            stateRef.current?.current,
            stateRef.current?.history
          );
          dispatch({
            type: SET_CURRENT_LOCATION,
            payload: {
              current: {
                name: locationDetails.data,
                time: moment().format("DD/MM/YYYY, hh:mm:ss"),
                coords: coords,
              },
              history: newHistory,
            },
          });
        } else {
          Alert.alert("Error", statusData.data);
        }
      } else {
        Alert.alert("Error", locationDetails.data);
      }
    }
  };

  const removeItem = (index: number) => {
    const newHistory = state?.history.filter(
      (_: any, idx: any) => idx !== index
    );
    dispatch({
      type: SET_LOCATION_HISTORY,
      payload: newHistory,
    });
  };

  const clearAll = () => {
    dispatch({
      type: SET_LOCATION_HISTORY,
      payload: [],
    });
  };

  useInterval(() => {
    saveCurrentLocation();
  });

  useEffect(() => {
    stateRef.current = state;
  }, [state.current.time, state.history.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Location Manager</Text>
      <Text style={styles.subHeader}>Current Location</Text>
      <CurrentLocation data={state.current} />
      <Text style={styles.subHeader}>Previous Locations</Text>
      <PreviousLocations history={state.history} removeItem={removeItem} />
      <TouchableOpacity style={styles.clearBtn} onPress={clearAll}>
        <Text style={styles.clearText}>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    position: "relative",
  },
  header: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    color: "#999",
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    position: "absolute",
    bottom: "2%",
    right: "5%",
    width: "100%",
    backgroundColor: "blue",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  clearBtn: {
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
  },
  clearText: {
    fontSize: 20,
    color: "white",
  },
});

export default Home;
