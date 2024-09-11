import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 py-20 xs:px-16 lg:px-32">
      <HomeBtn />
      {children}
    </main>
  );
}