import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabase';

export async function POST(req: Request) {
  if (req.headers.get('x-admin-code') !== process.env.ADMIN_CODE) {
    return NextResponse.json({ error: 'Niet toegestaan' }, { status: 401 });
  }
  return NextResponse.json({ success: true });
}
