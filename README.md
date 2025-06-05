TradeVision Dashboard
Overview
TradeVision Dashboard is a sleek, modern web application designed to help traders visualize and select trading strategies based on market views (Bullish, Bearish, Rangebound, Volatile) and specific dates. With an intuitive toggle bar, a dropdown for date selection, and a clean strategy card layout, it provides a seamless user experience for exploring trading strategies.
Features

Toggle Views: Switch between Bullish, Bearish, Rangebound, and Volatile market views with a single click.
Date Selection: Select a date from a dropdown to view strategies for that specific day.
Strategy Cards: View strategies with their counts in an organized, oval-shaped card layout.
Responsive Design: Optimized for various screen sizes with a mobile-friendly layout.
Interactive Dropdown: Click outside the dropdown to close it, ensuring a smooth user experience.


A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
No additional software or dependencies are required, as the project uses vanilla HTML, CSS, and JavaScript.

Setup Instructions

Clone or Download the Project:

Clone the repository or download the project files to your local machine.git clone <repository-url>


Alternatively, download the ZIP file and extract it.


Project Structure:
TradeVision-Dashboard/
├── index.html      # Main HTML file
├── script.js       # JavaScript for functionality
├── style.css       # CSS for styling
└── README.md       # Project documentation


Run the Application:

Open index.html in a web browser. You can do this by double-clicking the file or using a local server (e.g., with VS Code’s Live Server extension).



Usage

Select a Market View:

Use the toggle bar at the top to switch between Bullish, Bearish, Rangebound, and Volatile views. The active view is highlighted in blue.


Choose a Date:

Click the dropdown to select a date (e.g., "25 Apr 2024"). Click outside the dropdown to close it.


View Strategies:

Strategies for the selected view and date will appear below in oval-shaped cards, showing the strategy name and count (e.g., "LONG PUT • 1 Strategy").



Customization

Data: Modify the dateArray and strategyArray in script.js to add or update dates and strategies.
Styling: Adjust style.css to change colors, fonts, or other visual elements. For example, update the border-radius of .strategy to change the card shape.

Known Issues

The dropdown arrow rotates upward when open, as shown in the screenshot. If a downward arrow is preferred when open, adjust the transform property in .dropdown.open .dropdown-arrow.

Future Improvements

Add support for dynamic data loading via an API.
Include filtering options for strategies.
Enhance accessibility with keyboard navigation and ARIA attributes.

