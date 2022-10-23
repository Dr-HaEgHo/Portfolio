import { Icon } from '@iconify/react';


const logotext = "Home";
const meta = {
    title: "Timothy",
    description: "I’m Timothy Awogbuyi data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Timothy Awogbuyi",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I am a Frontend Developer",
    },
    description: "I build fully responsive pixel-perfect UIs, create stunning interactions, and implement functionality with code",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Front-end Developer",
        where: "SideHustle ",
        date: "2022",
    },
    {
        jobtitle: "Front-end Developer",
        where: "SideHustle ",
        date: "2021",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
        icon:<Icon icon="logos:javascript" />
    },
    {
        name: "React & Redux | Redux ToolKit",
        value: 85,
        icon:<Icon icon="logos:react" />
    },
    {
        name: "TypeScript",
        value: 80,
        icon:<Icon icon="vscode-icons:file-type-typescript-official" />
    },
    {
        name: "GraphQL",
        value: 60,
        icon:<Icon icon="vscode-icons:file-type-graphql" />
    },
    {
        name: "HTML 5",
        value: 85,
        icon:<Icon icon="typcn:html5" />
    },
    {
        name: "CSS 3",
        value: 85,
        icon:<Icon icon="la:css3-alt" />
    },
    {
        name: "Bootstrap | TailwindCss | MUI styles | Scss | JSX Styling",
        value: 85,
        icon:<Icon icon="akar-icons:circle-check" />
    },
    {
        name: "GitHub",
        value: 85,
        icon:<Icon icon="fontisto:github" />
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "Avidmall.jpg",
        title:"Ecommerce Website",
        description: "This is an ecommerce website I built using React Js library and styled using CSS, JSX styling and MUI styles. Here, I managed the global states like cart, products, addToCart, removeFromCart, incrementQuantity, e.t.c. using reducer technique from Redux ToolKit, and also handled API requests with createAsyncThunk from ReduxToolkit. Handled form input and validation using formik & Yup and I consumed a dummy products' API which I used through out the website. ",
        github: " https://github.com/Dr-HaEgHo/avid-todo",
        demo:"https://avid-store.vercel.app/"
    },{
        img: "TodoApp.jpg",
        title:"Todo App",
        description: "A simple to-do app to handle daily tasks. All the data are handles in the local storage and all the data were made accessible within components through the use of props. I used ReactJs to build this along with CSS and conditional style rendering with JSX styling, to style the app. ",
        github: "https://github.com/Dr-HaEgHo/admin-panel",
        demo:"https://avid-todo.vercel.app/"
    },{
        img: "Adminpanel.jpg",
        title:"Admin Panel",
        description: "Admin panel for tracking statistics of a company's employees and clients, And a small store to display the company's prooduct. This was achieved with the use of Reactjs, Css, MUI styling for the layout and styling. Consumed data from a dummy API to which a request was made using Axios. Implemented a dynamic data chart with the use of Recharts. Routing with react router dom.",
        github: "https://github.com/Dr-HaEgHo/admin-panel",
        demo:"https://admin-panel-lyart.vercel.app/"
    },{
        img: "restaurant.jpg",
        title:"41 Restaurant",
        description: "A simple single page application (SPA) that displays all the dishes available. Navigate through routes using React router dom, Consumed data from an API server which was requested using react fetch. Simple search feature on the products page, to get a new filtered array of products. Site built with React Js and JavaScript.",
        github: "https://github.com/Dr-HaEgHo/41-Eatery",
        demo:"https://41-eatery.vercel.app/"
    },{
        img: "movies.jpg",
        title:"Movies Search App",
        description: "This is a simple app that displays movies from a movie API database. Built with React Js, react fetch, css styling",
        github: "https://github.com/Dr-HaEgHo/Movie-search-app",
        demo:"https://movie-search-app-seven-xi.vercel.app/"
    },
];

const contactConfig = {
    YOUR_EMAIL: "awogbuyitimothy@gmail.com.com",
    YOUR_FONE: "+2348139347195",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Dr-HaEgHo",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/timothyawogbuyi/",
    twitter: "https://twitter.com/TarterCim",
    // youtube: "https://youtube.com",
    // twitch: "https://twitch.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
}; 
