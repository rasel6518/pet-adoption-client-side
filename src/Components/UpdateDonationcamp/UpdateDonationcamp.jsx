import { useContext, useState } from 'react';
import axios from 'axios';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const initialValues = {
//     petImage: '',
//     petName: '',
//     petAge: '',
//     petCategory: null,
//     petLocation: '',
//     shortDescription: '',
//     longDescription: '',
// }

const UpdateDonationcamp = () => {

    const { user } = useContext(AuthContext)
    const [image, setImage] = useState()
    const axiosSecure = useAxiosSecure()
    const doantionData = useLoaderData();
    const alldonation = Array.isArray(doantionData) ? doantionData[0] : doantionData;

    console.log(doantionData);
    const initialValues = {
        donationImage: alldonation?.donationImage || "",
        petName: alldonation?.petName || "",
        lastDate: alldonation.lastDate || "",
        maxAmount: alldonation.maxAmount || "",

        shortDescription: alldonation.shortDescription || "",
        longDescription: alldonation.longDescription || "",
    }

    //selete dropdown


    //image file
    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        setImage(file);
    };



    const handleSubmit = async (values, { resetForm }) => {

        console.log(image);
        const res = await axios.post(image_hosting_api, { image }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(values.petName);
        if (res.data.success) {
            const petinfo = {
                donationImage: res.data.data.display_url,
                petName: values.petName,
                maxAmount: values.maxAmount,
                lastDate: values.lastDate,
                shortDescription: values.shortDescription,
                longDescription: values.longDescription,

            }

            const petres = await axiosSecure.put(`/updatedonationcamp/${alldonation._id}`, petinfo)
            console.log(petres.data);
            if (petres.data.insertedId) {
                Swal.fire({
                    title: "WOW!",
                    text: "Your pet added successfully.",
                    imageUrl: petres.data.petImage,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
                resetForm();
            }

            console.log(petinfo);
        }






    };

    const inputStyle = "mt-1 p-2 border rounded-md w-full";
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className=" w-7/12 mx-auto p-6 bg-white rounded-md border-2 border-black shadow-md">


                    <div className="mb-4">
                        <label htmlFor="petImage" className="block text-sm font-medium text-gray-600">
                            Pet Image
                        </label>
                        <input type="file" name="petImage" className={inputStyle} onChange={handleFileChange} />
                        <ErrorMessage name="petImage" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="petName" className="block text-sm font-medium text-gray-600">
                            Pet Name
                        </label>
                        <Field type="text" name="petName" className={inputStyle} />
                        <ErrorMessage name="petName" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="maxAmount" className="block text-sm font-medium text-gray-600">
                            Maximum Donation Amount:
                        </label>
                        <Field type="number" name="maxAmount" className={inputStyle} />
                        <ErrorMessage name="maxAmount" component="div" className="text-red-500 text-sm" />
                    </div>




                    <div className="mb-4">
                        <label htmlFor="lastDate" className="block text-sm font-medium text-gray-600">
                            Last Date of Donation:
                        </label>
                        <Field type="date" name="lastDate" className={inputStyle} />
                        <ErrorMessage name="lastDate" component="div" className="text-red-500 text-sm" />
                    </div>




                    <div className="mb-4">
                        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-600">
                            Short Description
                        </label>
                        <Field as="textarea" name="shortDescription" className={inputStyle} />
                        <ErrorMessage name="shortDescription" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="longDescription" className="block text-sm font-medium text-gray-600">
                            Long Description
                        </label>
                        <Field as="textarea" name="longDescription" className={inputStyle} />
                        <ErrorMessage name="longDescription" component="div" className="text-red-500 text-sm" />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2  rounded-md border-none  text-white hover:bg-[#f28583] bg-[#FA524F] focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    >
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default UpdateDonationcamp;