# Multi-Language-Template

This Repo to help react native developers to get fast implement on multi languages
React Native Developers will find a good structure file, which will be easy to understand each file, the navigation that used on this repo is only Stack
two different files in i18n, which contain the resources of words in Arabic and English 
when Developer need to use, you have to call useTranslation from react-i18next.

# Steps Before Running the repo:
1- yarn 
  * To download all Packges that need on the repo
  * Make sure you have to install CocoaPods
  
2- Either npx pod-install ios or 
  * cd ios
  * pod install
  * cd ..

# Running on IOS deveics:
- yarn ios

# Running on Android devices:
- yarn android

# Notes:
- Application will restart when select the language because react native need to be restart to change the layout from LTR to RTL.

# Future Plan
- Will use a custom font in expo-font
- will use a theme in Dark mode and Light mode
- Will use a splash screen when restating the application 
- Will use a local api with TanStack Query [Fetch, Post and update]

# Update dependencies in package.json to latest versions:
- yarn upgrade-interactive --latest

# Contact
Please inform me if there is any question or there is a sample way to use this repo
