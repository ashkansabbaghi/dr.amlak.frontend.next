import CardService from "@/components/CardService";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="container p-4">
        <h1 className="text-3xl font-bold mb-16">سرویس ها</h1>
        <div className="grid grid-cols-3 gap-4">
          <Link href={"services/rent"} >
            <CardService
              className={"w-auto text-center"}
              icons={<i className="fas fa-award"></i>}
              title={"رهن و اجاره"}
              desc={"وارد کردن اطلاعات ملک برای کسب بهترین قیمت و سرعت در اجاره."}
              colorIcon={"bg-blue-400"}
              heightCart={"h-[210px]"}
            />
          </Link>
          <Link href={"services/rebuilding"} >
            <CardService
              className={"w-auto text-center"}
              icons={<i className="fas fa-award"></i>}
              title={"بازسازی"}
              desc={" راهنمایی برای بهبود قیمت و تسریع در فرآیند بازسازی ملک."}
              colorIcon={"bg-red-400"}
              heightCart={"h-[210px]"}
            />
          </Link>
          <Link href={"services/sales"} >
            <CardService
              className={"w-auto text-center"}
              icons={<i className="fas fa-award"></i>}
              title={"خرید و فروش"}
              desc={"راهنمایی برای بهره‌مندی از بهترین قیمت و سرعت در فرآیند خرید ملک."}
              colorIcon={"bg-green-400"}
              heightCart={"h-[210px]"}
            />
          </Link>
        </div>
      </div>



      <Link href="/services/request">request</Link>
    </>
  )
}
