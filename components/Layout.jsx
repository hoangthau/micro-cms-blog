export default function Layout({ children }) {
  return (
    <div>
      <header style={{ height: 80, width: '100%', background: '#eee'}}>Header</header>
      <main style={{minHeight: '80vh'}}>{children}</main>
      <footer style={{ height: 180, width: '100%', background: '#eee'}}>Footer</footer>
    </div>
  );
}
