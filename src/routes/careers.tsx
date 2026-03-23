import CareersPage from '#/pages/careers';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/careers')({
  component: RouteComponent,
});

function RouteComponent() {
  return <CareersPage />;
}
