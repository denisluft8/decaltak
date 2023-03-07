import { LayoutContent } from "./LayoutStyles";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutContent>{children}</LayoutContent>
    </>
  );
};
