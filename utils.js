// ==========================================
// utils.js
// ==========================================

"use strict";

// ----------------------------
// แปลงเป็นตัวเลข
// ----------------------------

function toNumber(value){

    if(value===null || value===undefined || value==="")
        return 0;

    const num = Number(
        String(value).replace(/,/g,"")
    );

    return isNaN(num) ? 0 : num;

}

// ----------------------------
// จำนวนเงิน
// ----------------------------

function formatMoney(value){

    return toNumber(value).toLocaleString("th-TH",{

        minimumFractionDigits:2,
        maximumFractionDigits:2

    });

}

// ----------------------------
// จำนวนเต็ม
// ----------------------------

function formatNumber(value){

    return toNumber(value).toLocaleString("th-TH");

}

// ----------------------------
// นับข้อมูลไม่ซ้ำ
// ----------------------------

function countUnique(data,column){

    return new Set(

        data.map(x=>x[column])

    ).size;

}

// ----------------------------
// รวมคอลัมน์
// ----------------------------

function sumColumn(data,column){

    return data.reduce(

        (sum,row)=>sum+toNumber(row[column]),

        0

    );

}

// ----------------------------
// ข้อมูลไม่ซ้ำ
// ----------------------------

function unique(column){

    return [...new Set(

        budgetData.map(x=>x[column])

    )]

    .filter(x=>x!=="")
    .sort();

}

// ----------------------------
// เวลา
// ----------------------------

function updateTime(){

    const div=document.getElementById("updateTime");

    if(!div) return;

    function refresh(){

        const now=new Date();

        div.innerHTML=

        now.toLocaleString("th-TH");

    }

    refresh();

    setInterval(refresh,1000);

}