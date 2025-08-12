CampusQuest4.0
🕵️‍♂️ Project Overview
CampusQuest4.0 is a dynamic and interactive website built for a campus event. The site provides essential information about the event's timeline, prize pool, sponsors, and past events, all wrapped in a visually engaging and immersive user experience.

🚀 Technologies Used
React.js: A JavaScript library for building user interfaces.

Vite: A fast build tool that provides a lightning-fast development experience.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

📂 Project Structure
The project follows a standard Vite-React folder structure, designed for maintainability and scalability.

/campus-quest-integrated
├── public/                # Static assets (images, logos, favicon, etc.)
├── src/
│   ├── components/        # Reusable React components (e.g., Header, Footer)
│   ├── styles/            # Global CSS files
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Entry point for the React application
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration file
├── vite.config.js         # Vite configuration file
└── README.md              # Project documentation (this file)


🧩 Detailed Component Hierarchy
The src/components directory is where all the reusable and major sections of your website are organized. Each folder typically contains the component's JSX file and any specific styles or assets it needs.

Header/: Contains the code for the website's main header, likely including the navigation and logo.

About/: Holds the content and layout for the "About Us" section of the event.

Timeline/: Manages the code for the event timeline, which you've been working on, showing key dates and events.

PrizePool/: Contains the details and display of the prizes for the event.

Sponsors/: Manages the component that showcases the event's sponsors.

PastEvents/: This component is responsible for displaying a carousel or list of previous events.

ScrollToTopButton/: A utility component that provides a button for users to quickly scroll back to the top of the page.

Footer/: Holds the code for the website's footer, including social media links and copyright information.

🛠️ Getting Started
Prerequisites
You'll need to have Node.js and npm (or yarn) installed on your machine.

Installation
Clone the repository:

git clone https://github.com/your-username/CampusQuest4.0.git


Navigate to the project directory:

cd CampusQuest4.0


Install the dependencies:

npm install


🏃‍♂️ Running the Project Locally
Once you have installed the dependencies, you can run the development server:

npm run dev


This will start the local server, and you can view the website in your browser at http://localhost:5173.

📦 Building for Production
To create a production-ready build of your application, run:

npm run build


This command will generate a dist folder containing the optimized and minified files for deployment.

🌐 Deployment
This project is set up for continuous deployment with Vercel. Simply connect your GitHub repository to your Vercel account, and any new pushes to the main branch will automatically trigger a new deployment.