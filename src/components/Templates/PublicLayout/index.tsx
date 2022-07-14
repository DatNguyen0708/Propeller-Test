import { Header } from "@Components/Organisms";
import { LayoutProps } from "next/dist/lib/app-layout";
import { useAppSelector } from "@Redux/hooks";
import { pokemonSelector } from "@States/pokemon";
import { Loading } from "@Components/Common";

const PublicLayout = ({ children }: LayoutProps) => {
  const { isLoading: pokemonIsLoading } = useAppSelector(pokemonSelector);
  return (
    <>
      {pokemonIsLoading && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-100 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <Header />
      {children}
    </>
  );
};
PublicLayout.displayName = "PublicLayout";

export default PublicLayout;
