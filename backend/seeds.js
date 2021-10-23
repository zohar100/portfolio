const Project = require('./models/project.model');

//Data for seeding the database
data = [
    {
        name: 'Feedback',
        image: 'https://github.com/zohar100/feedback/raw/main/uploads/feed-page.png',
        description: 'Dolor occaecat non quis non nostrud aliqua dolor proident aliquip incididunt cupidatat consectetur. Ullamco culpa in sunt magna est in elit labore duis qui non aute ullamco. Et adipisicing culpa occaecat laboris duis. Fugiat occaecat amet cillum qui magna laboris laboris sit officia proident mollit.',
        repository: 'https://github.com/zohar100/feedback'
    },
    {
        name: 'TechZone',
        image: 'https://github.com/zohar100/techzone/raw/main/uploads/home-page.png',
        description: 'Dolor occaecat non quis non nostrud aliqua dolor proident aliquip incididunt cupidatat consectetur. Ullamco culpa in sunt magna est in elit labore duis qui non aute ullamco. Et adipisicing culpa occaecat laboris duis. Fugiat occaecat amet cillum qui magna laboris laboris sit officia proident mollit.',
        repository: 'https://github.com/zohar100/techzone'
    },
    {
        name: 'Street-Shop',
        image: 'https://github.com/zohar100/street-shop/raw/main/uploads/product-page.png',
        description: 'Dolor occaecat non quis non nostrud aliqua dolor proident aliquip incididunt cupidatat consectetur. Ullamco culpa in sunt magna est in elit labore duis qui non aute ullamco. Et adipisicing culpa occaecat laboris duis. Fugiat occaecat amet cillum qui magna laboris laboris sit officia proident mollit.',
        repository: 'https://github.com/zohar100/street-shop'
    },
    {
        name: 'AmericaBurgers',
        image: 'https://github.com/zohar100/america-burgers/raw/master/uploads/home-page.png',
        description: 'Dolor occaecat non quis non nostrud aliqua dolor proident aliquip incididunt cupidatat consectetur. Ullamco culpa in sunt magna est in elit labore duis qui non aute ullamco. Et adipisicing culpa occaecat laboris duis. Fugiat occaecat amet cillum qui magna laboris laboris sit officia proident mollit.',
        repository: 'https://github.com/zohar100/america-burgers'
    }
]

//function for seeding the database with the data
async function seedDB() {
    const res = await Project.deleteMany();
    if(res) {
        console.log('Projects Deleted Successfully');
    }
    
    await Project.create(data);
    console.log("Project Created");
}

module.exports = seedDB;