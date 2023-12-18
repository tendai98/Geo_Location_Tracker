# 🛰️ GPS Tracking with NeoV6 GPS Module and ESP8266

## Overview ℹ️

This project implements GPS tracking using a NeoV6 GPS module and ESP8266. It provides functionalities to track location coordinates and health-related data through a web server.

## Structure 🗂️

```
- Geo_Location_Tracker.ino
- gps.h
- http.h
- max30100.h
- misc.h
- README.md
- wifi.h
```

## Code Overview 💻

### Geo_Location_Tracker.ino

The main code file `Geo_Location_Tracker.ino` integrates functionalities from different header files to execute GPS tracking operations:

- **`setup()`:** Initializes WiFi and serial communication. Functions used: `startWiFi()`, `startSerial()`, `initPox()`, `initControls()`, `initServer()`.
  
- **`loop()`:** Manages GPS updates, server operations, and sensor readings. Functions used: `updatePox()`, `runServer()`.

### gps.h (GPS Functionality) 📡

This header file contains GPS-related functions:

- **`updateGPS()`:** Reads and processes GPS data from the serial port.

- **`getLongitude()`:** Retrieves the longitude coordinate from the GPS data.

- **`getLatitude()`:** Retrieves the latitude coordinate from the GPS data.

### http.h (HTTP Server) 🌐

Handles the HTTP server operations:

- **`getHealthData()`:** Gathers health-related data (heart rate, oxygen level, button state) to be fetched through the `/health` endpoint.

- **`getLocationData()`:** Retrieves latitude and longitude for location tracking via the `/location` endpoint.

### max30100.h (Pulse Oximeter) ❤️

Manages the MAX30100 Pulse Oximeter sensor:

- **`initPox()`:** Initializes the Pulse Oximeter.

- **`updatePox()`:** Updates and retrieves heart rate and oxygen saturation readings.

### misc.h (Miscellaneous Controls) 🎛️

Manages miscellaneous controls:

- **`initControls()`:** Initializes physical inputs (buttons) and controls LED states.

- **`getButton()`:** Reads and returns the state of a button.

### wifi.h (WiFi Configuration) 📶

Configures and initiates WiFi connections using the ESP8266WiFi library to run in WIFI_AP (Access Point) mode

