// JAVA-SCRIPT:

const font_size_button = document.querySelectorAll(".font-size-button button");
font_size_button.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        font_size_button.forEach((font_button) => font_button.classList.remove("active-font-size-button"));
        button.classList.add("active-font-size-button");
    });
});

const language_button = document.getElementById("language");
const language_option = document.getElementById("language-option");

const current_lang = document.getElementById("current-lang");
const language_list = language_option.querySelectorAll("li");

const language_option_button = document.querySelectorAll(".language-option li");

language_button.addEventListener("click", () =>
{
    language_option.classList.toggle("active-language-option");
});

language_option_button.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        language_option_button.forEach((lang_button) => lang_button.classList.remove("active-language"));
        button.classList.add("active-language");
    });
});

language_list.forEach((lang_list, index) =>
{
    lang_list.addEventListener("click", () =>
    {
        let lang = lang_list.innerText;
        current_lang.innerHTML = lang;
        console.log(lang);
    });
});

const total_vaccination_text = document.getElementById("total-vaccination-text");
const today_vaccination_text = document.getElementById("today-vaccination-text");

let total_vaccination = 2105755030;
let today_vaccination = 250;

setInterval(() =>
{
    total_vaccination+=5;
    today_vaccination+=3;

    total_vaccination_text.innerHTML = total_vaccination.toLocaleString().split().join(",");
    today_vaccination_text.innerHTML = today_vaccination.toLocaleString().split().join(",");
}, 1500);

const search_vaccination_button = document.querySelectorAll(".search-container-view button");

search_vaccination_button.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        search_vaccination_button.forEach((search_btn => search_btn.classList.remove("active-search-vaccination-button")));
        button.classList.add("active-search-vaccination-button");
    });

    button.addEventListener("mouseover", () =>
    {
        const button_icon = button.querySelector("i");
        button_icon.classList.add("fa-beat");
    });

    button.addEventListener("mouseout", () =>
    {
        const button_icon = button.querySelector("i");
        button_icon.classList.remove("fa-beat");
    });
});

const search_container_one = document.getElementById("search-container-one");
const search_container_two = document.getElementById("search-container-two");
const search_container_three = document.getElementById("search-container-three");

const search_container_view_one = document.getElementById("search-container-view-one");
const search_container_view_two = document.getElementById("search-container-view-two");
const search_container_view_three = document.getElementById("search-container-view-three");

search_container_one.addEventListener("click", () =>
{
    search_container_view_one.style.display = "flex";
    search_container_view_two.style.display = "none";
    search_container_view_three.style.display = "none";
});

search_container_two.addEventListener("click", () =>
{
    search_container_view_one.style.display = "none";
    search_container_view_two.style.display = "flex";
    search_container_view_three.style.display = "none";
});

search_container_three.addEventListener("click", () =>
{
    search_container_view_one.style.display = "none";
    search_container_view_two.style.display = "none";
    search_container_view_three.style.display = "flex";
});

const scroll_left_issues = document.getElementById("scroll-left-issues");
const scroll_right_issues = document.getElementById("scroll-right-issues");

const issues_conatiner_box_list = document.getElementById("issues-container-box-list");

scroll_left_issues.addEventListener("click", () =>
{
    issues_conatiner_box_list.scrollLeft-= 100;
});

scroll_right_issues.addEventListener("click", () =>
{
    issues_conatiner_box_list.scrollLeft+= 100;
});

const question_view = document.querySelectorAll(".question-view");
const answer_view = document.querySelectorAll(".answer-view");

question_view.forEach((question, index) =>
{
    question.addEventListener("click", () =>
    {
        answer_view[index].classList.toggle("active-answer");
    });
});

const new_cowin_question_view = document.querySelectorAll(".new-cowin-question-view");
const new_cowin_answer_view = document.querySelectorAll(".new-cowin-answer-view");

new_cowin_question_view.forEach((question, index) =>
{
    question.addEventListener("click", () =>
    {
        new_cowin_answer_view[index].classList.toggle("active-new-cowin-answer");
    });
});

const support_container = document.getElementById("support-container");
const support_container_view = document.getElementById("support-number-container");

support_container.addEventListener("click", () =>
{
    support_container_view.classList.toggle("active-support-container");
});