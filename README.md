# Flight Information Display System

Simple and effective flight information display system for use at airports, displaying a live and up-to-date departure board, customisable for your airline needs.

https://flight-information-display.vercel.app/

![image](https://user-images.githubusercontent.com/69449713/213903474-134dee23-f021-4303-9ad9-a9b27ec15f02.png)

## How to setup an airline?
1. Visit https://flight-information-display.vercel.app/ and you will be directed to the login page. Your login is your airline.
	![image](https://user-images.githubusercontent.com/69449713/213902738-a86fe3be-a173-4ace-bfb9-e189c0cf1614.png)

2. Once you have logged in, you will be met with the home page.
![image](https://user-images.githubusercontent.com/69449713/213903546-4a251951-980e-4a75-9052-fdffc205e8d4.png)

3. Edit the airline name, airline logo, header color, and text color under the "Airline Configuration" card. This information will be automatically saved when you make changes to these values.

### What are the airline configuration values?
**Airline Name:** This is the name of your airline.
**Airline Logo:** The logo which appears at the top left of the viewer (FID).
**Header Color:** The background color of the top of the viewer (FID).
**Text Color:** The color of the text at the top of the viewer (FID).

## How add a flight?
1.  Visit https://flight-information-display.vercel.app/add or click "Add Flight" at the top of the page.

2. You will be met with the add flight page.
![image](https://user-images.githubusercontent.com/69449713/213903561-13891059-db7e-493e-a5aa-5cc509fc8eda.png)

3. On this page, fill out all of the details of the flight you want to add to your flights database.

4. Once all the details are filled out (you are required to fully complete these fields), click "Add Flight".

5. The flight will now be stored in the flight database.

Note:  The flight viewer (FID) on the home page and the add flight page will only display the flights that are scheduled to depart on that day.

## How do I edit flights?
1. Navigate to https://flight-information-display.vercel.app/edit or click "Edit Flight" at the top of the page.

2. You will be met with the edit flight page.
![image](https://user-images.githubusercontent.com/69449713/213903579-206f8ffb-a983-4c29-8ea5-bd1db3994fef.png)

3. On this page, click on any text or any date to edit the flight details. Once you type the new changes, as soon as you click off the input field these changes are saved.  These changes are immediately reflected on the page.

Note: The colours on the left and right of each flight row have meaning. The red colour means the flight is no longer visible on the viewer (FID). The green means the flight is currently being displayed on the viewer (FID).

## How do I view the FID?
**If you are logged in:**
1. Click on the "Viewer" at the top of the page when logged in, and you will be met with the viewer (FID) page.

Note: if you copy the link in the URL, you can share this with friends and they will be able to view the live FID for your airline.

**If you are logged out:**
1. Navigate to https://flight-information-display.vercel.app/viewer.

2. You will be met with the viewer input page.
![image](https://user-images.githubusercontent.com/69449713/213903388-9b053386-7cf5-4149-b2fb-39f4ab8a8344.png)

3. Insert the airline code of the airline you wish to view in the "Airline Code" input box. You can get this airline code from the home page in the "Airline Configuration" card. If you wish to view a friends airline, ask them for their airline code.

4. Once the airline code has been added, click "View". You will then be navigated to the airline's FID.
![image](https://user-images.githubusercontent.com/69449713/213903474-134dee23-f021-4303-9ad9-a9b27ec15f02.png)
