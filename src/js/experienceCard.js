import { renderExperienceCards } from './workExperience.js';
import { renderSkillCards } from './skill.js';

document.addEventListener("DOMContentLoaded", function() {
  const dynamicSkills = document.getElementById("dynamic-skill-display");
  const dynamicExperience = document.getElementById("dynamic-experience-display");

  dynamicSkills.innerHTML = renderSkillCards();
  dynamicExperience.innerHTML = renderExperienceCards();
});