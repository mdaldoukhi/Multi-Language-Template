import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{t("WelcomeText")}</Text>
    </View>
  );
};

export default HomeScreen;
