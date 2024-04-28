AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Analyst Programmer",
    cardImage: "assets/images/experience-page/hutchison_ports.jpeg",
    place: "Hutchison Ports (Hong Kong)",
    time: "(Jul 2019 - Jan 2022)",
    desp: "\
    <li>Designed and built CI/CD pipelines for automated Spring Boot microservices delivery.</li> \
    <li>Implemented Jenkins pipelines for automating deployments to Azure Kubernetes Service (AKS) using Infrastructure as Code (IaC), including clean provisioning of AKS and application deployment.</li> \
    <li>Built and optimized Kubernetes environments for both cloud and on-premises deployments.</li> \
    <li>Established K8S backup solutions, ingress control, and TLS certificate management.</li> \
    <li>Managed K8S/Docker containers and images for application operations via Lens.</li> \
    <li>Managed projects using Agile methodology with Jira for task tracking and Confluence for collaborative documentation.</li> \
    ",
  },
  {
    title: "Programmer",
    cardImage: "assets/images/experience-page/yipin_restaurant.png",
    place: "Yipin Banquet Restaurant (Mainland, China)",
    time: "(Aug 2018 - Jul 2019)",
    desp: "\
    <li>Engineered an Android application for warehouse inventory monitoring, utilizing RFID scanning technology for optimization.</li> \
    <li>Conceptualizing and implementing a streamlined workflow system for the warehouse, including documentation and flow diagram</li> \
    <li>Identified opportunities for digital transformation and implemented solutions like Trello and feedback surveys to address them.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="300"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Food Relief <br>(2024 - Ongoing)",
    cardImage: "assets/images/experience-page/empower-australia-img-food-relief-response-01.jpg",
    description:
      "Responsible for food handling/packing for the Food Relief Centre recipients, inventory, and stock management. - Melbourne by Empower",
  },
  {
    title: "Happy School <br> (July 2013)",
    cardImage: "assets/images/experience-page/happy_school.png",
    description:
      "Joining a small volunteer team to lecture, mentor and care for left-behind children in rural Sichuan, China for a few weeks.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// OpenSource Section

const opensourcesection = document.querySelector(".opensource-section");
const projects = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  }
];

const showCards3 = () => {
  let output = "";
  projects.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  opensourcesection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
