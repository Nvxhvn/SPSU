document.addEventListener("DOMContentLoaded", () => {
    // Define a unique key for this page (e.g., "ConstituentClubs")
    const pageKey = document.title.replace(/\s+/g, ''); // Removes spaces for a simple key
    const visitorKey = `visitorId_${pageKey}`;
    const counterKey = `counter_${pageKey}`;

    // Check if the user has an ID stored in localStorage
    let visitorId = localStorage.getItem(visitorKey);
    if (!visitorId) {
        // If not, retrieve the current count or start at 1
        let counter = parseInt(localStorage.getItem(counterKey)) || 1;
        
        // Assign this visitor the current count as their ID
        visitorId = counter;
        localStorage.setItem(visitorKey, visitorId);

        // Increment and save the updated count
        localStorage.setItem(counterKey, counter + 1);
    }

    // Display the visitor's unique ID on the page
    document.getElementById("visitorId").textContent = visitorId;
});
