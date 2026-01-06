export default function Header() {
  return (
    <header className="navbar bg-primary text-primary-content px-4">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">ACME</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
