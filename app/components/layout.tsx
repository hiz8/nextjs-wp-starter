import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';

type Props = {
  preview: any;
  children: any;
};
export default function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
