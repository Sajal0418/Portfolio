import mal_img1 from "../assets/mal_img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const ProjectCardData=[
    {
        imgsrc:mal_img1,
        title:"Client Server Language Translator", 
        // Generate a random text for above project
        text:"This project utilizes Python and tkinter for a client-side GUI and socket communication to interact with a server-side Python script. It allows users to enter text in any language via a GUI, select the input language, and specify a server IP address. ",
        view:"https://github.com/Sajal0418/Language-Translator.git"
    },
    {
        imgsrc:img2,
        title:"Bug Tracker Manager",
        // Generate a random text for above project
        text:"This project aimed to enhance issue management and foster seamless collaboration among software development teams and project managers.Built with the help of Flask library of Python, and integrated with a MySQL database for recording all the details of a teammember and the bug he is working on along with the changes a member has made.",
        view:"https://github.com/Sajal0418/Bug-Tracker-Manager.git"
    },
    {
        imgsrc:img3,
        title:"Neural Network with Socket Programming",
        // Generate a random text for above project
        text:"Implemented a Neural Network using TensorFlow, Tokenizer, and Keraslibrary of Python to predict the user’s mood. The project has a client-server design, the server uses a Socket to communicate computed data to the client.",
        view:"https://github.com/Sajal0418/Neural-Network-with-TCP.git"
    }
];

export default ProjectCardData;