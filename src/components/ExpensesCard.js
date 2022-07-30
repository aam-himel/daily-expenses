import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../utilities/Color";

const ExpensesCard = ({ expense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{expense.title}</Text>
      <Text style={styles.text}>{expense.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 40,
    paddingLeft: 10,
    marginBottom: 6,
    borderRadius: 4,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.TEXT_DARK,
  },
});

export default ExpensesCard;
