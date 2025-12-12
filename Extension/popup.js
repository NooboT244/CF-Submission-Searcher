// Copyright (c) 2025 NooboT244 (MD. Rashidul Hasan)
// Licensed under CC BY-NC-ND 4.0
// See the LICENSE file in the root of the repository for details.

async function CFSS() {
  const form = document.getElementById("form");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const handle = document.getElementById("HNI").value.trim();
  const date = document.getElementById("SD").value;

  const startUnix = Math.floor((new Date(date).setHours(0, 0, 0, 0)) / 1000);
  const endUnix = Math.floor((new Date(date).setHours(23, 59, 59, 999)) / 1000);

  const R = document.getElementById("R");
  R.style.textAlign = "center";
  R.innerText = "Loding...";

  try {
    const res = await fetch(`https://codeforces.com/api/user.status?handle=${handle}`);
    const data = await res.json();

    if (data.status !== "OK") {
      R.innerText = "User not found or API error.";
      return;
    }

    const filtered = data.result.filter(s =>
      s.creationTimeSeconds >= startUnix &&
      s.creationTimeSeconds <= endUnix
    );

    if (filtered.length === 0) {
      R.innerText = "No submissions on this date.";
      return;
    }

    const seen = new Set();
    let html = `<ol type="1">`;

    filtered.forEach(sub => {
      const { contestId, problem, verdict } = sub;
      const code = `${contestId} ${problem.index}`;

      if (verdict === "OK" && !seen.has(code)) {
        seen.add(code);
        html += `<li><mark>${code}</mark> – ${problem.name}</li><br>`;
      }
    });

    html += "</ol>";
    R.style.textAlign = "left";
    R.innerHTML = html;

  } catch (e) {
    console.error(e);
    R.innerText = "Network error.";
  }
}

document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      CFSS();
    }
  });

  document.getElementById("SM").addEventListener("click", CFSS);
});
