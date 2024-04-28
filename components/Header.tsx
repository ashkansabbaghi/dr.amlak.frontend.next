'use client';

// import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";
// import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MiniLogo } from "@/components/MiniLogo";

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
    <>
      <Navbar maxWidth="xl" isBordered shouldHideOnScroll>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>
        {/* logo mobile */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <MiniLogo />
          </NavbarBrand>
        </NavbarContent>
        {/* menu web */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {/* logo web */}
          <NavbarBrand>
            <MiniLogo />
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

