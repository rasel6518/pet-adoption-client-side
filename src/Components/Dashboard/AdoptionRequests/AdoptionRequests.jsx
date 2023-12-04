import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AdoptionRequests = () => {
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const { user } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()

    // const { data: adoptionRequests, refetch } = useQuery({
    //     queryKey: ['adoptionRequests'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/myadoptionrequest/${user?.email}`)

    //         return res.data;
    //     }

    // })


    console.log(adoptionRequests);


    useEffect(() => {
        // Assuming you have an endpoint for fetching adoption requests
        axiosSecure.get(`/myadoptionrequest/${user?.email}`) // Replace with your actual API endpoint
            .then(res => {
                setAdoptionRequests(res.data);
            })


    }, [user, axiosSecure]);

    // const handleAccept = async (requestId) => {
    //     try {
    //         // Assuming you have an endpoint for accepting adoption requests
    //         await axios.post(`/api/adoption-requests/${requestId}/accept`);
    //         // Refresh adoption requests after accepting
    //         const response = await axios.get('/api/adoption-requests');
    //         setAdoptionRequests(response.data);
    //     } catch (error) {
    //         console.error('Error accepting adoption request:', error);
    //     }
    // };

    // const handleReject = async (requestId) => {
    //     try {
    //         // Assuming you have an endpoint for rejecting adoption requests
    //         await axios.post(`/api/adoption-requests/${requestId}/reject`);
    //         // Refresh adoption requests after rejecting
    //         const response = await axios.get('/api/adoption-requests');
    //         setAdoptionRequests(response.data);
    //     } catch (error) {
    //         console.error('Error rejecting adoption request:', error);
    //     }
    // };



    return (


        <div className='w3-container'>
            <h2 className="text-2xl text-center font-bold mb-4">Adoption Requests for Your Pets</h2>
            <table className='w-9/12 mx-auto w3-table-all w3-hoverable' border="1" cellSpacing="0" cellPadding="5" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Requester Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {adoptionRequests.map((request) => (
                        <tr key={request._id}>
                            <td>{request.petName}</td>
                            <td>{request.requesterName}</td>
                            <td>{request.email}</td>
                            <td>{request.phoneNumber}</td>
                            <td>{request.location}</td>
                            {/* <td>
                                <button onClick={() => handleAccept(request.id)}>Accept</button>
                                <button onClick={() => handleReject(request.id)}>Reject</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdoptionRequests;
