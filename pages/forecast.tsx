import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import MainLayout from '../components/MainLayout'

const api = {
    key: "667fa688b47f6b6f9b610d0e80f0775a",
    base: "https://api.openweathermap.org/data/2.5/"
}

const NavBar: NextPage = () => {
    const isAuth = useSelector((state: any) => state.auth.isAuthenticated)
    const router = useRouter()

    const [query, setQuery] = useState<any>('Baku');
    const [weather, setWeather] = useState<any>({});

    const search = (evt: any) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                });
        }
    }

    const dateBuilder = (d: any) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    useEffect(() => {
        if (!isAuth) {
            router.push('/')
        }
    }, [isAuth])


    return (
        <MainLayout title="Weather Forecast">
            <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-2xl tracking-tight">Weather Forecast NextJS App</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-base lg:flex-grow"></div>
                    <div>
                        <Link href="/">
                            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            Landing Page
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className='container mx-auto mt-10'>

                <div className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Search Place
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input

                                type="text"
                                placeholder="Search City"
                                onChange={e => setQuery(e.target.value)}
                                value={query}
                                onKeyPress={search}

                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" />
                        </div>
                    </div>
                </div>

                {(typeof weather.main != "undefined") ? (
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Temperature</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div className="relative h-8 mr-3 rounded-full md:block">
                                            <p className="font-semibold text-lg text-black">{weather?.name}  {weather?.sys?.country}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">{Math.round(weather.main.temp)}°c</td>
                                <td className="px-4 py-3 text-xs border">
                                    <p className="font-semibold text-lg text-black">{weather.weather[0].main}</p>
                                </td>
                                <td className="px-4 py-3 font-semibold text-lg border">{dateBuilder(new Date())}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : ('')}
            </main>
        </MainLayout>
    )
}

export default NavBar
