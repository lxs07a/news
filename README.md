This single page application uses New York Times API to present the latest 10 news about a topic as well as a search bar to select a new topic. By default it loads the news related to Amsterdam. Clicking on an article box shows its summary, along with an external link to the original article.<br><br>

Architectural decisions:<br> 
React and Node.js were chosen for their speed, scalability, and simplicity of use for SPAs.<br>
Code splitting was used to reuse components and to load only the necessary modules at runtime. <br>
Arrow functions were used to make the code more concise and simplify function scoping. <br>
ES6 Class components without constructors were used for code simplicity, since Babel adds constructors when it transpiles the code anyway.<br><br>  

Design decisions:<br> 
Plain react-bootstrap and custom CSS were chosen over templates and libraries to reduce the amount of code sent to the client.<br> 
Following the 2019 color trends, power-inducing aquas and complementing soft terracottas were used.<br><br> 

This project was made with create-react-app.

After cloning/downloading the app, run "npm install" in the terminal and create a config.json file in the root directory where you specify the APIkey for New York Times API.

## Available Scripts

### `npm start`

In the project directory run `npm start` to run the app in the development mode (http://localhost:3000).

### `npm test`

Launches Jest, a Node-based runnertest runner in the interactive watch mode.<br>
Due to the small size of the app no tests were written. 
There is one unit test that was shipped with create-react-app that checks if the App component renders (App.test.js).



