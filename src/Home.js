import { Outlet,Link } from "react-router-dom";
import { MyContext } from "../Contextor";
import { useContext,useState } from "react";
import frontimage from "../images/aloeh.jpg";
import Footer from "./Footer";

const Home = () => {

    const {plantlist} = useContext(MyContext);

    const productList = plantlist.map((plant,index) => {
        return (
            <div>
                <div >
                    <Link to={`product/${index}`}>
                        <img src={plant.images[0]} style={{width:"200px",height:"250px",objectFit:"cover",objectPosition:"center",borderRadius:"15px"}}></img>
                        <p>
                            <span>{plant.name}</span><br/>
                            <span>{plant.price}</span>
                        </p>
                    </Link>
                </div>
                
                <button>Ajouter aux favoris</button>

            </div>
        )
    })

    return (
        <>
            <div>
            <div>
                <img src={frontimage} style={{width:"100%",height:"400px",objectFit:"cover",objectPosition:"center",borderRadius:"30px"}}></img>
                <p>
                    Welcome to Aloeh!
                </p>
            </div>

            <div style={{maxWidth:"768px",display:"grid",gridTemplateColumns:"25% 25% 25% 25%",gridGap:"20px 15px"}}>
                {productList}
            </div>

            <div>
                <img style={{width:"100%",height:"100px",objectFit:"cover"}} src={frontimage}></img>
            </div>

            </div>
            <Footer/>
        </>
    )
}

export default Home;