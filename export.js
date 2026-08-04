"use strict";

// ==========================================
// Export Excel
// ==========================================

function exportExcel() {

    if (!filteredData || filteredData.length === 0) {
        alert("ไม่มีข้อมูล");
        return;
    }

    const wb = XLSX.utils.book_new();

    const ws = XLSX.utils.json_to_sheet(filteredData);

    XLSX.utils.book_append_sheet(
        wb,
        ws,
        "Budget"
    );

    XLSX.writeFile(
        wb,
        "BudgetDashboard.xlsx"
    );

}

// ==========================================
// Export PDF
// ==========================================

function exportPDF() {

    window.print();

}

// ==========================================
// Export Table CSV
// ==========================================

function exportCSV() {

    if (!filteredData || filteredData.length === 0) return;

    const ws = XLSX.utils.json_to_sheet(filteredData);

    const csv = XLSX.utils.sheet_to_csv(ws);

    const blob = new Blob(
        [csv],
        {
            type: "text/csv;charset=utf-8;"
        }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "BudgetDashboard.csv";

    a.click();

    URL.revokeObjectURL(url);

}

// ==========================================
// Export Charts
// ==========================================

function exportAllCharts() {

    [
        budgetChart,
        budgetTypeChart,
        agencyChart,
        provinceChart,
        categoryChart,
        requestChart
    ].forEach((chart, index) => {

        if (!chart) return;

        const a = document.createElement("a");

        a.href = chart.toBase64Image();

        a.download = "chart_" + (index + 1) + ".png";

        a.click();

    });

}

console.log("export.js Loaded");