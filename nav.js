const navbarContainer = document.querySelector(".navbar-container");
const centerText = document.querySelector(".centerText");
const rightLogo = document.querySelector(".rightLogo");

function handleScroll() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (window.innerWidth > 1111) {
    if (scrollTop >= 90) {
      navbarContainer.classList.add("scroll-down");
    } else {
      navbarContainer.classList.remove("scroll-down");
    }
  }
}
window.addEventListener("scroll", handleScroll);

function openSidebar() {
  document.querySelector(".sidebar").style.width = "75%";
  document.body.classList.add("sidebar-open");
}

function closeSidebar() {
  document.querySelector(".sidebar").style.width = "0";
  document.body.classList.remove("sidebar-open");
}

// ... your existing JavaScript ...

function toggleMobileDropdown() {
  const dropdownContent = document.querySelector('.mobile-dropdown-content');
  const trackShipmentsLink = document.querySelector('.track-shipment');

  // Toggle the dropdown content
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

  // Toggle margin-top for the "Track Shipments" link
  if (dropdownContent.style.display === 'block') {
    // Add margin-top when the dropdown is visible
    trackShipmentsLink.style.marginTop = '125px'; // Adjust the value as needed
  } else {
    // Remove margin-top when the dropdown is hidden
    trackShipmentsLink.style.marginTop = '0';
  }
}

// ... your existing JavaScript ...
