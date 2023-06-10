// Function to get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

// Function to update time on page
function updateTime() {
    document.getElementById('current-time').innerText = getCurrentTime();
}

// Update time every second
setInterval(updateTime, 1000);