import MainContent from "../components/MainContent";
import NavMenu from "../components/NavMenu";

export default function Home() {
  return (
    <div className="text-gray-600 grid md:grid-cols-4">
      <NavMenu />
      <MainContent />
    </div>
  );
}
