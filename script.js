document.getElementById("year").textContent = new Date().getFullYear();

// Email reveal (reduces basic scraping)
const user = "nhazzazi";
const domain = "ieee.org";
const email = `${user}@${domain}`;

const emailLink = document.getElementById("emailLink");
emailLink.textContent = email;
emailLink.href = `mailto:${email}`;
