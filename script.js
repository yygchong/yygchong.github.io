// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    var resizeTimeout;
    window.addEventListener('resize', function(event) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function(){
            window.location.reload();
        }, 100);
    });
        
    const animatedMenu = document.querySelectorAll('.menu');

    function toggleExpandedMenu() {
        this.classList.toggle('expanded');
    }

    animatedMenu.forEach(list => list.classList.remove('expanded'));

    setTimeout(function() {
        animatedMenu.forEach(list => list.classList.add('expanded'));
      }, 200);
});


const workVideoPlayer = document.getElementById('workVideoPlayer');
const workVideoSource = document.getElementById('workVideoSource');
const companyName = document.getElementById('companyName');
const workDetailsOverlay = document.getElementById('workDetailsOverlay');
const workMetaDetails = document.getElementsByClassName('workMetaDetails')[0];

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

const tiktokExperience = `
    <p> 
    <b> Site Reliability Engineer (Global Payments) </b> <br> <i> 09.2022 - present </i> <br> <br>
    - Worked in a team of 3 to drive the deployments of payment infrastructure in the successful launch of the e-commerce TikTok Shop in the US, collaborating closely with international developers to debug issues, modify code, and ensure continuous uptime for one of TikTok's largest revenue streams.<br>
    - Headed the US payments team in the deployment of our US services onto a new datacenter in Chicago, ensuring compliance and stability of the platform while balancing resource allocation requirements.<br>
    - Collaborated with developers from the US and international teams to resolve code issues and debug numerous services as well as collectively strategizing architecture to refine the optimal approaches for advancing our data synchronization platform. Established infrastructure for these services, including setting up MQ, RDS, ES, Data Syncing, Multi Tenant Clusters, Redis, SQL, and more. This includes creating a comprehensive environment for our new data center and implementing a segregated PCI cluster to safeguard sensitive data.<br>
    - Developed internal SRE (Site Reliability Engineering) faas applications, including chat bots, internal scripts, aggregate error logging and testing automation for US Payment services with Python and Go.<br>
    - Managed general SRE and infrastructure needs including deploying production services with CI/CD model, shard migrations, stress testing, and 24/7 on-call rotations. Successfully resolved critical issues within a complex microservice environment, such as P0 outages in payment channels, showcasing exceptional problem-solving skills and ensuring the reliability of high-stakes services. Additionally monitored the health of clusters and services using tools like Grafana and Kibana, while supporting the log distribution environment across various components. Also assumed ownership of critical Customer Platform components for the US team, including Capital accounts, Merchant statements, and Fee processing<br>
    </p>`;
const ibmExperience = `
    <p> 
    <b> Cloud Automation Developer </b> <br> <i> 01.2021 - 09.2022 </i> <br> <br>
    - Developed scripts for internal testing and automation using Python, Bash, Selenium, Locust (Python), Ansible, and GraphQL. These scripts enhanced testing efficiency and automated various tasks, contributing to improved productivity and reliability.<br>
    - Developed standardized and highly scalable load testing framework for our new ADP CloudPak Product, ensuring reliable performance and scalability under heavy user loads.<br>
    - Deployed end-to-end Kubernetes (OCP) environments and conducted manual and automated debugging using Jenkins BVT pipelines, ensuring reliable and efficient deployments.<br>
    - Built out dashboards which process raw test data to display regressions using Docker and chart.js (Javascript, Python)<br>
    Verified and reported defects on each iteration of builds with end to end testing of the product<br>
    Verified, reported, and debugged defects in each iteration of builds through comprehensive end-to-end testing of the product. Led the QA effort in implementing features such as SCIM/IdP functionality.<br>
    - Collaborated with developers and cross-functional teams across geographical regions to troubleshoot issues, integrate code, and provide support during build launches.<br>
    </p>`;
const vspExperience = `
    <p> 
    <b> Site Reliability Engineer </b> <br> <i> 06.2019 - 12.2020 </i> <br> <br>
    - Monitored and diagnosed application outages with Splunk and Nagios, including HTTP and REST applications.<br>
    - Worked with Ansible plays for automating toil.<br>
    - Set-up WAS9 infrastructure for new applications.<br>
    - Completed Linux Sys Admin service requests.<br>
    - Deployed non-prod applications.<br>
    - Worked with Agile Scrum Framework, JIRA, ServiceNow, AWX and Git (BitBucket).<br>
    </p>`;
const ucdavisExperience = `
    <p> 
    <b> Web Developer </b> <br> <i> 12.2017 - 01.2020 </i> <br> <br>
    - Web Developer and IT Staff for the lab of Dr. Suad Joseph. <br>
    - Used Plone, HTML, Python, PHP and JS.<br>
    - Additional responsibility as an acting lab manager 3 days a week.<br>
    - <a href="https://sjoseph.ucdavis.edu"> https://sjoseph.ucdavis.edu/ </a><br>
    </p>`;
const workVersions = [
    { video: 'assets/work_experience1.mp4', text: '', details: 'Work Experience', logo: 'assets/tiktok_logo.svg' , metaDetails: tiktokExperience},
    { video: 'assets/work_experience2.mp4', text: '', details: 'Work Experience',logo: 'assets/ibm_logo.svg' , metaDetails: ibmExperience},
    { video: 'assets/work_experience3.mp4', text: '', details: 'Work Experience',logo: 'assets/vsp_logo.png', metaDetails: vspExperience},
    { video: 'assets/work_experience4.mp4', text: '', details: 'Work Experience',logo: 'assets/ucdavis_logo.svg' , metaDetails: ucdavisExperience }
    // Add more workVersions as needed
];
let currentWorkVersionIndex = 0;

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
    workVideoPlayer.load();
    workVideoPlayer.play();
}

const sachacksProject = `<p> 
<b> President + Co-Founder </b> <br> <i> 11.2018 - 03.2020 </i> <br> <br>
- Led a team of 40+ people with the mission to create and run Sacramento's <a href="https://www.nba.com/kings/news/sacramento-kings-sachacks-and-major-league-hacking-host-sacramentos-first-extensive"> premiere annual intercollegiate Hackathon</a>, an event aimed towards creating a lasting impact on young engineers, designers and entrepreneurs around the Sacramento region. <br>
- Directly oversaw a team which raised over $35,000 in funding.<br>
- Organized meetings and worked directly with partners across different channels including officials from MLH, from schools such as UC Davis, and from corporate sponsors such as IBM and the Sacramento Kings (NBA).<br>
- Managed team leads in Finance, Design and Operations by distributing tasks and consistently meeting with them in order to learn about their progress and to provide assistance for obstacles.<br>
- With the foundations I helped build, the Hackathon has continued to run without my guidance for 3+ years and has been a staple in the Sacramento region, with over 300 attendees and 100+ projects submitted each year.<br>
<br>
<br>
<b> Head of Finance + Co-Founder </b> <br> <i> 01.2018 - 11.2018 </i> <br> <br>
- Headed a team of more than 15 people
- Distributed leads for sponsorship efforts for the inaugural SacHacks Hackathon 2018. 
- Oversaw the challenging task of raising $30,000 for the first collegiate Hackathon in Sacramento. - Worked closely with companies and organizations such as EA, the NBA (Sacramento Kings), Wolfram, Github, Bloomberg, MLH, Nvidia, Soylent and Google.
</p>`;

const locknwalkProject = `<p> 
    <b> Co-Lead </b> <br> <i> 04.2019 - 01.2020 </i> <br> <br>
    - Developed an innovative skateboard rack that is more secure than current designs on the market. <br>
    - Secured $1,000 in prototype funding in the Little Bang Startup competition to put towards prototyping. <br>
    - Coordinated with UC Davis TAPS to test at the UC Davis Activities and Recreation center. <br>
    - Co-Project Lead: Jonathan Bryant <br>
    </p>`;

const heliostatProject = `<p> 
    <b> Personal Project </b> <br> <i> 04.2019 - 01.2020 </i> <br> <br>
    - Developed a heliostat that tracks the sun and reflects light into a room. <br>
    </p>`;

const cstemProject = `<p> 
    <b> Curriculum Developer </b> <br> <i> 11.2017 - 10.2018 </i> <br> <br>
    - Developed ChIDE solutions for the RoboPlay Competition, programming a series of 20 unique Barobo sequences. Edited and directed all the official video content for 2017 - 2018 RoboPlay Competition. <br>
    - Coordinated the 2018 RoboPlay Video Play Competition, which included hundreds of participants from dozens of K-14 school districts. <br> <br>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/cnTzZDkMYXM" frameborder="0" allowfullscreen></iframe> <br>
    </p>`;

let currentProjectVersionIndex = 0;

const projectVersions = [
    { video: 'assets/project_experience1.mp4', text: 'SacHacks', details: 'My Projects', metaDetails: sachacksProject},
    { video: 'assets/project_experience2.mp4', text: 'Lock and Walk', details: 'My Projects', metaDetails: locknwalkProject},
    // { video: 'project_experience1.mp4', text: 'N/A', details: 'Volunteering', metaDetails: heliostatProject},
    { video: 'assets/project_experience4.mp4', text: 'C-STEM', details: 'Volunteering', metaDetails: cstemProject }
    // Add more workVersions as needed
];

const projectMetaDetails = document.getElementsByClassName('projectMetaDetails')[0];

function changeProjectVersion() {
    currentProjectVersionIndex = (currentProjectVersionIndex + 1) % projectVersions.length;
    projectVideoSource.src = projectVersions[currentProjectVersionIndex].video;
    projectName.textContent = projectVersions[currentProjectVersionIndex].text;
    projectMetaDetails.innerHTML = projectVersions[currentProjectVersionIndex].metaDetails;
    projectVideoPlayer.load();
    projectVideoPlayer.play();
}

let aboutMeVersionIndex = 0;

const aboutMeDefault = `<p> 
    <b> Yo my name is Yong </b> <br> <i> 1998 -  </i> <br> <br>
    - I graduated from UC Davis in 2020 with a B.S. in Computer Science <br>
    - I'm currently living in San Jose, CA with my cat Olive <br>
    - I have always found myself to be curious, I love learning about new things, exploring new places and listening to people's stories and ideas <br>
    <br>
    </p>
    
    <div id="aboutMeImageOverlay4"></div>
    <div id="aboutMeImageOverlay5"></div>`;

const aboutMeGardening = `<p> 
    <b> I have always loved spending time in the garden, and being outside </b> <br> <i>  </i> <br> <br>
    - As I grew older my love of gardening translated into a large houseplant collection I keep <br>
    - As well as growing edible crops and fruits when I am home or helping out my neighbors in their Yards <br>
    - I try to integrate a level of engineering towards my plants as well including modulating light levels, moisture/nutrients <br>
    <br>
    </p>`;

// const aboutMeContentCreation = `<p> 
//     <b> Yo my name is Yong </b> <br> <i> 1998 -  </i> <br> <br>
//     - I graduated from UC Davis in 2020 with a B.S. in Computer Science <br>
//     - I'm currently living in San Jose, CA with my cat Olive <br>
//     - I have always found myself to be curious, I love learning about new things, exploring new places and listening to people's stories and ideas <br>
//     - Growing up I enjoyed drawing, writing stories, and playing video games with my big sister <br> <br>
//     <br>
//     </p>`;

// const aboutMeBreakDancing = `<p> 
//     <b> I enjoy staying active and moving </b> <br> <i> 1998 -  </i> <br> <br>
//     - During college I found a love for breakdancing, the free flow creativity and physical exertion of break dancing <br>
//     - I served as UC Davis' break dancing clubs vice president for 2 years <br>
//     - During 2023 I taught break dancing <br> <br>
//     <br>
//     </p>`;

const aboutMeVersions = [
    { video: 'assets/about_me1.mp4', text: '', details: 'About Me', metaDetails: aboutMeDefault}
];

function changeAboutMeVersion() {
    aboutMeVersionIndex = (aboutMeVersionIndex + 1) % aboutMeVersions.length;
    aboutMeVideoSource.src = aboutMeVersions[aboutMeVersionIndex].video;
    aboutMeTextOverlay.textContent = aboutMeVersions[aboutMeVersionIndex].text;
    aboutMeDetailsOverlay.textContent = aboutMeVersions[aboutMeVersionIndex].details;
    aboutMeMetaDetails.innerHTML = aboutMeVersions[aboutMeVersionIndex].metaDetails;
    aboutMeVideoPlayer.load();
    aboutMeVideoPlayer.play();
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