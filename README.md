# Express-Note-Taker

<h4>Unit 11 Express Homework: Note Taker<h4>

<br>
Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

![Screenshot](ExpressNoteTaker.png)

![Screenshot](ExpressNoteTakerSaving.png)

The application frontend has already been created, it's your job to build the backend and connect the two.
<br>
<br>
The following HTML routes should be created:


GET /notes - Should return the notes.html file.


GET * - Should return the index.html file




The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.


The following API routes should be created:

<br>
GET /api/notes - Should read the db.json file and return all saved notes as JSON.

<br>
POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

<br>
DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.



<br>
<br>
User Story : 
<br> AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete
<br>
Business Context :
<br>For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.
<br>
Acceptance Criteria :
<p>Application should allow users to create and save notes.
<p>Application should allow users to view previously saved notes.
<p>Application should allow users to delete previously saved notes.

<p>

<br>Submission on BCS

<p>The URL of the deployed application


<p>The URL of the GitHub repository
