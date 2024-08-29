import React from "react";
function Footer() {
    const year = new Date().getFullYear();
    return <footer id="footer-section">
    {/* <h3>Socials</h3> */}
    <div class="social-svg">
      <a href="https://www.instagram.com/arpanr70/"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.svg" /></a>
      <a href="https://www.linkedin.com/in/arpan-rohilla-65991b256"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.svg" /></a>
      <a href="https://x.com/ARPAN__R"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.svg" /></a>
      <a href="https://github.com/arpan2233"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg" /></a>
  </div>
  <p>All Rights Reserved©{year}</p>
  </footer>
}
export default Footer;