// ==========================================
// analysis.js
// ==========================================

"use strict";

function renderAnalysis() {

    const container = document.getElementById("analysisContent");

    if (!container) return;

    const totalBudget = sumColumn(filteredData, "งบประมาณ");
    const totalItems = filteredData.length;

    const agencyCount = countUnique(filteredData, "หน่วยงาน");
    const provinceCount = countUnique(filteredData, "จังหวัด");

    const yearMap = groupSum(filteredData, "ปี", "งบประมาณ");
    const categoryMap = groupSum(filteredData, "หมวด", "งบประมาณ");
    const budgetTypeMap = groupSum(filteredData, "ประเภทงบ", "งบประมาณ");

    const topAgency = getTopN(
        groupSum(filteredData, "หน่วยงาน", "งบประมาณ"),
        10
    );

    const topProvince = getTopN(
        groupSum(filteredData, "จังหวัด", "งบประมาณ"),
        10
    );

    container.innerHTML = `

    <div class="analysis-grid">

        <div class="analysis-card">
            <h3>งบประมาณรวม</h3>
            <h1>${formatMoney(totalBudget)} บาท</h1>
        </div>

        <div class="analysis-card">
            <h3>จำนวนรายการ</h3>
            <h1>${formatNumber(totalItems)}</h1>
        </div>

        <div class="analysis-card">
            <h3>หน่วยงาน</h3>
            <h1>${formatNumber(agencyCount)}</h1>
        </div>

        <div class="analysis-card">
            <h3>จังหวัด</h3>
            <h1>${formatNumber(provinceCount)}</h1>
        </div>

    </div>

    <hr>

    <h2>งบประมาณตามปี</h2>

    <table class="analysis-table">

        <thead>

            <tr>

                <th>ปี</th>

                <th>งบประมาณ</th>

            </tr>

        </thead>

        <tbody>

            ${Object.entries(yearMap).map(x=>`

                <tr>

                    <td>${x[0]}</td>

                    <td>${formatMoney(x[1])}</td>

                </tr>

            `).join("")}

        </tbody>

    </table>

    <h2>งบประมาณตามหมวด</h2>

    <table class="analysis-table">

        <thead>

            <tr>

                <th>หมวด</th>

                <th>งบประมาณ</th>

            </tr>

        </thead>

        <tbody>

            ${Object.entries(categoryMap).map(x=>`

                <tr>

                    <td>${x[0]}</td>

                    <td>${formatMoney(x[1])}</td>

                </tr>

            `).join("")}

        </tbody>

    </table>

    <h2>งบประมาณตามประเภทงบ</h2>

    <table class="analysis-table">

        <thead>

            <tr>

                <th>ประเภทงบ</th>

                <th>งบประมาณ</th>

            </tr>

        </thead>

        <tbody>

            ${Object.entries(budgetTypeMap).map(x=>`

                <tr>

                    <td>${x[0]}</td>

                    <td>${formatMoney(x[1])}</td>

                </tr>

            `).join("")}

        </tbody>

    </table>

    <h2>10 หน่วยงานที่ของบสูงสุด</h2>

    <table class="analysis-table">

        <thead>

            <tr>

                <th>หน่วยงาน</th>

                <th>งบประมาณ</th>

            </tr>

        </thead>

        <tbody>

            ${topAgency.map(x=>`

                <tr>

                    <td>${x[0]}</td>

                    <td>${formatMoney(x[1])}</td>

                </tr>

            `).join("")}

        </tbody>

    </table>

    <h2>10 จังหวัดที่ของบสูงสุด</h2>

    <table class="analysis-table">

        <thead>

            <tr>

                <th>จังหวัด</th>

                <th>งบประมาณ</th>

            </tr>

        </thead>

        <tbody>

            ${topProvince.map(x=>`

                <tr>

                    <td>${x[0]}</td>

                    <td>${formatMoney(x[1])}</td>

                </tr>

            `).join("")}

        </tbody>

    </table>

    `;

}