import GetStartedPage from '#/pages/get-started';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/getting-started')({
  component: RouteComponent,
});

function RouteComponent() {
  return <GetStartedPage />;
}
