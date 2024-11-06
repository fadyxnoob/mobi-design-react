import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left text-light">
                <thead>
                    <tr>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium leading-none opacity-70"
                            >
                                #
                            </Typography>
                        </th>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium leading-none opacity-70"
                            >
                                Design
                            </Typography>
                        </th>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                Payment
                            </Typography>
                        </th>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                Tracking ID
                            </Typography>
                        </th>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                Status
                            </Typography>
                        </th>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                Date
                            </Typography>
                        </th>
                        <th
                            className="border p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                            >
                                View More
                            </Typography>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                1
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <img src='src/assets/images/shirt.png' alt='Shirt' className='size-20' />
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                $12050
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                MOB54799
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-orange rounded m-2 px-3 py-2'>
                                    Pending
                                </button>
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center p-2"
                            >
                                01/Sep/2024
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <Link to='/order-details'>
                                    <button className='bg-skyBlue rounded m-2 px-3 py-2'>
                                        View Order
                                    </button>
                                </Link>
                            </Typography>
                        </td>
                    </tr>
                    <tr >
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                2
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <img src='src/assets/images/bag.png' alt='Bag' className='size-20' />
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                $10050
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                MOB66645
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-orange rounded m-2 px-3 py-2'>
                                    Pending
                                </button>
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center p-2"
                            >
                                01/Sep/2024
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-skyBlue rounded m-2 px-3 py-2'>
                                    View Order
                                </button>
                            </Typography>
                        </td>
                    </tr>
                    <tr >
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                3
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <img src='src/assets/images/gloves.png' alt='Gloves' className='size-20' />
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                $17050
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                MOB39654
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-orange rounded m-2 px-3 py-2'>
                                    Pending
                                </button>
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center p-2"
                            >
                                01/Sep/2024
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-skyBlue rounded m-2 px-3 py-2'>
                                    View Order
                                </button>
                            </Typography>
                        </td>
                    </tr>
                    <tr >
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                4
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <img src='src/assets/images/Belt.png' alt='Belt' className='size-20' />
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                $200
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                MOB97856
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-orange rounded m-2 px-3 py-2'>
                                    Pending
                                </button>
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center p-2"
                            >
                                01/Sep/2024
                            </Typography>
                        </td>
                        <td className="border">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-center"
                            >
                                <button className='bg-skyBlue rounded m-2 px-3 py-2'>
                                    View Order
                                </button>
                            </Typography>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Table;
