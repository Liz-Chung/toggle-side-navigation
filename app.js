const sidebarToggleIcon = document.querySelector(".bx-right-arrow-circle");
const sidebar = document.querySelector("nav");

function toggleSidebar () {
    document.querySelector('body').classList.remove("preload");
    sidebar.classList.toggle('active');

    if(sidebar.className.includes("active")) localStorage.setItem("sidebarState", "open");
    else localStorage.setItem("sidebarState", "close");
}

window.onload = function() {
    const sidebarState = localStorage.getItem("sidebarState");

    if(sidebarState === "close") sidebar.classList.remove("active");
    else sidebar.classList.add("active");

    document.querySelector('body').style.visibility = 'visible';
}

sidebarToggleIcon.addEventListener('click', toggleSidebar);
