# blue-square

A (very) small web app that moves a blue square from one side of the screen the other.

# RESTful API:

Assuming that the API base url is http://example.com/api, and my interfaces involve adding users, getting all users, and deleting a user:

- Would the interface be for the user to delete *their own* account or for an administrator to delete the user's account? Assuming the latter...

- Sometimes the simple interface is best - I would likely design an interface which would simply let you query the user database. The simplest would be a list of all users, with an option on that same home page to add a user and an option on each user to delete.

- the urls to show all users would be http://example.com/api/users, and the new and delete user urls would be http://example.com/api/users/new and http://example.com/api/users/{user id} respectively.
