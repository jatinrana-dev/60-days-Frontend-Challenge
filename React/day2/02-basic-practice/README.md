Day 2 - Components & Basic Layout
What I learned
How to break a UI into separate, reusable components instead of writing everything in one file
Each component is its own .jsx file that returns JSX, and gets imported wherever it's needed
How components come together inside a parent component (App.jsx) to build a full page
The basic pattern: Header, MainContent, and Footer as separate components, composed inside App
What I built

A basic webpage layout split into 3 components:

Header — site title and navigation links (Home / About / Contact)
MainContent — heading, paragraph content, and body of the page
Footer — copyright text

All three are imported into App.jsx and rendered together inside a single <div>
