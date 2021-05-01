# Contactless Menu Recommdation

![Screenshot](https://firebasestorage.googleapis.com/v0/b/kg-food.appspot.com/o/demo.png?alt=media)

## EXECUTIVE SUMMARY
A 2021 Forbes article (Morgan, 2021) about “What Will Restaurants Look Like After Covid?” highlighted that restaurants will increasingly use technology such as digital menus to facilitate food ordering and maintain social distancing in order to reduce human interaction. Such drastic changes force restaurant owners to adopt technology that might not be optimised for a restaurant. 

One such technology that the team has identified as an opportunity to improve upon is the digital menu. Using the lessons taught through the course, the team will be using tools such as Python, Neo4j, as well as techniques like TF-IDF and Expert Systems to build a menu item recommender based on web technology to help restaurateurs increase revenue. 

Through this project, the team discovers a new understanding of creating a restaurant menu as well as the impact that recommendation brings. Not only that, the team also learned that the software developed here can also be easily applied to other businesses that provide a menu (such as retail) to drive up their business income. 


## CREDITS / PROJECT CONTRIBUTION

| Official Full Name | Student ID (MTech Applicable) | Work Items (Who Did What)                                                                                                                                                                                                                        |  Email (Optional)  |
| ------------------ | :---------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------: |
| Lee Joon Hui Jeremy | A0048174A                    |1. Project research (linking dishes with ingredients)<br/> 2. Graph construction<br/> 3. Similar items recommendation model (Server side)<br/> 4. Backend design, setup and deployment<br/> 5. UI/UX design and prototyping<br/> 6. Project report <br/> 7. Video recording for Business case explanation | jeremyleejh@u.nus.edu |
| MU AOHUA           |           A0121924M           | 1. On-device similar items recommendation model. </br> 2. Complentary item recommendation. (On-device and Server) </br> 3. Menu offline support </br> 4. User interface development </br> 5. Deploy frontend to firebase </br> 6. Project report </br> 7. Video recording for Tech explanation | e0689785@u.nus.edu |

## VIDEO OF SYSTEM MODELLING & USE CASE DEMO
### Business Case Video
[![IBusiness Case Video](https://img.youtube.com/vi/boTNX_nHANg/0.jpg)](https://www.youtube.com/watch?v=boTNX_nHANg)
### Technical Explanation Video
[![ITechnical Explanation Video](https://img.youtube.com/vi/8ZRM5FSHo5w/0.jpg)](https://www.youtube.com/watch?v=8ZRM5FSHo5w)

## USER GUIDE
### Installation
#### Requirements
Node: v14.6.0 and above
Yarn: 1.22.4 and above
Browser: Latest Chrome or Firefox
OS: MacOS
DB setup
MongoDB installation
Clean installation without username and password

Neo4J installation
Create a new account with default username neo4j and with the password asdf

Seeding Neo4J Database
Run the 2 cypher scripts here in sequence

https://github.com/aohua/KG-food/blob/main/db/kg_food_db.cypher
https://github.com/aohua/KG-food/blob/main/db/kg_food_complementary.cypher
#### Backend setup
Start both MongoDB and Neo4J databases before running the actual backend
Access to the backend server code and execute the shell command, run.sh
> sh run.sh

#### Frontend setup
All the frontend code is under food-app-web-pwa folder.

You can access the deployed version here:
https://kg-food.web.app/

To run the project locally:

Install Node and Yarn:
brew install node
brew install yarn

Install dependencies:
cd food-app-web-pwa
yarn install

Start the dev server:
yarn start

You can now access the web app at:
http://localhost:3000/

Before you start to use the app, please make sure that you have already done the backend setup and have the backend server running at `http://127.0.0.1:5000`

## PROJECT REPORT / PAPER
Refer to this GitHub [link](http://https://github.com/aohua/KG-food/blob/main/ProjectReport/Project%20Report%20Contactless%20Menu%20Recommendation.pdf "link")

