import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import Footer from '../components/Footer';
import Header from '../components/Header';

import TanStackQueryProvider from '../integrations/tanstack-query/root-provider';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';

import appCss from '../styles.css?url';

import type { QueryClient } from '@tanstack/react-query';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      },
      { title: 'Hope Springs | Behavioral Health' },
      { property: 'og:title', content: 'Hope Springs' },
      {
        property: 'og:description',
        content:
          'We provide trauma-informed outpatient mental health, psychiatric rehabilitation, and substance use treatment services for adolescents and adults.',
      },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dl56ef7sx/image/upload/v1774318344/Screenshot_2026-03-24_at_03.11.57_vn61kq.png',
      },
      { property: 'og:url', content: 'https://hopesprings.com' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:title', content: 'Hope Springs' },
      {
        name: 'twitter:description',
        content:
          'We provide trauma-informed outpatient mental health, psychiatric rehabilitation, and substance use treatment services for adolescents and adults.',
      },
      {
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/dl56ef7sx/image/upload/v1774318344/Screenshot_2026-03-24_at_03.11.57_vn61kq.png',
      },
      { name: 'twitter:url', content: 'https://hopesprings.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background font-sans wrap-anywhere antialiased">
        <TanStackQueryProvider>
          <Header />
          <main className="pt-18.25 md:pt-22">{children}</main>
          <Footer />
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </TanStackQueryProvider>
        <Scripts />
      </body>
    </html>
  );
}
