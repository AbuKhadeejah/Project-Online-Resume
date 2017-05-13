
// Bio Information
//==========================================================================
var bio = {
    "name": "Pierre Louis Patt",
    "role": "Trainee as Front-End Developer",
    "contacts": {
        "mobile": "016 785 0397",
        "email": "abuabdurrahman1435@gmail.com",
        "github": "https://github.com/AbuKhadeejah",
        "twitter": "@IAbuKhadeejah",
        "location": "Melaca, MY",
        "website": "www.ittibaabookstore.com"
    },
    "welcomeMessage": "iam working on it...",
    "skills": [
        "HTML", "CSS", "Python", "Javascript"
    ],
    "biopic": "images/mosquefinder_pic.jpeg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedProjectLocation = HTMLlocation.replace(/%data%/g, bio.contacts.location);
    $("#topContacts").append(formattedProjectLocation);


    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);

    //footer contact info


    formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);

    formattedTwitter = HTMLlocation.replace(/%data%/g, bio.contacts.location);
    $("#footerContacts").append(formattedTwitter);

    bio.skills.forEach(function (skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

};

// educational history
//----------------------------------------------------------------------------------

var education = {
    "schools": [{
        "name": "GSK",
        "location": "Kuerten, NRW",
        "degree": "Abitur",
        "majors": [
            "English, Paedagogic"
        ],
        "dates": "July 2005",
        "url": "http://www.gesamtschule-kuerten.de/"
    },
        {
            "name": "Georg Simon Ohm",
            "location": "Cologne, NRW",
            "degree": "Bachelor",
            "majors": [
                "Media Design"
            ],
            "dates": "July 2010",
            "url": "http://www.gso-koeln.de/"
        }
    ],
    "onlineCourses": [{
        "title": "Try Python",
        "school": "Codeschool",
        "dates": "2017",
        "url": "https://www.codeschool.com/courses/try-python"
    },
        {
            "title": "Flying Through Python",
            "school": "Codeschool",
            "dates": "2017",
            "url": "https://www.codeschool.com/courses/flying-through-python"
        },
        {
            "title": "Assembling Sass",
            "school": "Codeschool",
            "dates": "2017",
            "url": "https://www.codeschool.com/courses/assembling-sass"
        },
        {
            "title": "CSS Cross-Country",
            "school": "Codeschool",
            "dates": "Sept 2017",
            "url": "https://www.codeschool.com/courses/css-cross-country"
        },
        {
            "title": "Front-end Formations",
            "school": "Codeschool",
            "dates": "Sept 2017",
            "url": "https://www.codeschool.com/courses/front-end-formations"
        },
        {
            "title": "Front-end Foundations",
            "school": "Codeschool",
            "dates": "Sept 2017",
            "url": "https://www.codeschool.com/courses/front-end-foundations"
        },
        {
            "title": "intro to programming",
            "school": "Udacity",
            "dates": "Sept 2017",
            "url": "https://www.udacity.com"
        }
    ]
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
        //for(school in education.schools){


        formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedSchoolName);


        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);


        formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);


        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (school.majors.length > 0) {
            /* var major; */
            school.majors.forEach(function (major) {
                //for (major in school.majors) {
                formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);

                $(".education-entry:last").append(formattedSchoolMajor);
            });

        }

    });

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        //for(course in education.onlineCourses){


        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        $(".education-entry:last").append(formattedOnlineTitle);

        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedOnlineSchool);

        formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        formattedOnlineUrl = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineUrl);
    });

};


// work history
//----------------------------------------------------------------------------------

var work = {
    "jobs": [{
        "employer": "TBS / Chris Cross Media",
        "title": "Sound Technician & Camera Assistant",
        "location": "Cologne, NRW",
        "dates": "2010",
        "description": "set up, operate, and maintain the electrical equipment for radio and television broadcasts."
    },
        {
            "employer": "Selfemployment",
            "title": "Media Designer Visual/Sound",
            "location": "Cologne, NRW",
            "dates": "2010 - 2014",
            "description": "maintain the electrical equipment for radio and television broadcasts, concerts, sound recordings, and movies as well as in office and school buildings."
        },
        {
            "employer": "Beard Brothers' BBQ",
            "title": "Co-Foounder, CEO",
            "location": "Kuala Lumpur, MY",
            "dates": "2012 - 2016",
            "description": "worked on restaurant's operational objectives,managing restaurant's financial objectives forecasting requirements; preparing an annual budget; scheduling expenditures; analyzing variances; initiating corrective actions."
        },
        {
            "employer": "Selfemployment",
            "title": "Tijarah",
            "location": "Melacca, MY",
            "dates": "2016 - On Going.",
            "description": "Buying and Selling of Books, Honey, Beard Oil and Beard Balm."
        },
        {
            "employer": "Mosquefinder",
            "title": "Trainee",
            "location": "Melacca, MY",
            "dates": "2017 - On Going.",
            "description": "Learning HTML, CSS, Python, Javascript and hopefully Swift in the Future"
        }
    ]
};

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        /*   for(job in work.jobs){
         $("#workExperience").append(HTMLworkStart);
         */
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });

};

// projects
//----------------------------------------------------------------------------------

var projects = [{
    "title": "Formel 1",
    "dates": "2009 - 2010",
    "description": "set up, operate, and maintain the electrical equipment for radio and television broadcasts.",
    "images": ["images/2009abudhabigrandprix_yasisland-11.jpg"],
    "location": "Abu Dhabi, UAE"
},
    {
        "title": "Formel 1",
        "dates": "2009 - 2010",
        "description": "set up, operate, and maintain the electrical equipment for radio and television broadcasts.",
        "images": ["images/Istanbul_Park_aerial-750x418.jpg"],
        "location": "Istanbul, Turkey"
    },
    {
        "title": "RTL Reporter",
        "dates": "2010 - 2011",
        "description": "set up, operate, and maintain the electrical equipment for radio and television broadcasts.",
        "images": ["images/alexandria-egypt-normal.jpg"],
        "location": "Alexandria, Egypt"
    }
];

projects.display = function() {
    //var project;
    projects.forEach(function (project) {
        /*    for(project in projects.assigment){ */

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);

        formattedProjectLocation = HTMLprojectLocation.replace("%data%", project.location);
        $(".project-entry:last").append(formattedProjectLocation);

        var formattedDescription= HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);


        if (project.images.length > 0) {

            project.images.forEach(function (image) {
                //for (image in project.images)
                formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);

                /*formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.assigment[project].description);
                 $(".project-entry:last").append(formattedProjectDescription);

                 */
            });

        }

    });
};

// internationalize name
//----------------------------------------------------------------------------------


// capitalize all last name and guarantees first letter in first name is capitalized
function inName(name) {
    name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];


}

$("#main").append(internationalizeButton);


// analytics (clicks)
//----------------------------------------------------------------------------------

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// call functions
//----------------------------------------------------------------------------------

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);