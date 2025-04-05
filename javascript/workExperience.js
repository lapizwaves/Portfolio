fetch('../json/workExperience.json')
    .then(res => res.json())
    .then(data => {
        const workExperienceContainer = document.getElementById('workExperience-container');

        data.forEach(experience => {
            const experienceDiv = document.createElement('div');
            experienceDiv.classList.add('experience-item');
            
            const jobTitleDate = document.createElement('h4');
            jobTitleDate.textContent = `${experience['job-title']} | ${experience.date}`;
            experienceDiv.appendChild(jobTitleDate);

            const projectTitle = document.createElement('h5');
            projectTitle.textContent = experience['project-title'];
            experienceDiv.appendChild(projectTitle);

            const taskList = document.createElement('ul');
            experience['ul-list'].forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.textContent = task;
                taskList.appendChild(taskItem);
            });
            
            experienceDiv.appendChild(taskList);
            workExperienceContainer.appendChild(experienceDiv);
        });
    })
    .catch(error => console.error('Error fetching work experience data:', error));
