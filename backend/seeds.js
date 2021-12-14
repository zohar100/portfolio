const Project = require('./models/project.model');

//Data for seeding the database
data = [
    {
        name: "Feedback",
        technologies: ["nodejs", "react", "mongodb", "express", "css"],
        image: "https://github.com/zohar100/feedback/raw/main/uploads/feed-page.png",
        description: "an social-network app using React, Redux and CSS modules for UI as a modern UI framework, and Node.js with Socket-io for realtime messaging, and requests handling.",
        repository: "https://github.com/zohar100/feedback"
    },
    {
        name: "Customers Manager",
        technologies: ["php", "jquery", "mysql", "bootstrap", "html"],
        image: "https://github.com/zohar100/customers-manager/raw/main/uploads/customers-page.png",
        description: "Customer manager project built 'from scratch' with PHP, Jquery, ajax without frameworks. The purpose of the app is to tracking and manage customers.",
        repository: "https://github.com/zohar100/customers-manager"
    },
    {
        name: "Street-Shop",
        technologies: ["nodejs", "ejs", "mongodb", "express", "html", "bootstrap"],
        image: "https://github.com/zohar100/street-shop/raw/main/uploads/product-page.png",
        description: "Dolor occaecat non quis non nostrud aliqua dolor proident aliquip incididunt cupidatat consectetur. Ullamco culpa in sunt magna est in elit labore duis qui non aute ullamco. Et adipisicing culpa occaecat laboris duis. Fugiat occaecat amet cillum qui magna laboris laboris sit officia proident mollit.",
        repository: "https://github.com/zohar100/street-shop"
    },
    {
        name: "#Kula_Like",
        technologies: ["nodejs", "react", "mongodb", "express", "css", "typescript"],
        image: "https://github.com/zohar100/america-burgers/raw/master/uploads/home-page.png",
        description: "task management platform app in order to help לייק_כולא #community that helps Juniors to find a job in their field to manage and gain the community activity. my role in the project was a fullstack programmer. In this capacity, I was responsible for creating a user model according to the system's needs, the user authentication system of Google and Facebook on the server side and on the client side.",
        repository: "https://github.com/zohar100/just_a_like/tree/dev"
    },
    {
        name: "TechZone",
        technologies: ["php", "mysql", "bootstrap", "html"],
        image: "https://github.com/zohar100/techzone/raw/main/uploads/home-page.png",
        description: "mini Ecommerce platform app using HTML, Bootstrap and CSS for UI and PHP server interfaces with mySql database for requests handling.",
        repository: "https://github.com/zohar100/techzone"
    }
]

//function for seeding the database with the data
async function seedDB() {
    try {
        const res = await Project.deleteMany();
        if(res) {
            console.log("Projects Deleted Successfully");
        }
        
     
        await Project.create(data)
        console.log("Project Added Successfully")
    }catch(err) {
        console.log(err);
    }
}
    

module.exports = seedDB;