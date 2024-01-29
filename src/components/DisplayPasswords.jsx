import React from 'react'

const DisplayPasswords = () => {
    return (
        <>
            <div className="text-white p-4 flex flex-col items-center justify-center">
                <input className='rounded-full w-3/5 py-2 text-black' />
                <p className=''>Hello World</p>
            </div>


            <div className="passwords">
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table class="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Plan</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Speed</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Storage</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Price</th>
                                <th class="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-3">Start</td>
                                <td class="px-4 py-3">5 Mb/s</td>
                                <td class="px-4 py-3">15 GB</td>
                                <td class="px-4 py-3 text-lg text-white">Free</td>
                                <td class="w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td class="border-t-2 border-gray-800 px-4 py-3">Pro</td>
                                <td class="border-t-2 border-gray-800 px-4 py-3">25 Mb/s</td>
                                <td class="border-t-2 border-gray-800 px-4 py-3">25 GB</td>
                                <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">$24</td>
                                <td class="border-t-2 border-gray-800 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td class="border-t-2 border-gray-800 px-4 py-3">Business</td>
                                <td class="border-t-2 border-gray-800 px-4 py-3">36 Mb/s</td>
                                <td class="border-t-2 border-gray-800 px-4 py-3">40 GB</td>
                                <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">$50</td>
                                <td class="border-t-2 border-gray-800 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">Exclusive</td>
                                <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">48 Mb/s</td>
                                <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">120 GB</td>
                                <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">$72</td>
                                <td class="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default DisplayPasswords