// ==========================================
// agency.js
// ==========================================

"use strict";

function renderAgency() {

    const container = document.getElementById("agencyContent");

    if (!container) return;

    const map = groupSum(
        filteredData,
        "หน่วยงาน",
        "งบประมาณ"
    );

    const rows = Object.entries(map)
        .sort((a,b)=>b[1]-a[1]);

    let html = `

    <table class="analysis-table">

        <thead>

            <tr>

                <th width="70">ลำดับ</th>

                <th>หน่วยงาน</th>

                <th width="220">งบประมาณ</th>

            </tr>

        </thead>

        <tbody>

    `;

    rows.forEach((row,index)=>{

        html += `

        <tr>

            <td>${index+1}</td>

            <td>${row[0]}</td>

            <td style="text-align:right">
                ${formatMoney(row[1])}
            </td>

        </tr>

        `;

    });

    html += `

        </tbody>

    </table>

    `;

    container.innerHTML = html;

}
