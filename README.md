VotingPage
==========

A simple voting page that can be used for collating votes from a number of users.

Install
-------

You need to install NodeJS, once node is installed you'll need to install the dependencies for this project.

NPM should do this with npm install -d 

Operation
---------

The system is centered around two pages, a display page hosted by default on port 3000 (i.e. http://localhost:3000) which is used to gather the results and display the average score.

Individual voters connect to a page hosted at /voter (i.e. http://192.168.1.1:3000/voter).

When the display page gathers the results individual voters should recieve a toast notification that their vote has been accepted and the score dial should be reset.