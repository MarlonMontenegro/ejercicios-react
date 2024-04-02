import logo from './logo.svg';
import './App.css';
import ListaTareas from "./components/ListaTareas";
import Contador from "./components/Contador";
import ListaUsuarios from "./components/ListaUsuarios";

function App() {
    const tasks = ['Sacar la Basura', 'Tomar 2l de agua', "Cocinar para la semana", "revisar el carro"];
    const users = [
        {
            name: "Ivan",
            age: "28",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9JLQdBc-l2-6D4-QiXdqRWZbR2jcMKXm3G7FFLMBfClxXPuVvWy_HguiHUSjhd10KnQ&usqp=CAU"
        },
        {
            name: "Gabriela",
            age: "40",
            url: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_smiling-300x300.jpg"
        },
        {
            name: "Pedro",
            age: "24",
            url: "https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=640:*"
        },
        {
            name: "Juan",
            age: "25",
            url: "https://media.licdn.com/dms/image/C4D03AQFT6F_cI1Qu2Q/profile-displayphoto-shrink_400_400/0/1558960091120?e=2147483647&v=beta&t=z6TTPIg7Xxhw2iI9xmLUkF8XK6gKbzfXi5CIPkxulTs"
        }
    ]

    return (
        <>
            <div className="container">
                <h1>TODO LIST</h1>
                <ListaTareas tasks={tasks}/>
            </div>

            <div className="container">
                <h1>CONTADOR</h1>
                <Contador/>
            </div>

            <div className="container-user">
                <h1>Usuarios</h1>
                <ListaUsuarios users={users}/>
            </div>

        </>
    );
}

export default App;
