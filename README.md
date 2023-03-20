# Notes

## Introduction
For this project, the challenge was to build a web application for taking notes that allows us to create, edit, delete, and consult them at any time. I used HTML, CSS, Javascript, and React to create a Single Page App that is also responsive, using a Mobile First approach.

## Users
Our application's users seek a simple and user-friendly interface to store and manage their daily notes. For this purpose, I chose a mainly pastel color palette, contrasted with a dark color to provide contrast and visibility to key details. I also prioritized a clean view and an intuitive layout that facilitates its use for as many users as possible.

![Captura de pantalla 2023-03-20 a la(s) 4 22 39 p  m](https://user-images.githubusercontent.com/114428069/226444609-70bb6fa3-3943-4db1-b6ad-48ebaaf2395a.png)

## Mockup

![Captura de pantalla 2023-03-20 a la(s) 4 30 08 p  m](https://user-images.githubusercontent.com/114428069/226446114-371dea58-34fe-45d6-8be9-8fb924c02ed9.png)


## 1st User Story
For the first user story, users need to access the Notes section by authenticating their account. In this first version of the project, I facilitated the authentication option with a Google account, hoping to expand to more options in the future.

**Screenshot of the page viewed on local host, responsive views of tablet and mobile phone.**

![Captura de pantalla 2023-03-20 a la(s) 4 37 06 p  m](https://user-images.githubusercontent.com/114428069/226447728-81323e33-da9c-4144-bd4f-7d9efed096f8.png)

## 2nd User Story
In this second user story, we need to be able to create notes, save them, and display them on the interface. I used the Firestore database, which receives both the data from the form to create notes, as well as the time, date, and user ID. The notes associated with the logged-in user will be rendered on the interface, with synchronization between the interface and the state.

**Screenshot of the page viewed on local host, responsive views of tablet and mobile phone.**

![Captura de pantalla 2023-03-20 a la(s) 4 37 35 p  m](https://user-images.githubusercontent.com/114428069/226453900-4f4b2f19-a8ca-4f77-8c8b-ae31b6da218a.png)

_Adjustments were made to the way notes are rendered, so that line breaks entered by the user are respected._


## 3rd User Story
For the third user story, I aimed to also allow users to edit or delete the notes created (completing the CRUD operations for this proyect). For this purpose, edit and delete buttons were created - and will only be displayed when clicking on each note, maintaining a more streamlined visual style -. Currently, both functions are performed through a confirmation alert and prompts, respectively; in the future, I would like to implement a more appropriate modal for the overall aesthetic of the project.

**Screenshot of the page viewed on local host, responsive view of tablet showing the buttons, with the edit prompt and the delete note alert.**

![Captura de pantalla 2023-03-20 a la(s) 5 28 09 p  m](https://user-images.githubusercontent.com/114428069/226458408-fc9be935-cdec-4c55-b641-ce24e8750a51.png)



