<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware is a system, service or software that provides integration services to other applications or services. It supposed to bridge separate systems.

Sessions is a piece of data/information regarding to a user in a system that allow such system not only to identify the user but also to identify what the user can access.

bcrpyt is a software library for encrypting information. It used most commonly to encrypt passwords in a database.

2.  What does bcrypt do in order to prevent attacks?
It uses a salt to expand the password before hashing it, and then it hashes the password multiple times.

3.  What are the three parts of the JSON Web Token?
Header - It identifies what algorithm it is using to sing the token.
Payload - The actual contents of the Token.
Signature - The signature of the full token.