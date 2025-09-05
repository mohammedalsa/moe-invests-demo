
import {useRouter} from 'next/router'
export default function Stock(){ const {query:{symbol}}=useRouter(); return (<div style={{padding:20,fontFamily:'system-ui,Arial'}}>
  <h1>{symbol}</h1><p>DEMO-vy – backend kopplas senare.</p></div>) }
