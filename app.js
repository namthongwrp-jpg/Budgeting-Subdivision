// ==========================================
// app.js
// ==========================================

"use strict";

document.addEventListener(

    "DOMContentLoaded",

    initialize

);

async function initialize(){

    try{

        console.log("Loading Dashboard...");

        await loadData();

        loadFilters();

        registerFilterEvents();

        refreshDashboard();

       refreshDashboard();

        updateTime();

        registerNavigation();

        console.log("Dashboard Ready");

    }

    catch(error){

        console.error(error);

    }

}