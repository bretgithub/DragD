# DragD a Drag Queen Matcher App

### Description

DragD is a drag queen matching app based on user's responses to a six question survey. These questions are tied to the personas of the drag queens to be matched from and each question has a score associated with it, after answering all questions the total score is then matched with the drag queen who has the smallest difference between their score and the user's score which menas a closest match. 

This is an app for fun only, not to be taken seriously. The app had us use node.js and express server on the back end and I used materialize CSS on the front end for the first time, which I enjoy much better than bootstrap so far. 

### Modifications

I used 6 questions instead of 10 as it was not necessary to the logic or purpose of the assignment, the logic and handling of the server with routes was so, I included enough to give a score that would either funnel you to one or the other drag queen in the list, and yes, there are only two in the list for simplicity. 

### Demo

DragD is up in Heroku, click the link [DragD](https://dashboard.heroku.com/apps/calm-inlet-44223).

### How to run locally

In terminal:
1. git clone git@github.com:bretgithub/DragD.git
2. cd into DragD
3. npm install
4. npm install nodemon

In code editor:
5. open server.js and set PORT number to your choice and save

In terminal (in DragD dir):
6. nodemon server.js

In browser:
7. open a browser and type in localhost:{PORTNUMBER)


### Roadmap

I would like to clean up the responsiveness or this app, the links don't collapse like they do in bootstrap when on a smaller viewscreen and I would add more drag queens to the list to give more variety to the user. 

### Feedback

Feedback is welcomed or if you find a bug or unecessary step, dependency, or unecessary code REPORT IT!
