import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Bio() {
  return (
    <div className="max-w-viewport mx-auto px-20">
      <div className="max-w-inside">
        <div className="flex gap-10 h-40">
          <div className="rounded-b-full bg-primary border-b border-l border-r flex justify-center items-end p-2 border border-textBase border-t-0">
            <div className="border-textBase p-2 border rounded-full bg-card">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src="/assets/eu.jpg"
                  alt="Lorran's picture with a cowboy hat doing a hang lose"
                />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="description content-evenly">
            <div>
              <b>breno lorran</b>
            </div>
            <div>software engineer & musician & video maker</div>
          </div>
        </div>
      </div>
    </div>
  );
}
