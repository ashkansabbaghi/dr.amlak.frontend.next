'use client';

import { FaImage, FaUser, FaNewspaper } from "react-icons/fa";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import CustomRadioBtn from "./CustomRadioBtn";
import { Card, CardBody, CardFooter, Chip, CircularProgress } from "@nextui-org/react";

export const Stepper = () => {
  const steps = [
    { num: 3, title: 'تصاویر', icon: FaImage },
    { num: 2, title: 'اطلاعات ملک', icon: FaNewspaper },
    { num: 1, title: 'اطلاعات شخصی', icon: FaUser },
  ]
  const [countStep, setCountStep] = useState(1)

  return (
    <>
      {/* head Step pc */}
      <ul dir="ltr" className={`hidden md:grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg 
             text-sm sm:grid-cols-3 mb-8 `}>
        {steps.map(step => (
          <li
            key={step.num}
            className={`relative flex items-center justify-center gap-2 p-4 cursor-pointer 
                        ${countStep >= step.num ? "bg-green-100 text-green-800" : ""}`}
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

      {/* head Step mobile */}
      <Card className="md:hidden flex w-full h-auto border-none shadow-none">
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-slate-900",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-slate-900",
            }}
            value={countStep*33.33}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
        <CardFooter className="justify-center items-center pt-0">
          <Chip
            classNames={{
              base: "border-none",
              content: "text-slate-900 text-small font-semibold",
            }}
            variant="bordered"
          >
            {steps.map(step => countStep === step.num && <span key={step.num}>{step.title}</span>)}
          </Chip>
        </CardFooter>
      </Card>

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
          <div className="z-10 bg-gray-50 rounded-lg shadow-lg w-full hidden">
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
              <li className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                <div className="text-right w-full py-2 ms-2 text-sm font-medium text-gray-600">Bonnie Green</div>
              </li>
            </ul>
          </div>
        </div>

        <CustomRadioBtn title="نوع ملک" items={[{ not: "ندارد" }, { affidavit: "آفیسینت" }, { deed: "قرارداد" }]} />


      </div>}
    </>
  )
}