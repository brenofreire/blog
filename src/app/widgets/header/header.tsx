import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu className="max-w-viewport mx-auto h-20 border-b justify-start border-secondary px-20">
      <NavigationMenuList className="gap-80">
        <NavigationMenuItem className="text-2xl">
          lorran.<b>dev</b>
        </NavigationMenuItem>

        <div>
          <NavigationMenuItem>
            <NavigationMenuLink className="border-b-8 border-textBase bg-primary h-20 flex items-center px-20 border-r border-l">
              home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
