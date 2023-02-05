import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
