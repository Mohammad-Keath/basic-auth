# basic-auth
  ### [Pull Request](https://github.com/Mohammad-Keath/basic-auth/pull/5)
  ### [deploying website link](https://basic-auth-axai.onrender.com/users)
  ### How I test the signin middleware
      I simply tested by first adding a user to the database after that I test using (.set({authorization:---}))
      I test to sign in to that account with correct information
      and I test it with wrong password and it gives me 500 error with message "Invalid Login : wrong password"
      and I test it with wrong username and it gives me 500 error with message "Invalid Login : this user is not exist"
