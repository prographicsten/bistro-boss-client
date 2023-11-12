import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category);

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
                <OrderTab items={salad}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={soups}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={desserts}></OrderTab>
            </TabPanel>

            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;