/* Stable semantic SVG names: translating button text never changes its icon. */
(()=>{
 const paths={
  give:'<path d="M8 34h10l6-5h12l4 4-17 11H8z" fill="#edbc92"/><path d="M8 32v13M24 24V6m-7 7 7-7 7 7"/>',
  take:'<path d="M8 34h10l6-5h12l4 4-17 11H8z" fill="#edbc92"/><path d="M8 32v13M24 5v19m-7-7 7 7 7-7"/>',
  check:'<circle cx="24" cy="24" r="19" fill="#8bd4ae"/><path d="m13 24 8 8 15-17"/>',
  survey:'<path d="m7 17 4-10h9l3 16m18-6L37 7h-9l-3 16M17 14h14" fill="#8bd4ae"/><circle cx="13" cy="30" r="10" fill="#b9e6ef"/><circle cx="35" cy="30" r="10" fill="#b9e6ef"/><path d="M23 29h2"/>',
  inspect:'<circle cx="20" cy="19" r="13" fill="#fffaf0"/><path d="m30 29 13 13m-30-24 5 5 9-10"/>',
  offer:'<path d="M5 33h13l7-6h15l4 5-20 12H5z" fill="#edbc92"/><circle cx="25" cy="13" r="10" fill="#8bd4ae"/><path d="m20 13 4 4 7-8M5 31v15"/>',
  search:'<circle cx="20" cy="19" r="13" fill="#fffaf0"/><path d="m30 29 13 13M14 19h12M20 13v12"/>',
  star:'<path d="m24 3 6 14 15 2-11 11 3 15-13-7-13 7 3-15L3 19l15-2z" fill="#ffd84d"/>',
  water:'<path d="M24 4C19 14 9 23 9 31a15 15 0 0030 0C39 23 29 14 24 4z" fill="#67cde6"/><path d="M17 30q0 7 7 8"/>',
  dough:'<path d="M6 25h36q-3 18-18 18T6 25z" fill="#67d7e8"/><path d="M12 25c-7-13 15-16 19-9 13-5 18 6 8 9" fill="#f8df9b"/><path d="m17 6 9 15"/>',
  bread:'<path d="M6 27C-2 8 49 6 42 27v14H6z" fill="#eeb86b"/><path d="m15 16 3 10m7-12 3 10m7-9 3 9"/>',
  serve:'<path d="M5 34h38M8 30a16 16 0 0132 0z" fill="#8bd4ae"/><path d="M24 14v-4m-4 0h8M11 40h26"/>',
  person:'<circle cx="24" cy="13" r="9" fill="#edbc92"/><path d="M8 43v-5a16 16 0 0132 0v5z" fill="#8bd4ae"/>',
  escort:'<circle cx="13" cy="12" r="6" fill="#edbc92"/><circle cx="32" cy="15" r="5" fill="#edbc92"/><path d="M6 39V28a7 7 0 0114 0v11m6 0v-9a6 6 0 0112 0v9M20 29l6 1"/><path d="M24 7h20m-6-5 6 5-6 5"/>',
  poles:'<path d="M12 44 18 4h6l-6 40zM30 44 28 4h6l2 40z" fill="#c68b57"/>',
  pegs:'<path d="m12 9 12 7-7 25-7 5 1-10z" fill="#c68b57"/><path d="m29 9 13 8-4 7-13-8zM33 21l-8 16" fill="#aabdc9"/>',
  canopy:'<path d="m24 6 21 31H3z" fill="#eeb86b"/><path d="m24 6 8 31M10 37v8m28-8v8"/>',
  wood:'<path d="m7 21 26-13 10 15-26 14z" fill="#c68b57"/><ellipse cx="12" cy="29" rx="7" ry="9" fill="#f8df9b"/><path d="m25 18 8-4M11 27v5"/>',
  mountain:'<path d="m3 43 18-35 12 20 6-8 7 23z" fill="#aabdc9"/><path d="m15 20 6-12 8 13-8-4z" fill="#fffaf0"/>',
  ram:'<path d="M10 25c-6-9 5-17 9-6m19 6c6-9-5-17-9-6" fill="#c68b57"/><path d="M14 19q10-10 20 0l-2 17-8 8-8-8z" fill="#fffaf0"/><path d="M19 27h1m8 0h1m-8 9h6"/>',
  next:'<path d="M6 24h34m-12-12 12 12-12 12"/>',
  skip:'<path d="m7 9 24 15L7 39z" fill="#8bd4ae"/><path d="M39 9v30"/>',
  retry:'<path d="M9 20a16 16 0 112 17M9 8v12h12"/>',
  listen:'<path d="M15 18c0-18 27-18 24 3-1 9-10 8-10 17-1 11-17 8-15-2M22 18c0-9 12-8 11 0-1 5-8 4-8 11M5 14v17"/>',
  choice:'<path d="M5 6h38v27H24L13 43V33H5z" fill="#bfe9de"/><path d="m14 19 6 6 13-12"/>',
  order:'<path d="M20 10h24M20 24h24M20 38h24M5 9h5v9M5 29q8-10 8-2c0 4-8 8-8 12h9"/>',
  river:'<path d="M4 8q10-8 20 0t20 0M4 40q10-8 20 0t20 0M8 23h32l-7 9H15z" fill="#67cde6"/>',
  music:'<path d="M19 34V10l22-5v24M19 17l22-5"/><ellipse cx="12" cy="36" rx="7" ry="5" fill="#8bd4ae"/><ellipse cx="34" cy="31" rx="7" ry="5" fill="#8bd4ae"/>',
  up:'<path d="M24 42V6m-13 13L24 6l13 13"/>',down:'<path d="M24 6v36M11 29l13 13 13-13"/>',left:'<path d="M42 24H6m13-13L6 24l13 13"/>',right:'<path d="M6 24h36M29 11l13 13-13 13"/>'
 };
 function svg(name){
  const [base,modifier]=name.split(':');const shape=paths[base]||paths.choice;
  const badge=modifier?`<circle cx="37" cy="37" r="10" fill="#fffaf0"/><path d="M32 37h10${modifier==='add'?'m-5-5v10':''}"/>`:'';
  return `<svg class="game-action-icon" viewBox="0 0 50 50" fill="none" stroke="#17131f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shape}${badge}</svg>`;
 }
 function decorate(button,name){
  if(button.querySelector('svg:not(.game-action-icon)'))return;
  if(button.querySelector('.game-action-icon'))return;
  const icon=document.createElement('span');icon.className='game-action-picture';icon.innerHTML=svg(name);
  const label=document.createElement('span');label.className='game-action-label';while(button.firstChild)label.appendChild(button.firstChild);
  button.append(icon,label);button.classList.add('game-button-with-icon');button.dataset.gameIcon=name;
 }
 window.StoryGameIcons={svg,decorate};
})();
