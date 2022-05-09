# Frontend Engineer Interview Project

This is a FrontEnd application which is to browse the users and thier posts using the API http://jsonplaceholder.typicode.com/

# Folder Structure:

  root structure:
    ```
    /.github      -> Contains the CI/CD pipeline code
    /src          -> Contains the user and post components
    Makefile       -> code to do all the adhoc activities
    Dockerfile     -> To create the Docker Image
    package       -> Contains the dev dependencies
    ```

  .github:
  ```
   workflow/main.yaml (CI/CD file)
  ```

  src:
  ```
  api -> contains the api client code
  components -> contains all UI logic and it's supporting implementaion.
  hooks -> contains the custom hooks
  layouts -> contains the default layout for all the pages
  types -> contains all the typescript declarations
  utils -> contains all utility/reusable functions
  routes.ts -> contains all the UI routes
  ```

  public:
  ```
  It has all the images and index.html files
  ```
# API SPEC:
Get user:

```
Request:
http://jsonplaceholder.typicode.com/users
Response:
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
```

Get posts:
```
http://jsonplaceholder.typicode.com/posts
Response:
  id: number;
  userId: number;
  title: string;
  body: string;
```

# PreRequisite tools to run the project.
1. Any machine with docker installed

# PreRequisite tools to run the npm test.
1. install npm 
2. do npm install to install all the dependencies
3. make test_app

# How to run the Project:
Please use the Makefile to run the project
```
make docker_build -> to build the docker image
docker_push -> to push the docker image to docker registry
docker_run -> to run the frontend app using docker(No need to install any depdencies like npm, react ..etc)
start_app  -> to start the app using npm tool
test_app   -> to start running the test cases
build_app  -> to build the react app
```

TODO:
```
1. UI should be improved
2. Could do more test coverage 
```

Libraries used:
```
1. React query  -> to fetch the data and maintain the state
2. React router -> UI router
3. axios        -> client library to make rpc/api calls
4. jest         -> testing framework 
```


