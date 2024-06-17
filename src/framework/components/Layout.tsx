import { ReactNode } from "react";
import { ModeToggle } from "./ToggleTheme";

interface Props {
  children: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <div className="w-full flex items-center justify-center">{children}</div>
    </main>
  );
};

export default Layout;
