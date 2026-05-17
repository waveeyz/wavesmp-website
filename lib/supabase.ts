type Chain = {
  select: (...args: any[]) => Chain;
  eq: (...args: any[]) => Chain;
  order: (...args: any[]) => Promise<{ data: any[]; error: null }>;
  insert: (...args: any[]) => Promise<{ data: any[]; error: null }>;
};

const chain: Chain = {
  select: (..._args: any[]) => chain,
  eq: (..._args: any[]) => chain,
  order: async (..._args: any[]) => ({ data: [], error: null }),
  insert: async (..._args: any[]) => ({ data: [], error: null })
};

export const supabaseAdmin = {
  from: (..._args: any[]) => chain
};
