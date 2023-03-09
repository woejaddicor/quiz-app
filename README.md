# Revizd - An Educational Quiz App

## Description

Revizd is an educational quiz app that allows users to test their knowledge of a variety of subjects. The app is built using HTML, CSS and JavaScript. The app is fully responsive and works on all devices. The app is hosted on Render and can be accessed [here] (link to be added). The app uses our own API to store the questions and answers. The site works by using a fetch request to the API and then using the data to populate the questions and answers on the page. The app also uses local storage to store the user's score and save revision tips. The app is fully responsive and works on all devices.

## App Design and Development

### User Stories

Project was managed using Trello. The Trello board can be viewed [here](https://trello.com/b/bsFoYEtb/non-stem-app). The Trello board was used to create user stories and to track the progress of the project. The user stories were created to help guide the development of the apps key features. These user stories were related to some of the initial quotes from the brief:

* “As things stand, a greater focus on STEM subjects has meant that there is less time available for us to spend on non-core subjects in particular. A result of this is that knowledge that students gain is often superficial and lacks depth.”

* “It feels like a lot of fun is missing from the curriculum at the moment, my child used to love school but this seems to be changing.”

* “Sometimes certain subjects rely on textbook work too much and this means that the lessons can feel the same.”

### Wireframes and Design

Wireframes were created to help guide the development of the app. An initial set of sketches was made using Excalidraw. These were used to jot down initial ideas and channel them into the shape of an app. The wireframes were created using Figma and were essential in guiding our design implementation process. The wireframes can be viewed [here](https://www.figma.com/file/kw6zkVsRjmj5vAka3XMxYo/Booleans-Hooligans-team-library?node-id=511%3A3&t=vxJ7SnzoDvecstSa-1)

Figma was also used to collect colour palettes. These were generated using the coolors site. 

![colour palette](/assets/screenshots/colours.PNG)

In the end we opted for the 3rd row of colours as we felt they were the most suitable for the app. We liked the approach of having less invasive and pastel colours to keep the overall brightness of the site low and have content be easier to read.

## Features

### Existing Features

Home Page:

![home page](/assets/screenshots/home.png)

The home page is the first page that the user will see when they open the app. The home page contains a brief description of the app and a button to start the quiz. The home page and every other page on the app makes use of a nav bar to navigate between the quiz and the revision tips. The nav bar also contains a link to the home page.

Quiz Page:

![quiz page](/assets/screenshots/quiz.PNG)

The quiz page is where the user will be able to take the quiz. The user can first select the subject they want to study. The quiz page contains a question and 4 possible answers. The user will be able to select one of the answers. The user will then be able to see if their answer was correct or incorrect. If the answer was incorrect, the user will be able to see the a revision tip to guide the user on their next attempt. This tip will also be saved for revision. After a few seconds the next question will load. 

Revision Tips Page:

![revision tips page](/assets/screenshots/revision.PNG)

The revision tips page is where the user will be able to see all the revision tips that they have saved. This is intended as a scrapbook of sorts where the user has made notes on the questions that they have struggled with. Studying these tips will help the user to improve their score on the quiz.

### Future Features

* A login system to allow users to save their scores and see their scores over time.
* Category tracking to allow users to track their progress in different categories.
* Revision tips can be manually deleted by the user.
* A badge system to reward users for achieving different feats across the quiz such as streaks and 100% scores.

## Local Installation

The application requires the use of node and npm. To install the application locally, clone the repository and run the following commands:

* npm install
* npm install -d (to install dev dependencies)

A .env file should then be created where the user should specify the port number. For the sake of local installation, the port number should be set to 3000.

Then use the following command to start the local server:

* npm start

The application will then be available on `localhost:3000`.

By now opening the `index.html` file in the browser, the application should be available.


## Credits

The app was built by:

* [Jojo](https://github.com/BritishBambi)
* [Joe](https://github.com/woejaddicor)
* [Silvia](https://github.com/Sil-Tatiana)
