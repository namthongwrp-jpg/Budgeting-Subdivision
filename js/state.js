// ==========================================
// state.js
// Global State
// ==========================================

"use strict";

let budgetData = [];
let filteredData = [];

// Filter State
const currentFilter = {
    year: "",
    budgetType: "",
    category: "",
    agency: "",
    province: "",
    requestType: ""
};

// Chart Objects
const chartObjects = {};