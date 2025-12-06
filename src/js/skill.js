"use strict";

const skills = [
    {
        "name": "Python",
        "summary": `- Backend: Django \n- Mathematical: Numpy, MathplotLib`,
        "header": "./src/images/python.png",
    },
    {
        "name": "Javascript & Typescript",
        "summary": `- Backend: Node & NestJS \n- Frontend: Vue`,
        "header": "./src/images/javascript-logo.webp",
    },
    {
        "name": "3D Modelling",
        "summary": `- Animation object: Blender \n- Engineering Drawing: AutoCAD, SolidWork, Revit`,
        "header": "./src/images/autodesk.png",
    },
    {
        "name": "Git control",
        "summary": `As an experienced Github user, I can do git control, branches, \nand understand Git development procedure`,
        "header": "./src/images/Git-logo-vector-01.svg",
    },
    {
        "name": "Databases",
        "summary": `- Type: SQL (i.e. PostgresQL) and NoSQL (MongoDB)\n- Can make APIs call for databases`,
        "header": "./src/images/dbs.jpg",
    },
    {
        "name": "Linux-based OS",
        "summary": `- My Notebook use Ubuntu\n- Experienced Debian setter, good for server management\n- Can use Docker`,
        "header": "./src/images/linux-logo.png",
    }
];

export function renderSkillCards() {
    let skillsHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl gap-4 m-5 pb-5">

    `;

    [...skills].forEach(skill_card => {
        const formattedSummary = skill_card.summary.replace(/\n/g, '<br />');
        let skillCardHTML = `
            <div class="grid grid-rows-[1ft,2fr] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div>
                    <img class="object-scale-down" src=${skill_card.header} />
                </div>
                <div class="p-5 m-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ${skill_card.name} <br />
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        ${formattedSummary}
                    </p>
                </div>
            </div>

        `;
        skillsHTML += skillCardHTML;
    });
    skillsHTML += `</div>`;
    return skillsHTML;
}

