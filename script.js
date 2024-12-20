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
        <b> Sr. Site Reliability Engineer (Global Payments) </b> <br> <i> 09.2022 - present </i> <br> <br>
        - Worked in a team of 3 to drive the deployments of payment infrastructure in the successful launch of the e-commerce TikTok Shop in the US, collaborating closely with international developers to debug issues, modify code, and ensure continuous uptime for one of TikTok's largest revenue streams.<br>
        - Headed the US payments team in the deployment of our US services onto a new datacenter in Chicago, ensuring compliance and stability of the platform while balancing resource allocation requirements.<br>
        - Collaborated with developers from the US and international teams to resolve code issues and debug numerous services as well as collectively strategizing architecture to refine the optimal approaches for advancing our data synchronization platform. Established infrastructure for these services, including setting up MQ, RDS, ES, Data Syncing, Multi Tenant Clusters, Redis, SQL, and more. This includes creating a comprehensive environment for our new data center and implementing a segregated PCI cluster to safeguard sensitive data.<br>
        - Developed internal SRE (Site Reliability Engineering) faas applications, including chat bots, internal scripts, aggregate error logging and testing automation for US Payment services with Python and Go.<br>
        - Managed general SRE and infrastructure needs including deploying production services with CI/CD model, shard migrations, stress testing, and 24/7 on-call rotations. Successfully resolved critical issues within a complex microservice environment, such as P0 outages in payment channels, showcasing exceptional problem-solving skills and ensuring the reliability of high-stakes services. Additionally monitored the health of clusters and services using tools like Grafana and Kibana, while supporting the log distribution environment across various components. Also assumed ownership of critical Customer Platform components for the US team, including Capital accounts, Merchant statements, and Fee processing<br>
        - Conducted technical interviews for 24+ candidates for engineering positions, including senior roles, to ensure the recruitment of top talent.
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
workMetaDetails.innerHTML = workVersions[0].metaDetails;

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
    <b> President + Co-Founder </b> <br> <i> 11.2018 - 03.2020 </i><br> 
    <a href="http://sachacks.io">sachacks.io</a> <br><br>
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
    <b> Curriculum Developer </b> <br> <i> 11.2017 - 10.2018 </i> <br>
    <a href="https://c-stem.ucdavis.edu/">c-stem.ucdavis.edu</a><br><br>
    - Developed ChIDE solutions for the RoboPlay Competition, programming a series of 20 unique Barobo sequences. Edited and directed all the official video content for 2017 - 2018 RoboPlay Competition. <br>
    - Coordinated the 2018 RoboPlay Video Play Competition, which included hundreds of participants from dozens of K-14 school districts. <br> <br>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/cnTzZDkMYXM" frameborder="0" allowfullscreen></iframe> <br>
    </p>`;

const projectVersions = [
    { video: 'assets/project_experience1.mp4', text: 'SacHacks', details: 'My Projects', metaDetails: sachacksProject},
    { video: 'assets/project_experience2.mp4', text: 'Lock and Walk', details: 'My Projects', metaDetails: locknwalkProject},
    // { video: 'project_experience1.mp4', text: 'N/A', details: 'Volunteering', metaDetails: heliostatProject},
    { video: 'assets/project_experience4.mp4', text: 'C-STEM', details: 'Volunteering', metaDetails: cstemProject }
    // Add more workVersions as needed
];

const projectMetaDetails = document.getElementsByClassName('projectMetaDetails')[0];

let currentProjectVersionIndex = 0;
projectMetaDetails.innerHTML = projectVersions[currentProjectVersionIndex].metaDetails;

function changeProjectVersion() {
    currentProjectVersionIndex = (currentProjectVersionIndex + 1) % projectVersions.length;
    projectVideoSource.src = projectVersions[currentProjectVersionIndex].video;
    projectName.textContent = projectVersions[currentProjectVersionIndex].text;
    projectMetaDetails.innerHTML = projectVersions[currentProjectVersionIndex].metaDetails;
    projectVideoPlayer.load();
    projectVideoPlayer.play();
}

let currentAboutMeVersionIndex = 0;

const aboutMeDefault = `<p> 
    <b>Hey! 🦤 My name is Yong </b> <br> 
    - I graduated from UC Davis in 2020 with a B.S. in Computer Science <br>
    - I grew up in Southern California with my parents and sister, who's now a general surgeon at UCLA <br>
    - I'm currently living in San Jose, CA with my cat Olive <br>
    - I love learning about new things, exploring new places and listening to people tell me about their passions and interests <br> 
    - Fun fact I love bragging about: Pokimane and Tyler Oakley follow me on Twitter <br>
    <br>
    - <b>Some of my hobbies include:</b> <br>
        - plants and gardening <br>
        - Super Smash Bros Ultimate <br>
        - tennis, ping pong and volleyball <br>
        - breakdancing *<i>(The middle video is <a href="https://www.teamusa.com/profiles/morris-isby">bboy morris</a> dunking on me)</i> <br>
        - reading
    <br>

    </p>
    
    <div id="aboutMeImageOverlay4"></div>
    <div id="aboutMeImageOverlay5"></div>`;

const aboutMeReading = `<p> 
<b> I really enjoying reading, mostly non-fiction to learn new ideas and understand different perspectives </b> <br> <i>  </i> <br>
- Some of my favorite books are:
<ul>
  <li>Design That Scales: Creating a Sustainable Design System Practice - Dan Mall </li>
  <li>The Icarus Deception - Seth Godin</li>
  <li>East of Eden - John Steinbeck</li>
  <li>Conflict Resolution for Holy Beings - Joy Harjo</li>
</ul>

- Books I've read in 2024 (so far) <br>
<ul>
  <li>Kokoro - Natsume Sōseki </li>
  <li>Design That Scales: Creating a Sustainable Design System Practice - Dan Mall </li>
  <li>Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems - Martin Kleppmann </li>
  <li>Yolk - Mary H. K. Choi</li>
  <li>The Missing README - Dmitriy Ryaboy, Chris Riccomini</li>
  <li>The Leadership Engine - Noel M. Tichy</li>
  <li>The Sun Also Rises - Ernest Hemingway</li>
  <li>Stolen Focus - Johann Hari</li>
  <li>The Art of Mindful Living - Thich Nhat Hanh</li>
  <li>The Wind-Up Bird Chronicle - Haruki Murakami</li>
  <li>The Reason for God - Timothy Keller</li>
  <li>The Age of Surveillance Capitalism - Shoshana Zuboff</li>
  <li>The Staff Engineer's Path - Tanya Reilly</li>
  <li>How to Talk So Little Kids Will Listen - Joanna Faber, Julie King</li>
  <li>The Body - Bill Bryson</li>
  <li>Grit - Angela Duckworth</li>
  <li>The Undoing Project - Michael Lewis</li>
  <li>Futureproof - Kevin Roose</li>
  <li>Laziness Does Not Exist - Devon Price</li>
  <li>The Friction Project - Robert I. Sutton, Huggy Rao</li>
  <li>Million Dollar Weekend - Noah Kagan, Tahl Raz</li>
  <li>The Year of Magical Thinking - Joan Didion</li>
  <li>To Engineer is Human - Henry Petroski</li>
</ul>

- Books I've read in 2023 <br>
<ul>
  <li>Requiem for the American Dream - Noam Chomsky</li>
  <li>Conflict Resolution for Holy Beings - Joy Harjo</li>
  <li>What I Talk About When I Talk About Running - Haruki Murakami</li>
  <li>An American Sunrise - Joy Harjo</li>
  <li>Time is a Mother - Ocean Vuong</li>
  <li>我的前半生 - 爱新觉罗. 溥仪</li>
  <li>Keep Sharp - Sanjay Gupta</li>
  <li>Gathering Moss - Robin Kimmerer</li>
  <li>Wolfpack - Abby Wambach</li>
  <li>I Know Why the Caged Bird Sings</li>
  <li>Homo Deus - Yuval Noah Harari</li>
  <li>101 Essays That Will Change the Way You Think - Brianna West</li>
  <li>The 5AM Club - Robin Sharma</li>
  <li>American Prometheus - Kai Bird</li>
  <li>Leadership - Doris Kearns Goodwin</li>
  <li>The Untethered Soul - Michael A. Singer</li>
  <li>Dare to Lead - Brene Brown</li>
  <li>The Hidden Life of Trees - Peter Wohlleben</li>
  <li>What I Know For Sure - Oprah Winfrey</li>
  <li>I'm Glad My Mom Died - Jennette McCurdy</li>
  <li>Poverty, by America - Matthew Desmond</li>
  <li>The Book of Joy - Dalai Lama, Desmond Tutu, Douglas Carlton</li>
  <li>Educated - Tara Westover </li>
  <li>Crying in H Mart - Michelle Zauner</li>
  <li>What Happened to You?	- Oprah Winfrey, Bruce D. Perry</li>
  <li>Poverty, by America - Matthew Desmond</li>
  <li>The Burning Light of Two Stars - Laura Davis</li>
  <li>Fanatical Prospecting - J.P. Taser</li>
  <li>Oh My Mother! - Connie Wang</li>
  <li>The Dichotomy of Leadership - Jocko Willink, Leif Babin</li>
  <li>Ask Your Developer - Jeff Lawson</li>
  <li>Necessary Illusions - Noam Chomsky </li>
  <li>Shape - Jordan Ellenberg</li>
  <li>How Not to Be Wrong - Jordan Ellenberg</li>
  <li>Tired of Winning - Jonathan Karl</li>
  <li>Ship of Fools - Tucker Carlson</li>
  <li>When Breath Becomes Air - Paul Kalanithi</li>
  <li>The Happiness Project - Gretchen Rubin</li>
</ul>
</p>`;

const aboutMeGardening = `<p> 
    <b> I have love spending time in the garden, and being outside </b> <br> <i>  </i> <br> <br>
    - As I grew older my love of gardening translated into a large houseplant collection I keep <br>
    - As well as growing edible crops and fruits when I am home or helping out my neighbors in their Yards <br>
    - I try to integrate a level of engineering towards my plants as well including modulating light levels, moisture/nutrients <br>
    <br>
    </p>`;

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