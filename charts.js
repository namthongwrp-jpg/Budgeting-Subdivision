"use strict";

// ==========================================
// Global Chart Objects
// ==========================================

let budgetChart = null;
let budgetTypeChart = null;
let agencyChart = null;
let provinceChart = null;
let categoryChart = null;
let requestChart = null;

// ==========================================
// Destroy Chart
// ==========================================

function destroyChart(chart) {

    if (chart) {

        chart.destroy();

    }

}

// ==========================================
// Group Sum
// ==========================================

function groupSum(data, key, value) {

    const result = {};

    data.forEach(item => {

        const k = item[key] || "ไม่ระบุ";

        const v = Number(item[value]) || 0;

        result[k] = (result[k] || 0) + v;

    });

    return result;

}

// ==========================================
// Top N
// ==========================================

function getTopN(obj, limit = 10) {

    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit);

}

// ==========================================
// Update Charts
// ==========================================

function updateCharts() {

    drawBudgetChart();
    drawBudgetTypeChart();
    drawAgencyChart();
    drawProvinceChart();
    drawCategoryChart();
    drawRequestChart();

}
// ==========================================
// Budget Chart
// ==========================================

function drawBudgetChart() {

    const canvas = document.getElementById("budgetChart");

    if (!canvas) return;

    destroyChart(budgetChart);

    const map = groupSum(
        filteredData,
        "ปี",
        "งบประมาณ"
    );

    budgetChart = new Chart(canvas, {

        type: "bar",

        data: {

            labels: Object.keys(map),

            datasets: [{

                label: "งบประมาณ",

                data: Object.values(map),

                borderWidth: 1

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                },

                title: {

                    display: true,

                    text: "งบประมาณตามปี"

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        callback(value) {

                            return value.toLocaleString("th-TH");

                        }

                    }

                }

            }

        }

    });

}
// ==========================================
// Budget Type Chart
// ==========================================

function drawBudgetTypeChart() {

    const canvas = document.getElementById("budgetTypeChart");
    if (!canvas) return;

    destroyChart(budgetTypeChart);

    const map = groupSum(
        filteredData,
        "ประเภทงบ",
        "งบประมาณ"
    );

    budgetTypeChart = new Chart(canvas, {
        type: "doughnut",

        data: {
            labels: Object.keys(map),
            datasets: [{
                label: "งบประมาณ",
                data: Object.values(map)
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {

                legend: {
                    position: "bottom"
                },

                title: {
                    display: true,
                    text: "งบประมาณตามประเภทงบ"
                }

            }

        }

    });

}

// ==========================================
// Agency Chart
// ==========================================

function drawAgencyChart() {

    const canvas = document.getElementById("agencyChart");
    if (!canvas) return;

    destroyChart(agencyChart);

    const map = groupSum(
        filteredData,
        "หน่วยงาน",
        "งบประมาณ"
    );

    const top = getTopN(map, 10);

    agencyChart = new Chart(canvas, {

        type: "bar",

        data: {

            labels: top.map(item => item[0]),

            datasets: [{

                label: "งบประมาณ",

                data: top.map(item => item[1]),

                borderWidth: 1

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            indexAxis: "y",

            plugins: {

                legend: {
                    display: false
                },

                title: {
                    display: true,
                    text: "10 หน่วยงานที่ของบประมาณสูงสุด"
                }

            },

            scales: {

                x: {

                    beginAtZero: true,

                    ticks: {

                        callback: function(value) {

                            return value.toLocaleString("th-TH");

                        }

                    }

                }

            }

        }

    });

}

// ==========================================
// Province Chart
// ==========================================

function drawProvinceChart() {

    const canvas = document.getElementById("provinceChart");
    if (!canvas) return;

    destroyChart(provinceChart);

    const map = groupSum(
        filteredData,
        "จังหวัด",
        "งบประมาณ"
    );

    const top = getTopN(map, 10);

    provinceChart = new Chart(canvas, {

        type: "bar",

        data: {

            labels: top.map(item => item[0]),

            datasets: [{

                label: "งบประมาณ",

                data: top.map(item => item[1]),

                borderWidth: 1

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            indexAxis: "y",

            plugins: {

                legend: {
                    display: false
                },

                title: {
                    display: true,
                    text: "10 จังหวัดที่ของบประมาณสูงสุด"
                }

            },

            scales: {

                x: {

                    beginAtZero: true,

                    ticks: {

                        callback(value) {

                            return value.toLocaleString("th-TH");

                        }

                    }

                }

            }

        }

    });

}

// ==========================================
// Category Chart
// ==========================================

function drawCategoryChart() {

    const canvas = document.getElementById("categoryChart");
    if (!canvas) return;

    destroyChart(categoryChart);

    const map = groupSum(
        filteredData,
        "หมวด",
        "งบประมาณ"
    );

    categoryChart = new Chart(canvas, {

        type: "doughnut",

        data: {

            labels: Object.keys(map),

            datasets: [{

                label: "งบประมาณ",

                data: Object.values(map)

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                },

                title: {

                    display: true,

                    text: "งบประมาณตามหมวด"

                }

            }

        }

    });

}

// ==========================================
// Request Type Chart
// ==========================================

function drawRequestChart() {

    const canvas = document.getElementById("requestChart");
    if (!canvas) return;

    destroyChart(requestChart);

    const map = groupSum(
        filteredData,
        "ประเภทคำขอ",
        "งบประมาณ"
    );

    requestChart = new Chart(canvas, {

        type: "pie",

        data: {

            labels: Object.keys(map),

            datasets: [{

                label: "งบประมาณ",

                data: Object.values(map)

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                },

                title: {

                    display: true,

                    text: "งบประมาณตามประเภทคำขอ"

                }

            }

        }

    });

}
// ==========================================
// Resize Charts
// ==========================================

window.addEventListener("resize", () => {

    [
        budgetChart,
        budgetTypeChart,
        agencyChart,
        provinceChart,
        categoryChart,
        requestChart
    ].forEach(chart => {

        if (chart) {

            chart.resize();

        }

    });

});

// ==========================================
// Refresh Charts
// ==========================================

function refreshCharts() {

    updateCharts();

}

// ==========================================
// Refresh Dashboard
// ==========================================

function refreshDashboard(){

    updateDashboard();

    updateTable();

    updateCharts();

    if(typeof renderAnalysis === "function"){
        renderAnalysis();
    }

    if(typeof renderAgency === "function"){
        renderAgency();
    }

    if(typeof renderProvince === "function"){
        renderProvince();
    }

}

// ==========================================
// Export Chart
// ==========================================

function saveChart(chart, fileName) {

    if (!chart) return;

    const link = document.createElement("a");

    link.href = chart.toBase64Image();

    link.download = fileName + ".png";

    link.click();

}

// ==========================================
// Export All Charts
// ==========================================

function exportAllCharts() {

    if (budgetChart) saveChart(budgetChart, "budget_by_year");

    if (budgetTypeChart) saveChart(budgetTypeChart, "budget_type");

    if (agencyChart) saveChart(agencyChart, "agency");

    if (provinceChart) saveChart(provinceChart, "province");

    if (categoryChart) saveChart(categoryChart, "category");

    if (requestChart) saveChart(requestChart, "request");

}

console.log("charts.js Loaded");