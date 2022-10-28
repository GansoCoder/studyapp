export default function Navbar() {
  return (
    <>
      <nav className="py-2 flex justify-between mx-32 font-SSP ">
        <div className="text-2xl ">StudyApp</div>
        <div className="">
          <a className="mx-4 text-l">Home</a>
          <a className="mx-4 text-l">Solutions</a>
          <a className="mx-4 text-l">About</a>
          <a className="mx-4 text-l">Contact</a>
        </div>
      </nav>
    </>
  );
}
