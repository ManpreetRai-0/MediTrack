# Installation Guide

1. You will need to install React, Node.js, GitHub Desktop(for ease of use) and VSCode in order to run this project.

2. To install Node.js use this link: https://nodejs.org/en/
   To ensure you've installed it correctly, simply open your command prompt and type "node -v". It return the version number of Node.js that you've installed.

3. Install VSCode here: https://code.visualstudio.com/

4. For ease of use, consider installing GitHub Desktop version to access the repository.

5. Using GitHub, access the repository and download the project's most recent version from the master branch

6. Install the repository to VSCode

7. Open the VSCode terminal at the bottom of the window and type in "npx create new-react-app" to install react. Use the arrow keys to select "React" then select "Javascript"

8. Open the terminal and type "cd [file path to the project folder]". This will open the project folder.

9. Using the terminal again, type in `npm install`. THIS WILL INSTALL ALL DEPENDENCIES REQUIRED TO RUN THE APP. RUN THIS FIRST.

10. Using the terminal one last time, type in `npm start` or `npm run build`. Either one will run the web app. Start will create an uncompiled version and Build will create a compiled version which can be run on a web server. Once you press enter it should automatically open the app in your prefered/default browser.

11. If it does not open automatically, in the terminal there will be a link that is along the lines of ["http://localhost:3000"]. All you need to do is open that link by holding CTRL and clicking it and the web app will open.

# Getting Started with Create React App
1. Install react (Visual Studio Code)
2. Install node.js (comes with npm)


In the project directory, you can run:

### `npm install`

Installs any and all of the app's dependencies not installed yet
REQUIRED TO RUN APP
RUN THIS FIRST BEFORE ATTEMPTING TO RUN/START APP

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

# GitHub
1. Open the MediTrack repository on GitHub desktop
2. Click on "Repository" on the top right 
3. Click on "Open in Visual Studio Code"

# VS Code
1. Once the repository is open in VS Code, enter the following into the terminal:

## npm install

2. Then enter the following to run the code as a web app in a browser:

## npm start

# Setting up Firebase
1. Use the Authentication feature on Firebase to implement Authentication for MediTrack
2. Use the Email/Password sign-in method found in "Sign-in method".
3. Implement password reset template found in "Templates".

# Firebase Authentication
1. Use the Authentication feature on Firebase to implement Authentication for MediTrack
2. Use the Email/Password sign-in method found in "Sign-in method".
3. Implement password reset template found in "Templates".
4. Test the login on the Web App by doing "npm install" and "npm start" in the VS Code terminal
5. The patients database should be up and running, if not, you can refer to the # Help with Firebase section below.

# Firebase "patients" Firestore Database
1. Create a Firestore Database within the project.
2. Start a collection and name it "patients".
3. Navigate to "Rules" within the database and change "false" to "true"
4. Test the database on the Web App by doing "npm install" and "npm start" in the VS Code terminal.
5. The patients database should be up and running, if not, you can refer to the # Help with Firebase section below.


# Help with Firebase
For issues with Firebase Database or Authentication, you can refer to this YouTube video: 
https://youtu.be/2hR-uWjBAgw?si=Go1wX9RCd-UDg_gi 