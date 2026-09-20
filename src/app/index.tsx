import { StyleSheet, Text, View, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heart}>♥</Text>

        <Text style={styles.title}>Welcome to SAATH</Text>

        <Text style={styles.subtitle}>
          Real connections.{"\n"}
Meaningful relationships.
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

        <Text style={styles.login}>
          Already have an account? <Text style={styles.loginBold}>Log In</Text>
        </Text>
      </View>

      <Text style={styles.footer}>
        © 2026 Saath. All rights reserved
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 25,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  heart: {
    fontSize: 75,
    color: "#E91E63",
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D81B60",
    textAlign: "center",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 45,
  },

  button: {
    backgroundColor: "#E91E63",
    width: "85%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    elevation: 4,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  login: {
    marginTop: 22,
    fontSize: 14,
    color: "#777",
  },

  loginBold: {
    color: "#E91E63",
    fontWeight: "bold",
  },

  footer: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});