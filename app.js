const source={soft:'https://www.orthoinfo.org/diseases--conditions/sprains-strains-and-other-soft-tissue-injuries',knee:'https://www.orthoinfo.org/diseases--conditions/patellofemoral-pain-syndrome/',run:'https://www.nhs.uk/live-well/exercise/knee-pain-and-other-running-injuries/',elbow:'https://www.nhs.uk/conditions/tennis-elbow/',shoulder:'https://www.nhs.uk/symptoms/shoulder-pain/',sprain:'https://www.nhs.uk/conditions/sprains-and-strains/',shin:'https://www.orthoinfo.org/diseases--conditions/shin-splints'};
// Coordinates are percentages of the source silhouette, with patient sides implicit.
const regions=[
 {id:'shoulder',name:'肩部',en:'SHOULDER',x:75,y:20,items:[['肩袖相关疼痛','Rotator cuff-related pain','肩部前外侧，有时延伸到上臂。','抬手、上举或伸手取物时疼痛，可能伴活动受限。','重复过头动作或负荷增加可能相关；具体原因需结合查体判断。',['游泳','投掷','肩上推举'],'shoulder',75,21],['肩部扭伤 / 拉伤','Shoulder sprain or strain','肩关节周围的软组织。','活动时疼痛，可有局部压痛、肿胀或无力。突然剧痛、明显变形或无法抬臂应尽快就医。','跌倒、碰撞或用力牵拉可能损伤肌肉、肌腱或韧带。',['跌倒','碰撞'],'soft',72,20]]},
 {id:'elbow',name:'肘部',en:'ELBOW',x:84,y:36,items:[['网球肘','Lateral epicondylitis','肘关节外侧骨性突起附近，可延伸到前臂。','握紧、提物或转动手腕时，肘外侧疼痛。','反复使用前臂、手腕或握持动作，可能使肌腱承受过多负荷。',['球拍运动','反复握持'],'elbow',85,36]]},
 {id:'wrist',name:'手腕',en:'WRIST',x:89,y:47,items:[['腕部扭伤','Wrist sprain','腕关节周围，具体压痛点因受伤组织不同而异。','疼痛、肿胀，握物或活动手腕时不适；骨折也可有相似表现。','摔倒时手掌撑地，或腕关节突然过度弯折。',['手撑地','关节扭转'],'sprain',89,47]]},
 {id:'back',name:'腰背',en:'LOWER BACK',x:50,y:40,back:true,items:[['腰背肌拉伤','Back muscle strain','腰背两侧的肌肉区域。','转身或弯腰时局部疼痛、紧绷或肌肉痉挛。','突然用力、搬抬或扭转可使肌肉受到过度牵拉。出现大小便异常、会阴麻木或进行性腿无力，应立即急诊。',['搬抬','突然扭转'],'soft',53,40]]},
 {id:'hip',name:'髋 / 腹股沟',en:'HIP & GROIN',x:61,y:50,items:[['腹股沟肌肉拉伤','Groin strain','大腿根部内侧、腹股沟附近。','局部压痛，收拢腿部、跨步或改变方向时可能疼痛。','冲刺、踢球或突然变向造成肌肉过度牵拉。',['足球','急停变向'],'soft',57,52]]},
 {id:'thigh',name:'大腿',en:'THIGH',x:35,y:60,items:[['大腿肌肉拉伤','Thigh muscle strain','正面主要为股四头肌，背面主要为腘绳肌区域。','可能突然疼痛，伴局部无力、肿胀或淤青。','快速跑动、跳跃或过度牵拉可能使肌肉受伤。',['冲刺','跳跃'],'soft',35,60]]},
 {id:'knee',name:'膝部',en:'KNEE',x:64,y:71,items:[['髌股疼痛','Patellofemoral pain','膝盖正前方，髌骨（膝盖骨）周围或后方。','常为隐隐作痛或酸痛；上下楼梯、下蹲，或屈膝久坐后可能加重。','跑跳等反复负荷、训练量增加，以及髌骨运动轨迹等因素可能相关。',['跑步','上下楼梯','深蹲'],'knee',64,71],['髌腱相关疼痛','Patellar tendon pain','膝盖骨下缘至胫骨上端之间的肌腱区域。','膝前下方局部疼痛，跑跳或伸膝负重时可能明显。','反复跳跃与跑动可能增加肌腱负荷。',['篮球','排球','跑跳'],'run',64,74],['膝关节扭伤','Knee sprain','膝关节内外侧或周围；位置因受伤组织而异。','扭转后疼痛、肿胀，可能感觉不稳。卡住或无法负重时应就医。','急停变向、落地扭转或碰撞可能损伤韧带；不能仅凭位置判断是哪条韧带。',['变向','落地','碰撞'],'soft',59,71]]},
 {id:'calf',name:'小腿',en:'LOWER LEG',x:34,y:81,items:[['胫骨内侧应力综合征','Shin splints','小腿胫骨的内侧缘，通常呈一段区域疼痛。','运动中或运动后疼痛，触碰内侧缘可能不适。单点明显骨痛或休息时疼痛应就医排查。','跑步等重复冲击、训练变化或过量负荷可能相关。',['跑步','训练量增加'],'shin',39,81],['小腿肌肉拉伤','Calf muscle strain','小腿后侧的肌肉区域。','运动时突然疼痛，可能像被击中，伴局部压痛或无力。','冲刺、突然蹬地或肌肉被过度牵拉。单侧小腿无明显受伤却红肿发热，应及时就医。',['冲刺','蹬地'],'run',35,80]]},
 {id:'ankle',name:'脚踝',en:'ANKLE',x:65,y:93,items:[['踝关节扭伤','Ankle sprain','踝关节周围，常见于外踝附近。','崴脚后疼痛、肿胀或淤青，走路负重时不适。','脚踝突然翻转，使韧带受到牵拉。骨折可能表现相似，无法负重时应尽快就医。',['落地不稳','不平路面'],'sprain',69,93],['跟腱相关疼痛','Achilles tendon pain','脚跟后上方，连接小腿与跟骨的跟腱。','跟腱区域疼痛或僵硬，运动时可能加重。突然有断裂感或无法蹬地需尽快就医。','跑跳产生的重复负荷或训练强度变化可能相关。',['跑跳','训练变化'],'run',65,91]]},
 {id:'foot',name:'足部',en:'FOOT',x:35,y:97,items:[['足底筋膜相关疼痛','Plantar heel pain','足跟底部，可能延伸至足弓。','休息后迈出前几步时可能明显，长时间站立或行走也可能不适。','跑步等活动使足底组织承受反复负荷，可能与足跟痛有关。',['跑步','久站'],'run',35,98]]}
];
Object.assign(source, expandedSources);
for (const region of regions) {
 if (region.id === 'thigh') region.items = []; // 以具体肌群条目替代泛称，避免重复。
 region.items.push(...(expandedConditions[region.id] || []));
 if (region.id === 'calf') region.items = region.items.filter(item => item[0] !== '小腿肌肉拉伤');
}
function sourceLabel(url) {
 if (url.includes('nhs.uk')) return 'NHS';
 if (url.includes('mayoclinic.org')) return 'Mayo Clinic';
 if (url.includes('footcaremd.org')) return 'AOFAS · FootCareMD';
 if (url.includes('hss.edu')) return 'HSS · 专科医院';
 if (url.includes('assh.') || url.includes('assh.org')) return 'ASSH · 美国手外科学会';
 if (url.includes('pmc.ncbi.nlm.nih.gov')) return '运动腕损伤医学综述 · PMC';
 return 'AAOS · OrthoInfo';
}
let selected='knee',condition=0,view='front',query='';
const $=id=>document.getElementById(id);
function setRegion(id,scroll=false){if(!regions.some(r=>r.id===id))throw new Error('未知部位');selected=id;condition=0;query='';if(id==='back')view='back';render();if(scroll&&innerWidth<761)$('region-title').scrollIntoView({behavior:'smooth',block:'start'});}
function render(){
 const r=regions.find(x=>x.id===selected);
 const terms=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 const matches=r.items.map((item,index)=>({item,index})).filter(({item})=>terms.every(term=>[item[0],item[1],item[2],item[3],item[4],...item[5],item[10]||''].join(' ').toLocaleLowerCase().includes(term)));
 if(!matches.some(m=>m.index===condition))condition=matches[0]?.index??-1;
 const d=r.items[condition];
 $('condition-search').value=query;
 $('search-status').textContent=terms.length?`找到 ${matches.length} / ${r.items.length} 个条目；仅按文字查找，不代表诊断。`:`本部位共 ${r.items.length} 个条目，可按运动、位置或伤病名称查找。`;
 document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
 $('orientation').textContent=(view==='front'?'正面':'背面')+' · 定位示意';
 $('regions').innerHTML=regions.map(x=>`<button data-region="${x.id}" aria-pressed="${x.id===selected}">${x.name}</button>`).join('');
 $('hotspots').innerHTML=regions.filter(x=>!x.back||view==='back').map(x=>`<button class="hotspot ${x.x<50?'left-label':''}" style="left:${x.x}%;top:${x.y}%" aria-label="选择${x.name}" aria-pressed="${x.id===selected}" data-region="${x.id}"><span>${x.name}</span></button>`).join('');
 $('region-title').textContent=r.name; $('region-subtitle').textContent='按疼痛位置与表现对照；条目不代表诊断或发生概率。';$('region-count').textContent=r.items.length+' 种相关情况';
 $('conditions').innerHTML=matches.map(({item:x,index:i})=>`<button data-condition="${i}" aria-pressed="${condition===i}">${x[0]}${x[10]?`<small>${x[10]}</small>`:''}</button>`).join('');
 if(!d){$('detail').innerHTML='<div class="empty-result"><h3>未找到相关条目</h3><p>可尝试更简短的关键词，或清除查找查看全部。无匹配结果不能排除损伤。</p></div>';return;}
 // Use a condition-specific anatomical plate rather than magnifying the full-body silhouette.
 $('detail').innerHTML=`<div class="detail-top"><div><h3>${d[0]}</h3><div class="english">${d[1]}</div></div><span class="kind">科普条目 · 非诊断</span></div>${renderAnatomy(d)}<div class="description-row"><span class="row-icon">≈</span><div><h4>可能有怎样的感觉</h4><p>${d[3]}</p></div></div><div class="description-row"><span class="row-icon">↗</span><div><h4>常见诱因</h4><p>${d[4]}</p><div class="tags">${d[5].map(t=>`<span>${t}</span>`).join('')}</div></div></div>${d[9]?`<aside class="condition-care"><strong>就医提示</strong><p>${d[9]}</p></aside>`:''}<a class="source" href="${source[d[6]]}" target="_blank" rel="noopener">参考资料：${sourceLabel(source[d[6]])} ↗</a>${renderRehab(d)}`;
}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.region)setRegion(b.dataset.region,true);if(b.dataset.condition!==undefined){condition=Number(b.dataset.condition);render();}if(b.dataset.view){view=b.dataset.view;if(view==='front'&&selected==='back'){selected='knee';condition=0;query='';}render();}});
$('conditions').insertAdjacentHTML('beforebegin','<div class="condition-search"><label for="condition-search">在当前部位查找</label><div><input id="condition-search" type="search" placeholder="如：跑步、投掷、外侧、韧带" autocomplete="off" aria-describedby="search-status"><button type="button" id="clear-search">清除</button></div><p id="search-status" role="status"></p></div>');
$('condition-search').addEventListener('input',e=>{query=e.target.value;render();});
$('clear-search').addEventListener('click',()=>{query='';render();$('condition-search').focus();});
$('detail').addEventListener('click',e=>{if(e.target.closest('[data-open-anatomy]'))openAnatomy(regions.find(r=>r.id===selected).items[condition]);});
render();
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'select_body_region',title:'选择疼痛部位',description:'切换页面显示的身体部位和常见损伤科普，不提供诊断。',inputSchema:{type:'object',properties:{region:{type:'string',enum:regions.map(r=>r.id)}},required:['region'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input.region!=='string'||Object.keys(input).some(k=>k!=='region'))throw new Error('需要有效的 region 参数');setRegion(input.region);return{region:selected,conditions:regions.find(r=>r.id===selected).items.map(d=>d[0]),notice:'仅供科普，不能确诊'};}})).catch(()=>{});}catch{}}
