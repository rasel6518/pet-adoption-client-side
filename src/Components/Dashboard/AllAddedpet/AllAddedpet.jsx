import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useAllPet from "../../../Hooks/useAllPet";
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";

const columnHelper = createColumnHelper();
const AllAddedpet = () => {
    const [allPet, refetch] = useAllPet();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (Array.isArray(allPet)) {
            setData([...allPet]);
        }
    }, [allPet]);

    console.log(data);
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://petpals-haven-server.vercel.app/petlistings/${id}`);
            if (response.data.deletedCount > 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        });
                    }
                });
                refetch()
            }
        } catch (error) {
            console.error('Error deleting pet:', error);
        }
    };
    const columns = [
        columnHelper.accessor('_id', {
            header: 'Serial Number',
            cell: (tableProps) => tableProps.row.index + 1,
        }),
        columnHelper.accessor('petImage', {
            header: 'Pet Image',
            cell: (tableProps) => <img src={tableProps.row.original.petImage} alt="Pet" className="w-10 h-10 rounded-xl" />,
        }),
        columnHelper.accessor('petName', {
            header: 'Pet Name',
        }),
        columnHelper.accessor('petCategory', {
            header: 'Pet Category',
        }),
        columnHelper.accessor('actions', {
            header: 'Actions',
            cell: (tableProps) => (
                <div className="flex items-center text-xl gap-2">
                    <Link to={`/dashboard/updatepetlist/${tableProps.row.original._id}`}>
                        <button title="Update" className="mr-2">
                            <FaEdit></FaEdit>{' '}
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(tableProps.row.original._id)} title="Delete123" className="mr-2">
                        <FaTrash></FaTrash>{' '}
                    </button>
                    <button title="Adopt">
                        <MdEventAvailable className="text-2xl" />
                    </button>
                </div>
            ),
        }),
    ];
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <div className="p-2 w3-container">
            <table className="w-9/12 mx-auto w3-table-all w3-hoverable">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr className="w3-light-grey" key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="h-4" />
        </div>
    );
};

export default AllAddedpet;