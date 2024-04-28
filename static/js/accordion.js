const allPanels = Array.from(document.querySelectorAll(".panel"));
const allAccordion = Array.from(document.querySelectorAll(".accordion"));


// Set all panels to expanded by default. Alpha testers said they did not like.
/* 
allPanels.forEach(function (panel) {
  panel.style.maxHeight = panel.scrollHeight + "px";
});
 */
const expandAccordion = (elem) => {
  let panel = elem.parentElement.nextElementSibling;
  
  // Toggle the 'active' class on the accordion element
  //elem.parentElement.classList.toggle("active");
  
  // If the panel is already open, close it
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    // Open the panel
    panel.style.maxHeight = panel.scrollHeight + "px";
    // If this is the skill panel, initialize the skill bars
    if (panel.id === "skill-panel") {
      //MAKE SKILL PANEL SHOW PERCENTAGES BY DEFAULT
      panel.scrollHeight + "px"
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
};