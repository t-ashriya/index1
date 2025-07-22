<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB222 Final Assessment - Personal Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2 {
            color: #2c3e50;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        code {
            background-color: #f5f5f5;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        .highlight {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #3498db;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .section {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <h1>WEB222 Final Assessment - Personal Portfolio Website</h1>

    <div class="section">
        <h2>Project Description</h2>
        <p>This is a personal portfolio website created as the final assessment for WEB222 course at Seneca College. The website showcases my professional information, education background, skills, and includes a contact form for potential employers or collaborators to reach out.</p>
    </div>

    <div class="section">
        <h2>Features</h2>
        <ul>
            <li><strong>Responsive Design</strong>: Adapts to different screen sizes</li>
            <li><strong>Interactive Elements</strong>:
                <ul>
                    <li>Downloadable resume button</li>
                    <li>Contact form with validation</li>
                    <li>Dynamic textarea that appears when "Other" is selected as contact reason</li>
                </ul>
            </li>
            <li><strong>Sections</strong>:
                <ul>
                    <li>Personal information and honesty statement</li>
                    <li>Education background</li>
                    <li>Skills showcase</li>
                    <li>Contact form with address validation</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section">
        <h2>Technologies Used</h2>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Google Fonts (Nunito Sans, Nerko One, Roboto Mono, Lora)</li>
        </ul>
    </div>

    <div class="section">
        <h2>Validation</h2>
        <p>The contact form includes:</p>
        <ul>
            <li>Required field validation</li>
            <li>Canadian postal code validation (accepts formats: A1A1A1 or A1A 1A1)</li>
            <li>Dynamic form elements based on user selection</li>
        </ul>
    </div>

    <div class="section">
        <h2>Deployment</h2>
        <p>The project is deployed on Netlify:</p>
        <p><a href="https://ashriyaaweb222.netlify.app/" target="_blank">Live Demo</a></p>
    </div>

    <div class="section">
        <h2>Author</h2>
        <p><strong>Ashriya Tuladhar</strong><br>
        Student ID: 168693216<br>
        Seneca College - WEB222 - Section ZAA<br>
        Instructor: Mohammad Shamas</p>
    </div>

    <div class="section highlight">
        <h2>Academic Integrity</h2>
        <p>I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from any other source (including web sites) or distributed to other students.</p>
        <p>Date: 2022/12/07</p>
    </div>

    <div class="section">
        <h2>How to Run Locally</h2>
        <ol>
            <li>Clone this repository</li>
            <li>Open <code>index.html</code> in your browser</li>
            <li>The website should display properly with all functionality</li>
        </ol>
    </div>

    <div class="section">
        <h2>File Structure</h2>
        <ul>
            <li><code>index.html</code> - Main HTML file</li>
            <li><code>index.css</code> - Stylesheet</li>
            <li><code>index.js</code> - JavaScript for form validation and dynamic elements</li>
            <li><code>imgs/</code> - Folder containing profile image</li>
            <li><code>pdf/</code> - Folder containing resume PDF</li>
        </ul>
    </div>
</body>
</html>
