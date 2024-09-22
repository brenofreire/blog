import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProfile } from "./avatar";

export function Bio() {
  return (
    <div className="px-6 mx-auto md:px-20 max-w-viewport">
      <div className="max-w-inside">
        <div className="flex h-24 gap-4 md:gap-10 md:h-40">
          <AvatarProfile />

          <div className="description content-evenly">
            <div>
              <b>breno lorran</b>
            </div>
            <h1>software engineer & musician & video maker</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
