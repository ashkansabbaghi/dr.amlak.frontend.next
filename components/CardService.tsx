function CardService({ icons , title, desc, colorIcon  , className , heightCart}: {
    icons: React.ReactNode;
    title: string;
    desc: string;
    colorIcon: string;
    className: string;
    heightCart : string;
}) {
    return (
        <>
 <div className={className}>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className={`px-4 py-5 flex-auto ${heightCart}`}>
                    <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${colorIcon}`}>
                        {icons}
                    </div>
                    <h6 className="text-xl font-semibold">{title}</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                        {desc}
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

CardService.defaultProps = {
    heightCart : "h-auto", 
    colorIcon: "bg-gray-400",
    icons : <i className="fas fa-award" />
}

export default CardService