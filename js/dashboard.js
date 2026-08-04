// ==========================================
// dashboard.js
// ==========================================

"use strict";

function updateDashboard(){

    document.getElementById("totalBudget").innerHTML =

        formatMoney(

            sumColumn(filteredData,"งบประมาณ")

        ) + " บาท";

    document.getElementById("totalItem").innerHTML =

        formatNumber(filteredData.length);

    document.getElementById("totalAgency").innerHTML =

        formatNumber(

            countUnique(filteredData,"หน่วยงาน")

        );

    document.getElementById("totalProvince").innerHTML =

        formatNumber(

            countUnique(filteredData,"จังหวัด")

        );

    // ครุภัณฑ์

    const equipment = filteredData.filter(

        x=>String(x["หมวด"])

        .includes("ครุภัณฑ์")

    );

    document.getElementById("totalEquipment").innerHTML =

        formatNumber(

            equipment.length

        );

    // สิ่งก่อสร้าง

    const building = filteredData.filter(

        x=>String(x["หมวด"])

        .includes("สิ่งก่อสร้าง")

    );

    document.getElementById("totalBuilding").innerHTML =

        formatNumber(

            building.length

        );

    // ทดแทน

    const replace = filteredData.filter(

        x=>String(

            x["ประเภทคำขอ"]

        ).includes("ทดแทน")

    );

    document.getElementById("totalReplace").innerHTML =

        formatNumber(

            replace.length

        );

    // เพิ่มประสิทธิภาพ

    const improve = filteredData.filter(

        x=>String(

            x["ประเภทคำขอ"]

        ).includes("เพิ่ม")

    );

    document.getElementById("totalImprove").innerHTML =

        formatNumber(

            improve.length

        );

}