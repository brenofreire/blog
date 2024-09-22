import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <NavigationMenu className="h-20 px-20 mx-auto border-b max-w-viewport border-secondary">
      <div className="w-full">
        <NavigationMenuList className="justify-between w-full">
          <NavigationMenuItem className="text-2xl">
            lorran.<b>dev</b>
          </NavigationMenuItem>

          <div></div>
          <div className="hidden md:flex">
            <NavigationMenuItem>
              <Link
                className="flex items-center h-20 gap-2 px-20 border-b-8 border-l border-r border-textBase bg-primary"
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
