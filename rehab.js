// 康复科普：动作按明确条目分配。没有适配的条目默认先评估，不推送通用训练。
const rehabSources = {
 shoulder:['AAOS · 肩部训练','https://www.orthoinfo.org/recovery/rotator-cuff-and-shoulder-conditioning-program/'],
 knee:['AAOS · 膝部训练','https://www.orthoinfo.org/recovery/knee-conditioning-program'],
 hip:['AAOS · 髋部训练','https://www.orthoinfo.org/recovery/hip-conditioning-program/'],
 spine:['AAOS · 脊柱训练','https://www.orthoinfo.org/recovery/spine-conditioning-program/'],
 ankle:['AAOS · 足踝训练','https://www.orthoinfo.org/recovery/foot-and-ankle-conditioning-program/'],
 elbow:['AAOS · 网球肘与高尔夫球肘训练','https://www.orthoinfo.org/recovery/epicondylitis-therapeutic-exercise-program/'],
 wrist:['NHS · 腕部活动练习','https://www.cuh.nhs.uk/patient-information/hand-therapy-active-wrist-exercises/'],
 plantar:['NHS · 足底筋膜相关疼痛','https://www.nhs.uk/conditions/plantar-fasciitis/']
};
// 起始量为本页的保守示例，不等同于来源的完整处方。
const rehabExercises = {
 pendulum:{name:'放松摆臂',equipment:'稳固桌面',steps:['健侧手扶桌，身体略前倾，让患侧手臂自然下垂。','用很小的幅度轻轻前后摆动，保持肩颈放松。'],dose:'每方向 5 次，1 组，每日 1 次',tip:'不主动甩臂、不追求大幅度。',source:'shoulder'},
 scapula:{name:'肩胛轻收',equipment:'无需器械',steps:['俯卧，额头垫毛巾，双臂放在身旁。','肩胛骨轻轻向后下方靠拢，再放松；保持正常呼吸。'],dose:'保持 5 秒 × 5 次，1 组，每周 2–3 天',tip:'不耸肩，不夹到僵硬或疼痛。',source:'shoulder'},
 shoulderRotation:{name:'轻阻力肩外旋',equipment:'轻阻力弹力带',steps:['弹力带固定在稳固位置，肘屈约 90°，上臂贴住身体。','前臂缓慢向外转一小段，再慢慢回到起点。'],dose:'6 次 × 1 组，每周 2–3 天，训练日间隔一天',tip:'仅在已获准抗阻后进行；不转体或把肘抬开。',source:'shoulder'},
 wristMove:{name:'主动屈伸腕',equipment:'桌面或扶手',steps:['前臂放在支撑面，手悬出边缘。','不用另一只手掰拉，在无痛范围缓慢抬手、放下。'],dose:'每方向 5 次，1 组，每日 1 次',tip:'前臂保持不动，不强压到末端。',source:'wrist'},
 wristExtend:{name:'轻负荷伸腕',equipment:'极轻哑铃或空手',steps:['前臂支撑，掌心向下，手腕伸出桌边。','在已获准抗阻后，缓慢抬起手背，再控制放下。'],dose:'6 次 × 1 组，每周 2–3 天',tip:'从空手开始；不靠甩动完成，不忍痛加重。',source:'elbow'},
 wristFlex:{name:'轻负荷屈腕',equipment:'极轻哑铃或空手',steps:['前臂支撑，掌心向上，手腕伸出桌边。','缓慢抬起手掌，再控制放下，前臂不离开支撑。'],dose:'6 次 × 1 组，每周 2–3 天',tip:'先恢复无痛活动，再在指导下加轻负荷。',source:'elbow'},
 quadSet:{name:'股四头肌收紧',equipment:'床或瑜伽垫',steps:['坐卧，患腿伸直，膝下可垫薄毛巾。','轻收大腿前侧肌肉，让膝后方轻压毛巾，然后放松。'],dose:'保持 5 秒 × 5 次，1 组，每日 1 次',tip:'不憋气、不用力压到疼痛。',source:'knee'},
 straightLeg:{name:'直腿抬高',equipment:'瑜伽垫',steps:['仰卧，健侧屈膝，练习侧伸直。','先收紧大腿前侧，再把伸直的腿抬起一小段，缓慢落下。'],dose:'5 次 × 1 组，每周 2–3 天',tip:'膝盖应能保持伸直；伸不直或疼痛时停止。',source:'knee'},
 miniSquat:{name:'扶椅浅蹲',equipment:'稳固椅背',steps:['双脚与肩同宽，双手扶稳椅背。','臀部轻向后坐，浅浅屈膝，再站回；膝盖朝向脚尖。'],dose:'5 次 × 1 组，每周 2–3 天',tip:'仅在步行及基础动作无痛、无肿胀后尝试；不深蹲。',source:'knee'},
 hipAbduct:{name:'侧卧髋外展',equipment:'瑜伽垫',steps:['侧卧，让练习腿在上方，下方腿可屈曲支撑。','上方腿保持伸直，缓慢抬高一小段，再放下。'],dose:'5 次 × 1 组，每周 2–3 天',tip:'骨盆不向后翻，脚尖朝前；侧卧受压痛则跳过。',source:'hip'},
 hipExtend:{name:'俯卧髋后伸',equipment:'瑜伽垫',steps:['俯卧，头部放松，练习侧屈膝约 90°。','轻收臀肌，将大腿抬离垫面一小段，再缓慢放回。'],dose:'5 次 × 1 组，每周 2–3 天',tip:'腰部不后仰，不追求抬高。',source:'hip'},
 hamCurl:{name:'站姿屈膝',equipment:'稳固椅背',steps:['扶稳椅背，双膝保持接近。','缓慢把一侧脚跟向臀部方向抬起一小段，再放下。'],dose:'5 次 × 1 组，每周 2–3 天',tip:'早期拉伤不做强力拉伸；仅在基础活动无痛后尝试。',source:'knee'},
 bridge:{name:'小幅臀桥',equipment:'瑜伽垫',steps:['仰卧屈膝，双脚平放地面。','轻收腹臀，缓慢抬起臀部一小段，再缓慢落下。'],dose:'5 次 × 1 组，每周 2–3 天',tip:'不顶腰、不憋气；后腿或腰部疼痛则停止。',source:'spine'},
 abdomen:{name:'仰卧轻收腹',equipment:'瑜伽垫',steps:['仰卧屈膝，保持腰背舒适的自然位置。','轻收腹部，像把腹壁轻轻收紧，同时正常呼吸，然后放松。'],dose:'保持 5 秒 × 5 次，1 组，每日 1 次',tip:'不用力压腰；放射痛、麻木或无力加重立即停止。',source:'spine'},
 ankleMove:{name:'踝关节主动屈伸',equipment:'椅子',steps:['坐稳，让足部放松。','脚尖缓慢勾起、放下，只在舒适范围内活动。'],dose:'每方向 5 次，1 组，每日 1 次',tip:'急性损伤先确认能否活动，不强行内外翻。',source:'ankle'},
 seatedHeel:{name:'坐姿提踵',equipment:'稳固椅子',steps:['坐稳，双脚平放地面。','脚掌留在地面，缓慢抬起双脚跟，再放下。'],dose:'6 次 × 1 组，每周 2–3 天',tip:'先空手、不在膝上加重物。',source:'ankle'},
 heelRaise:{name:'扶椅双脚提踵',equipment:'稳固椅背',steps:['双手扶椅，双脚平行站立。','双脚同时缓慢抬起脚跟，再缓慢降到平地。'],dose:'6 次 × 1 组，每周 2–3 天',tip:'仅在获准负重且步行无痛后进行；不用台阶、不做脚跟下沉。',source:'ankle'},
 balance:{name:'扶稳单脚站立',equipment:'稳固桌面',steps:['站在稳固平地，双手靠近桌面以防跌倒。','轻抬另一只脚，保持身体稳定；需要时立即扶住。'],dose:'每次 10 秒 × 3 次，每周 2–3 天',tip:'仅在单脚负重无痛且无打软后尝试；不闭眼、不用不稳垫。',source:'ankle'},
 calfStretch:{name:'温和小腿拉伸',equipment:'墙面',steps:['双手扶墙，练习腿放后，脚跟留在平地。','膝保持伸直，身体轻向前移动，出现轻牵拉感即停。'],dose:'保持 10 秒 × 2 次，每日 1 次',tip:'不弹震、不压到痛；急性肌肉拉伤或疑似跟腱损伤不使用。',source:'ankle'},
 plantarStretch:{name:'坐姿足底轻拉伸',equipment:'椅子',steps:['坐下，将练习脚放在另一腿上，若姿势不舒适则跳过。','用手轻轻把脚趾朝小腿方向带动，足弓有轻牵拉感即停。'],dose:'保持 10 秒 × 2 次，每日 1 次',tip:'不扳痛脚趾；前掌、拇趾或疑似骨损伤不使用。',source:'plantar'}
};
const rehabPlans = {
 shoulder:{note:'已确认适合保守康复，急性疼痛已缓解；无突然抬臂无力、脱位或骨折。',early:['pendulum'],later:['scapula','shoulderRotation'],avoid:'暂避疼痛弧内反复上举、重推举和投掷。'},
 biceps:{note:'已排除肌腱撕裂，日常轻活动无痛，并获准逐步训练。',early:['pendulum'],later:['scapula'],avoid:'暂避引体向上、重弯举和快速投掷；肌腱负荷由康复师逐步安排。'},
 tennis:{note:'已确认肌腱过用问题，无外伤后肿胀、神经症状或明显无力。',early:['wristMove'],later:['wristExtend'],avoid:'减少疼痛的握拍和反复拧转；先减负荷，再渐进恢复。'},
 golfer:{note:'已确认内侧肌腱问题，排除肘韧带或尺神经损伤。',early:['wristMove'],later:['wristFlex'],avoid:'暂减用力握杆、屈腕和投掷；不强拉到肘内侧痛。'},
 wrist:{note:'仅适用于已评估的轻度扭伤，肿痛已缓解，且获准活动。',early:['wristMove'],later:[],avoid:'暂避俯卧撑、撑地、重握拍；先恢复活动，再由手治疗师安排抗阻。'},
 back:{note:'已排除骨折及进行性神经问题；活动时不出现腿部放射痛。',early:['abdomen'],later:['bridge'],avoid:'暂避诱发疼痛的重硬拉、负重扭转和极限后弯。'},
 hip:{note:'已确认轻度软组织问题，行走无明显跛行，排除骨损伤。',early:['abdomen'],later:['hipAbduct'],avoid:'暂避冲刺、快速变向和深幅度屈髋；不强拉腹股沟。'},
 lateralHip:{note:'已排除骨折及肌腱撕裂，日常行走已较舒适。',early:['abdomen'],later:['hipExtend'],avoid:'避免长时间压在痛侧或双腿交叉；髋肌负荷需渐进。'},
 quad:{note:'已确认轻度肌肉拉伤，急性肿痛消退，无伸膝无力。',early:['quadSet'],later:['straightLeg','miniSquat'],avoid:'暂避冲刺、踢球及强力拉伸；无法伸膝先就医。'},
 hamstring:{note:'已确认轻度肌肉拉伤，排除肌腱或骨性撕脱，步行基本无痛。',early:['abdomen'],later:['hamCurl','bridge'],avoid:'暂避冲刺、劈叉和强拉后腿；初期不做大幅度前屈。'},
 knee:{note:'无近期严重外伤、锁膝、明显肿胀或不稳；已获准进行基础康复。',early:['quadSet'],later:['straightLeg','hipAbduct'],avoid:'暂减引起疼痛的跑跳、深蹲和反复上下楼；活动量逐步恢复。'},
 patellar:{note:'已排除髌腱撕裂，能够主动伸膝，且已获准逐步加载。',early:['quadSet'],later:['miniSquat'],avoid:'暂避跳跃与爆发蹬地；疼痛缓解不代表可立即恢复比赛。'},
 itb:{note:'已排除关节内或骨性损伤，基础行走无痛。',early:['abdomen'],later:['hipAbduct','hipExtend'],avoid:'暂减下坡跑、长距离跑和诱发痛的骑行；不在疼痛点反复重压。'},
 calf:{note:'已确认轻度肌肉拉伤，排除跟腱断裂、血栓或骨损伤，且获准负重。',early:['ankleMove'],later:['seatedHeel','heelRaise'],avoid:'急性期不强拉小腿，不冲刺或跳跃；提踵必须无痛。'},
 shin:{note:'已排除应力性骨折与筋膜室问题，日常步行无痛。',early:['ankleMove'],later:['heelRaise','hipAbduct'],avoid:'暂停诱发症状的冲击训练；不要用单脚跳来证明已经康复。'},
 ankle:{note:'已确认轻度普通扭伤，排除骨折、高位扭伤及肌腱损伤，并获准负重。',early:['ankleMove'],later:['heelRaise','balance'],avoid:'暂避急停变向、不平路面和跳跃；不在痛中强扭脚踝。'},
 achilles:{note:'已排除跟腱断裂，并由专业人员确认可以逐步加载。',early:['seatedHeel'],later:['heelRaise'],avoid:'先用平地双脚动作；不直接做台阶离心下沉、冲刺或跳跃。'},
 peroneal:{note:'已排除腓骨肌腱撕裂、脱位及骨损伤，步行无痛且允许负重。',early:['ankleMove'],later:['heelRaise','balance'],avoid:'暂避越野和快速变向；外踝后方弹动或肿痛需复诊。'},
 plantar:{note:'已排除足跟骨性损伤，足趾和前脚掌没有明显疼痛。',early:['plantarStretch','calfStretch'],later:['heelRaise'],avoid:'暂减长跑与赤脚硬地行走；不要用硬球重压到疼痛。'}
};
const rehabAssignments = {};
function assignRehab(names, plan) { for (const name of names) rehabAssignments[name] = {mode:'exercise',plan}; }
assignRehab(['肩袖相关疼痛','肩部扭伤 / 拉伤'],'shoulder');
assignRehab(['肱二头肌长头腱炎'],'biceps');
assignRehab(['网球肘'],'tennis'); assignRehab(['高尔夫球肘'],'golfer');
assignRehab(['腕部扭伤'],'wrist');
assignRehab(['腰背肌拉伤','腰背软组织挫伤'],'back');
assignRehab(['腹股沟肌肉拉伤','髋屈肌拉伤'],'hip');
assignRehab(['髋外侧滑囊炎'],'lateralHip');
assignRehab(['股四头肌拉伤','大腿肌肉挫伤'],'quad');
assignRehab(['腘绳肌拉伤'],'hamstring');
assignRehab(['髌股疼痛','鹅足滑囊炎'],'knee');
assignRehab(['髌腱相关疼痛'],'patellar'); assignRehab(['髂胫束综合征'],'itb');
assignRehab(['腓肠肌拉伤（网球腿）','比目鱼肌拉伤','小腿肌肉挫伤'],'calf');
assignRehab(['胫骨内侧应力综合征'],'shin');
assignRehab(['踝关节扭伤','踝周软组织挫伤'],'ankle');
assignRehab(['跟腱相关疼痛'],'achilles'); assignRehab(['腓骨肌腱病'],'peroneal');
assignRehab(['足底筋膜相关疼痛'],'plantar');
const rehabSupervisedGroups = [
 {names:['肩锁关节损伤','肩关节盂唇损伤（SLAP）','运动相关肩关节不稳','肩袖撕裂'],reason:'损伤程度、关节稳定性和治疗方式会改变允许的活动范围；过早牵拉或抗阻可能加重损伤。',avoid:'自行做大幅度外旋、过头负重、卧推或投掷。',path:['由医生确认是否需要保护、固定或手术，以及允许的活动范围。','康复师按稳定性及愈合情况安排活动度和肩胛、肩袖训练。','通过力量与稳定性评估后，再逐步恢复推举、投掷等专项动作。']},
 {names:['鹰嘴滑囊炎','肘管综合征','桡骨茎突腱鞘炎','腕管综合征','尺侧腕伸肌腱损伤','投掷相关肘后撞击'],reason:'神经、滑囊和特定肌腱问题需要不同处理；不能共用普通扭伤训练。',avoid:'压在痛点撑肘、撑腕，或反复拉伸到麻木；不自行做强力神经牵拉。',path:['评估并减少诱发动作，按需要调整护具及运动负荷。','在手治疗师或康复师指导下选择允许的关节活动和针对性训练。','症状稳定后逐步恢复握持、推撑或投掷；持续麻木、无力应复诊。']},
 {names:['三角纤维软骨复合体损伤（TFCC）','舟月韧带损伤','肘尺侧副韧带损伤','前交叉韧带损伤','膝侧副韧带损伤','后交叉韧带损伤','半月板损伤','膝关节扭伤','髌骨脱位 / 不稳','高位踝扭伤（下胫腓联合损伤）','距骨骨软骨损伤','慢性踝关节不稳','中足 Lisfranc 损伤','拇趾跖趾关节扭伤'],reason:'韧带、半月板或关节软骨损伤的负重与活动限制各不相同，可能需要固定或手术。',avoid:'负重扭转、跳跃、强拉关节或自行测试稳定性。',path:['先明确损伤及治疗方案，确认支具、负重和屈伸角度的限制。','获准后恢复活动度，再渐进进行肌力、平衡和动作控制训练。','日常活动稳定后，由专业人员评估跑跳、变向及专项回归条件。']},
 {names:['腰椎间盘突出相关神经症状','腰椎峡部应力损伤','运动相关骶髂关节疼痛','股骨髋臼撞击综合征','运动性腹股沟痛（运动疝）','髋关节盂唇损伤','疼痛性弹响髋','慢性运动性骨筋膜室综合征'],reason:'需要确认症状来源和运动限制，部分动作可能增加神经刺激、骨应力或关节撞击。',avoid:'强行后弯、压髋、极限拉伸或忍痛继续耐力训练。',path:['明确诊断与诱发动作，调整训练负荷；有进行性麻木无力应复诊。','由康复师选择合适方向的活动、核心或髋部控制练习。','根据无痛活动能力和检查结果，逐步安排专项运动。']},
 {names:['髌前滑囊炎','莫顿神经瘤','跖痛症（前脚掌疼痛）','籽骨炎'],reason:'局部受压或负重敏感，先需明确有无感染、骨损伤或神经受压。',avoid:'直接跪压肿包、硬球重压前掌、负重踮脚或忍痛跑跳。',path:['先减少局部压力，评估是否需要鞋具、垫片或其他处理。','在痛点受压已改善后，由专业人员安排不刺激局部的活动和力量训练。','逐步恢复站立、步行及运动时长，出现复发就退回较低负荷。']},
 {names:['胫骨结节骨骺炎','跟骨骨骺炎（Sever 病）'],reason:'适用于生长阶段，训练负荷及拉伸需结合年龄、疼痛及生长板情况调整。',avoid:'带痛跑跳、负重深蹲和强力拉伸；不能照搬成人训练量。',path:['由家长陪同评估，先调整跑跳量及学校体育活动。','疼痛缓解后，在指导下进行温和柔韧性与肌力练习。','依据无痛步行、跑跳与训练后的反应，逐步恢复运动。']}
];
for (const group of rehabSupervisedGroups) for (const name of group.names) rehabAssignments[name] = {mode:'supervised',...group};
function getRehabAdvice(item) {
 const name=item[0];
 // 骨折、脱位、肌腱撕裂及急性筋膜室综合征不展示可直接执行的动作。
 if (/骨折|撕脱|断裂|腱撕裂|急性骨筋膜室/.test(name) || ['肩关节脱位','肘关节脱位'].includes(name)) {
  return {mode:'assessment',reason:'该条目可能涉及骨、肌腱完整性或血供问题。康复开始时间与动作取决于检查、固定或手术方案。',avoid:'自行拉伸、抗阻、负重、按摩痛处或用反复动作测试损伤。',path:['先完成医疗评估，并按要求保护受伤部位。','由治疗团队明确何时可以活动、负重，以及哪些动作暂时受限。','获准后按个人方案恢复活动度、肌力和专项能力；本页不替代术后或骨折康复医嘱。']};
 }
 return rehabAssignments[name] || {mode:'supervised',reason:'该条目尚未配置经过适配的动作组合，需要先由专业人员确定训练方式。',avoid:'根据其他伤病的动作自行练习。',path:['先确认疼痛原因。','请康复师提供适合该损伤与阶段的动作。','依训练后反应逐步调整。']};
}
function renderRehab(item) {
 const advice=getRehabAdvice(item);
 const active=advice.mode==='exercise';
 const plan=active?rehabPlans[advice.plan]:null;
 const title=active?'康复训练建议':advice.mode==='assessment'?'先评估，再安排康复':'在专业指导下康复';
 const exercises=ids=>ids.map(id=>{const ex=rehabExercises[id];return `<details class="exercise-card"><summary><span>${ex.name}</span><small>${ex.dose}</small></summary><div class="exercise-body"><p class="exercise-equipment">准备：${ex.equipment}</p><ol>${ex.steps.map(step=>`<li>${step}</li>`).join('')}</ol><p class="exercise-tip">注意：${ex.tip}</p><a href="${rehabSources[ex.source][1]}" target="_blank" rel="noopener">动作参考：${rehabSources[ex.source][0]} ↗</a></div></details>`;}).join('');
 return `<section class="rehab-section" aria-labelledby="rehab-title" data-rehab-mode="${advice.mode}"><div class="rehab-heading"><span class="row-icon">↝</span><div><h4 id="rehab-title">${title}</h4><p>针对：${item[0]}</p></div><span class="rehab-badge">${active?'动作科普':'需评估许可'}</span></div>${active?`<div class="rehab-prerequisite"><strong>开始前提</strong><p>${plan.note}先请医生或康复师确认动作是否适合你；急性受伤、明显肿胀或术后不直接使用本组动作。</p></div><div class="rehab-stage"><h5>01 · 恢复舒适活动</h5><p>满足开始前提后，从少量、缓慢的动作开始。</p>${exercises(plan.early)}</div><div class="rehab-stage"><h5>02 · 逐步恢复力量与控制</h5><p>仅在上一阶段及日常活动无痛，且当日和次日均未增加疼痛、肿胀后考虑；抗阻和负重需已获许可。</p>${plan.later.length?exercises(plan.later):'<p class="rehab-dosage">本条目不提供自行增加阻力的动作；活动恢复后，请手治疗师安排后续握力与腕部抗阻训练。</p>'}</div><p class="rehab-avoid"><strong>暂时避开：</strong>${plan.avoid}</p><div class="rehab-stop"><strong>出现这些反应就停止</strong><p>锐痛、疼痛加重、新的肿胀、麻木、无力或打软。次日比训练前更痛或更肿，也先暂停并咨询专业人员。突发严重症状按下方就医提示处理。</p></div><p class="rehab-dosage">以上为保守起始量示例，由本页整理，非来源的完整处方。先只尝试一个动作；不按固定天数进阶，不因短暂无痛直接恢复比赛。个人医嘱优先。</p>`:`<div class="rehab-prerequisite"><strong>为什么先不直接练</strong><p>${advice.reason}</p></div><ol class="rehab-path">${advice.path.map(step=>`<li>${step}</li>`).join('')}</ol><p class="rehab-avoid"><strong>暂时避开：</strong>${advice.avoid}</p><p class="rehab-dosage">${item[9]||'症状持续、加重或影响正常活动，应及时评估。'}</p><a class="rehab-link" href="${source[item[6]]}" target="_blank" rel="noopener">查看该损伤的处理与康复资料 ↗</a>`}<p class="rehab-review">内容核对：2026-10-16 · 健康科普，尚未经过临床审核。</p></section>`;
}
