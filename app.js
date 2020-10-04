const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "FullStack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const jobsContainer = document.querySelector(".jobs-container");
const jobsLanguages = document.querySelector(".job-languages");

window.addEventListener("DOMContentLoaded", function () {
  displayJobs(jobs);
});

function displayJobs(jobsItems) {
  let displayJobs = jobsItems.map(function (job) {
    function languages() {
      for (i = 0; i < job.languages.length; i++) {
        console.log(job.languages.length);
        const btn = document.createElement("button");
        const lang = document.createTextNode(job.languages[i]);
        btn.appendChild(lang);
        jobsLanguages.appendChild(btn);
      }
    }
    //return
    return `<div class="job-container">
        <!-- job left -->
    
        <div class="job-left">
          <img class="job-logo" src="${job.logo}" alt="${job.company}" />
          <div class="job-info">
            <div class="job-name">
              <h2>${job.company}</h2>
            </div>
            <div class="job-title">
              <a href="${job.company}"><h1>${job.position}</h1></a>
            </div>
            <ul class="job-details">
              <li>${job.postedAt}</li>
              <div class="circle"></div>
              <li class="contract">${job.contract}</li>
              <div class="circle"></div>
              <li>${job.location}</li>
            </ul>
          </div>
        </div>
    
        <!-- job right -->
    
        <div class="job-right">
          <div class="job-role">
            <button>${job.role}</button>
          </div>
          <div class="job-level">
            <button>${job.level}</button>
          </div>
          <div class="job-languages">
            ${languages()}
          </div>
          <div class="job-tools">
            <button>${job.tools}</button>
          </div>
        </div>
      </div>`;
  });
  // join
  displayJobs = displayJobs.join("");
  jobsContainer.innerHTML = displayJobs;
}

// remove empty job filters
const divs = document.querySelectorAll(".job-right div");

divs.forEach(function (div) {
  if (div.childElementCount === 0) {
    div.style.display = "none";
  }
});
