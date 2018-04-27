# blue-square

A (very) small web app that moves a blue square from one side of the screen the other.

# RESTful API:

Assuming that the API base url is http://example.com/api, and my interfaces involve adding users, getting all users, and deleting a user:

- Would the interface be for the user to delete *their own* account or for an administrator to delete the user's account? Assuming the latter...

- Sometimes the simple interface is best - I would likely design an interface which would simply let you query the user database. The simplest would be a list of all users, with an option on that same home page to add a user and an option on each user to delete. Deleting a user would first show a confirmation screen.

- the url to show all users would be http://example.com/api/users, and the new and delete user urls would be http://example.com/api/users/new and http://example.com/api/users/{user_id} respectively.

- The front end would give the back end parameters necessary to create, show, or delete users. For example, to create a user it would give the backend a post request with the user's name, appropriately encrypted password, etc.

- an example query in pseudo-ish code:
  ```
  {
    method: "POST"
    url: "/api/users/new"
    user_data: {array with whatever information the backend needs to make a user }
    success: {
      function () => { whatever you want to happen immediately with the new user}
    }
    error: {
      printError(error)
    }
  }
  ```

  The successful response would likely look like this:
  ```
  {
    user: {created user JSON object}
    status: {201 Created }
    errors: []
  }
  ```
  An unsuccessful response would likely look like this:
  ```
  {
    user: {}
    status: {4XX error }
    errors: [whatever error, e.g. "Your password is not long enough!"]
  }
  ```
- To summarize, when the request is successful we return either the list of all users (in the case that we were issuing a get request for all of them) the newly created user (for the request to add a user) or just the successful response code, in the case of a deleted user.

- When something goes wrong in the server, we return the appropriate status code and the reason that the server gave - assuming that we have error handling server-side. Which we should.

- My design is pretty standard as far as I can tell - the most important parts are error handling using time-tested HTTP status codes and making sure that the user(administrator?) knows exactly where the problem is when there is a problem.
