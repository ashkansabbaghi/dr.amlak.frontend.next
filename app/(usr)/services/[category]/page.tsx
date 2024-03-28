import { Stepper } from "@/components/Stepper"
import Title from "@/components/Title"


export default function request() {
	return (
		<>
			<Title text={"درخواست خرید"} />
			{/* <div className="w-full h-full flex flex-col justify-center max-w-[80rem] m-auto"> */}
			<div className="text-right text-4xl font-bold leading-normal">
				هر خانه یک داستان
			</div>
			<div className="rounded-2xl h-[25rem] py-10 px-12 backdrop-blur-md shadow-lg mt-8">
				<Stepper />
			</div>
			{/* </div> */}
		</>
	)
}
