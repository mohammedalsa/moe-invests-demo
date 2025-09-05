import Link from 'next/link'
export default function Nav(){
  return (
    <div className="nav">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/dashboard" className="link" style={{fontWeight:800,fontSize:18}}>Moe Invests</Link>
        <div style={{display:'flex',gap:12}}>
          <Link href="/dashboard" className="link">Dashboard</Link>
          <Link href="/me" className="link">Min profil</Link>
        </div>
      </div>
    </div>
  )
}
