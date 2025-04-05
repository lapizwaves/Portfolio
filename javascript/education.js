fetch('../json/education.json')
    .then(res => res.json())
    .then(data => {
        const educationContainer = document.getElementById('education-container');

        data.forEach(school => {
            const educationItemDiv = document.createElement('div');
            educationItemDiv.classList.add('education-item');

            const schoolNameYears = document.createElement('h4');
            schoolNameYears.textContent = `${school['School']} | ${school['Years']}`;
            
            educationItemDiv.appendChild(schoolNameYears);

            const major = document.createElement('h5');
            major.textContent = "Major: " + school['Major'];
            
            educationItemDiv.appendChild(major);
            educationContainer.appendChild(educationItemDiv);
        });
    })
    .catch(error => console.error('Error fetching education data:', error));
