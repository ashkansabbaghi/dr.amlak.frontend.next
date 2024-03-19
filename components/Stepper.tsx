'use client';

import { FaImage , FaUser,FaNewspaper } from "react-icons/fa";

import { CustomInput } from "./CustomInput";
import { useState } from "react";

export const Stepper = () => {
    const steps = [
        { num: 3, title: 'تصاویر', icon: FaImage },
        { num: 2, title: 'اطلاعات ملک', icon: FaNewspaper },
        { num: 1, title: 'اطلاعات شخصی', icon: FaUser },
    ]
    const [countStep, setCountStep] = useState(1)

    return (
        <>
            <ul className="relative m-0 flex list-none justify-between overflow-visible p-0 transition-[height] duration-200 ease-in-out">
                {steps.map(step => (
                    <li
                        key={step.num}
                        className="flex items-center justify-start relative cursor-pointer bg-none"
                        onClick={() => { setCountStep(step.num) }}>
                        <span className="flex relative items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0">
                            <p className="text-slate-900 absolute top-14 text-sm font-bold w-max hidden md:block">{step.title}</p>
                            <step.icon className="w-6 h-6 text-slate-900" />
                        </span>
                    </li>
                ))}
            </ul>

            {/*step 1*/}
            {countStep === 1 && <div className="flex flex-col gap-y-10 w-full transition-all duration-500 ease-in-out pb-20 text-slate-900 mt-10">
                <CustomInput label={'نام کاربری'} />
                <CustomInput label={'ایمیل'} />
                <CustomInput label={'شماره همراه'} />
            </div>}

            {/*step 2*/}
            {countStep === 2 && <div className="flex flex-col gap-y-10 w-full transition-all duration-500 ease-in-out pb-20 text-slate-900 mt-10">
                <div className="">
                    <CustomInput label={'آدرس ملک'} />
                    {/*Suggestion Address Dropdown*/}
                    <div className="z-10 bg-white rounded-lg shadow w-full hidden">
                        <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                            <li className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <div className="text-right w-full py-2 ms-2 text-sm font-medium text-gray-600">Bonnie Green</div>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="flex justify-between items-center mb-7">
                    <div className="flex items-center">
                        <label
                            htmlFor="not"
                            className="pr-2 text-sm font-medium text-white cursor-pointer">ندارد</label>
                        <input
                            id="not"
                            type="radio"
                            value="not"
                            name="not"
                            className="w-5 h-5 bg-gray-100 rounded-full border-gray-300 focus:ring-0 focus:outline-none cursor-pointer" />
                    </div>
                    <div className="flex items-center">
                        <label
                            htmlFor="affidavit"
                            className="pr-2 text-sm font-medium text-white cursor-pointer">قولنامه‌ای</label>
                        <input
                            id="affidavit"
                            type="radio"
                            value="affidavit"
                            name="affidavit"
                            className="w-5 h-5 bg-gray-100 rounded-full border-gray-300 focus:ring-0 focus:outline-none cursor-pointer" />
                    </div>
                    <div className="flex items-center">
                        <label
                            htmlFor="deed"
                            className="pr-2 text-sm font-medium text-white cursor-pointer">سند دار</label>
                        <input
                            id="deed"
                            type="radio"
                            value="deed"
                            name="deed"
                            className="w-5 h-5 bg-gray-100 rounded-full border-gray-300 focus:ring-0 focus:outline-none cursor-pointer" />
                    </div>
                    <div>: نوع ملک</div>
                </div>
            </div>}
        </>
    )
}