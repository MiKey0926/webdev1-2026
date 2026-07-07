const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "icon-grid" },
    { id: "plots", label: "Plots", icon: "icon-plot" },
    { id: "members", label: "Members", icon: "icon-members" },
    { id: "waitlist", label: "Waitlist", icon: "icon-waitlist" },

];

let currentPage = "dashboard";

const renderName = () => {
    const navUl = document.querySelector(".sidebar nav ul");
    let links="";
    navItems.forEach(menu => {
        links += 
            < li >
            <a href="#" class="${menu.id==currentPage ? "active": ""}">
                <svg class="icon">
                    <use href="#${menu.icon}" />

                </svg>
                ${menu.label}
            </a>
            </li > 
        ;
    });
    console.log(links);
    navUl.innerHTML=links;
}
