// ==========================================
// navigation.js
// ==========================================

"use strict";

const pages = {
    dashboard: "dashboardPage",
    analysis: "analysisPage",
    agency: "agencyPage",
    province: "provincePage",
    detail: "detailPage",
    export: "exportPage"
};

function registerNavigation() {

    const menus = document.querySelectorAll(".menu li");

    menus.forEach(menu => {

        menu.addEventListener("click", () => {

            menus.forEach(x => x.classList.remove("active"));

            menu.classList.add("active");

            const text = menu.textContent.trim();

            switch (text) {

                case "📊 Dashboard":
                    showSection(pages.dashboard);
                    break;

                case "📈 วิเคราะห์งบประมาณ":
                    showSection(pages.analysis);
                    break;

                case "🏢 หน่วยงาน":
                    showSection(pages.agency);
                    break;

                case "📍 จังหวัด":
                    showSection(pages.province);
                    break;

                case "📄 รายละเอียดข้อมูล":
                    showSection(pages.detail);
                    break;

                case "⬇ Export":
                    showSection(pages.export);
                    break;

            }

        });

    });

}

function showSection(pageId){

    document.querySelectorAll(".page").forEach(page=>{

        page.style.display="none";

    });

    const page=document.getElementById(pageId);

    if(page){

        page.style.display="block";

    }

}