import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu?.filter(item => item.category === "dessert");
    const soups = menu?.filter(item => item.category === "soup");
    const pizza = menu?.filter(item => item.category === "pizza");
    const salad = menu?.filter(item => item.category === "salad");
    const drinks = menu?.filter(item => item.category === "drinks");

    return (
        <div className="text-center">
            <Cover img={orderCover} title="Order Food"></Cover>
            <div className="mt-10 capitalize">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className="scroll-x">
            <TabList>
                <Tab>Salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soups</Tab>
                <Tab>desserts</Tab>
                <Tab>drinks</Tab>
            </TabList>
            </div>
            <TabPanel>
                <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    salad?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    pizza?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    soups?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    desserts?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="px-2 md:px-3 lg:px-5 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    drinks?.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;