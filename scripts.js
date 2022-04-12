const navbar = document.getElementById("navbar");

const links = {
  index: "Home",
  workxp: "Work Experience",
  extrac: "Extracurriculars",
  interests: "Interests"
}

for (const [slug, title] of Object.entries(links)) {
  const ele = document.createElement("a");
  ele.innerText = title;
  ele.href = "/" + slug + '.html';
  ele.className = 'navbar-ele';
  navbar.appendChild(ele);
}
