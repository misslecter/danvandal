import portfolio from '../../portfolio.json';

const portfolioContainer = document.querySelector("[data-js-selector=\"portfolio\"]");

const generateAsideIcon = (index, projectId, icon) => {
    const iconTemplate = document.createElement('div');
    iconTemplate.classList.add('aside');
    iconTemplate.classList.add(projectId);

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

        const examplesContent = document.createElement('div');
        examplesContent.classList.add("portfolio__examples__content");

        // Row with examples and side icon
        const row = document.createElement('div');
        row.classList.add('row');

        for (const example of project.examples) {
            const exampleTemplate = `
            <div class="col">
                <video autoplay muted loop>
                    <source type="video/mp4;" src="videos/${example.video}"/>
                </video>
            </div>`

            row.insertAdjacentHTML('beforeend', exampleTemplate);
        }

        examplesContent.insertAdjacentElement("beforeend", row);

        // Add icon next to examples
        if (project.aside) {
            examplesContent.insertAdjacentElement('beforeend', generateAsideIcon(i + 1, project.id, project.aside));
        }

        // Row with descriptions
        const descriptionRow = document.createElement('div');
        descriptionRow.classList.add('row');

        for (const example of project.examples) {
            const exampleDescription = `
            <div class="col">
                <p>${example.description}</p>
            </div>`

            descriptionRow.insertAdjacentHTML('beforeend', exampleDescription);
        }

        // Add two rows
        examplesContainer.insertAdjacentElement("beforeend", examplesContent);
        examplesContainer.insertAdjacentElement("beforeend", descriptionRow);

        projectTemplate.insertAdjacentElement('beforeend', examplesContainer);
    }

    portfolioContainer.insertAdjacentElement('beforeend', projectTemplate);
}
