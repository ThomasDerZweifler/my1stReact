
---- Git push an existing repository from the command line
git remote add origin https://github.com/ThomasDerZweifler/my1stReact.git
git branch -M main
git push -u origin main


---- EXPO (tools, eas)

https://docs.expo.dev/

---------- Build apk ----------------

Builds Pricing (https://expo.dev/pricing)

Free plan: Includes 30 builds (up to 15 iOS) per month in a lower-priority queue

Paid plans: Usage-based pricing for priority builds and access to larger workers

Worker size

Pricing

Android medium  $1 per build
Android large   $2 per build
iOS medium      $2 per build
iOS large       $4 per build


https://dev.to/chinmaymhatre/how-to-generate-apk-using-react-native-expo-kae
https://docs.expo.dev/build/setup/

https://expo.dev/accounts/thomasderzweifler71

https://expo.dev/brand


PS C:\Users\funno\git\my1stReact> expo login
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
√ Username/Email Address: ... thomasfunke71@googlemail.com
√ Password: ... **************

Success. You are now logged in as thomasderzweifler71.
PS C:\Users\funno\git\my1stReact> expo whoami
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Logged in as thomasderzweifler71
PS C:\Users\funno\git\my1stReact> dir


    Verzeichnis: C:\Users\funno\git\my1stReact


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        24.02.2024     11:49                .expo
d-----        25.02.2024     22:15                .vscode
d-----        19.02.2024     18:49                assets
d-----        24.02.2024     11:53                node_modules
-a----        26.10.1985     10:15            375 .gitignore
-a----        24.02.2024     09:13            694 App.js
-a----        19.02.2024     18:49            621 app.json
-a----        26.10.1985     10:15            107 babel.config.js
-a----        24.02.2024     09:13            546 OwnComponent.tsx
-a----        24.02.2024     11:53         519198 package-lock.json
-a----        24.02.2024     11:53            694 package.json
-a----        19.02.2024     22:00           2733 tagcloud.jsx
-a----        23.02.2024     09:18             63 tsconfig.json

PS C:\Users\funno\git\my1stReact> npm install -g eas-cli
npm WARN deprecated @oclif/screen@3.0.8: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.

added 408 packages in 27s

38 packages are looking for funding
  run `npm fund` for details
PS C:\Users\funno\git\my1stReact> eas build -p android --profile preview
Loaded "env" configuration for the "preview" profile: no environment variables specified. Learn more: https://docs.expo.dev/build-reference/variables/
EAS project not configured.
√ Would you like to automatically create an EAS project for @thomasderzweifler71/myReal? ... yes
✔ Created @thomasderzweifler71/myReal: https://expo.dev/accounts/thomasderzweifler71/projects/myReal on Expo
✔ Linked local project to EAS project 5da3ee37-e48b-4c69-b20b-37aeabe8181b

📝  Android application id Learn more: https://expo.fyi/android-package
√ What would you like your Android application id to be? ... com.thomasderzweifler71.myReal
✔ Using remote Android credentials (Expo server)
√ Generate a new Android Keystore? ... yes
✔ Created keystore

Compressing project files and uploading to EAS Build. Learn more: https://expo.fyi/eas-build-archive
✔ Uploaded to EAS

Build details: https://expo.dev/accounts/thomasderzweifler71/projects/myReal/builds/0933332e-bbfe-4403-aa9c-d14231cd1582
Waiting for build to complete. You can press Ctrl+C to exit.
/ Build in progress...

🤖 Android app:
https://expo.dev/artifacts/eas/28TG111RD9bHygCd8MVKQw.apk

√ Install and run the Android build on an emulator? ... no
PS C:\Users\funno\git\my1stReact>

-------------install apk--------------
https://www.xda-developers.com/install-adb-windows-macos-linux/

plattform-tools laden:
https://dl.google.com/android/repository/platform-tools-latest-windows.zip

Entpacken:  C:\Users\funno\platform-tools

Umgebungsvariable PATH erweitern um Pfad: C:\Users\funno\platform-tools

Windows PowerShell
Copyright (C) Microsoft Corporation. Alle Rechte vorbehalten.

Installieren Sie die neueste PowerShell für neue Funktionen und Verbesserungen! https://aka.ms/PSWindows

PS C:\Users\funno> cd git
PS C:\Users\funno\git> cd .\my1stReact\
PS C:\Users\funno\git\my1stReact> cd .\build\
PS C:\Users\funno\git\my1stReact\build> dir


    Verzeichnis: C:\Users\funno\git\my1stReact\build


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        25.02.2024     22:37       60796225 application-0933332e-bbfe-4403-aa9c-d14231cd1582.apk


PS C:\Users\funno\git\my1stReact\build> adb devices
* daemon not running; starting now at tcp:5037
* daemon started successfully
List of devices attached
1A271FDF6000W5  device

PS C:\Users\funno\git\my1stReact\build> adb install .\application-0933332e-bbfe-4403-aa9c-d14231cd1582.apk
Performing Streamed Install
Success
PS C:\Users\funno\git\my1stReact\build>

find app on device: myReal

------------ web -----------------
PS C:\Users\funno\git\my1stReact> npx expo install @expo/metro-runtime
› Installing 1 SDK 50.0.0 compatible native module using npm
> npm install

added 1 package, and audited 1179 packages in 2s

65 packages are looking for funding
  run `npm fund` for details

5 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\funno\git\my1stReact> npx expo
Starting project at C:\Users\funno\git\my1stReact
Starting Metro Bundler
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █ ██▀▀█▄▄██ ▄▄▄▄▄ █
█ █   █ █  ▀█ ▀█▄▄█ █   █ █
█ █▄▄▄█ █▀  █▄ ▀▄▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄█ ▀▄█ █▄█▄▄▄▄▄▄▄█
█ ▄██ ▄▄█▀█▄█▄▀▄▀▄██ ▀▄▄ ▄█
█▄▄▀█  ▄▀▄ ▄█▀▄▀ ▀▀ █▄  ▀██
█   █▀▄▄▀▀█▀▄ █▄▀▄▀▄▀▀▄ ▀██
███▀▄▀█▄▄▀▄█ ▄██▄▄▄█▄▀ ▀███
█▄▄▄██▄▄▄▀ █▀▀█▄▄ ▄▄▄ ▀ ▄▄█
█ ▄▄▄▄▄ █▀▄█ █▄█▀ █▄█ ▀▀▀▀█
█ █   █ █▄▄  ▀█▄█▄▄ ▄▄▀ ▀▀█
█ █▄▄▄█ █▀ █ ███▄██▄▀█▀▀ ██
█▄▄▄▄▄▄▄█▄█▄███▄████▄▄▄▄▄▄█

› Metro waiting on exp://192.168.178.138:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
› Open in the web browser...
› Press ? │ show all commands
Web Bundled 4239ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
› Opening on Android...
› Opening exp://192.168.178.138:8081 on Pixel_6
› Press ? │ show all commands
Web Bundled 10ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 17ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 12ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 18ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 10ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 18ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 12ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
Web Bundled 14ms (C:\Users\funno\git\my1stReact\node_modules\expo\AppEntry.js)
› Stopped server
PS C:\Users\funno\git\my1stReact> 
 *  History restored 

 the app will nbe opened in default browser: http://localhost:8081/

 