import portfolio from '../../portfolio.json';

const portfolioContainer = document.querySelector("[data-js-selector=\"portfolio\"]");

for (const project of portfolio) {
    const projectTemplate = document.createElement('div');
    const projectTitle = document.createElement('h1');
    projectTemplate.innerHTML = `<h1>${project.title}</h1>`;

    if (project.examples) {
        const examplesContainer = document.createElement('div');
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
        projectTemplate.insertAdjacentElement('beforeend', examplesContainer);
    }

    portfolioContainer.insertAdjacentElement('beforeend', projectTemplate);
}
