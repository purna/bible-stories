(() => {
  function crc32(bytes){let crc=0xffffffff;for(const byte of bytes){crc^=byte;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0)}return(crc^0xffffffff)>>>0}
  function u16(n){return Uint8Array.of(n&255,n>>>8&255)}
  function u32(n){return Uint8Array.of(n&255,n>>>8&255,n>>>16&255,n>>>24&255)}
  function join(parts){const out=new Uint8Array(parts.reduce((sum,p)=>sum+p.length,0));let at=0;for(const part of parts){out.set(part,at);at+=part.length}return out}
  function zip(files){const enc=new TextEncoder(),locals=[],central=[];let offset=0;for(const file of files){const name=enc.encode(file.name),data=enc.encode(file.text),crc=crc32(data);const local=join([u32(0x04034b50),u16(20),u16(0x0800),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),name,data]);locals.push(local);central.push(join([u32(0x02014b50),u16(20),u16(20),u16(0x0800),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),name]));offset+=local.length}const body=join(locals),directory=join(central);return new Blob([body,directory,join([u32(0x06054b50),u16(0),u16(0),u16(files.length),u16(files.length),u32(directory.length),u32(body.length),u16(0)])],{type:'application/zip'})}
  window.TextureForgeZip={download(files,name){const url=URL.createObjectURL(zip(files)),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}};
})();
