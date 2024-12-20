// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    var resizeTimeout;
    window.addEventListener('resize', function(event) {
        if (window.innerWidth > 768) { //Exclude for mobile
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function(){
                window.location.reload();
            }, 100);
        }
    });
        
    const animatedMenu = document.querySelectorAll('.menu');

    function toggleExpandedMenu() {
        this.classList.toggle('expanded');
    }

    animatedMenu.forEach(list => list.classList.remove('expanded'));

    setTimeout(function() {
        animatedMenu.forEach(list => list.classList.add('expanded'));
      }, 900);
});


/* ========== Work Experience ========== */
// Text content stored in "content.js"

const workVideoPlayer = document.getElementById('workVideoPlayer');
const workVideoSource = document.getElementById('workVideoSource');
const companyName = document.getElementById('companyName');
const workDetailsOverlay = document.getElementById('workDetailsOverlay');
const workMetaDetails = document.getElementsByClassName('workMetaDetails')[0];
const workEmote = document.getElementsByClassName('workEmote')[0];

// Using this to dynamically set the position of blocks relative to each other
const workExperienceElement = document.getElementById('workExperience');
const projectExperienceElement = document.getElementById('projectExperience');
const aboutMeElement = document.getElementById('aboutMe');

// Dynamic relative positioning of projectExperience
// const workExperienceBottom = workExperienceElement.getBoundingClientRect().bottom;
// const percentageBelow = 45; // Adjust this percentage as needed
// const topPosition = workExperienceBottom + (percentageBelow / 100) * window.innerHeight;
// projectExperienceElement.style.top = `${topPosition}px`;

// Calculate the top position of projectExperience based on the absolute position of workExperience
const percentageBelow = 10 // Adjust this percentage as needed
const topPositionWorkExperience = workExperienceElement.offsetTop + workExperienceElement.offsetHeight + (percentageBelow / 100) * window.innerHeight * -1;
projectExperienceElement.style.top = `${topPositionWorkExperience}px`;
const topPositionProjectExperience = projectExperienceElement.offsetTop + projectExperienceElement.offsetHeight + (percentageBelow / 100) * window.innerHeight;
aboutMeElement.style.top = `${topPositionProjectExperience}px`;

const workVersions = [
    { video: 'assets/work_experience1.mp4', text: '', details: 'Work Experience', logo: 'assets/tiktok_logo.svg' , metaDetails: tiktokWorkExperience, workEmote: workEmote1},
    { video: 'assets/work_experience2.mp4', text: '', details: 'Work Experience',logo: 'assets/ibm_logo.svg' , metaDetails: ibmExperience, workEmote: workEmote2},
    { video: 'assets/work_experience3.mp4', text: '', details: 'Work Experience',logo: 'assets/vsp_logo.png', metaDetails: vspExperience, workEmote: workEmote3},
    { video: 'assets/work_experience4.mp4', text: '', details: 'Work Experience',logo: 'assets/ucdavis_logo.svg' , metaDetails: ucdavisExperience, workEmote: workEmote4}
    // Add more workVersions as needed
];
let currentWorkVersionIndex = 0;
workMetaDetails.innerHTML = workVersions[0].metaDetails;
workEmote.innerHTML = workVersions[0].workEmote;

// Function to change the video source and text content
function changeWorkVersion(pageIndex) {
    // Add your logic to switch the page here
    console.log('Switching to page', pageIndex);

    // Reset all items to inactive state
    const menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(item => item.classList.remove('active'));

    // Set the clicked item to active state
    menuItems[pageIndex].classList.add('active');
    currentWorkVersionIndex = pageIndex;
    workVideoSource.src = workVersions[currentWorkVersionIndex].video;
    companyName.textContent = workVersions[currentWorkVersionIndex].text;
    companyLogo.src = workVersions[currentWorkVersionIndex].logo;
    workMetaDetails.innerHTML = workVersions[currentWorkVersionIndex].metaDetails;
    workEmote.innerHTML = workVersions[currentWorkVersionIndex].workEmote;
    workVideoPlayer.load();
    workVideoPlayer.play();
}

// Array of video URLs to preload
const videoUrls = [
    'assets/project_experience1.mp4',
    'assets/project_experience2.mp4',
    'assets/project_experience4.mp4',
    'assets/work_experience1.mp4',
    'assets/work_experience2.mp4',
    'assets/work_experience3.mp4',
    'assets/work_experience4.mp4'
    // Add more video URLs as needed
    ];
    
    const logoUrls = [
        'assets/tiktok_logo.png',
        'assets/project_experience2.mp4'
        // Add more video URLs as needed
        ];
    

/* ========== Project ========== */
// Text content stored in "content.js"

const projectMetaDetails = document.getElementsByClassName('projectMetaDetails')[0];
const projectEmote = document.getElementsByClassName('projectEmote')[0];
let currentProjectVersionIndex = 0;

const projectVersions = [
    { video: 'assets/project_experience1.mp4', text: 'SacHacks', details: 'My Projects', metaDetails: sachacksProject, projectEmote: projectEmote1},
    { video: 'assets/project_experience2.mp4', text: 'Lock and Walk', details: 'My Projects', metaDetails: locknwalkProject, projectEmote: projectEmote2},
    // { video: 'project_experience1.mp4', text: 'N/A', details: 'Volunteering', metaDetails: heliostatProject},
    { video: 'assets/project_experience4.mp4', text: 'C-STEM', details: 'Volunteering', metaDetails: cstemProject, projectEmote: projectEmote3 }
    // Add more workVersions as needed
];

projectMetaDetails.innerHTML = projectVersions[currentProjectVersionIndex].metaDetails;
projectEmote.innerHTML = projectVersions[currentProjectVersionIndex].projectEmote;

function changeProjectVersion() {
    currentProjectVersionIndex = (currentProjectVersionIndex + 1) % projectVersions.length;
    projectVideoSource.src = projectVersions[currentProjectVersionIndex].video;
    projectName.textContent = projectVersions[currentProjectVersionIndex].text;
    projectMetaDetails.innerHTML = projectVersions[currentProjectVersionIndex].metaDetails;
    projectEmote.innerHTML = projectVersions[currentProjectVersionIndex].projectEmote;

    projectVideoPlayer.load();
    projectVideoPlayer.play();
}


/* ========== AboutMe ========== */
// Text content stored in "content.js"

let currentAboutMeVersionIndex = 0;

const aboutMeMetaDetails = document.getElementsByClassName('aboutMeMetaDetails')[0];

const aboutMeVersions = [
    { video: 'assets/about_me1.mp4', text: '', details: 'About Me', metaDetails: aboutMeDefault},
    { video: 'assets/about_me2.mp4', text: '', details: 'Reading', metaDetails: aboutMeReading}
];

aboutMeMetaDetails.innerHTML = aboutMeVersions[currentAboutMeVersionIndex].metaDetails;

function changeAboutMeVersion() {
    currentAboutMeVersionIndex = (currentAboutMeVersionIndex + 1) % aboutMeVersions.length;
    aboutMeVideoSource.src = aboutMeVersions[currentAboutMeVersionIndex].video;
    aboutMeTextOverlay.textContent = aboutMeVersions[currentAboutMeVersionIndex].text;
    aboutMeDetailsOverlay.textContent = aboutMeVersions[currentAboutMeVersionIndex].details;
    aboutMeMetaDetails.innerHTML = aboutMeVersions[currentAboutMeVersionIndex].metaDetails;
    aboutMeVideoPlayer.load();
    aboutMeVideoPlayer.play();
}

/* ========== Misc Functions ========== */

// Preload videos
function preloadVideos(urls) {
urls.forEach(url => {
    const video = document.createElement('video');
    video.src = url;
    video.preload = 'auto';
});
}

// Call the function to preload videos
// window.onload = function () {
//     preloadVideos(videoUrls);
//   };


preloadVideos(videoUrls);

function switchPage(pageIndex) {
    // Add your logic to switch the page here
    console.log('Switching to page', pageIndex);
    
    // Reset all items to inactive state
    const menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(item => item.classList.remove('active'));

    // Set the clicked item to active state
    menuItems[pageIndex].classList.add('active');
  }