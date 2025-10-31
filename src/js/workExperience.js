"use strict";

const work_experience = [
    {
        "position": "Bangkok Yellow Line Consultant",
        "company": "Professional System Engineering Co., Ltd.",
        "duration": "June 2018 - November 2019",
        "summary": "Coordinate with Sino-Thai Engineering in mechanical systems inspection and commision.",
        "header": "/src/images/Thailand-Bangkok-Yellow-Line-monorail-Shutterstock-pic.jpg",
        "buttonName": "bangkok-yellow-line",
    },
    {
        "position": "Sale Support",
        "company": "Kruger Ventilation Industry Asia Co., Ltd.",
        "duration": "September 2017 - May 2018",
        "summary": "Support the sale department with certified data, and coordinate with other department in developing new products.",
        "header": "/src/images/211.png",
        "buttonName": "kruger-ventilation",
    },
    {
        "position": "Nondestructive Testing Technician",
        "company": "Thai Nondestructive Testing Co.Ltd",
        "duration": "June 2016 - Dec 2016",
        "summary": "Do field inspection of gas systems in buildings, and write the inspection reports for submission to Deparment of Energy Business (DOEB)",
        "header": "/src/images/Non-Destructive-Testing-NDT.webp",
        "buttonName": "thai-ndt",
    }
];

export function renderExperienceCards() {
    let experienceHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl gap-4 m-5 pb-5">

    `;

    [...work_experience].forEach(job_card => {
        let jobCardHTML = `
            <div class="grid grid-rows-[1ft,2fr] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div>
                    <img class="object-scale-down" src=${job_card.header} />
                </div>
                <div class="p-5 m-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        ${job_card.position} <br />
                        ${job_card.company} <br />
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        ${job_card.summary}
                    </p>
                    <button id=${job_card.buttonName} class="rounded-lg cursor-pointer bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4">
                        Read More
                    </button>
                </div>
            </div>

        `;
        experienceHTML += jobCardHTML;
    });
    experienceHTML += `</div>`;
    return experienceHTML;
}

