// Bio Information
//==========================================================================



var bio = {
    "name": "Pierre Louis Patt",
    "role": "Trainee as Front-End Developer",
    "message": "iam working on it...",
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
    "bioPic": "images/mosquefinder_pic.jpeg"};

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



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
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

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);
    };

}
// work history
//----------------------------------------------------------------------------------

var work = {
    "jobs": [
        {
            "employer": "TBS / Chris Cross Media",
            "title": "Sound Technician & Camera Assistant",
            "datesWorked": "2010",
            "location": "Cologne, NRW",
            "description": "set up, operate, and maintain the electrical equipment for radio and television broadcasts."
        },
        {
            "employer": "Selfemployment",
            "title": "Media Designer Visual/Sound",
            "datesWorked": "2010 - 2014",
            "location": "Cologne, NRW",
            "description": "maintain the electrical equipment for radio and television broadcasts, concerts, sound recordings, and movies as well as in office and school buildings."
        },
        {
            "employer": "Beard Brothers' BBQ",
            "title": "Co-Foounder, CEO",
            "datesWorked": "2012 - 2016",
            "location": "Kuala Lumpur, MY",
            "description": "worked on restaurant's operational objectives,managing restaurant's financial objectives forecasting requirements; preparing an annual budget; scheduling expenditures; analyzing variances; initiating corrective actions."
        },

        {
            "employer": "Selfemployment",
            "title": "Tijarah",
            "datesWorked": "2016 - On Going.",
            "location": "Melacca, MY",
            "description": "Buying and Selling of Books, Honey, Beard Oil and Beard Balm."
        },
        {
            "employer": "Mosquefinder",
            "title": "Trainee",
            "datesWorked": "2017 - On Going.",
            "location": "Melacca, MY",
            "description": "Learning HTML, CSS, Python, Javascript and hopefully Swift in the Future"
        }
    ]
};

work.display = function(){

    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

// projects
//----------------------------------------------------------------------------------

var projects = {
    "assigment":[
        {
        "title": "Formel 1",
        "datesWorked": "2009 - 2010",
        "location" : "Abu Dhabi, UAE",
        "images":["images/2009abudhabigrandprix_yasisland-11.jpg"]
    },
    {
        "title": "Formel 1",
        "datesWorked": "2009 - 2010",
        "location" : "Istanbul, Turkey",
        "images":["images/Istanbul_Park_aerial-750x418.jpg"]
    },
    {
        "title": "RTL Reporter",
        "datesWorked": "2010 - 2011",
        "location" : "Alexandria, Egypt",
        "images":["images/alexandria-egypt-normal.jpg"]
    }
]};

projects.display = function(){
    for(project in projects.assigment){

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle= HTMLprojectTitle.replace("%data%",projects.assigment[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates= HTMLprojectDates.replace("%data%",projects.assigment[project].datesWorked);
            $(".project-entry:last").append(formattedProjectDates);

        formattedProjectLocation= HTMLprojectLocation.replace("%data%",projects.assigment[project].location);
             $(".project-entry:last").append(formattedProjectLocation);

        //var formattedLocation= HTMLworkLocation.replace("%data%", projects.projects[project].location);
        //$(".work-entry:last").append(formattedLocation);


        if(projects.assigment[project].images.length>0){

                for (image in projects.assigment[project].images)
                formattedProjectImage= HTMLprojectImage.replace("%data%",projects.assigment[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);


            }

        /*formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.assigment[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

         */
        }
}

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
            "datesAttended": "July 2005"
        },
        {
            "name": "Georg Simon Ohm",
            "degree": "Bachelor",
            "location": "Cologne, NRW",
            "majors": [
                "Media Design"
            ],
            "datesAttended": "July 2010"
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

education.display = function(){

    $("#education").append(HTMLschoolStart);

    for(school in education.schools){



        formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[school].name);
            $(".education-entry:last").append(formattedSchoolName);


        formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolDegree);



        formattedDates= HTMLschoolDates.replace("%data%",education.schools[school].datesAttended);
            $(".education-entry:last").append(formattedDates);



        formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);

        if(education.schools[school].majors.length>0){

                for (major in education.schools[school].majors){

                    formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);

                    $(".education-entry:last").append(formattedSchoolMajor);
                }

        }

        }

$(".education-entry:last").append(HTMLonlineClasses);

    for(course in education.onlineCourses){


        formattedOnlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
                    $(".education-entry:last").append(formattedOnlineTitle);

        formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
                    $(".education-entry:last").append(formattedOnlineSchool);

        formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
                    $(".education-entry:last").append(formattedOnlineDates);

        formattedOnlineUrl= HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
                    $(".education-entry:last").append(formattedOnlineUrl);


    }


}



// internationalize name
//----------------------------------------------------------------------------------


// capitalize all last name and guarantees first letter in first name is capitalized
function inName(name){
    var name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];


}

$("#main").append(internationalizeButton)


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
