import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            { title && <Cover img={img} title={title}></Cover>}
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 md:px-5 xl:px-0 my-16">
                {
                    // eslint-disable-next-line react/prop-types
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

MenuCategory.items = {
    items: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default MenuCategory;