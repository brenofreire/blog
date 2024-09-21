import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProfile } from "./avatar";

export function Bio() {
  return (
    <div className="max-w-viewport mx-auto px-20">
      <div className="max-w-inside">
        <div className="flex gap-10 h-40">
          <AvatarProfile />

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
