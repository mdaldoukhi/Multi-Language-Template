import {
  View,
  I18nManager,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import i18next from "i18next";
import RNRestart from "react-native-restart";
import i18n from "../i18n/i18next";
import { useTranslation } from "react-i18next";

/*
  Screens handle the Language on the application
  will cover two buttons for switch between the languages
*/

const LanguageScreen = () => {
  //call translation
  const { t } = useTranslation();
  return (
    <View style={styles.Container}>
      <View style={{ height: "50%" }}>
        <Image
          source={require("../assets/images/language.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.languageView}>
        <Text style={styles.title}>{t("SelectLang")}</Text>
        <TouchableOpacity
          onPress={() =>
            i18next
              .changeLanguage("ar")
              .then(() => I18nManager.forceRTL(i18n.language === "ar"))
              .then(() => RNRestart.Restart())
          }
          disabled={i18n.language === "ar"}
          style={[
            styles.TouchStyle,
            { backgroundColor: i18n.language === "ar" ? "#000" : "#fff" },
          ]}
        >
          <Text style={{ color: I18nManager.isRTL ? "#fff" : "#000" }}>
            {t("Arabic")}
          </Text>
          <Image
            source={require("../assets/images/arabic.png")}
            style={{ width: 25, height: 25, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            i18next
              .changeLanguage("en")
              .then(() => I18nManager.forceRTL(i18n.language === "ar"))
              .then(() => RNRestart.Restart())
          }
          disabled={i18n.language === "en"}
          style={[
            styles.TouchStyle,
            { backgroundColor: I18nManager.isRTL ? "#fff" : "#000" },
          ]}
        >
          <Text style={{ color: I18nManager.isRTL ? "#000" : "#fff" }}>
            {t("English")}
          </Text>
          <Image
            source={require("../assets/images/english.png")}
            style={{ width: 25, height: 25, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Here where the styles of the page
const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  languageView: {
    backgroundColor: "#fff",
    height: "50%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  TouchStyle: {
    width: "80%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default LanguageScreen;
