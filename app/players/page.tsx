
import {supabaseAdmin} from '../../lib/supabase';

export default async function Players() {
  const {data=[]} = await supabaseAdmin.from('applications').select('*').eq('status','accepted').order('created_at');
  return (
    <main style={{padding:'40px',background:'#02142b',minHeight:'100vh',color:'white'}}>
      <h1>Players</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </main>
  )
}
