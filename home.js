function set(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
}

document.addEventListener("DOMContentLoaded", function () {
    set("EH", "CF Submission Search");
    set("LSD", "Enter Date:");
    set("SM", "Submit");
    set("about", "About Me");
    set("home", "Home");
    document.getElementById("about").addEventListener("click", function () {
        location.href = "about.html";
    })
});