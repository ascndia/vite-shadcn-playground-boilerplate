import { ReactNode } from "react";
import { ModeToggle } from "./ToggleTheme";

interface Props {
  children: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center max-h-screen h-screen">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <div className="w-full flex h-full items-center justify-center">
        <div className="flex overflow-auto gap-2  flex-wrap w-11/12 h-5/6 items-center border-2 rounded-xl border-dotted justify-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
