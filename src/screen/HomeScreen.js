import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../utilities/Color";
import logo from "../images/logo.png";
import ExpensesCard from "../components/ExpensesCard";
import expensesData from "../utilities/expensesData";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileRow}>
        <View style={styles.profileBox}>
          <Image style={styles.profileLogo} source={logo} />
        </View>
        <View style={styles.textAlign}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.titleName}>Abdullah Al Hady!</Text>
        </View>
      </View>
      <StatusBar style="auto" />
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTotal}>Total Balance</Text>
        <View style={styles.balanceText}>
          <Text style={styles.balanceBDT}>BDT</Text>
          <Text style={styles.balanceValue}>20,000</Text>
        </View>
      </View>

      <Button title="Go to Faqs" onPress={() => navigation.push("Faqs")} />
      {/* Expenses Cards */}
      <ScrollView>
        <View style={styles.expenseContainer}>
          {expensesData.map((expense) => (
            <ExpensesCard expense={expense} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  profileBox: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: Colors.PROFILE,
    width: 60,
    height: 60,
  },
  profileLogo: {
    width: 40,
    height: 40,
  },
  textAlign: {
    paddingLeft: 10,
    flexDirection: "column",
  },
  profileRow: {
    flexDirection: "row",
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.TEXT_GRAY,
  },
  titleName: {
    fontSize: 20,
    fontWeight: "600",
  },
  balanceCard: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    height: 180,
    borderRadius: 10,
    backgroundColor: Colors.PRIMARY,
  },
  balanceTotal: {
    fontSize: 16,
    color: Colors.TEXT_WHITE,
  },
  balanceText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  balanceBDT: {
    fontSize: 12,
    color: Colors.TEXT_GRAY,
    flexDirection: "row",
  },
  balanceValue: {
    fontSize: 40,
    fontWeight: "700",
    paddingRight: 30,
    paddingLeft: 10,
    color: Colors.TEXT_WHITE,
  },
  expenseContainer: {
    marginTop: 10,
    backgroundColor: "#fcfcfc",
  },
});

export default Home;
