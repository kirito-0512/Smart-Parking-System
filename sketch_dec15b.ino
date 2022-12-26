#include <WiFi.h>
#include <DHT.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Ultrasonic.h>
#include "time.h"
char* ssid = "Plus"; 
char* passphrase = "12345678"; 
Ultrasonic ultrasonic1(5, 18);
Ultrasonic ultrasonic2(12,14);
int number = 0;	
unsigned long epochTime; 
unsigned long dataMillis = 0;
const char* ntpServer = "pool.ntp.org";
const char* serverName = "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-rzfdk/endpoint/SlotInfo";
StaticJsonDocument<500> doc;
void setup()
{
    Serial.begin(115200);
    WiFi.begin(ssid, passphrase);
    Serial.print("Connecting to Wi-Fi");
    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    Serial.println();
    Serial.print("Connected with IP: ");
    Serial.println(WiFi.localIP());
    Serial.println();

    configTime(0, 0, ntpServer);
}

void loop()
{

   if (millis() - dataMillis > 15000 || dataMillis == 0)
   {
       dataMillis = millis();

       epochTime = getTime();
       Serial.print("Epoch Time: ");
       Serial.println(epochTime);

        if(ultrasonic1.read(CM)<40){
    Serial.print("\nIN\n");
  number = number+1;
Serial.print(number);
  }
  if(ultrasonic2.read(CM)<40){
    Serial.print("\nOUT\n");
  number = number-1;
  Serial.print(number);    
  } 
       doc["sensors"]["number"] = number;
       doc["sensors"]["timestamp"] = epochTime;
       Serial.println("Uploading data... "); 
       POSTData();
   }
}
unsigned long getTime() {
  time_t now;
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    return(0);
  }
  time(&now);
  return now;
}

void POSTData()
{
    if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;
      http.begin(serverName);
      http.addHeader("Content-Type", "application/json");
      String json;
      serializeJson(doc, json);
      Serial.println(json);
      int httpResponseCode = http.POST(json);
      Serial.println(httpResponseCode);

      if (httpResponseCode == 200) {
        Serial.println("Data uploaded.");
      } else {
        Serial.println("ERROR: Couldn't upload data.");
        
      }

    }
}