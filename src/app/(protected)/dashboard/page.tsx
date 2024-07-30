'use client'
import React, { useEffect, useState } from "react";
import {
    IconBrandMyOppo,
    IconBriefcase,
    IconScan
} from "@tabler/icons-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
import axios from "axios";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ActiveMembership {
    customerId: string
    duration: string
    expiresAt: string
    issuedAt: string
    status: string
    type: string
    updatedAt: string
}


const Dashboard = () => {
    const [stats, setStats] = useState([]);
    const [type, setType] = useState("scans");
    const [filter, setFilter] = useState("currentWeek");
    const [customer, setCustomer] = useState<{ name: string, site: string, totalViews: number, activeMembership: ActiveMembership }>();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/customer/66a81f18af89e261433a0686/stats`;
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]


    const getCustomer = async () => {
        try {
            const stats = await axios.post(url, {
                startDate: "2024-07-30T04:59:53.355Z",
                endDate: "2024-08-06T04:59:53.355Z"
            });
            const customer = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customer/66a81f18af89e261433a0686`);

            setCustomer(customer.data);
            setStats(stats.data);
            console.log(stats);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCustomer();
    }, [type, filter]);
    return (
        <section className='w-full min-h-[calc(100vh-70px)] px-4 bg-[#0a0a0a]'>
            <section className="w-full h-full max-w-7xl mx-auto">
                <h2 className='text-white text-left text-4xl tracking-tight max-w-2xl md:text-5xl'>Welcome Back <span className='bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent'>Bucks</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <BentoGrid className="w-full">
                        <div
                            className={"rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-[#1b1b1b] border border-transparent justify-between flex flex-col space-y-4 col-span-2"}
                        >
                            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex flex-row items-center justify-between">
                                Brand
                                <IconBriefcase className="h-4 w-4 text-neutral-500" />

                            </div>
                            <div className="text-neutral-300 flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
                                <section>
                                    <h4 className="text-sm text-neutral-500">Name</h4>
                                    <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{customer?.name}</p>
                                </section>
                                <section>
                                    <h4 className="text-sm text-neutral-500">Url</h4>
                                    <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{customer?.site}</p>
                                </section>
                            </div>
                        </div>
                        <div
                            className={"rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-[#1b1b1b] border border-transparent justify-between flex flex-col col-span-1 w-full"}
                        >
                            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mt-2 flex flex-row items-center justify-between">
                                Scans
                                <IconScan className="h-4 w-4 text-neutral-500" />

                            </div>
                            <h4 className="h-full w-full flex justify-center items-center text-4xl font-bold">{customer?.totalViews}</h4>
                        </div>
                        <div
                            className={"rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-[#1b1b1b] border border-transparent justify-between flex flex-col space-y-4 col-span-3"}
                        >
                            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex flex-row items-center justify-between">
                                Membership
                                <IconBrandMyOppo className="h-4 w-4 text-neutral-500" />

                            </div>
                            <div className="text-neutral-300 flex flex-row justify-between">
                                <section>
                                    <h4 className="text-sm text-neutral-500">Type</h4>
                                    <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{customer?.activeMembership?.type}</p>
                                </section>
                                <section>
                                    <h4 className="text-sm text-neutral-500">Duration</h4>
                                    <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{customer?.activeMembership?.duration}</p>
                                </section>
                                <section>
                                    <h4 className="text-sm text-neutral-500">Status</h4>
                                    <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{customer?.activeMembership?.status}</p>
                                </section>
                                <section>
                                    <h4 className="text-sm text-neutral-500">Expiration</h4>
                                    <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200">{customer?.activeMembership?.expiresAt}</p>
                                </section>
                            </div>
                        </div>
                    </BentoGrid>
                </div>
                <Card className="bg-[#1b1b1b] border-transparent">
                    <CardHeader className="flex flex-row justify-between gap-4">
                        <section className="flex-1">
                            <CardTitle>Analytics</CardTitle>
                            <CardDescription> View analytics for your Cosmo Mobile Media account. </CardDescription>
                        </section>
                        <section className="flex-1 flex justify-end">
                            <Select onValueChange={(value) => setFilter(value)}>
                                <SelectTrigger className="outline-none max-w-[150px]">
                                    <SelectValue placeholder="This week" />
                                </SelectTrigger>
                                <SelectContent className="outline-none">
                                    <SelectGroup className="outline-none">
                                        <SelectItem value="currentWeek">This Week</SelectItem>
                                        <SelectItem value="lastWeek">Last Week</SelectItem>
                                        <SelectItem value="currentMonth">This Month</SelectItem>
                                        <SelectItem value="lastMonth">Last Month</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </section>
                    </CardHeader>
                    <CardContent className="w-full h-[600px]">
                        <h3 className="text-sm text-white text-center font-bold mb-4">SCANS</h3>
                        <ResponsiveContainer width="100%" height="50%">
                            <LineChart width={730} height={250} data={stats}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="views" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                        <ResponsiveContainer width="100%" height="50%">
                            <AreaChart width={730} height={250} data={stats}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorNew1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorNew2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="morning" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="afternoon" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                <Area type="monotone" dataKey="evening" stroke="#ffc658" fillOpacity={1} fill="url(#colorNew1)" />
                                <Area type="monotone" dataKey="midnight" stroke="#ff7300" fillOpacity={1} fill="url(#colorNew2)" />
                            </AreaChart>

                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </section>
        </section>
    )
}

export default Dashboard