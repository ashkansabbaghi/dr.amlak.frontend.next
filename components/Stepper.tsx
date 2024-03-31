'use client';

import { FaImage, FaUser, FaNewspaper } from "react-icons/fa";
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
        
            <ul dir="ltr" className={`grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg 
             text-sm sm:grid-cols-3 mb-8 `}>
                {steps.map(step => (
                    <li
                        key={step.num}
                        className={`relative flex items-center justify-center gap-2 p-4 cursor-pointer 
                        ${countStep >= step.num? "bg-green-100 text-green-800" : ""}`}
                        onClick={() => { setCountStep(step.num) }}>
                        <p className="leading-none sm:block hidden">
                            <strong className="block font-bold text-sm md:text-base"> {step.title} </strong>
                        </p>
                        <step.icon className="w-5 h-5 mx-1 " />
                        <span
                            className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45  sm:block 
                                       ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-white">
                        </span>
                    </li>

                ))}

            </ul>

            {/*step 1*/}
            {countStep === 1 && <div className="flex flex-col gap-y-10 w-full transition-all duration-500 ease-in-out pb-20 text-slate-900">
                <CustomInput label={'نام کاربری'} />
                <CustomInput label={'ایمیل'} />
                <CustomInput label={'شماره همراه'} />
            </div>}

            {/*step 2*/}
            {countStep === 2 && <div className="flex flex-col gap-y-10 w-full transition-all duration-500 ease-in-out pb-20 text-slate-900">
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

                <div> نوع ملک</div>
                <div className="flex justify-between items-center mb-7">

                    <div className="flex items-center">
                        <label
                            htmlFor="not"
                            className="pr-2 text-sm font-medium text-slate-900 cursor-pointer">ندارد</label>
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
                            className="pr-2 text-sm font-medium text-slate-900 cursor-pointer">قولنامه‌ای</label>
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
                            className="pr-2 text-sm font-medium text-slate-900 cursor-pointer">سند دار</label>
                        <input
                            id="deed"
                            type="radio"
                            value="deed"
                            name="deed"
                            className="w-5 h-5 bg-gray-100 rounded-full border-gray-300 focus:ring-0 focus:outline-none cursor-pointer" />
                    </div>
                </div>
            </div>}
        </>
    )
}