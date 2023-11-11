import Banner from "../Banner/Banner";
import BistroBossIntro from "../BistroBossIntro/BistroBossIntro";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBossIntro></BistroBossIntro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;