import FaqsPage from '#/pages/faqs';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/faqs')({
  component: RouteComponent,
});

function RouteComponent() {
  return <FaqsPage />;
}
