import NotFound from '../not-found';

export const metadata = {
  title: '404 - Page Not Found | Enervox',
  description: 'The requested page could not be located in our renewable energy grid.'
};

export default function Custom404Page() {
  return <NotFound />;
}
