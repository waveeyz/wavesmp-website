import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();
  const { error } = await supabaseAdmin.from('applications').insert(body);
  return NextResponse.json({ success: !error });
}
