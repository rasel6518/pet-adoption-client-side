import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import PetListing from "../Pages/PetListing/PetListing";
import Donation from "../Pages/Donation/Donation";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddPetForm from "../Components/AddPetForm/AddPetForm";
import UpdatePetListing from "../Components/UpdatePetListing/UpdatePetListing";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import Users from "../Components/Dashboard/Users/Users";
import MyAddedPets, { Teste } from "../Components/Dashboard/MyAddedPets/MyAddedPets";
import Dogs from "../Components/Category/Dogs/Dogs";
import Cats from "../Components/Category/Cats/Cats";
import Birds from "../Components/Category/Birds/Birds";
import Rabbits from "../Components/Category/Rabbits/Rabbits";
import MyAddedPetlist from "../Components/Dashboard/MyAddedPets/MyAddedPetlist";
import DetailsPetAdoption from "../Components/DetailsPetAdoption/DetailsPetAdoption";
import AllAddedpet from "../Components/Dashboard/AllAddedpet/AllAddedpet";
import DonationCampaignForm from "../Components/Dashboard/DonationCampaignForm/DonationCampaignForm";
import MyDonationCamp from "../Components/Dashboard/MyDonationCamp/MyDonationCamp";
import AdminPrivateRoute from "../Components/AdminPrivateRoute/AdminPrivateRoute";
import AdoptionRequests from "../Components/Dashboard/AdoptionRequests/AdoptionRequests";
import UpdateDonationcamp from "../Components/UpdateDonationcamp/UpdateDonationcamp";



export const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/petlisting",
                element: <PrivateRoute><PetListing></PetListing></PrivateRoute>,
            },
            {
                path: "/donation",
                element: <PrivateRoute> <Donation></Donation></PrivateRoute>,
                loader: () => fetch('https://petpals-haven-server.vercel.app/donationcampaigns', { headers: { authorization: `Bearer ${localStorage.getItem('Access-Token')}` } }),
            },
            {
                path: "/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/dogs",
                element: <Dogs></Dogs>,
                loader: () => fetch('https://petpals-haven-server.vercel.app/petlistings', { headers: { authorization: `Bearer ${localStorage.getItem('Access-Token')}` } }),
            },
            {
                path: "/cats",
                element: <Cats></Cats>,
                loader: () => fetch('https://petpals-haven-server.vercel.app/petlistings', { headers: { authorization: `Bearer ${localStorage.getItem('Access-Token')}` } }),
            },
            {
                path: "/birds",
                element: <Birds></Birds>,
                loader: () => fetch('https://petpals-haven-server.vercel.app/petlistings', { headers: { authorization: `Bearer ${localStorage.getItem('Access-Token')}` } }),
            },
            {
                path: "/rabbits",
                element: <Rabbits></Rabbits>,
                loader: () => fetch('https://petpals-haven-server.vercel.app/petlistings', { headers: { authorization: `Bearer ${localStorage.getItem('Access-Token')}` } }),
            },
            {
                path: "/addpetform",
                element: <PrivateRoute> <AddPetForm></AddPetForm></PrivateRoute>,
            },
            {
                path: "detailspetadoption/:id",
                element: <PrivateRoute><DetailsPetAdoption></DetailsPetAdoption></PrivateRoute>,
                loader: ({ params }) => fetch(`https://petpals-haven-server.vercel.app/petlisting/${params.id}`),
            },
            {
                path: "/updatepetlisting",
                element: <PrivateRoute><UpdatePetListing></UpdatePetListing></PrivateRoute>,
            },

        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'users',
                element: <AdminPrivateRoute><Users></Users></AdminPrivateRoute>,
            },
            {
                path: "addpetform",
                element: <PrivateRoute><AddPetForm></AddPetForm></PrivateRoute>,
            },
            {
                path: "updatepetlist/:id",
                element: <PrivateRoute><UpdatePetListing></UpdatePetListing></PrivateRoute>,
                loader: ({ params }) => fetch(`https://petpals-haven-server.vercel.app/updatepetlist/${params.id}`),
            },
            {
                path: "updatedonationcamp/:id",
                element: <PrivateRoute><UpdateDonationcamp></UpdateDonationcamp></PrivateRoute>,
                loader: ({ params }) => fetch(`https://petpals-haven-server.vercel.app/updatedonationcamp/${params.id}`),
            },

            {
                path: "myaddedpetlist",
                element: <PrivateRoute> <MyAddedPetlist></MyAddedPetlist></PrivateRoute>,


            },

            {
                path: "donationcampaigns",
                element: <DonationCampaignForm></DonationCampaignForm>,
            },
            {
                path: "mydonationcam",
                element: <MyDonationCamp></MyDonationCamp>,
            },
            {
                path: "alladdedpet",
                element: <PrivateRoute><AllAddedpet></AllAddedpet></PrivateRoute>,
            },
            {
                path: "adoptionrequest",
                element: <PrivateRoute><AdoptionRequests></AdoptionRequests></PrivateRoute>,
            },
        ]
    }
]);