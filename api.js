// ==========================================
// api.js
// Load Excel
// ==========================================

"use strict";

async function loadData(){

    const response = await fetch("data/Budget_Master_2567-2570.xlsx");

    if(!response.ok){
        throw new Error("ไม่พบไฟล์ Excel");
    }

    const buffer = await response.arrayBuffer();

    const workbook = XLSX.read(buffer,{
        type:"array"
    });

    // อ่านชีต BudgetData โดยตรง
    const worksheet = workbook.Sheets["BudgetData"];

    budgetData = XLSX.utils.sheet_to_json(worksheet,{
        defval:""
    });

    filteredData = [...budgetData];

    console.table(budgetData.slice(0,5));

    console.log("Columns:");
    console.log(Object.keys(budgetData[0]));

    alert(Object.keys(budgetData[0]).join("\n"));

}
