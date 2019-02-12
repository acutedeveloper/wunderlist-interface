class Menu{

    constructor(menuObject) {

        this.parentMenu = document.querySelector(`.${menuObject.parentMenuClass}`);

        if(this.parentMenu !== null){

            this.menuToggle = this.parentMenu.querySelector(`.${menuObject.menuToggle}`);
            this.menu = this.parentMenu.querySelector(`.${menuObject.menu}`);

            this.setEvents();
        } else {
            console.error("You have not added a class to the element");
        }

    }

    setEvents() {

        this.menuToggle.addEventListener('click', function(e){
            this.toggleMenu(e);
        }.bind(this));

    }

    hideMenu() {
        console.log('hide');
        if(this.menu.classList.contains("js-active")){
            this.menu.classList.remove("js-active");
        }
    }

    toggleMenu(e) {
        this.menu.classList.toggle("js-active");
    }
}

const mainMenu = new Menu({
    eventType: "hover",
    parentMenuClass: "js-menu",
    menuToggle: "js-menu-toggle",
    menu: "js-menu-list"
});

const filterMenu = new Menu({
    eventType: "hover",
    parentMenuClass: "js-filterMenu",
    menuToggle: "js-filterMenu-toggle",
    menu: "js-filterMenu-list"
});

class sidebarMenu{

    constructor(cssObject) {

        this.sidebarShow = cssObject.sidebarShow;
        this.sidebar = document.querySelector(`.${cssObject.sidebar}`);
        this.sidebarOpen = document.querySelector(`.${cssObject.sidebarOpenButton}`);
        this.sidebarClose = document.querySelector(`.${cssObject.sidebarCloseButton}`);

        if(this.sidebar !== null && this.sidebarOpen !== null && this.sidebarClose !== null){
            this.setEvents();
        } else {
            console.error("You have not added a class to the element");
        }

    }

    setEvents() {

        this.sidebarOpen.addEventListener('click', function(e){
            e.preventDefault();
            this.showSidebar();
        }.bind(this));

        this.sidebarClose.addEventListener('click', function(e){
            e.preventDefault();
            this.closeSidebar();
        }.bind(this));

    }

    showSidebar() {
        this.sidebar.classList.toggle(this.sidebarShow);
    }

    closeSidebar() {
        this.sidebar.classList.toggle(this.sidebarShow);
    }
}

const mainSidebar = new sidebarMenu({
    sidebar: "js-sidebar",
    sidebarOpenButton: "js-sidebar-open",
    sidebarCloseButton: "js-sidebar-close",
    sidebarShow: "js-sidebar-show"
});