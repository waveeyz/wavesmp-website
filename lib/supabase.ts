
export const supabaseAdmin = {
  from: () => ({
    select: () => ({ eq: () => ({ order: () => ({ data: [] }) }) }),
    insert: async () => ({ error: null })
  })
};
