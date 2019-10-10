const portfolio = [
{
    "name": "P-Kin.com Portfolio Page",
    "badges": [
        "Vue",
        "Vuex",
        "TypeScript",
        "SCSS",
        "Firebase"
    ],
    "descr": "For my very first VueJS project I choose to create a new portfolio website for myself. My goal was to make it easy for anyone who is interested in my work to find all the relevant information.",
    "features": [
        {
            "title": "Central state management",
            "text": "My first experiment with Vue and it's state management, all data and UI state are managed in different modules of a central VueX store."
        },
        {
            "title": "Routing and lazy loading",
            "text": "Portfolio page and some assets use lazy loading for better performance."
        },
        {
            "title": "Dynamic data",
            "text": "Whether I want to add a new portfolio item or make a change on my tech stack, no need to touch the frontend, only to adjust the data in the database."
        },
    ],
    "image": "pkincom.jpg",
    "link": "https://www.p-kin.com",
    "repo": "https://github.com/KinPeter/P-Kin.com",
    "addedAt": 1571011200000
},
{
    "name": "Firestore DB Admin page",
    "badges": [
        "Angular",
        "Material",
        "TypeScript",
        "SCSS",
        "Firebase",
        "AngularFire"
    ],
    "descr": "An Angular Material based admin user interface to manage my Firestore databases.",
    "features": [
        {
            "title": "Material Design",
            "text": "Nice, clean and super smooth interface using Angular Material components."
        },
        {
            "title": "Authentication and routes",
            "text": "Protected routes require authentication and all of them are lazy loaded."
        },
        {
            "title": "CRUD operations",
            "text": "Read data with the filterable and sortable reactive data tables, create, update or delete them using modals."
        },
    ],
    "image": "firestore-dbadmin.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/Firestore-DB-Admin",
    "addedAt": 1569024000000
},
{
    "name": "Startpage 2.0",
    "badges": [
        "Angular",
        "TypeScript",
        "SCSS",
        "Firebase",
        "AngularFire"
    ],
    "descr": "A complete remake of my previous jQuery powered startpage but now it's much more fancy, smart and extendable thanks to the Angular framework. Authentication and the whole backend is powered by Firebase & AngularFire.",
    "features": [
        {
            "title": "Improved Notes",
            "text": "Creating notes with optional links, archiving and all the other CRUD operations are available."
        },
        {
            "title": "Shortcut tiles",
            "text": "My most frequently used websites in sidebar-like containers with cool hover effects."
        },
        {
            "title": "Links database",
            "text": "I can search my links by tag or by name, or create a new one in a fancy modal."
        },
        {
            "title": "Weather forecast",
            "text": "Thanks to the DarkSky API I have a beautiful custom weather forecast using my own custom SVG icons."
        },
        {
            "title": "DEV.to posts feed",
            "text": "Thanks to the DEV.to API I can stay up to date with DEV news using my preferred tags."
        },
        {
            "title": "Korean dictionary",
            "text": "Custom dictionary search engine connected to my Korean wordlist stored in a Google Sheet. Autocomplete function is added using AngularMaterial."
        },
        {
            "title": "Database backup cloud function",
            "text": "Google Cloud Function to fetch all data from my Firestore databases and send them to me by email in JSON format."
        }
    ],
    "image": "startpage2.jpg",
    "link": "https://startdemo.p-kin.com/",
    "repo": "https://github.com/KinPeter/StartPage-2",
    "addedAt": 1567900800000
},
{
    "name": "Notes for mobile",
    "badges": [
        "Svelte",
        "SCSS",
        "Firebase"
    ],
    "descr": "After learning Svelte JS for a project at work I decided to practice a bit and made this mobile friendly webapp and connected it to my notes database on Firebase. I found Svelte a quite handy tool for such a tiny application as it took only a few hours to make it work.",
    "features": [
        {
            "title": "Serverless backend",
            "text": "Using the Javascript SDK the app is easily connected to Firebase authentication and the Firestore database."
        },
        {
            "title": "Basic \"notes-app\" functionalities",
            "text": "Now I can quickly read or archive my notes on the go or even create a new one."
        }
    ],
    "image": "notes_mobile.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/Notes-Mobile-Svelte",
    "addedAt": 1566604800000
},
{
    "name": "WebDictionary",
    "badges": [
        "React",
        "TypeScript",
        "SCSS"
    ],
    "descr": "Web based dictionary app that uses my own word list as a resource. It is possible to search both ways without pre-setting the language, and an autocomplete function also helps to find the word or phrase needed.",
    "features": [
        {
            "title": "Data from Google Sheet",
            "text": "The app downloads the wordlist file directly from a published Google Sheet in TSV format which is then easily parsed by JavaScript."
        },
        {
            "title": "Prioritized search algorithm",
            "text": "The search algorithm checks both languages, first looking for exact matches, then the word standing on its own, then anything starting with the word, and finally anything that contains the word."
        }
    ],
    "image": "webdict.jpg",
    "link": "https://dict.p-kin.com",
    "repo": "https://github.com/KinPeter/Web-Dictionary-React",
    "addedAt": 1564012800000
},
{
    "name": "Autocomplete - React component",
    "badges": [
        "React",
        "TypeScript",
        "SCSS"
    ],
    "descr": "My first experiment with React and TypeScript, it's a reusable and customizable component that provides autocomplete suggestions for a text input field.",
    "features": [
        {
            "title": "Reusable",
            "text": "The component can be reused easily, only need to pass the source word list, the button text and a function what to do with the result as props."
        },
        {
            "title": "Customizable",
            "text": "All stylings are written in one SCSS files using self-explanatory variables, thus all colors and positioning can be set up in one place."
        }
    ],
    "image": "autocomplete.jpg",
    "link": "https://stuff.p-kin.com/react/autocomplete/",
    "repo": "https://github.com/KinPeter/React-autocomplete-component",
    "addedAt": 1563926400000
},
{
    "name": "VocabCards app",
    "badges": ["JavaScript", "JQuery", "HTML", "CSS", "PHP"],
    "descr": "Mobile-friendly app to practice Korean words from my wordlist, using flashcards.",
    "features": [
        {
            "title": "Data from Google Sheet",
            "text": "The app downloads the wordlist file directly from a published Google Sheet in TSV format which is then easily parsed by JavaScript."
        },
        {
            "title": "Progress saved on server",
            "text": "The progress is saved in a JSON file on the server using arrays to store the indexes of the words."
        },
        {
            "title": "Difficult Words",
            "text": "If a choice is not correct, the word goes into a separate array so the user can review those words later again."
        },
        {
            "title": "Random, with a twist",
            "text": "The cards are picked randomly, but the different choices are programmed not to be so easy if possible - in case there are similar words in the list."
        }
    ],
    "image": "vocabcards.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/VocabCards-App",
    "addedAt": 1558051200000
},
{
    "name": "CountDowns app",
    "badges": ["JavaScript", "JQuery", "HTML", "CSS", "Bootstrap"],
    "descr": "As I wanted to practice using cookies and localStorage I created a tiny web application for managing countdown timers.",
    "features": [
        {
            "title": "User Account management",
            "text": "It is possible to sign up multiple users and manage their timers separately."
        },
        {
            "title": "HTML5 Web Storage",
            "text": "All data is stored locally using the localStorage interface with the help of some cookies managing the login sessions."
        }
    ],
    "image": "countdowns.jpg",
    "link": "https://stuff.p-kin.com/countdowns/",
    "repo": "https://github.com/KinPeter/CountDowns-App",
    "addedAt": 1555977600000
},
{
    "name": "All-in-one startpage",
    "badges": ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "PHP", "MySQL"],
    "descr": "A single page web app that contains all my most frequently used bookmarks and functionalities.",
    "features": [
        {
            "title": "Welcome message",
            "text": "Stores user name and gets location and weather report by IP address."
        },
        {
            "title": "Search boxes",
            "text": "In addition to Google I can search from all my bookmarks stored in a MySQL database or look up words in my Korean word list."
        },
        {
            "title": "Notes",
            "text": "Notes app with functions like add new, update, archive or delete a note."
        },
        {
            "title": "Link tiles",
            "text": "My most frequently used links in scrollable boxes with cool hover effects."
        },
        {
            "title": "Notes for mobile",
            "text": "Lightweight mobile-friendly mini-app only to use the notes functionalities."
        }
    ],
    "image": "startpage.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/StartPage",
    "addedAt": 1559520000000
},
{
    "name": "Previous P-kin.com",
    "badges": ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "PHP", "MySQL"],
    "descr": "My first bigger project was my previous website. I started to work on it right after I started to learn programming and I was always experimenting on it with new techniques.",
    "features": [
        {
            "title": "Responsive design",
            "text": "It's fully responsive thanks to Bootstrap, so it should look fine on both desktops, tablets and mobile phones."
        },
        {
            "title": "Animated elements",
            "text": "To make the site a bit more dynamic, I added some animations using both Bootstrap and jQuery."
        },
        {
            "title": "Contact form",
            "text": "If you want to send a message to me there is a contact form available at the bottom using the mail functions of PHP."
        },
        {
            "title": "Generating content from the server and from a database",
            "text": "Thanks to AJAX calls some of the content is generated by fetching data from MySQL database or from text files on the server."
        }
    ],
    "image": "old-homepage.jpg",
    "link": "https://old.p-kin.com",
    "repo": "https://github.com/KinPeter/P-Kin.com_old",
    "addedAt": 1557792000000
},
{
    "name": "MySQL database admin page",
    "badges": ["HTML", "Bootstrap", "PHP", "MySQL", "JavaScript", "JQuery"],
    "descr": "Tailor made admin page to easily access tables and manipulate records in a MySQL database using PHP and JavaScript AJAX calls. For the design of the page I only used simple Bootstrap styling.",
    "features": [
        {
            "title": "Basic functionality",
            "text": "All the CRUD operations and possibility to export table to a CSV file."
        },
        {
            "title": "Access control",
            "text": "Anyone can view and search the database, but manipulating data is password protected."
        }
    ],
    "image": "mysql-dbadmin.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/Php-db-admin",
    "addedAt": 1551484800000
},
{
    "name": "Bullshit Generator",
    "badges": ["JavaScript", "JQuery", "HTML5", "CSS", "Bootstrap"],
    "descr": "It started out as a Java project at school, but I really liked the possibilities of the generator algorithms, so I decided to \"translate\" the program to JavaScript and created a nice colorful web UI for it. <a href=\"https://www.p-kin.com/bullshitgenerator\" target=\"_blank\">Try it now!</a>",
    "features": [
        {
            "title": "Multi-language",
            "text": "Both the UI, the source files and bullshit generator algorithms are available in Hungarian and English."
        },
        {
            "title": "Read source text from files",
            "text": "As source text the user can choose from different pre-uploaded books from the server."
        }
    ],
    "image": "bullshit.jpg",
    "link": "https://stuff.p-kin.com/bullshitgenerator/",
    "repo": "https://github.com/KinPeter/Bullshit-Generator",
    "addedAt": 1557187200000
},
{
    "name": "Node.js database API",
    "badges": ["Node.js", "SQLite"],
    "descr": "Basic API powered by a Node.js web server that allows a user to fetch data from an SQLite database and receive it in JSON format. It also has functionalities to manipulate the data or download the whole database.",
    "features": [
        {
            "title": "URL routing",
            "text": "To search for a record or fetch a whole table it's enough to use the specific URL query string, like .../search/{word} or .../list/{tablename}."
        },
        {
            "title": "Request handling",
            "text": "For features like updating or removing records, the server needs the appropriate parameters in the body of POST requests."
        }
    ],
    "image": "node-api.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/Node-links-api",
    "addedAt": 1550361600000
},
{
    "name": "Dictionary desktop app",
    "badges": ["Python", "Desktop"],
    "descr": "Not a pretty one, but it's my first working, functional and useful desktop application. All written in Python, for the back-end part I used OpenPYXL, and the front-end is created by the Tkinter library.",
    "features": [
        {
            "title": "Read data from Excel",
            "text": "The program is using my own word list that is stored in an Excel file."
        },
        {
            "title": "Ability to add new words",
            "text": "In addition to search the dictionary, this app is also capable of adding and saving new word pairs to the recource file."
        }
    ],
    "image": "python-dict.jpg",
    "link": null,
    "repo": "https://github.com/KinPeter/Dictionary-app",
    "addedAt": 1549411200000
}
];