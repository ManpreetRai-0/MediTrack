# Installation Guide



**Project Files at:** `https://github.com/ManpreetRai-0/MediTrack`



1. You will need to install React, Node.js, GitHub Desktop(for ease of use) and VSCode in order to run this project.

2. To install Node.js use this link: https://nodejs.org/en/
   To ensure you've installed it correctly, simply open your command prompt and type "node -v". It return the version number of Node.js that you've installed.

3. Install VSCode here: https://code.visualstudio.com/

4. For ease of use, consider installing GitHub Desktop version to access the repository, it can be installed here: https://desktop.github.com/.

5. Using GitHub, access the repository and download the project's most recent version from the master branch.

6. Install the repository to VSCode, and within vscode, navigate to file->open file and then file the folder containing the project files.

7. Open the VSCode terminal at the bottom of the window and type in "cd [file path to the project folder]", to navigate to folder containing all source code

8. Add file location to vscode workspace through the file drop down menu on the top left.

9. Using the terminal again, type in `npm install`. THIS WILL INSTALL ALL DEPENDENCIES REQUIRED TO RUN THE APP. RUN THIS FIRST.

10. Using the terminal one last time, type in `npm start` or `npm run build`. Either one will run the web app. Start will create an uncompiled version and Build will create a compiled version which can be run on a web server. Once you press enter it should automatically open the app in your prefered/default browser.

11. If it does not open automatically, in the terminal there will be a link that is along the lines of ["http://localhost:3000"]. All you need to do is open that link by holding CTRL and clicking it and the web app will open.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Firebase Guide
1. Open Firebase on a Web Browser and create an account.
2. Create a project called "MediTrack".
3. Follow the instructions for linking the Firebase project to React app using npm.
4. Replace the info in "MediTrack/src/Components/Config/firebase.js" with the new code found on Firebase.
5. For help with setting up, refer to section ### Help with Firebase below.


## Firebase Authentication
1. Use the Authentication feature on Firebase to implement Authentication for MediTrack
2. Use the Email/Password sign-in method found in "Sign-in method".
3. Implement password reset template found in "Templates".
4. Test the login on the Web App by doing "npm install" and "npm start" in the VS Code terminal
5. The authentication should be up and running, if not, you can refer to the ### Help with Firebase section below.

## Firebase "patients" Firestore Database
1. Create a Firestore Database within the project.
2. Start a collection and name it "patients".
3. Navigate to "Rules" within the database and change "false" to "true"
4. Test the database on the Web App by doing "npm install" and "npm start" in the VS Code terminal.
5. The patients database should be up and running, if not, you can refer to the ### Help with Firebase section below.

### Help with Firebase
For issues with Firebase Database or Authentication, you can refer to this YouTube video: 
https://youtu.be/2hR-uWjBAgw?si=Go1wX9RCd-UDg_gi 