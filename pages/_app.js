import { Layout } from '@audiophile/components/Layout/Layout';
import { Spinner } from '@audiophile/components/Spinner/Spinner';
import { useRouterLoading } from '@audiophile/hooks/useRouterLoading';
import '@audiophile/styles/globals.css';

export default function App({ Component, pageProps }) {
  const loadingPage = useRouterLoading();

  return (
      <Layout>
        {loadingPage ? <Spinner/> : <Component {...pageProps} />}
      </Layout>

  );
}
