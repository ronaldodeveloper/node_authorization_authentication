# Node.js authorization and authentication

### - Project that simulates a login for the user to access the dashboard.



## Technologies used

* Node
* Express
* PostgreSQL
* Json Web Token 

## Project description

### - This application contains 4 endpoints

  *  GET - users:  http://localhost:8088/users 
     - query and return all registered users ( default )
>
  * GET - private: http://localhost:8088/users/dashboard
    - private route, can be accessed by registered users.
    - receives a middleware function that contains the token sent from the login via https header ( req.headers.authorization ),
    if the token is true it is authorized and stored for use in the next function 
      - use jwt.verify( ) for authorization
    - receives a function that returns the authorized user's data
    
  > 
  * POST - login:  http://localhost:8088/users/login
     - get the data entered by the user
     - check if the user is already registered, if not redirect to registration
     - if the user is already registered then an authentication token is generated which will be sent via 'header' to the private route for verification
       - use jwt.sign( ) for authentication
>

* POST - register: http://localhost:8088/users/register

   - register and enter the user's data in the database

    
