"use client";

import {Database} from "@/types_db"
import { createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import React, { FC, useState } from 'react'

interface SupabaseProvidersProps {
  children: React.ReactNode;
}

const SupabaseProviders: FC<SupabaseProvidersProps> = ({
    children
}) => {
  const [supbaseClient] = useState(() => 
    createClientComponentClient<Database>()
  );
  return(
      <SessionContextProvider supabaseClient={supbaseClient}>
          {children}
      </SessionContextProvider>
  )
}

export default SupabaseProviders