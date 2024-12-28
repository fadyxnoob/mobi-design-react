import { Card, Typography } from '@material-tailwind/react';
import { Reset } from '../';
import React from 'react';

const Table = () => {

    return (
        <>
            <div className='bg-primary h-screen w-full flex items-center justify-center flex-col p-10 overflow-auto'>
                <div>
                    {/* CARD ONE */}
                    <h1 className='text-light text-3xl font-normal mb-3 nsm:text-center'>Delivery Details</h1>
                    <table class="border border-slate-500 border-collapse w-full text-light">
                        <thead>
                            <tr>
                                <th class="border border-slate-600 px-5 py-2">Email</th>
                                <th class="border border-slate-600 px-5 py-2">Phone</th>
                                <th class="border border-slate-600 px-5 py-2">Country</th>
                                <th class="border border-slate-600 px-5 py-2">Address</th>
                                <th class="border border-slate-600 px-5 py-2">Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 px-5 py-2">user@user.com</td>
                                <td class="border border-slate-700 px-5 py-2">+0123456789</td>
                                <td class="border border-slate-700 px-5 py-2">Pakistan</td>
                                <td class="border border-slate-700 px-5 py-2">Multan Khanewal</td>
                                <td class="border border-slate-700 px-5 py-2">No Comments</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CARD Two */}
                    <h1 className='text-light text-3xl font-normal mb-3 nsm:text-center'>Order Options</h1>
                    <table class="border border-slate-500 border-collapse w-full text-light">
                        <thead>
                            <tr>
                                <th class="border border-slate-600 px-5 py-2">#</th>
                                <th class="border border-slate-600 px-5 py-2">Label</th>
                                <th class="border border-slate-600 px-5 py-2">Type</th>
                                <th class="border border-slate-600 px-5 py-2">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 px-5 py-2">1</td>
                                <td class="border border-slate-700 px-5 py-2">External Protection</td>
                                <td class="border border-slate-700 px-5 py-2">TPU Reinforced Titanium Armour</td>
                                <td class="border border-slate-700 px-5 py-2">$0</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CARD Three */}
                    <h1 className='text-light text-3xl font-normal mb-3 nsm:text-center'>Order Personalizations</h1>
                    <table class="border border-slate-500 border-collapse w-full text-light">
                        <thead>
                            <tr>
                                <th class="border border-slate-600 px-5 py-2">#</th>
                                <th class="border border-slate-600 px-5 py-2">Label</th>
                                <th class="border border-slate-600 px-5 py-2">Type</th>
                                <th class="border border-slate-600 px-5 py-2">Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-700 px-5 py-2">1</td>
                                <td class="border border-slate-700 px-5 py-2">External Protection</td>
                                <td class="border border-slate-700 px-5 py-2">TPU Reinforced Titanium Armour</td>
                                <td class="border border-slate-700 px-5 py-2">$0</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* CARD Four */}
                    <h1 className='text-light text-3xl font-normal mb-3 nsm:text-center'>Logos</h1>
                    <table class="border border-slate-500 border-collapse w-full text-light">
                        <div className="w-full flex border border-light p-1">
                            <div className="p-2">
                                <img src='src/assets/images/download2.png' alt='logo-Left' className='size-16' />
                            </div>
                            <div className="p-2">
                                <img src='src/assets/images/download3.jpg' alt='logo-Right' className='size-16' />
                            </div>
                        </div>
                    </table>
                </div>
                <Reset nsm='nsm:hidden' />
                <div className="nsm:block hidden">
                    <Reset positionX='right-0' positionY='top-0' size='size-16' />
                </div>
            </div>

        </>
    );
}

export default Table;
