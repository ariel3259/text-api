# text-api
This api is used to set and get text documents.

## Requeriments

### Envoriment: 
  . Nodejs lts(16.13.0)
  
  . npm 8.1.0

### Modules: 
  . bcrypt 5.0.1
  
  . cors 2.8.5
  
  . express 4.17.1
  
  . jsonwebtoken 8.5.1
  
  . mysql 2.18.1

## Get envoriment: 
 
### Windows :
    https://nodejs.org/en/
    click download lts, open setup and click next to install it.
 
### Linux
    . Ubuntu based distro: sudo apt install nodejs npm 
    
    . Debian based distro: sudo apt install nodejs npm
    
    . Archlinux based distro: sudo pacman -S nodejs npm
    
    . Fedora based distro: sudo dnf -install nodejs
   
## Get Modules:
  . npm i

# Routes : 
## Routes of notes_block: 
 . GET http://localhost:8000/api/notes_block : Get all user's documents. Needs two parameter by header, authorization (token) and id_user(integer)
 
 . GET http://localhost:8000/api/notes_block/title : Get all user's documents by title. Needs three parameter by header, authorization (token), id_user, title(string)
 
 . POST http://localhost:8000/api/notes_block : Set a user's document. Needs four parameter, two by body and one by header, authorization (token, by header), title (string) and id(int).
 
 . DELETE http://localhost:8000/api/notes_block : Delete a user's document by id, Needs two parameter by header, authorization (token) and id. 

 . PUT http://localhost:8000/api/notes_block : Modifies a user's document. Needs three parameter by body and one by header, authorization(token, by header), description(string), id(int), id_user(int). 
 
  Note: user's document is a json object that has in the body: 
    
    . An integer as id
    
    . A string as title
    
    . A string as description
    
    . An integer as id_user
    
 ## Routes of users : 
  
. POST http://localhost:8000/api/users/register : Set a new user. Needs four parameters by body, name(string), last_name(string), email(string), password(string). 

. POST http://localhost:8000/api/users/auth : Authentificates user, validates if the user exists and validates if password is correct. Needs two parameters by body, email(string), password(string).

   
  
