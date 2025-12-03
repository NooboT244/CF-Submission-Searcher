function set(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
}

document.addEventListener("DOMContentLoaded", function () {
    let html = `<h2>Developer :</h2>
            <h3>MD. Rashidul Hasan</h3>
            <h2>Email :</h2>
            <h3>hamimhasan244@gmail.com</h3>
            <h3>rashidulhasan244@gmail.com</h3>
            <h2>purpose :</h2>
            <h3>I created this to help<br>competitive programming students<br>track which days they made submissions on
                Codeforces.</h3>
            <br>
            <h5>@Rashidul</h5>`;

    set("BD", html);
    set("EH", "CF Submission Search");
    set("about", "About Me");
    set("home", "Home");
    document.getElementById("home").addEventListener("click", function () {
        location.href = "popup.html";
    });
});