const navbar = document.getElementById('navbar');

const links = {
  index: 'Home',
  workxp: 'Work Experience',
  extrac: 'Extracurriculars',
  interests: 'Interests',
};

for (const [slug, title] of Object.entries(links)) {
  const ele = document.createElement('a');
  ele.innerText = title;
  ele.href = '/' + slug + '.html';
  console.log(window.location.pathname);
  ele.className =
    window.location.pathname.slice(1, -5) === slug
      ? 'navbar-ele-active'
      : 'navbar-ele';
  navbar.appendChild(ele);
}
