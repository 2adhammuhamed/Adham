/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";
const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if(sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else {
    $HTML.dataset.theme = isDark ? "light" : "dark";
}
const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme",$HTML.dataset.theme);
}
$themeBtn.addEventListener("click", changeTheme);

// tab 
const $tabBtn = document.querySelectorAll("[data-tab-btn]");
const $tabContent = document.querySelectorAll("[data-tab-content]");

let [lastActiveTab] = $tabContent;
let [lastActiveTabBtn] = $tabBtn;
lastActiveTab.classList.add("active");
lastActiveTabBtn.classList.add("active");
$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");
        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});
