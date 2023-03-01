import portfolio from '../../portfolio.json';

const portfolioContainer = document.querySelector("[data-js-selector=\"portfolio\"]");

const generateAsideIcon = (index, projectId, icon) => {
    const iconTemplate = document.createElement('div');
    iconTemplate.classList.add('aside');

    // Render image
    iconTemplate.insertAdjacentHTML('beforeend', `<img src="aside/${icon}"/>`);

    if (index % 2 === 0) {
        // left placement
        iconTemplate.classList.add('aside--left');
    } else {
        // right placement
        iconTemplate.classList.add('aside--right');
    }

    return iconTemplate;
}

for (const [i, project] of portfolio.entries()) {
    const projectTemplate = document.createElement('div');
    projectTemplate.innerHTML = `<h1>${project.title}</h1>`;

    if (project.examples) {
        const examplesContainer = document.createElement('div');
        examplesContainer.classList.add("portfolio__examples");
        examplesContainer.classList.add("container");
        examplesContainer.classList.add("container--thin");

        const row = document.createElement('div');
        row.classList.add('row');

        for (const example of project.examples) {
            const exampleTemplate = `
            <div class="col">
                <video autoplay muted loop>
                    <source type="video/mp4;" src="videos/${example.video}"/>
                </video>
                <p>${example.description}</p>
            </div>`

            row.insertAdjacentHTML('beforeend', exampleTemplate);
        }

        examplesContainer.insertAdjacentElement("beforeend", row);

        // Add icon next to examples
        if (project.aside) {
            examplesContainer.insertAdjacentElement('beforeend', generateAsideIcon(i + 1, project.id, project.aside));
        }

        projectTemplate.insertAdjacentElement('beforeend', examplesContainer);
    }

    portfolioContainer.insertAdjacentElement('beforeend', projectTemplate);
}
