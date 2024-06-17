
// app.js
const url = 'https://public.tableau.com/app/profile/akila.shashith/viz/HR_Analytics_Dashboard_17183638561070/HRAnalyticsDashboard'; // Replace with your Tableau dashboard link
const vizContainer = document.getElementById('vizContainer');
const viz = new tableau.Viz(vizContainer, url);
