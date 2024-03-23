import { Layout } from "@/components/layout";
import Image from "next/image";
import { LoggedInButton } from "../auth/LoggedInButton";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-1">
      <Layout className="flex items-center gap-4">
        <div className="font-bold text-lg flex-1">
          Simple Template Next.js
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};