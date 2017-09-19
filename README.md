# Claim registry

Project in React and Node.js

## Run application

### Backend

Run `npm run dev` to start server on `localhost:8000`

### Frontend

Run `npm start` for running the application on `localhost:3000`

or

Run `npm run build` to create dist

## Summary

### What I did good

Well, I managed to get it work, in a way :)

### What I did wrong

State management in components, especially list - it's bad. I could use Redux, or split it in some better way (isolate
HOC or create better callbacks for example). I should also start with writing tests, and then get to developing - now I'm
with no test.

### What I would change

* Authentication handling - add login form and validate it in backend
* Form handling - add validation for required fields
* State management
* Time management
* Styling
* Fixing server so it doesn't crash after an error (happens sometimes)