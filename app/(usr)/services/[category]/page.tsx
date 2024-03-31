"use client";
import { Stepper } from "@/components/Stepper"
import Title from "@/components/Title"
import { useParams } from "next/navigation";

export default function Request() {
	const {category} = useParams();

	console.log(category);

	return (
		<>
			<Title text={choiceTitle(category)} />
			<div className="container p-0 w-full h-full flex flex-col justify-center m-auto">
				<div className="rounded-2xl h-[25rem] py-10 px-12 backdrop-blur-md shadow-2xl shadow-gray-200">
					<Stepper />
				</div>
			</div>
		</>
	)
}
const choiceTitle = (category: string | string[]) => {
	const titles = {
		rent: "رهن و اجاره",
		rebuilding: "بازسازی",
		sales: "خرید و فروش"
	};

	return titles[category as keyof typeof titles] || "فرم ملک";
}


