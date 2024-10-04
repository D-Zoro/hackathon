// Updated to include coding language
document
  .getElementById("experience-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const codingLanguage = document.getElementById("codingLanguage").value;
    const experience = document.getElementById("experience").value;

    if (name && codingLanguage && experience) {
      let experiences = JSON.parse(localStorage.getItem("experiences")) || [];
      experiences.push({ name, codingLanguage, experience });
      localStorage.setItem("experiences", JSON.stringify(experiences));
      document.getElementById("experience-form").reset();
      alert("Experience shared successfully!");
    }
  });

// Load experiences (updated to show coding language)
function loadExperiences() {
  let experiences = JSON.parse(localStorage.getItem("experiences")) || [];
  const feed = document.getElementById("experience-feed");
  if (feed) {
    feed.innerHTML = "";

    experiences.forEach((exp) => {
      const expDiv = document.createElement("div");
      expDiv.classList.add(
        "bg-gray-800",
        "p-4",
        "rounded-lg",
        "shadow-lg",
        "hover-card",
        "text-white"
      );
      expDiv.innerHTML = `
          <h3 class="font-bold text-blue-400">${exp.name}</h3>
          <p><strong>Coding Language:</strong> ${exp.codingLanguage}</p>
          <p>${exp.experience}</p>
        `;
      feed.appendChild(expDiv);
    });
  }
}

// Load experiences on page load
document.addEventListener("DOMContentLoaded", loadExperiences);
