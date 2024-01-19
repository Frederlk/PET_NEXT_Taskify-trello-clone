import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs';
import type { ReactNode } from 'react';

import { ModalProvider } from '@/components/providers/modal-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
