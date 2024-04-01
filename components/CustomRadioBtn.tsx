import { useState } from "react"

interface IProps {
    title: string,
    items: Array<object>

}
export default function CustomRadioBtn({ title, items }: IProps) {
    return (
        <>
            <p className="font-medium text-gray-900 dark:text-white">{title}</p>
            <ul className="flex w-full gap-6">
                {
                    items.map((item, index) => {
                        return (
                            <>
                                <li key={index}>
                                    <input 
                                    type="radio" 
                                    id={`radio_${index}`} 
                                    name="radioGroup" 
                                    value={Object.keys(item)} 
                                    className="hidden peer" 
                                    required />
                                    <label htmlFor={`radio_${index}`} className="inline-flex items-center justify-between w-full p-5 
                                    text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer 
                                    dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 
                                    peer-checked:border-blue-600 peer-checked:text-blue-600 
                                    hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="block">
                                            <div className="w-full">{Object.values(item)}</div>
                                        </div>
                                    </label>
                                </li>
                            </>)
                    })
                }
            </ul>
        </>
    )
}
