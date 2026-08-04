// ==========================================
// filter.js
// ==========================================

"use strict";

function loadFilters() {

    fillSelect("yearFilter", unique("ปี"));

    fillSelect("budgetTypeFilter", unique("ประเภทงบ"));

    fillSelect("categoryFilter", unique("หมวด"));

    fillSelect("agencyFilter", unique("หน่วยงาน"));

    fillSelect("provinceFilter", unique("จังหวัด"));

    fillSelect("requestTypeFilter",
    budgetData[0]["ประเภทคำขอ"] !== undefined
        ? unique("ประเภทคำขอ")
        : []
);

}

function fillSelect(id, data) {

    const select = document.getElementById(id);

    if (!select) return;

    select.innerHTML = '<option value="">ทั้งหมด</option>';

    data.forEach(item => {

        const option = document.createElement("option");

        option.value = item;

        option.textContent = item;

        select.appendChild(option);

    });

}

function registerFilterEvents() {

    const ids = [

        "yearFilter",

        "budgetTypeFilter",

        "categoryFilter",

        "agencyFilter",

        "provinceFilter",

        "requestTypeFilter"

    ];

    ids.forEach(id => {

        document.getElementById(id)

        ?.addEventListener("change", applyFilters);

    });

}

function applyFilters() {

    currentFilter.year =
        document.getElementById("yearFilter").value;

    currentFilter.budgetType =
        document.getElementById("budgetTypeFilter").value;

    currentFilter.category =
        document.getElementById("categoryFilter").value;

    currentFilter.agency =
        document.getElementById("agencyFilter").value;

    currentFilter.province =
        document.getElementById("provinceFilter").value;

    currentFilter.requestType =
        document.getElementById("requestTypeFilter").value;

    filteredData = budgetData.filter(row => {

        return (

            (!currentFilter.year ||

                row["ปี"] == currentFilter.year)

            &&

            (!currentFilter.budgetType ||

                row["ประเภทงบ"] == currentFilter.budgetType)

            &&

            (!currentFilter.category ||

                row["หมวด"] == currentFilter.category)

            &&

            (!currentFilter.agency ||

                row["หน่วยงาน"] == currentFilter.agency)

            &&

            (!currentFilter.province ||

                row["จังหวัด"] == currentFilter.province)

            &&

            (!currentFilter.requestType ||

                row["ประเภทคำขอ"] == currentFilter.requestType)

        );

    });

    refreshDashboard();

    // updateCharts();

}