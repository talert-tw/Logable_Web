// Function to log user information
function logUserData() {
    const userAgent = navigator.userAgent;
    const browserInfo = {
        userAgent: userAgent,
        platform: navigator.platform,
        language: navigator.language,
        online: navigator.onLine,
    };

    // Discord Webhook URL (replace with your actual webhook URL)
    const discordWebhookURL = 'https://discord.com/api/webhooks/1301223126037827666/rw81EBn4zuN2Y-8zmRwUidiYdXnv7HmJtVutM0KUWOmTnj2-t5RpJwFfqQtcXUW61XG8';

    // Prepare the payload for Discord
    const discordPayload = {
        content: `User Data: \n\`\`\`${JSON.stringify(browserInfo, null, 2)}\`\`\``, // Format for better readability
    };

    // Send user data to the Discord webhook
    fetch(discordWebhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordPayload),
    })
    .then((response) => {
        if (response.ok) {
            console.log('User data logged successfully');
        } else {
            console.error('Failed to log user data:', response.statusText);
        }
    })
    .catch((error) => {
        console.error('Error sending to Discord:', error);
    });
}

// Function to check if the page is accessed via an API
function checkAPIRequest() {
    const isAPIRequest = (document.referrer && document.referrer.includes(window.location.hostname)) === false;

    if (isAPIRequest) {
        // If accessed as an API, change the text
        document.getElementById('main-text').innerText = 'watafak aer u doin';
        // Optionally, send a response directly to the user (could also use JSON for API requests)
        const responsePayload = { message: 'watafak aer u doin' };
        console.log(JSON.stringify(responsePayload));
    }
}

// Function to set a random number of question marks in the title (1 to 64)
function setRandomTitle() {
    const randomCount = Math.floor(Math.random() * 64) + 1; // Random number between 1 and 64
    const questionMarks = '?'.repeat(randomCount); // Create a string of question marks
    document.title = questionMarks; // Set the title
}

// Call the functions
document.addEventListener("DOMContentLoaded", function() {
    setRandomTitle(); // Set a random title on page load
    logUserData(); // Log user data
    checkAPIRequest(); // Check for API request
});
