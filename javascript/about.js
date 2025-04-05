document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/about.json') 
        .then(response => response.json())
        .then(data => {

            const profile = data[0]; 

            createText('h3', profile.jobName, 'jobH3-about');
            createText('p', profile.elevatorPitch, 'elevatorPitch-about');

            createText('p', `Email: ${profile.email}`, 'contactInfo-about');

            function createText(type, stuff, divName) {
                const div = document.getElementById(divName);
                const text = document.createElement(type);
                text.textContent = stuff;
                div.appendChild(text);
            }
        })
        .catch(error => {
            console.error("Error fetching the JSON data:", error);
        });
});
