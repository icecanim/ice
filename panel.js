// PUBLIC: returns only active announcements. The JSONBin key never leaves the server.
const J={'content-type':'application/json','cache-control':'public, max-age=15','netlify-cdn-cache-control':'public, max-age=30, stale-while-revalidate=120'};
export default async()=>{
  try{
    const r=await fetch(`https://api.jsonbin.io/v3/b/${process.env.JSONBIN_BIN_ID}/latest`,{headers:{'X-Master-Key':process.env.JSONBIN_KEY,'X-Bin-Meta':'false'}});
    const d=await r.json(),now=Date.now();
    const a=(d.items||[]).filter(x=>x.on&&x.text&&(!x.end||Date.parse(x.end)>now)).map(({id,type,text,end})=>({id,type,text,end}));
    return new Response(JSON.stringify(a),{headers:J});
  }catch{return new Response('[]',{headers:{'content-type':'application/json','cache-control':'no-store'}})}
};
