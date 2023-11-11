import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const popularItems = data?.filter(item => item?.category === 'popular');
            setMenu(popularItems)
        })
    }, []);
    // console.log(menu);

    return (
        <section>
            <SectionTitle
                heading="Form Our Menu"
                subHeading="Popular Items"
            />
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 md:px-5 xl:px-0">
                {
                    menu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;