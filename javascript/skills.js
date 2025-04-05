
        var paddingNum = '50px';
        
        fetch('../json/skills.json')
            .then(res => res.json())
            .then(data => {

                const codingSkills = data.find(category => category.type === "Programming");
                const uiUxSkills = data.find(category => category.type === "UI/UX Software");
                const lowNoCodeSkills = data.find(category => category.type === "Low/No Code Sites Experience");
                const documentationSkills = data.find(category => category.type === "Documentation");

                if (codingSkills) skillsSection(codingSkills, paddingNum);
                else console.warn("Coding skills category not found");

                if (uiUxSkills) skillsSection(uiUxSkills, paddingNum);
                else console.warn("UI/UX Software skills category not found");

                if (lowNoCodeSkills) skillsSection(lowNoCodeSkills, paddingNum);
                else console.warn("Low/No Code Sites Experience skills category not found");

                if (documentationSkills) skillsSection(documentationSkills, paddingNum);
                else console.warn("Documentation skills category not found");
            })
            .catch(err => console.error('Error loading the JSON file:', err));


        function skillsSection(category, paddingNum) {
            const skillsContainer = document.getElementById('skills-container');
            
            if (!skillsContainer) {
                console.error('Skills container element not found');
                return;
            }

            const catDiv = document.createElement("div");
            catDiv.classList.add(category.num + "div"); 
            catDiv.style.padding = paddingNum;

            const catTitle = document.createElement("h2");
            catTitle.textContent = category.type;  
            catDiv.appendChild(catTitle);

            const catUl = document.createElement("ul");
            catUl.classList.add(category.num + "ul"); 

            category.skills_arr.forEach(skill => {
                const listItem = document.createElement('li');
                listItem.textContent = skill.skill; 
                catUl.appendChild(listItem);
            });

            catDiv.appendChild(catUl);

            skillsContainer.appendChild(catDiv);
        }
