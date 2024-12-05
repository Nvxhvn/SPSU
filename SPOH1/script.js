document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");

    if (page === "SPOH") {
        // Hide main page content
        document.querySelector("main").style.display = "none";
        // Show SPOH content
        document.getElementById("SPOH").style.display = "block";
    } else {
        // Show main page content
        document.querySelector("main").style.display = "block";
        // Hide SPOH content
        document.getElementById("SPOH").style.display = "none";
    }
});

function handleRedirect() {
    const code = document.getElementById("redirectInput").value.trim();

    // Redirect based on code entered
    switch (code) {
        case 'SPOHConsC':
            window.location.href = 'ConstituentClubs.html';
            break;
        case 'SPOHArtsnCulture':
            window.location.href = 'ArtsnCulture.html';
            break;
        case 'SPOHServiceLearn':
            window.location.href = 'ServiceLearning.html';
            break;
        case 'SPOHSpecials':
            window.location.href = 'SpecialInterests.html';
            break;
        case 'SPOHSportsnAdv':
            window.location.href = 'SportsAdventure.html';
            break;
        default:
            alert('Invalid code. Please try again.');
            break;
    }

    if (mappings[input]) {
        const title = mappings[input];
        const visitorCount = incrementVisitorCount(title);
        window.location.href = `/SPOH/${input}?id=${visitorCount}`;
    } else {
        alert("Invalid code");
    }
}

function incrementVisitorCount(page) {
    let visitorCount = parseInt(localStorage.getItem(`${page}Count`) || "0");
    localStorage.setItem(`${page}Count`, ++visitorCount);
    return visitorCount;
}
