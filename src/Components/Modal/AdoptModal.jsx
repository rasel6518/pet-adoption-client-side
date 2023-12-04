import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';

import { Fragment, useState } from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AdoptModal = ({ isOpen, closeModal, adoptionInfo }) => {
    const axiosSecure = useAxiosSecure()
    const [adoptionRequest, setAdoptionRequest] = useState({
        userName: adoptionInfo.userInfo.name,
        userEmail: adoptionInfo.userInfo.email,
        userPhone: '',
        userAddress: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdoptionRequest((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Adoption Request:', adoptionRequest);
        axiosSecure.post('/adoptionrequest', adoptionRequest)
            .then(res => {
                if (res.data.insertedId) {


                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Adoption Request Accepted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

        closeModal();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <form onSubmit={handleSubmit}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium text-center leading-6 text-gray-900"
                                    >
                                        Adoption Form
                                    </Dialog.Title>

                                    <div className="mt-4">
                                        <label htmlFor="userPhone" className="block text-sm font-medium text-gray-700">
                                            Phone Number:
                                        </label>
                                        <input
                                            type="text"
                                            id="userPhone"
                                            name="userPhone"
                                            value={adoptionRequest.userPhone}
                                            onChange={handleInputChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="userAddress" className="block text-sm font-medium text-gray-700">
                                            Address:
                                        </label>
                                        <textarea
                                            id="userAddress"
                                            name="userAddress"
                                            value={adoptionRequest.userAddress}
                                            onChange={handleInputChange}
                                            rows="3"
                                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                        ></textarea>
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            className="hover:bg-[#f28583] bg-[#FA524F] text-white font-bold py-2 px-4 rounded"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                                {/* Card data form */}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
};

export default AdoptModal;