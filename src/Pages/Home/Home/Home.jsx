import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../categories/Categories";
import About from "../../About/About";
import AdoptionProcess from "../../../Components/AdoptionProcess/AdoptionProcess";
import Service from "../../../Components/service/Service";
import CallToActionSection from "../CallToActionSection/CallToActionSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PP | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <CallToActionSection></CallToActionSection>
            <About></About>
            <AdoptionProcess></AdoptionProcess>
            <Service></Service>
        </div>
    );
};

export default Home;