# Change is in the Air

A React + Vite web application built for **The Blueprint Foundation** to display live air quality index (AQI) data from field sensors, along with educational resources about air quality and particulate matter.

## Table of Contents

* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)

## Overview

"Change is in the Air" gives visitors a real-time view of local air quality by pulling data from multiple sensors and displaying it as an AQI map/dashboard. The site also includes a "Learn More" section with expandable FAQ-style entries covering:

* What the air quality sensors measure
* What particulate matter (PM) is
* How AQI is calculated
* AQI severity categories
* AQI safety recommendations

The site is built and maintained on behalf of **The Blueprint Foundation**, whose branding (logo, name, links) appears in the site header/footer.

## Tech Stack

* **React** – UI library
* **Vite** – build tool / dev server
* **CSS** – component-scoped stylesheets (`Component.css` alongside `Component.jsx`)

## Prerequisites

* [Node.js](https://nodejs.org/) (LTS recommended)
* npm (comes bundled with Node.js)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local dev server:
   ```bash
   npm run dev
   ```
4. Open the URL Vite prints in the terminal (typically `http://localhost:5173`).

## Available Scripts

* 'npm run dev' – starts the app locally for development
* 'npm run build' – builds the app for production