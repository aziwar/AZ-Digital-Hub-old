'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ClientDynamicComponents = dynamic(
  () => import('@/components/ui/ClientDynamicComponents'),
  { ssr: false }
);

export default function ClientComponents() {
  return (
    <Suspense fallback={null}>
      <ClientDynamicComponents 
        showPerformanceMetrics={process.env.NODE_ENV === 'development'} 
      />
    </Suspense>
  );
}
