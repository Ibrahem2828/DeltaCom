const ul = document.querySelector(".section-hero-nav-items");
const home = document.getElementById("HomeNav");
const pillars = document.getElementById("Our-Group");
const Clients = document.getElementById("Clients");
const biography = document.getElementById("BiographyNav");
const experience = document.getElementById("ExperienceNav");
const protfolio = document.getElementById("PortfolioNav");
const AboutUs = document.getElementById("AboutUsNav");
const achievement = document.getElementById("AchievementNav");
const videos = document.getElementById("VideosNav");
const talk = document.getElementById("TalkNav");
const line = document.querySelector(".section-hero-nav-items #lineNav");
const links = document.querySelectorAll(".section-hero-nav-items li a");
const homeSection = document.getElementById("HomeSection");
const biographySection = document.getElementById("BiographySection");
const experienceSection = document.getElementById("ExperienceSection");
const achievementSection = document.getElementById("AchievementSection");
const videosSection = document.getElementById("VideosSection");
const protfolioSection = document.getElementById("PortfolioSection");
const AboutUsSection = document.getElementById("AboutUsSection");
const letsSection = document.getElementById("LetsSection");

const pillarsSection = document.getElementById("OurGroup");
const ClientSection = document.getElementById("ClientSection");


const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return { 
    left: rect.left + window.screenX,
    top: rect.top + window.scrollY,
  };
};

const moveline = (link) => {
  line.style.width = '35px';
  line.style.height = '2px';
  line.style.transition = "0.3s";
  line.style.bottom = '-2px';
  line.style.left = `${getOffset(link).left - getOffset(ul).left}px`;
  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    element.style.color = "#fff";
  }
  link.style.color = "#f9cc11";
};

let moveLineWhenScroll = () => {
  if (scrollY >= getOffset(homeSection).top + 50 && scrollY < getOffset(experienceSection).top - 150) {
    moveline(home);
  } else if (scrollY > getOffset(experienceSection).top  - 150 && scrollY < getOffset(pillarsSection).top - 150) {
    moveline(experience);
   } else if (scrollY > getOffset(pillarsSection).top - 150 && scrollY < getOffset(ClientSection).top - 150) {
      moveline(pillars);
  } else if (scrollY > getOffset(ClientSection).top - 150 && scrollY < getOffset(achievementSection).top - 150) {
    moveline(Clients);
  } else if (scrollY > getOffset(achievementSection).top - 150 && scrollY < getOffset(protfolioSection).top - 150) {
    moveline(achievement);
  } else if (scrollY > getOffset(protfolioSection).top - 150 && scrollY < getOffset(AboutUsSection).top - 150) {
    moveline(protfolio);
  } else if (scrollY > getOffset(AboutUsSection).top - 150 && scrollY < getOffset(letsSection).top - 150) {
    moveline(AboutUs);
  } else if (scrollY > getOffset(letsSection).top - 200 ) {
    moveline(talk);
  }
};

window.addEventListener("scroll", moveLineWhenScroll);
  // moveLineWhenScroll();
  // console.log('nav')