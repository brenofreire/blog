import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarProfile() {
  return (
    <div className="flex items-end justify-center p-2 border border-t-0 border-b border-l border-r rounded-b-full bg-primary border-textBase">
      <div className="p-2 border rounded-full border-textBase bg-card">
        <Avatar className="w-12 h-12 md:w-24 md:h-24">
          <AvatarImage
            src="/assets/eu.jpg"
            alt="Lorran's picture with a cowboy hat doing a hang lose"
          />
          <AvatarFallback className="w-12 h-12 md:w-24 md:h-24">
            L
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
