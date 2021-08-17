# FormSubmissionUsingMERN

Created a Form to accept data and store it in database. And A seperate page to display all the form data in a dynamic table.

## Getting Started

### Installing

* After cloning the repository run command "npm i" in backend and frontend folders.
* In ./backend/ create a .env file and define 
  ```
  MERN_DB_URI=mongodb://localhost:27017/FormsDB
  
  PORT = 5000
  
  FORM_NS=FormSubmission


### Executing program

* To start server, Go  in ./backend and execute
  ```
  npm run dev
  ```
* To start client, Go into ./frontend and execute
  ```
  npm start
  ```
* !The Client and Server has to run together for it to work.

### Functioning

* Form Page
  ![image](https://user-images.githubusercontent.com/53964760/129795137-334c02d2-96f3-4a37-b5c0-6b93ab4853bd.png)
* Table to display submitted forms (/list)
  ![image](https://user-images.githubusercontent.com/53964760/129795917-e4396dc9-7314-4264-8f0a-e5b91becd82d.png)
