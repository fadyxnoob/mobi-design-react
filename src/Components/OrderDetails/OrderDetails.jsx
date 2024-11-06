import { Card, Typography } from '@material-tailwind/react';
import {Reset} from '../';
import React from 'react';

const Table = () => {

    return (
        <>
            <div className='main bg-primary h-auto w-full flex items-center justify-center flex-col p-5 overflow-x-auto pt-10'>
                <div>

                    {/* CARD ONE */}
                    <Card className="h-fit w-fit ">
                        <h1 className='text-light text-3xl font-normal mb-3 nsm:text-center'>Delivery Details</h1>
                        <table className="w-full min-w-max table-auto text-left text-light">
                            <thead>
                                <tr>
                                    <th
                                        className="border p-4 w-40"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium leading-none opacity-70"
                                        >
                                            Email
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-40"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium leading-none opacity-70"
                                        >
                                            Phone
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-40"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Country
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-40"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Address
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-40"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Comments
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
                                            user@user.com
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            +0123456789
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            Pakistan
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            Multan Khanewal
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            No Comments
                                        </Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>

                    {/* Card Two */}

                    <Card className="h-fit w-fit w-full">
                        <h1 className='text-light text-xl font-normal mb-3 mt-5 nsm:text-center'>Order Options</h1>
                        <table className="w-full min-w-max table-auto text-center text-light">
                            <thead>
                                <tr>
                                    <th
                                        className="border p-4 w-fit"
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
                                        className="border p-4 w-fit"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium leading-none opacity-70"
                                        >
                                            Lable
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-fit"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Type
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-fit"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Charges
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
                                            className="font-normal text-center p-2"
                                        >
                                            1
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            External Protection
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            TPU Reinforced Titanium Armour
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            $0
                                        </Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>

                    {/* CARD THREE */}

                    <Card className="h-fit w-fit w-full">
                        <h1 className='text-light text-xl font-normal mb-3 mt-5 nsm:text-center'>Order Personalizations</h1>
                        <table className="w-full min-w-max table-auto text-center text-light">
                            <thead>
                                <tr>
                                    <th
                                        className="border p-4 w-fit"
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
                                        className="border p-4 w-fit"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium leading-none opacity-70"
                                        >
                                            Lable
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-fit"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Type
                                        </Typography>
                                    </th>
                                    <th
                                        className="border p-4 w-fit"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Charges
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
                                            className="font-normal text-center p-2"
                                        >
                                            1
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            External Protection
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            TPU Reinforced Titanium Armour
                                        </Typography>
                                    </td>
                                    <td className="border">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center p-2"
                                        >
                                            $0
                                        </Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>

                    {/* CARD FOUR */}

                    <Card className="h-fit w-fit w-full">
                        <h1 className='text-light text-xl font-normal mb-3 mt-5 nsm:text-center'>Logos</h1>
                        <div className="w-full flex border border-light p-1">
                            <div className="p-2">
                                <img src='src/assets/images/download2.png' alt='logo-Left' className='size-16' />
                            </div>
                            <div className="p-2">
                                <img src='src/assets/images/download3.jpg' alt='logo-Right' className='size-16' />
                            </div>
                        </div>
                    </Card>
                </div>
                <Reset nsm='nsm:hidden'/>
                <div className="nsm:block hidden">
                    <Reset positionX='right-0' positionY='top-0' size='size-16' />
                </div>
            </div>

        </>
    );
}

export default Table;
