# tes-apk

React + Vite App converted to Android APK using Capacitor

## Project Overview

This is a React application built with Vite that has been set up to be packaged as an Android APK using Capacitor. It includes automated APK building via GitHub Actions.

## Features

- ⚡ React + Vite for fast development
- 📱 Capacitor for native Android integration
- 🔄 Automatic APK building via GitHub Actions
- 🌐 Offline-capable application

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Building APK Locally

### Prerequisites for Local APK Build

- Java Development Kit (JDK) 11+
- Android SDK installed
- Gradle (comes with Android SDK)

### Steps to Build APK

1. Sync and build the APK:

   ```bash
   npm run build:apk
   ```

   Or manually:

   ```bash
   npm run build          # Build web app
   npx cap sync          # Sync with Android
   cd android && ./gradlew assembleDebug
   ```

2. The APK file will be generated at:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

## Automated APK Building with GitHub Actions

Every time you push code to the `main` branch, GitHub Actions automatically:

1. Builds the React/Vite app
2. Syncs Capacitor with the latest web assets
3. Builds the Android APK
4. Creates a release with the APK as an asset

### Downloading the APK

1. Go to the [Releases](https://github.com/28qt/tes-apk/releases) section
2. Download the `tes-apk-debug.apk` file from the latest release
3. Transfer to your Android device and install

## Project Structure

```
.
├── src/                    # React source code
├── public/                 # Static assets
├── android/               # Android project (Capacitor)
├── dist/                  # Build output
├── capacitor.config.json  # Capacitor configuration
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build web app for production
- `npm run sync` - Build web app and sync with Capacitor
- `npm run build:apk` - Build complete APK (requires Java/Android SDK)
- `npm run lint` - Run ESLint

## Installation on Android

1. Download the APK from releases
2. Enable "Unknown sources" in Android settings
3. Open the APK file on your Android device
4. Follow the installation prompts
5. Launch the app from your app drawer

## Troubleshooting

### APK Build Fails

- Ensure Java JDK 11+ is installed: `java -version`
- Update Android SDK: Open Android Studio → SDK Manager
- Clear Gradle cache: `rm -rf android/.gradle` (then rebuild)

### App Crashes on Launch

- Check that the `dist/` folder exists
- Run `npm run sync` to update web assets
- Check Android Studio for detailed error logs

## Contributing

Feel free to modify the app and push changes. GitHub Actions will automatically build a new APK for each push to main.

## License

MIT
