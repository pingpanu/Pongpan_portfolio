import { renderExperienceCards } from './workExperience.js';

document.addEventListener("DOMContentLoaded", function() {
  const dynamicExperience = document.getElementById("dynamic-experience-display");

  dynamicExperience.innerHTML = renderExperienceCards();
});