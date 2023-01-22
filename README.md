![fullLogo](https://user-images.githubusercontent.com/69449713/213912081-2a67d5f2-8c74-49ee-8cdd-7faca1e2e7a3.png | width=100)
# flyview - Flight Information Display System

Simple and effective flight information display system for use at airports, displaying a live and up-to-date departure board, customisable for your airline needs.

https://flyview.vercel.app/

![image](https://user-images.githubusercontent.com/69449713/213912227-a1af0387-b492-4768-a3d6-1c34636b32b2.png)

## How to setup an airline?
1. Visit https://flight-information-display.vercel.app/ and you will be directed to the login page. Your login is your airline.
![image](https://user-images.githubusercontent.com/69449713/213912212-627e7a23-7de2-4c0b-8f6f-c56d3f5945dc.png)

2. Once you have logged in, you will be met with the home page.
![image](https://user-images.githubusercontent.com/69449713/213912182-b38c86e2-8bc4-4aa6-887e-6684874a3a6f.png)

3. Edit the airline name, airline logo, header color, and text color under the "Airline Configuration" card. This information will be automatically saved when you make changes to these values.

### What are the airline configuration values?
**Airline Name:** This is the name of your airline.
**Airline Logo:** The logo which appears at the top left of the viewer (FID).
**Header Color:** The background color of the top of the viewer (FID).
**Text Color:** The color of the text at the top of the viewer (FID).

## How add a flight?
1.  Visit https://flight-information-display.vercel.app/add or click "Add Flight" at the top of the page.

2. You will be met with the add flight page.
![image](https://user-images.githubusercontent.com/69449713/213912241-2d9aafad-1978-48b7-ac96-f0fb13d4501d.png)

3. On this page, fill out all of the details of the flight you want to add to your flights database.

4. Once all the details are filled out (you are required to fully complete these fields), click "Add Flight".

5. The flight will now be stored in the flight database.

Note:  The flight viewer (FID) on the home page and the add flight page will only display the flights that are scheduled to depart on that day.

## How do I edit flights?
1. Navigate to https://flight-information-display.vercel.app/edit or click "Edit Flight" at the top of the page.

2. You will be met with the edit flight page.
![image](https://user-images.githubusercontent.com/69449713/213912252-73bc425e-b789-4572-927b-81cc792bf913.png)

3. On this page, click on any text or any date to edit the flight details. Once you type the new changes, as soon as you click off the input field these changes are saved.  These changes are immediately reflected on the page.

Note: The colours on the left and right of each flight row have meaning. The red colour means the flight is no longer visible on the viewer (FID). The green means the flight is currently being displayed on the viewer (FID).

## How do I view the FID?
**If you are logged in:**
1. Click on the "Viewer" at the top of the page when logged in, and you will be met with the viewer (FID) page.

Note: if you copy the link in the URL, you can share this with friends and they will be able to view the live FID for your airline.

**If you are logged out:**
1. Navigate to https://flight-information-display.vercel.app/viewer.

2. You will be met with the viewer input page.
![image](https://user-images.githubusercontent.com/69449713/213912365-616b0315-de41-4857-abdc-ed5355f44f8e.png)

3. Insert the airline code of the airline you wish to view in the "Airline Code" input box. You can get this airline code from the home page in the "Airline Configuration" card. If you wish to view a friends airline, ask them for their airline code.

4. Once the airline code has been added, click "View". You will then be navigated to the airline's FID.
![image](https://user-images.githubusercontent.com/69449713/213912227-a1af0387-b492-4768-a3d6-1c34636b32b2.png)
