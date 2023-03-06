import { LayoutContent } from "./LayoutStyles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutContent>{children}</LayoutContent>
    </>
  );
};
