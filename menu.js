// menu.js

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href]");
  
    links.forEach(link => {
      const href = link.getAttribute("href");
  
      // Check if external link: exclude relative links, hashes, and same hostname
      const isExternal = href &&
        !href.startsWith("/") &&
        !href.startsWith("#") &&
        !href.includes(location.hostname);
  
      if (!isExternal) return;
  
      // Always set target="_blank"
      link.setAttribute("target", "_blank");
  
      // Get current rel value
      const relAttr = link.getAttribute("rel") || "";
  
      // If rel contains "dofollow" (case-insensitive), skip modifying rel
      if (/\bdofollow\b/i.test(relAttr)) return;
  
      // Required rel attributes
      const requiredRels = ["noopener", "noreferrer", "nofollow"];
  
      // Split existing rel and clean
      const existingRels = relAttr.trim().split(/\s+/).filter(Boolean);
  
      // Merge without duplicates
      const mergedRels = Array.from(new Set([...existingRels, ...requiredRels]));
  
      // Update rel attribute
      link.setAttribute("rel", mergedRels.join(" "));
    });
  });

// Navbar
document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="container">
    <a class="navbar-brand" href="index.html">UAE Directory</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="category.html">Categories</a></li>
        <li class="nav-item"><a class="nav-link" href="addbusiness.html">Add Business</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search site..." aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;

// Sidebar Categories
document.getElementById('category-menu').innerHTML = `
<div class="category-menu">
  <h5>Categories</h5>
  <a href="vapeshop.html">Vape Shops</a>
  <a href="fashion.html">Fashion & Apparel</a>
  <a href="Electronics.html">Electronics</a>
  <a href="Grociries.html">Groceries</a>
  <a href="Shisha.html">Shisha & Tobacco</a>
  <a href="Ecommerc.html">Online Marketplaces</a>
  <a href="gift.html">Gifts & Perfumes</a>
  <a href="healthcare.html">Healthcare</a>
</div>
`;

document.getElementById('footer-menu').innerHTML = `
  <footer class="bg-dark text-white mt-5 pt-4 pb-3">
    <div class="container">
      <div class="row">

        <div class="col-md-4 mb-3">
          <h5 class="text-uppercase">UAE Business Directory</h5>
          <p>Your trusted UAE Business Directory for Vape, Fashion, Electronics, Shisha, Perfumes, and more.</p>
        </div>

        <div class="col-md-4 mb-3" id="category-menu">
          <h5 class="text-uppercase">Categories</h5>
          <ul class="list-unstyled">
            <li><a href="vapeshop.html" class="text-white">Vape Shops</a></li>
            <li><a href="fashion.html" class="text-white">Fashion & Apparel</a></li>
            <li><a href="Electronics.html" class="text-white">Electronics</a></li>
            <li><a href="Grociries.html" class="text-white">Groceries</a></li>
            <li><a href="Shisha.html" class="text-white">Shisha & Tobacco</a></li>
            <li><a href="Ecommerc.html" class="text-white">Online Marketplaces</a></li>
            <li><a href="gift.html" class="text-white">Gifts & Perfumes</a></li>
            <li><a href="healthcare.html" class="text-white">Healthcare</a></li>
          </ul>
        </div>

        <div class="col-md-4 mb-3">
          <h5 class="text-uppercase">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="category.html" class="text-white">All Categories</a></li>
            <li><a href="addbusiness.html" class="text-white">Add Your Business</a></li>
            <li><a href="contact.html" class="text-white">Contact Us</a></li>
          </ul>
        </div>

      </div>
     
      
    </div>
  </footer>
`;

