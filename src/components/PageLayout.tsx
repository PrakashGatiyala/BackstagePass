import Sidebar from "./Sidebar";
import PostSection from "./PostSection";

export default function PageLayout() {
  return (
    <div
      className="flex items-stretch"
      style={{
        maxWidth: "1440px",
        minHeight: "calc(100vh - 116px)",
        margin: "0 auto",
        opacity: 1,
      }}
    >
      <Sidebar />
      <div className="flex-1 flex justify-center">
        <PostSection />
      </div>
    </div>
  );
}
