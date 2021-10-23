const Project = require('../models/project.model');
const catchAsync = require('../utility/catchAsync');
const ServerError = require('../utility/ServerError');
const request = require('request');
const repoImages = require('repo-images')

module.exports.index = catchAsync(async (req, res) => {
    const projects = [];

    await request.get('https://api.github.com/users/zohar100/repos',
    {
        headers: {
            'user-agent': 'request',
            'X-RateLimit-Limit': 10000
        },
        json: true
    }, 
    async (err, response, body) => {
        // await body.map(project => {
        //     projects.push({
        //         name: project.name,
        //         description: project.description,
        //         repository: project.html_url,
        //         image: `https://raw.githubusercontent.com/zohar100/${project.name}/master/uploads/home-page.png`
        //     })
        // })
        res.json(body);
    });

    // const projects = await Project.find();
    
});

module.exports.show = catchAsync(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if(!project) throw new ServerError('Project Not Found', 404);
    res.json(project);
});

module.exports.delete = catchAsync(async (req, res) => {
    const deleted = await Project.findByIdAndRemove(req.params.id);
    if(!deleted) throw new ServerError('Project Not Found', 404);
    res.json(deleted);
})

module.exports.edit = catchAsync(async (req, res) => {
    const project = await Project.findById(req.params.id);
    const {name, image, description, repository, live} = req.body; 
    if(!name || !description || !repository || !image || !live) throw new ServerError('All fields are required', 400);
    project.name = name;
    project.image = image;
    project.description = description;
    project.repository = repository;
    project.live = live;
    
    project.save();
    res.json(project);
});