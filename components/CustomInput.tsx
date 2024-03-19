export const CustomInput = ({ label }: { label: string }) => {

    return (
        <>
            <div className="text-right">
                <div className="relative">
                    <input
                        id="inputName"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2
                      border-gray-300 appearance-none text-white  focus:outline-none
                        text-right focus:ring-0 focus:border-blue-600 peer"
                    />
                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 right-0
                    top-3 -z-10 peer-focus:end-0 peer-focus:text-white peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {label}
                    </label>
                </div>
            </div>
        </>
    )
}
