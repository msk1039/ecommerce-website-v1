import Logo from "./Logo";
import Nav from "./nav/Nav";

import "@/app/globals.css";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex h-16 justify-between gap-4 md:gap-8">
          <div className="min-w-[130px] flex justify-center items-center">
            <Logo />
          </div>

          <Nav
          // channel={channel}
          />
        </div>
      </div>
    </header>
  );
}
