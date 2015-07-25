# table-it
## WIP

### TODO (among others)
1. Find a way to add a type for each column
2. Allow the user to add tables from the browser
3. Edit/Delete row
4. Sorting/Search/Filtering
5. Show/Hide column
6. Build process for typescript

### Running the app
#### Client
Install typescript with:
npm install -g typescript

Install DefinitelyTyped with:
npm install -g tsd

Install type files with:
tsd install

Then compile the code with:
tsc

#### Server
Install babel with:
npm install -g babel

Run the server with:
babel-node server/app.js