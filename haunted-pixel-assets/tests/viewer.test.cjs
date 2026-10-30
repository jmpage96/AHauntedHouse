// Unit tests for the offline viewer's pure movement and event logic; no browser needed.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

function setup() {
  const listeners={}, windowListeners={}, docListeners={}, calls=[];
  const ctx={clearRect(){},fillRect(){},drawImage(...args){calls.push(args);}};
  const game={style:{},getContext:()=>ctx,focus(){},addEventListener:(k,v)=>listeners[k]=v};
  const elements={game,status:{},reset:{},scale:{}};
  const sandbox={document:{getElementById:id=>elements[id],addEventListener:(k,v)=>docListeners[k]=v},
    window:{addEventListener:(k,v)=>windowListeners[k]=v},
    Image:class {decode(){return Promise.resolve();}}, requestAnimationFrame(){}};
  vm.createContext(sandbox);
  const html=fs.readFileSync(path.join(__dirname,'..','viewer.html'),'utf8');
  vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],sandbox);
  const run=code=>vm.runInContext(code,sandbox);
  const press=(key,up=false)=>{let prevented=false;(up?listeners.keyup:listeners.keydown)({key,preventDefault(){prevented=true;}});return prevented;};
  return {run,press,listeners,windowListeners,elements,ctx,calls};
}

test('arrow/WASD movement, directional animation, release to idle',()=>{
  const t=setup();
  for(const [key,direction,axis,sign] of [['ArrowRight','east','x',1],['a','west','x',-1],['w','north','y',-1],['ArrowDown','south','y',1]]) {
    t.run('player.x=192;player.y=192;');
    assert(t.press(key));t.run('update(.12);draw();');
    assert.equal(t.run('player.direction'),direction);
    assert.equal(t.run('player.walking'),true);
    assert.equal(Math.sign(t.run(`player.${axis}`)-192),sign);
    assert.equal(t.calls.at(-1)[1],64); // walk_1 atlas column after 120ms
    t.press(key,true);t.run('update(.01);draw();');
    assert.equal(t.run('player.walking'),false);assert.equal(t.calls.at(-1)[1],0);
  }
  assert.equal(t.ctx.imageSmoothingEnabled,false);
});

test('normalized diagonals, room bounds, furniture collision and wall idle',()=>{
  const t=setup();t.press('d');t.press('s');t.run('update(1);');
  assert(Math.abs(t.run('Math.hypot(player.x-192,player.y-192)')-64)<1e-8);
  assert.equal(t.run('blocked(20,192)'),true);
  assert.equal(t.run('blocked(192,270)'),true);
  assert.equal(t.run('blocked(60,140)'),true);
  assert.equal(t.run('blocked(300,140)'),true);
  assert.equal(t.run('blocked(192,192)'),false);
  t.run('release();player.x=361;player.y=192;');t.press('d');t.run('update(.05);');
  assert.equal(t.run('player.x'),361);assert.equal(t.run('player.walking'),false);
});

test('opposite keys cancel, focus loss stops motion, reset restores spawn',()=>{
  const t=setup();t.press('a');t.press('d');t.run('update(.1)');
  assert.equal(t.run('player.x'),192);assert.equal(t.run('player.walking'),false);
  t.windowListeners.blur();assert.equal(t.run('keys.size'),0);
  t.press('W');t.run('update(.1)');assert.equal(t.run('player.direction'),'north');
  t.listeners.blur();assert.equal(t.run('player.walking'),false);
  t.elements.reset.onclick();assert.equal(t.run('player.y'),192);
  assert.equal(t.run('player.direction'),'south');
});
