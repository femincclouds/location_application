import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  history: any[];
  removeItem: (index: number) => void;
};

const PreviousLocations: React.FC<Props> = ({ history, removeItem }) => {
  return (
    <FlatList
      data={history}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.rowBetween} key={index}>
            <View style={styles.fullFlex}>
              <Text style={styles.header} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.subHeader}>
                {item.time} {index}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.clearBtn}
                onPress={() => removeItem(index)}
              >
                <Text style={styles.clearText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    color: "#333",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  subHeader: {
    color: "#999",
    fontSize: 16,
    marginBottom: 10,
  },
  fullFlex: {
    flex: 1,
    marginRight: 10,
  },
  clearBtn: {
    padding: 10,
    backgroundColor: "grey",
    borderRadius: 10,
    alignItems: "center",
  },
  clearText: {
    fontSize: 20,
    color: "white",
  },
});

export default PreviousLocations;
