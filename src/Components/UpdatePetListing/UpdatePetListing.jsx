import Swal from "sweetalert2";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from "axios";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Select from 'react-select';
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatePetListing = () => {
    const petData = useLoaderData();
    const allPet = Array.isArray(petData) ? petData[0] : petData;

    console.log(petData);
    const initialValues = {
        petImage: allPet.petImage || "",
        petName: allPet.petName || "",
        petAge: allPet.petAge || "",
        petCategory: allPet.petCategory || "",
        petLocation: allPet.petLocation || "",
        shortDescription: allPet.shortDescription || "",
        longDescription: allPet.longDescription || "",
    }

    const [image, setImage] = useState()
    const axiosSecure = useAxiosSecure()
    const [selectedCategory, setSelectedCategory] = useState(null);

    //selete dropdown
    const onChange = (selectedOption) => {
        if (!selectedOption) {
            return;
        }
        setSelectedCategory(selectedOption)
        console.log('Selected option:', selectedOption);
    };
    //selete values
    const petCategories = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'other', label: 'Other' },
    ];
    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        setImage(file);
    };

    console.log(image);

    const handleSubmit = async (values) => {


        const res = await axios.post(image_hosting_api, { image }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // console.log(res.data);
        if (res.data.success) {
            const petinfo = {
                petImage: res.data.data.display_url,
                petName: values.petName,
                petAge: values.petAge,
                petCategory: selectedCategory.value,
                petLocation: values.petLocation,
                shortDescription: values.shortDescription,
                longDescription: values.longDescription
            }

            const petres = await axiosSecure.put(`/petlistings/${allPet._id}`, petinfo)
            console.log(petres.data);
            if (petres.data.insertedId) {
                Swal.fire({
                    title: "WOW!",
                    text: "Your pet Updated successfully.",
                    imageUrl: petres?.data?.petImage,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            }

            console.log(petinfo);
        }






    };
    const inputStyle = "mt-1 p-2 border rounded-md w-full";

    return (
        <div>
            {allPet.length}
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
                        <label htmlFor="petAge" className="block text-sm font-medium text-gray-600">
                            Pet Age
                        </label>
                        <Field type="text" name="petAge" className={inputStyle} />
                        <ErrorMessage name="petAge" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="petCategory">Pet Category:</label>
                        <Field
                            as={Select}
                            options={petCategories}
                            onChange={onChange}
                            value={selectedCategory}
                            name="petCategory"
                        />
                        <ErrorMessage name="petCategory" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="petLocation" className="block text-sm font-medium text-gray-600">
                            Pet Location
                        </label>
                        <Field type="text" name="petLocation" className={inputStyle} />
                        <ErrorMessage name="petLocation" component="div" className="text-red-500 text-sm" />
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

export default UpdatePetListing;