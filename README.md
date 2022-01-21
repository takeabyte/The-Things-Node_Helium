# The Things Node for Helium LoRaWAN Network
by [takeabyte](https://github.com/takeabyte/the-things-node_helium)



## Purpose
This is a modification of the THINGS NETWORK Code to enable the The Things Node DevKit to run on Helium Network. 

The Things Node is based on the SparkFun Pro Micro - 3.3V/8MHz with added Microchip LoRaWAN® module and temperature sensor, NXP’s digital accelerometer, a light sensor, button, and RGB LED. All this is packaged in a matchbox-sized waterproof (IP54) casing with 3 AAA batteries to power it for months of usage.

see original Documentation https://www.thethingsnetwork.org/docs/devices/node/


## Howto
Enter your AppEUI and AppKey from console and set your Frequency according to your country freq. plan. 
(it supports eu863-870  and us902-928) 
Upload with Platformio and wait for an uplink and the console to show Join Accept.
To find your DevEUI open Terminal window within Platformio and press the button on the TTNode. You will see the serialoutput with DevEUI. Copy paste this string to the console website > device > yourdevice > UPDATE DevEUI by clicking the pencil symbol next to the existing string. 


It will push a Packet every 6 Hours as a heartbeat, or send instantly if you push the button or trigger the accelerometer. 


![the-things-node](https://user-images.githubusercontent.com/10709642/150609058-a8324acf-cbb6-4bc9-9edd-25d068c4e5a4.jpeg)

![node-reset-led](https://user-images.githubusercontent.com/10709642/150609052-1596d61b-d240-4643-b8a3-a9e6754b1ecf.jpeg)


