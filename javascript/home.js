document.addEventListener("DOMContentLoaded", function() {
    fetch('../json/about.json') 
        .then(response => response.json())
        .then(data => {

            const profile = data[0]; 
            createText('h1', `My name is ${profile.firstName} ${profile.lastName}`, 'home-introduction');
            createText('h2', `I am a ${profile.jobName}`, 'home-job');


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
