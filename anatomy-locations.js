// 条目级定位；坐标属于具体图稿，不能按身体部位自动套用。
// deep 是关注组织的解剖位置，不把深层结构误称为可精确触及的痛点。
const anatomyLocations = {};
function locate(names, asset, points, label, kind='area', detail='') {
 for (const name of names) anatomyLocations[name]={asset,points,label,kind,detail};
}
locate(['肩袖相关疼痛'],'rotator',[[300,230,90,90]],'肩前外侧及上臂近端');
locate(['肩袖撕裂'],'rotator-injury',[[540,350,70,50]],'肩袖肌腱附着区','deep');
locate(['肩部扭伤 / 拉伤'],'rotator',[[300,235,140,125]],'肩周软组织，范围随受伤组织而异');
locate(['肱二头肌长头腱炎','肩部肱二头肌腱撕裂'],'shoulder',[],'肩前侧长头肌腱','reference','此剖面未完整绘出长头肌腱，不能用肩袖或关节盂唇上的标记代替。');
locate(['肩锁关节损伤'],'shoulder',[[470,250,36,30]],'肩顶部的肩锁关节','deep');
locate(['锁骨骨折'],'shoulder',[[615,255,110,40]],'锁骨沿线；不是固定骨折点','deep');
locate(['肩关节脱位','运动相关肩关节不稳'],'shoulder',[[470,405,90,95]],'肱骨头与肩胛盂的关节区域','deep');
locate(['肩关节盂唇损伤（SLAP）'],'shoulder',[[501,338,35,28]],'肩胛盂上缘盂唇','deep');
locate(['胸大肌腱撕裂'],'shoulder',[],'前胸与腋前皱襞、上臂交界','reference','此关节剖面没有绘出胸大肌腱；其位置不等同于图中的盂唇。');
locate(['网球肘'],'elbow',[[300,315,45,40]],'肘外侧伸肌腱起点');
locate(['高尔夫球肘'],'medial-elbow',[[706,586,45,40]],'肘内侧屈肌腱起点');
locate(['鹰嘴滑囊炎'],'elbow-bursa',[[395,627,55,45]],'肘尖后方皮下滑囊');
locate(['肘管综合征'],'elbow-nerves',[[335,520,34,60]],'肘内后侧尺神经','deep');
locate(['肘尺侧副韧带损伤'],'elbow-nerves',[[457,535,40,42]],'尺侧副韧带','deep');
locate(['肘部肱二头肌腱撕裂'],'elbow',[],'肘前窝及前臂近端','reference','当前外侧伸肌图未绘出远端肱二头肌腱，不在伸肌起点标注该损伤。');
locate(['肱三头肌腱撕裂'],'elbow-bursa',[[337,499,48,48]],'鹰嘴上方的伸肘肌腱区','deep');
locate(['投掷相关肘后撞击'],'elbow-bursa',[[365,567,42,36]],'肘后关节邻近区域','deep');
locate(['桡骨头骨折'],'elbow-nerves',[[512,520,42,35]],'桡骨近端的桡骨头','deep');
locate(['肘关节脱位'],'elbow-nerves',[[440,535,100,80]],'肘关节对位区域','deep');
locate(['腕部扭伤'],'hand-bones',[[478,671,100,65]],'腕关节周围，痛点取决于受伤组织');
locate(['舟骨骨折'],'hand-bones',[[509,704,35,23]],'拇指侧舟骨','deep');
locate(['桡骨远端骨折'],'hand-bones',[[488,767,65,30]],'桡骨远端','deep');
locate(['钩骨钩骨折'],'hand-bones',[[420,641,30,28]],'掌根小指侧的钩骨区','deep');
locate(['舟月韧带损伤'],'hand-bones',[[480,702,25,20]],'舟骨与月骨之间；腕背痛可投射于此','deep');
locate(['三角纤维软骨复合体损伤（TFCC）'],'hand-bones',[[404,737,38,23]],'小指侧腕关节深部邻近区域','deep','骨骼图未绘出软骨盘，仅标出尺侧腕关节区域。');
locate(['桡骨茎突腱鞘炎'],'hand-bones',[[551,747,27,40]],'拇指侧桡骨茎突邻近区域','area','骨骼图未绘出肌腱鞘，标记为相邻表面位置。');
locate(['尺侧腕伸肌腱损伤'],'hand-bones',[],'腕背小指侧、尺骨远端后方','reference','此图为掌侧，腕背尺侧肌腱未显示，不能在掌侧骨骼上冒充肌腱定位。');
locate(['腕管综合征'],'hand-bones',[[478,673,66,44]],'掌侧腕管邻近区域','deep','图中未绘出正中神经；手指麻木范围可能超出标记。');
locate(['腰背肌拉伤'],'back-muscles',[[570,680,78,110]],'腰背脊柱旁肌群；两侧均可能');
locate(['腰背软组织挫伤'],'back-muscles',[],'实际受到撞击的位置','reference','挫伤没有固定痛点，应按受撞击位置对照，不能自动指定某块肌肉。');
locate(['腰椎间盘突出相关神经症状'],'disc',[[382,424,50,35]],'椎间盘与神经根相邻区','deep','神经症状可向臀腿放射，图中标记不是完整疼痛范围。');
locate(['腰椎峡部应力损伤'],'spine',[],'腰椎后方椎弓峡部','reference','本图未清楚展开峡部，不能把椎体或椎间盘标成峡部。');
locate(['胸腰椎骨折'],'spine',[[403,442,72,220]],'椎体等骨性结构；具体节段不固定','deep');
locate(['运动相关骶髂关节疼痛'],'sacroiliac',[[423,564,35,122]],'骶骨与髂骨交界','deep');
locate(['腹股沟肌肉拉伤'],'thigh',[[333,320,70,100]],'大腿根部内侧内收肌区');
locate(['髋屈肌拉伤'],'hip-flexor',[[553,510,70,130]],'髋前侧髂腰肌区','deep');
locate(['髋外侧滑囊炎'],'hip',[[730,817,42,70]],'股骨大转子外侧邻近区域','area','剖面未绘出外侧滑囊，标记为相邻区域，不是关节腔内病变。');
locate(['股骨髋臼撞击综合征'],'hip',[[628,758,65,55]],'股骨头颈与髋臼边缘','deep');
locate(['运动性腹股沟痛（运动疝）'],'hip',[],'下腹、耻骨与腹股沟交界','reference','此关节剖面未绘出腹壁及耻骨肌腱附着，不指定单一关节内痛点。');
locate(['髋关节盂唇损伤'],'hip-labrum',[[465,650,42,44]],'髋臼边缘盂唇','deep');
locate(['疼痛性弹响髋'],'hip-flexor',[[556,626,62,50]],'髋前侧肌腱滑动区','deep','仅示髋前侧型；髋外侧或臀部弹响涉及其他结构。');
locate(['骨盆附着点撕脱骨折'],'hip',[],'骨盆上的具体肌腱骨性附着点','reference','坐骨、髂前上棘等均可能受累；没有一个适用于所有人的固定点。');
locate(['髋部应力性骨折'],'hip',[[670,817,55,30]],'股骨颈示例区域','deep','为股骨颈位置参照，髋周应力损伤也可能位于其他骨位。');
locate(['股四头肌拉伤'],'quadriceps',[[420,304,105,72]],'大腿前侧股四头肌');
locate(['腘绳肌拉伤'],'hamstring',[[430,588,72,133]],'大腿后侧腘绳肌');
locate(['腘绳肌近端肌腱撕脱'],'hamstring',[[373,331,42,40]],'坐骨附近肌腱近端附着','deep');
locate(['大腿肌肉挫伤','大腿急性骨筋膜室综合征'],'thigh',[],'受伤的肌肉区域；范围不固定','reference','没有通用固定痛点；本解剖图也不能显示筋膜室压力。');
locate(['髌股疼痛'],'knee',[[502,366,55,56]],'髌骨周围或后方','area');
locate(['髌腱相关疼痛','髌腱撕裂'],'knee-ligaments',[[587,490,40,87]],'髌骨下缘至胫骨结节的髌腱');
locate(['股四头肌腱撕裂'],'quad-tendon',[[459,300,50,68]],'髌骨上方股四头肌腱');
locate(['膝关节扭伤'],'knee-ligaments',[[478,440,180,115]],'膝周区域；不代表某一条韧带');
locate(['半月板损伤'],'knee-ligaments',[[423,473,75,24],[575,475,45,24]],'内侧或外侧关节线附近','deep');
locate(['前交叉韧带损伤'],'knee-ligaments',[[480,493,34,58]],'前交叉韧带（深部）','deep','深部韧带位置用于理解结构，疼痛和肿胀可能遍及膝关节。');
locate(['后交叉韧带损伤'],'knee-ligaments',[[517,430,34,45]],'后交叉韧带（深部）','deep','深部或膝后疼痛无法单独确定是哪条韧带损伤。');
locate(['膝侧副韧带损伤'],'knee-ligaments',[[310,545,27,85],[639,419,22,58]],'外侧或内侧副韧带','deep');
locate(['髂胫束综合征'],'knee-ligaments',[[289,360,30,66]],'膝外侧股骨外上髁邻近区','area','髂胫束未在此切开图中绘出，标记表示相邻区域。');
locate(['髌前滑囊炎'],'knee',[[502,366,60,58]],'髌骨正前方的皮下区','area','滑囊位于髌骨前方；标记不在软骨或关节间隙内。');
locate(['髌骨脱位 / 不稳'],'patella',[[687,391,63,48]],'右侧示例中的髌骨移位区域','deep');
locate(['鹅足滑囊炎'],'knee-ligaments',[[651,625,40,46]],'膝内侧关节线下方','area','鹅足肌腱滑囊未直接绘出，仅示胫骨内侧邻近区域。');
locate(['胫骨结节骨骺炎'],'knee-ligaments',[[585,587,40,32]],'髌腱下端附着的胫骨结节');
locate(['胫骨内侧应力综合征'],'calf',[[220,608,24,100]],'胫骨内侧缘的一段区域');
locate(['胫骨应力性骨折'],'calf',[[213,584,26,36]],'胫骨上的局限痛点示例','deep','具体骨位不固定，标记不能用于区分应力综合征与骨折。');
locate(['腓骨应力性骨折'],'calf',[],'小腿外侧下段腓骨附近','reference','此肌肉层图未清楚显示腓骨，不把比目鱼肌标成腓骨。');
locate(['慢性运动性骨筋膜室综合征','小腿肌肉挫伤'],'calf',[],'实际受累肌群或受撞击部位','reference','可涉及不同筋膜室或肌群，没有固定的单一痛点。');
locate(['腓肠肌拉伤（网球腿）'],'calf-strain',[[443,474,61,91]],'小腿后侧腓肠肌区');
locate(['比目鱼肌拉伤'],'calf',[[310,588,35,65]],'腓肠肌深面的比目鱼肌','deep');
locate(['跟腱相关疼痛'],'achilles',[[222,401,33,70]],'足跟后上方跟腱');
locate(['跟腱断裂'],'achilles-rupture',[[289,495,35,45]],'跟腱连续性中断的教学示例','deep');
locate(['踝关节扭伤','慢性踝关节不稳'],'ankle-ligaments',[[543,416,55,34],[390,565,30,66]],'外踝邻近的支持韧带区','deep','常见外侧扭伤示例；内侧扭伤可能涉及其他韧带。');
locate(['高位踝扭伤（下胫腓联合损伤）'],'ankle-ligaments',[[465,314,34,65]],'踝上方下胫腓联合','deep');
locate(['距骨骨软骨损伤'],'ankle-ligaments',[[531,463,64,40]],'距骨关节面所在深部区域','deep','图中未显示软骨病灶，标记不表示病灶大小。');
locate(['踝部应力性骨折','踝关节急性骨折'],'ankle-ligaments',[[400,441,38,50]],'踝周骨性区域示例','deep','内踝、外踝或后踝均可受累；此外侧视图不能展示所有骨折位置。');
locate(['踝周软组织挫伤'],'ankle-ligaments',[],'实际受到直接撞击的位置','reference','挫伤区域因受力位置而异，不预设在某条韧带上。');
locate(['腓骨肌腱病'],'ankle-ligaments',[],'外踝后方沿腓骨肌腱走行处','reference','此外侧韧带图未绘出腓骨肌腱，不能以距腓韧带标记替代。');
// 足底病症采用独立的足底示意，而不是在足背骨骼上假装显示籽骨。
locate(['跖痛症（前脚掌疼痛）'],'foot-plantar',[[485,319,137,47]],'前脚掌跖骨头下方负重区','area','可涉及一个或多个跖骨头，是疼痛区域名称，不代表单一病因。');
locate(['籽骨炎'],'foot-plantar',[[604,329,15,22],[638,329,15,22]],'第一跖骨头足底侧的两枚籽骨','area','疼痛集中于拇趾根部下方，不是整个前掌；示意不区分籽骨炎与骨折。');
locate(['拇趾跖趾关节扭伤'],'foot-plantar',[[620,294,42,30]],'第一跖趾关节及足底支持组织','area');
locate(['莫顿神经瘤'],'foot-plantar',[[442,295,21,37]],'常见于第三、第四跖骨头之间','area','橙色标示趾间神经常见受刺激位置；也可累及其他趾间隙。');
locate(['足底筋膜相关疼痛'],'foot-plantar',[[522,765,46,45],[528,611,30,112]],'足跟底部，可能向足弓延伸','area');
locate(['第五跖骨骨折'],'foot-bones',[[578,449,30,135]],'足外缘第五跖骨（小趾侧）','deep','突出整段第五跖骨；基底部、骨干等不同部位均可能骨折，不绘制虚构骨折线。');
locate(['跖骨应力性骨折'],'foot-bones',[[450,365,23,76],[499,391,23,77]],'第二、第三跖骨示例','deep','其他跖骨也可能发生；标记只示常见骨位，不代表固定骨折点。');
locate(['足舟骨应力性骨折'],'foot-bones',[[405,593,57,40]],'中足偏内侧的足舟骨','deep');
locate(['中足 Lisfranc 损伤'],'foot-bones',[[468,493,120,43]],'跗跖关节交界区','deep','突出跖骨基底与跗骨交界；稳定韧带本身未在骨骼图展开。');
locate(['脚趾急性骨折'],'foot-bones',[[371,145,43,95],[463,129,27,94],[520,171,26,89],[567,211,25,80],[620,258,23,77]],'受撞击脚趾的趾骨，具体脚趾不固定','deep');
locate(['跟骨骨骺炎（Sever 病）'],'achilles',[[186,479,25,48]],'成长阶段足跟后方骨骺区','area','成人样式图仅作位置参照，不代表已显示生长板。');
anatomyLocations['第五跖骨骨折'].outline='M591 306 Q617 302 627 327 L607 384 Q580 456 588 509 L601 549 L580 582 L557 568 Q549 512 559 438 L575 366 Z';

function getAnatomyLocation(name) {
 const location=anatomyLocations[name];
 if(!location) throw new Error('缺少条目级定位：'+name);
 return location;
}

function plantarAnatomySvg() {
 // 原创右足足底教学示意，软组织半透明，骨骼按足底方向排布；非比例模型。
 const toes=[{x:365,y:217,r:17,n:3},{x:412,y:178,r:19,n:3},{x:463,y:146,r:21,n:3},{x:520,y:122,r:23,n:3},{x:620,y:143,r:34,n:2}];
 const bones=toes.map(({x,y,r,n},i)=>{
  const headY=310+(i===0?20:0),baseX=440+i*27;
  const segment=(headY-y-12)/n;
  return `<path d="M${x-r} ${headY} Q${x} ${headY-21} ${x+r} ${headY} L${baseX+15} 557 Q${baseX} 580 ${baseX-17} 557 Z"/><ellipse cx="${x}" cy="${headY}" rx="${r+3}" ry="24"/>${Array.from({length:n},(_,j)=>`<rect x="${x-r*.72}" y="${y+j*segment}" width="${r*1.44}" height="${segment-7}" rx="${r*.5}"/>`).join('')}`;
 }).join('');
 return `<g class="plantar-anatomy"><path d="M409 848 C371 821 379 738 390 678 Q400 590 340 452 Q304 365 331 260 Q323 208 346 194 Q365 182 383 205 Q377 166 400 153 Q419 143 438 164 Q435 130 455 121 Q480 109 491 139 Q488 91 510 89 Q542 82 551 137 Q565 105 594 103 Q656 88 673 150 Q689 213 669 294 Q673 387 621 505 Q588 588 585 680 Q592 789 571 844 Q500 904 409 848Z" fill="#fbede1" stroke="#d5ad90" stroke-width="5"/>
 <g fill="#e4d7bd" stroke="#a69374" stroke-width="3">${bones}<path d="M424 584 Q449 562 474 588 L470 639 L427 650Z"/><path d="M477 580 Q501 560 521 585 L521 640 L478 636Z"/><path d="M528 579 Q550 563 573 587 L564 639 L530 642Z"/><path d="M428 663 Q491 628 562 661 L553 712 Q490 740 429 709Z"/><path d="M424 738 Q489 713 557 739 L561 816 Q506 867 437 817Z"/></g>
 <g fill="none" stroke="#b3cabd" stroke-width="13" opacity=".72"><path d="M508 790 Q470 541 365 331 M508 790 Q490 541 412 310 M508 790 Q515 540 463 310 M508 790 Q540 530 520 310 M508 790 Q579 533 620 310"/></g>
 <g fill="#fff9e9" stroke="#997f58" stroke-width="3"><ellipse cx="604" cy="329" rx="13" ry="19"/><ellipse cx="638" cy="329" rx="13" ry="19"/></g>
 <g font-size="25" fill="#768378"><text x="278" y="435">小趾侧</text><text x="687" y="435">拇趾侧</text><text x="455" y="917">足跟</text></g></g>`;
}

function renderPainOverlay(plate,width,height) {
 const loc=plate.location;
 if(!loc||loc.kind==='reference') return '';
 const color=loc.kind==='deep'?'#a15a26':'#c24d36';
 const shape=loc.outline?`<path d="${loc.outline}" fill="${color}" fill-opacity=".26" stroke="${color}" stroke-width="5" stroke-dasharray="10 7"/>`:loc.points.map(([x,y,rx,ry])=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${color}" fill-opacity=".22" stroke="${color}" stroke-width="5" stroke-dasharray="${loc.kind==='deep'?'10 7':'none'}"/>`).join('');
 return `<g class="condition-location-markers" aria-label="${loc.kind==='deep'?'关注结构':'常见疼痛区域'}：${loc.label}">${plate.tissue?.includes('脂肪垫')?'<text x="600" y="860" font-size="24" fill="#914b32">皮下层投影</text>':''}${shape}<g transform="translate(${loc.points[0][0]},${loc.points[0][1]})"><circle r="17" fill="${color}" stroke="white" stroke-width="3"/><text text-anchor="middle" dominant-baseline="central" fill="white" font-size="23" font-family="sans-serif">1</text></g></g>`;
}

function renderFootCallout(plate) {
 const name=plate.conditionName;
 if(plate.asset==='foot-plantar') {
  if(name==='籽骨炎') return `<g font-family="Microsoft YaHei,sans-serif"><path d="M601 337 L266 491" stroke="#c24d36" stroke-width="3" fill="none"/><rect x="35" y="430" width="245" height="270" rx="18" fill="#fff9f2" stroke="#e6cbb3" stroke-width="2"/><text x="58" y="473" font-size="25" fill="#835f42">局部放大 · 足底</text><path d="M126 493 L126 540 Q108 582 152 588 Q195 582 178 540 L178 493" fill="#e4d7bd" stroke="#a69374" stroke-width="3"/><ellipse cx="134" cy="576" rx="16" ry="24" fill="#f1b5a0" stroke="#c24d36" stroke-width="3"/><ellipse cx="174" cy="576" rx="16" ry="24" fill="#f1b5a0" stroke="#c24d36" stroke-width="3"/><text x="58" y="640" font-size="24" fill="#914b32">两枚籽骨</text><text x="58" y="674" font-size="21" fill="#7f776b">位于第一跖骨头下方</text></g>`;
  const extraCaption={'足跟脂肪垫综合征（足底脂肪垫痛）':['足跟中央','皮下缓冲脂肪垫'],'前脚掌脂肪垫萎缩相关疼痛':['前掌皮下','缓冲脂肪垫'],'跖板损伤（第2至5趾）':['第二趾根部','足底侧跖板区域'],'跟骨应力性骨折':['跟骨投影','深层骨性结构']};
  const caption=extraCaption[name] || (name==='跖痛症（前脚掌疼痛）'?['跖骨头下方','前掌负重区']:name==='莫顿神经瘤'?['第三、第四','跖骨头之间']:name==='拇趾跖趾关节扭伤'?['第一跖趾关节','足底侧支持组织']:[ '足跟底部','及足弓区域']);
  const [x,y]=plate.location.points[0];
  return `<g fill="#914b32" font-family="Microsoft YaHei,sans-serif" font-size="28"><path d="M${x} ${y} L260 380 L65 380" fill="none" stroke="#c24d36" stroke-width="3"/><text x="65" y="326">${caption[0]}</text><text x="65" y="363">${caption[1]}</text></g>`;
 }
 if(name==='第五跖骨骨折') return `<g fill="#914b32" font-family="Microsoft YaHei,sans-serif" font-size="29"><path d="M589 449 L743 412 L920 412" fill="none" stroke="#a15a26" stroke-width="3"/><text x="744" y="363">第五跖骨</text><text x="744" y="398" font-size="23">小趾侧 · 足外缘</text></g>`;
 return '';
}

function renderLocationKey(plate) {
 const loc=plate.location;
 const title=loc.kind==='reference'?'此图仅供结构参照，不能指定单一痛点':loc.kind==='deep'?'① 虚线：关注结构所在区域':'① 实线：常见疼痛区域';
 return `<div class="location-key-panel location-key-${loc.kind}"><strong>${title}</strong><p>${loc.label}</p>${loc.detail?`<p class="location-detail">${loc.detail}</p>`:''}<small>区域定位示意，不代表个人病灶、损伤程度或确诊依据。</small></div>`;
}
