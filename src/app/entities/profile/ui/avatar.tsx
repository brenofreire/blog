import { AvatarImage, Avatar, AvatarFallback } from "@radix-ui/react-avatar";

export function AvatarProfile() {
  return (
    <div className="rounded-b-full bg-primary border-b border-l border-r flex justify-center items-end p-2 border border-textBase border-t-0">
      <div className="border-textBase p-2 border rounded-full bg-card">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src="/assets/eu.jpg"
            alt="Lorran's picture with a cowboy hat doing a hang lose"
          />
          <AvatarFallback className="w-24 h-24">L</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
