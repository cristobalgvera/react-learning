import MainContent from "../components/MainContent";
import NavMenu from "../components/NavMenu";

export default function Home() {
  return (
    <div className="text-gray-600">
      <NavMenu />
      <MainContent />
    </div>
  );
}
