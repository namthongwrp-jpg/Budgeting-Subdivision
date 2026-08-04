// ==========================================
// table.js
// ==========================================

"use strict";

function updateTable() {

    const tbody = document.querySelector("#budgetTable tbody");

    if (!tbody) return;

    tbody.innerHTML = "";

    if (filteredData.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align:center;padding:30px;">
                    ไม่พบข้อมูล
                </td>
            </tr>
        `;

        return;
    }

    filteredData.forEach(item => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${item["ปี"] ?? ""}</td>

            <td>${item["ประเภทงบ"] ?? ""}</td>

            <td>${item["หมวด"] ?? ""}</td>

            <td>${item["รายการ"] ?? ""}</td>

            <td>${item["หน่วยงาน"] ?? ""}</td>

            <td>${item["จังหวัด"] ?? ""}</td>

            <td style="text-align:center">

                ${formatNumber(item["รวมคำขอทั้งสิ้น"])}

            </td>

            <td style="text-align:right">

                ${formatMoney(item["งบประมาณ"])}

            </td>

        `;

        tbody.appendChild(tr);

    });

}