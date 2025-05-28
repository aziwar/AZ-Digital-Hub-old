'use client';

interface ClientDynamicComponentsProps {
  showPerformanceMetrics?: boolean;
}

export default function ClientDynamicComponents({ 
  showPerformanceMetrics: _showPerformanceMetrics = false 
}: ClientDynamicComponentsProps) {
  // TODO: Implement performance metrics display when needed
  // The underscore prefix tells TypeScript this parameter is intentionally unused
  return null;
}