export default function Header() {
  return (
    <>
      <header className="container flex flex-row items-center justify-between mx-auto mt-4">
        <div className="left">Instagram</div>
        <div className="center">Search Pannel</div>
        <div className="right space-x-5 flex">
          <div className="cursor-pointer">1</div>
          <div className="cursor-pointer">SignOut</div>
        </div>
      </header>
    </>
  );
}
