# table-it
## WIP

### TODO (among others)
1. Find a way to add a type for each column
2. Allow the user to add tables from the browser
3. Edit/Delete row
4. Sorting/Search/Filtering
5. Show/Hide column
6. Build process for typescript
7. Allow the user to add a row

### Running the app
#### Client
Install typescript with:
npm install -g typescript@^1.5.0-beta

Then compile the code with:
tsc -m commonjs -t es5 --emitDecoratorMetadata client/**/*.ts

#### Server
Install babel with:
npm install -g babel

Run the server with:
babel-node server/app.js