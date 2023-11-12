import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../../assets/menu/pizza-bg.jpg";
import saladtImg from "../../../assets/menu/salad-bg.jpg";
import souptImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu?.filter(item => item.category === "dessert");
    const soup = menu?.filter(item => item.category === "soup");
    const pizza = menu?.filter(item => item.category === "pizza");
    const salad = menu?.filter(item => item.category === "salad");
    const offered = menu?.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle
                heading="TODAY'S OFFER"
                subHeading="Don't miss"
            />
            {/* offered menu items */}
            <MenuCategory items={offered}  title="Offered" img={menuImg}></MenuCategory>
            {/* desser menu items */}
            <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title="Pizza" img={pizzatImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title="Salad" img={saladtImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title="Soup" img={souptImg}></MenuCategory>
        </div>
    );
};

export default Menu;