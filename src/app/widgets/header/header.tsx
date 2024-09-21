import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <NavigationMenu className="max-w-viewport mx-auto h-20 border-b border-secondary px-20">
      <div className="w-full">
        <NavigationMenuList className="justify-between w-full">
          <NavigationMenuItem className="text-2xl">
            lorran.<b>dev</b>
          </NavigationMenuItem>

          <div></div>
          <div className="hidden md:flex">
            <NavigationMenuItem>
              <Link
                className="border-b-8 border-textBase bg-primary h-20 flex items-center px-20 border-r border-l flex gap-2"
                href="/"
              >
                <HomeIcon />
                home
              </Link>
            </NavigationMenuItem>
          </div>
          <div></div>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
