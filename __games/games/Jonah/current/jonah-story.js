/* Jonah content and game plugins for the shared JSON story player. */
window.STORY_PLAYER_CONFIG = {
 id:'jonah',
 characters:{jonah:'jonah',sailors:'jonah_sailor',king:'nineveh_king',god:null,narrator:null},
 onActRender({act}){
  document.querySelector('.dune-container')?.style.setProperty('display',act.id==='mission'?'block':'none');
  document.querySelector('.firefly-container')?.style.setProperty('display',act.id==='reflection'?'block':'none');
 },
 onSceneMount(context){window.JonahWhaleScene?.mount(context);},
 onChapterEnd({actIndex,continueStory}){
  if(!window.JonahGame?.shouldLaunch(actIndex))return false;
  window.JonahGame.launch(actIndex,continueStory);return true;
 }
};
