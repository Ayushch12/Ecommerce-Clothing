import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";


const Home = () => {
    const {  categories, setCategories, products, setProducts } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
       fetchDataFromApi("/api/products?populate=*").then((res) => {
           setProducts(res);
      });
   };
    const getCategories = () => {
          //fetchDataFromApi("/api/categories?populate=*").then(res =>console.log(res) )
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
       });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">

                    <Category categories={categories} />

                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;


/*
const Home=() =>{
    return(
        <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
            <Category/>
            <Products/>

            </div>
        </div>
        </div>
    );
};
*/

