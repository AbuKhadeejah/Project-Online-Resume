// Bio Information
//==========================================================================



var bio = {
    "name": "Pierre Louis Patt",
    "role": "Trainee as Front-End Developer",
    "welcomeMessage": "iam working on it...",
    "contacts": {
        "mobile": "016 785 0397",
        "email": "abuabdurrahman1435@gmail.com",
        "github": "https://github.com/AbuKhadeejah",
        "website": "www.ittibaabookstore.com",
        "twitter": "@IAbuKhadeejah",
        "location": "Melaca, MY"
    },
    "skills": [
        "HTML", "CSS", "Python","Javascript"
    ],
    "biopic": "images/mosquefinder_pic.jpeg"};

bio.display = function(){

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



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedWelcomeMessage);

    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

    //footer contact info
    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);
    }

};
// work history
//----------------------------------------------------------------------------------

var work = {
    "jobs": [
        {
            "employer": "TBS / Chris Cross Media",
            "title": "Sound Technician & Camera Assistant",
            "dates": "2010",
            "location": "Cologne, NRW",
            "description": "set up, operate, and maintain the electrical equipment for radio and television broadcasts."
        },
        {
            "employer": "Selfemployment",
            "title": "Media Designer Visual/Sound",
            "dates": "2010 - 2014",
            "location": "Cologne, NRW",
            "description": "maintain the electrical equipment for radio and television broadcasts, concerts, sound recordings, and movies as well as in office and school buildings."
        },
        {
            "employer": "Beard Brothers' BBQ",
            "title": "Co-Foounder, CEO",
            "dates": "2012 - 2016",
            "location": "Kuala Lumpur, MY",
            "description": "worked on restaurant's operational objectives,managing restaurant's financial objectives forecasting requirements; preparing an annual budget; scheduling expenditures; analyzing variances; initiating corrective actions."
        },

        {
            "employer": "Selfemployment",
            "title": "Tijarah",
            "dates": "2016 - On Going.",
            "location": "Melacca, MY",
            "description": "Buying and Selling of Books, Honey, Beard Oil and Beard Balm."
        },
        {
            "employer": "Mosquefinder",
            "title": "Trainee",
            "dates": "2017 - On Going.",
            "location": "Melacca, MY",
            "description": "Learning HTML, CSS, Python, Javascript and hopefully Swift in the Future"
        }
    ]
};

work.display = function() {

    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        /*   for(job in work.jobs){
         $("#workExperience").append(HTMLworkStart);
         */
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });

};

// projects
//----------------------------------------------------------------------------------

var projects = {
    "assigment":[
        {
        "title": "Formel 1",
        "dates": "2009 - 2010",
        "location" : "Abu Dhabi, UAE",
        "images":["images/2009abudhabigrandprix_yasisland-11.jpg"]
    },
    {
        "title": "Formel 1",
        "dates": "2009 - 2010",
        "location" : "Istanbul, Turkey",
        "images":["images/Istanbul_Park_aerial-750x418.jpg"]
    },
    {
        "title": "RTL Reporter",
        "dates": "2010 - 2011",
        "location" : "Alexandria, Egypt",
        "images":["images/alexandria-egypt-normal.jpg"]
    }
]};

projects.display = function(){
    //var project;
    projects.assigment.forEach(function(project){
/*    for(project in projects.assigment){ */

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle= HTMLprojectTitle.replace("%data%",project.title);
            $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates= HTMLprojectDates.replace("%data%",project.datesWorked);
            $(".project-entry:last").append(formattedProjectDates);

        formattedProjectLocation= HTMLprojectLocation.replace("%data%",project.location);
             $(".project-entry:last").append(formattedProjectLocation);

        //var formattedLocation= HTMLworkLocation.replace("%data%", projects.projects[project].location);
        //$(".work-entry:last").append(formattedLocation);


        if(project.images.length>0){
                var image;
                for (image in project.images)
                formattedProjectImage= HTMLprojectImage.replace("%data%",project.images[image]);
            $(".project-entry:last").append(formattedProjectImage);


            }

        /*formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.assigment[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

         */
    });
};

// educational history
//----------------------------------------------------------------------------------

var education = {
    "schools": [
        {
            "name": "GSK",
            "degree": "Abitur",
            "location": "Kuerten, NRW",
            "majors": [
                "English, Paedagogic"
            ],
            "dates": "July 2005"
        },
        {
            "name": "Georg Simon Ohm",
            "degree": "Bachelor",
            "location": "Cologne, NRW",
            "majors": [
                "Media Design"
            ],
            "dates": "July 2010"
        }
    ],
    "onlineCourses": [
        {
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
    education.schools.forEach(function (school) {
        //for(school in education.schools){


        formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        $(".education-entry:last").append(formattedSchoolName);


        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);


        formattedDates = HTMLschoolDates.replace("%data%", school.datesAttended);
        $(".education-entry:last").append(formattedDates);


        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if (school.majors.length > 0) {
            var major;
            for (major in school.majors) {

                formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[major]);

                $(".education-entry:last").append(formattedSchoolMajor);
            }

        }

    });

    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (course) {
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

}


// internationalize name
//----------------------------------------------------------------------------------


// capitalize all last name and guarantees first letter in first name is capitalized
function inName(name){
    name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];


}

$("#main").append(internationalizeButton);


// analytics (clicks)
//----------------------------------------------------------------------------------

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);});

// call functions
//----------------------------------------------------------------------------------

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
