import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  data: any;
};

const CurrentLocation: React.FC<Props> = ({ data }) => {
  if (!data.time) return <View />;

  const nameArray = data.name.split(" ");

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>
          {nameArray?.[0]?.[0] || "NA"}
          {nameArray?.[1]?.[0] || ""}
        </Text>
      </View>
      <View style={styles.fullFlex}>
        <Text style={styles.header} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.subHeader}>{data.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  icon: {
    backgroundColor: "orange",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  iconText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  header: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  subHeader: {
    color: "#999",
    fontSize: 16,
  },
  fullFlex: {
    flex: 1,
  },
});

export default CurrentLocation;
