'use client';
import { RecoilRoot } from "recoil";
import GlobalStyle from "@/components/common/GlobalStyle";
import {QueryClient,QueryClientProvider, Hydrate} from "react-query";
import { PropsWithChildren, useState } from "react";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        {children}
      </QueryClientProvider>
    </RecoilRoot>
  );
}
