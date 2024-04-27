'use client';

// import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";
// import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Logo } from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();
  const menuItems = [
    { name: "خانه", href: "/" },
    { name: "محصول", href: "/products" },
    { name: "سرویس ها", href: "/services" },
  ]

  const isActiveRoute = (route: string) => {
    return pathname === route;
  }

  return (
    // <div className="h-[72px] bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
    //   <div className="h-full container flex flex-wrap items-center justify-between mx-auto">
    //     <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}
    //       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AMLAK</span>
    //     </Link>
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //       <Button className="bg-slate-900 text-white" >شروع</Button>
    //       <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    //         <span className="sr-only">Open main menu</span>
    //         <IoIosMenu className="w-10 h-10" aria-hidden="true" />
    //       </button>
    //     </div>
    //     <div className="items-center justify-between hidden w-full md:h-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    //       <ul className="flex flex-col md:h-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 
    //       rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <MenuItem  name="خانه" href="/"/>
    //         <MenuItem  name="محصولات" href="/products"/>
    //         <MenuItem  name="سرویس ها" href="/services"/>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <>
      <Navbar maxWidth="xl" isBordered shouldHideOnScroll>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        {/* logo mobile */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>
        {/* menu web */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* logo web */}
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
          {menuItems.map((item) => (
            <NavbarItem
              key={item.href}
              isActive={isActiveRoute(item.href)}>
              <Link
                color="foreground"
                href={item.href}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} className="bg-slate-200 rounded-md" href={`services`} variant="flat">
              شروع
            </Button>
          </NavbarItem>
        </NavbarContent>  

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export const MenuItem = ({ name, href }: { name: string, href: string }) => {
  const pathname = usePathname();
 
  return (
    <NavbarItem>
      <Link
        href={href}
        className={clsx(
          "flex items-center py-2 px-3 md:border-b-4 md:border-transparent text-white bg-slate-700 md:bg-transparent md:text-slate-900 md:p-0 md:dark:text-slate-500",
          {
            "md:text-blue-600 md:border-b-4 md:!border-blue-600": pathname === href,
          }
        )}
        aria-current="page">{name}</Link>
    </NavbarItem>

  )
}

