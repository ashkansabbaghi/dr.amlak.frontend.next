import { Stepper } from "@/components/Stepper"
import Title from "@/components/Title"

export default function request() {
	return (
		<>
			<Title text={"درخواست خرید"} />
			<div className="container p-4 w-full h-full flex flex-col justify-center m-auto">
				<div className="rounded-2xl h-[25rem] py-10 px-12 backdrop-blur-md shadow-2xl shadow-gray-200">
					<Stepper />
				</div>
			</div>
		</>
	)
}
