// 运动损伤专题扩充；不提供发生概率或自测确诊。
Object.assign(expandedSources, {
 cuffTear:aaos('rotator-cuff-tears'),instability:aaos('chronic-shoulder-instability'),clavicle:aaos('clavicle-fracture-broken-collarbone'),proxBiceps:aaos('biceps-tendon-tear-at-the-shoulder'),pec:aaos('pectoralis-tendon-tear'),
 distalBiceps:aaos('biceps-tendon-tear-at-the-elbow'),triceps:aaos('triceps-tendon-tear-at-the-elbow'),ucl:aaos('ulnar-collateral-ligament-ucl-injury'),throwing:aaos('elbow-injuries-in-the-throwing-athlete'),radialHead:aaos('radial-head-fractures-of-the-elbow'),elbowDislocation:aaos('elbow-dislocation'),
 wristSports:'https://pmc.ncbi.nlm.nih.gov/articles/PMC3702762/',scapholunate:'https://assh.my.site.com/handcare/condition/scapholunate-torn-ligament',radius:aaos('distal-radius-fractures-broken-wrist'),
 spineFracture:aaos('fractures-of-the-thoracic-and-lumbar-spine'),si:'https://www.tims.nhs.uk/wp-content/uploads/2024/08/tims-sacroiliac-joint-pain.pdf',
 pubalgia:aaos('sports-hernia-athletic-pubalgia'),snapHip:aaos('snapping-hip'),hipLabrum:'https://www.hss.edu/health-library/conditions-and-treatments/list/hip-labral-tear',pelvis:aaos('pelvic-fractures'),hipStress:'https://news.hss.edu/fix-hip-pain-for-good/',hamstring:aaos('hamstring-muscle-injuries'),
 pcl:aaos('posterior-cruciate-ligament-injuries'),quadTear:aaos('quadriceps-tendon-tear'),patellarTear:aaos('patellar-tendon-tear'),patellaDislocation:aaos('patellar-dislocation-and-instability-in-children-unstable-kneecap'),pes:aaos('pes-anserine-knee-tendon-bursitis'),osgood:aaos('osgood-schlatter-disease-knee-pain'),
 calfMuscles:'https://www.plymouthhospitals.nhs.uk/display-pil/pil-calf-muscle-tears-and-strains-6064/',
 highAnkle:'https://www.footcaremd.org/foot-and-ankle-conditions/ankle/high-ankle-sprain',peroneal:'https://www.footcaremd.org/foot-and-ankle-conditions/ankle/peroneal-tendinosis',talus:'https://www.footcaremd.org/foot-and-ankle-conditions/ankle/osteochondral-lesion',ankleLigament:aaos('sprained-ankle'),ankleFracture:aaos('ankle-fractures-broken-ankle'),
 lisfranc:aaos('lisfranc-midfoot-injury'),sesamoid:aaos('sesamoiditis'),sever:aaos('severs-disease'),toeFracture:aaos('toe-and-forefoot-fractures')
});
const sportsConditions = {
 shoulder:[
 ['肩袖撕裂','Rotator cuff tear','肩前外侧及上臂近端。','抬臂或旋转无力，可能夜间痛；急性损伤后可能突然抬不起手。','跌倒、突然提拉重物或反复过头负荷，可在已有退变基础上发生。',['力量训练','游泳','投掷'],'cuffTear',75,22,'外伤后突然明显无力应尽快就医，不能仅凭疼痛区分腱病与撕裂。','前外侧 / 肌腱'],
 ['运动相关肩关节不稳','Shoulder instability','肩关节深部或周围。','动作中有要滑出去的感觉，可能反复半脱位、疼痛或无力。','既往脱位后支持结构受损，或反复过头动作造成松弛。',['投掷','排球','游泳'],'instability',72,21,'反复不稳应评估；关节当前脱位或手部麻木发凉应立即就医。','深部 / 不稳'],
 ['锁骨骨折','Clavicle fracture','锁骨沿线，肩膀前上方。','摔倒后局部剧痛、肿胀或凸起，抬臂困难。','骑行摔倒、对抗碰撞或肩部直接着地。',['骑行','滑雪','碰撞'],'clavicle',63,18,'疑似骨折应尽快就医；皮肤被骨端顶起、伤口或呼吸困难需急诊。','锁骨 / 骨性'],
 ['肩部肱二头肌腱撕裂','Proximal biceps tendon tear','肩前侧及上臂前方。','突然疼痛或响声，上臂淤青，肌肉外形可能出现鼓包。','负重提拉或跌倒，肌腱退变可增加受伤风险。',['举重','提拉'],'proxBiceps',70,25,'突然淤青、肌肉外形变化或无力，应及时评估。','前侧 / 肌腱'],
 ['胸大肌腱撕裂','Pectoralis major tendon tear','前胸靠腋窝、肩前与上臂交界处。','负重时突然撕裂感，可有淤青、推举无力或腋前皱襞外形改变。','卧推下放阶段等大负荷动作可能造成肌腱撕裂。',['卧推','力量训练'],'pec',63,25,'突然撕裂感伴淤青或力量下降应尽快就医；胸痛伴气短应急诊。','腋前 / 肌腱']
 ],
 elbow:[
 ['肘尺侧副韧带损伤','Elbow UCL injury','肘关节内侧。','投掷时内侧疼痛、速度或控制下降，急性时可能有响声。','反复投掷的外翻应力，或一次较大的外力。',['棒球','标枪','投掷'],'ucl',79,36,'持续投掷痛或突然响声伴无力，应停止投掷并评估。','内侧 / 韧带'],
 ['肘部肱二头肌腱撕裂','Distal biceps tendon tear','肘前窝及前臂近端。','突然疼痛、淤青，屈肘或把掌心转向上方时无力。','负重时手臂被突然拉直，例如接住重物。',['举重','负重提拉'],'distalBiceps',82,35,'急性淤青或旋转无力应尽快就医，避免继续负重测试。','前侧 / 肌腱'],
 ['肱三头肌腱撕裂','Triceps tendon tear','肘后侧，肘尖上方。','后肘疼痛、肿胀或淤青，主动伸肘、推撑困难。','负重推举、摔倒撑地或突然强力收缩。',['卧推','推撑','摔倒'],'triceps',83,34,'突然伸肘无力应尽快评估。','后侧 / 肌腱'],
 ['投掷相关肘后撞击','Valgus extension overload','肘关节后内侧。','投掷伸肘末期疼痛，可有肿胀或伸不直。','反复投掷使肘后骨与软组织承受异常接触负荷。',['棒球','反复投掷'],'throwing',82,36,'持续伸肘受限、卡住或投掷痛应预约运动医学评估。','后内侧'],
 ['桡骨头骨折','Radial head fracture','肘外侧、前臂上端。','摔倒后外肘疼痛，屈伸或转动前臂困难。','手撑地时力量沿前臂传至肘部。',['滑板','骑行','手撑地'],'radialHead',86,37,'外伤后活动受限应尽快就医，不能以肿胀轻排除骨折。','外侧 / 骨性'],
 ['肘关节脱位','Elbow dislocation','肘关节周围。','受伤后明显疼痛、变形或无法活动，也可能伴神经症状。','摔倒撑地或对抗碰撞。',['体操','摔倒','对抗运动'],'elbowDislocation',83,36,'疑似脱位应立即就医，不自行复位；手部苍白发凉或麻木需急诊。','关节周围']
 ],
 wrist:[
 ['三角纤维软骨复合体损伤（TFCC）','TFCC injury','手腕小指侧深部。','转腕、握拍或撑地疼痛，可能有咔嗒感。','撑地跌倒、负重旋转或反复挥拍。',['网球','羽毛球','撑地'],'wristSports',92,47,'持续疼痛或不稳需手外科评估，不能靠弹响确诊。','小指侧 / 深部'],
 ['舟月韧带损伤','Scapholunate ligament injury','腕背中央偏拇指侧。','撑地或握物疼痛，可能有肿胀、弹响和握力下降。','伸腕撑地跌倒使腕骨间韧带受损。',['体操','滑雪','撑地'],'scapholunate',88,47,'外伤后持续腕背痛应尽快评估。','腕背 / 韧带'],
 ['尺侧腕伸肌腱损伤','ECU tendon injury','手腕背面靠小指侧。','挥拍或转动前臂时疼痛，有时肌腱弹动。','反复挥拍或突然扭腕使肌腱及其稳定结构受损。',['网球','高尔夫'],'wristSports',93,47,'持续弹动或无力需要评估。','小指侧 / 肌腱'],
 ['钩骨钩骨折','Hook of hamate fracture','掌根小指侧。','握拍、握杆时局部痛，可伴小指麻刺。','球拍或球杆反复撞击掌根，或跌倒。',['高尔夫','棒球','球拍运动'],'wristSports',92,50,'握持痛持续应就医，普通影像可能漏诊。','掌根 / 骨性'],
 ['桡骨远端骨折','Distal radius fracture','手腕上方前臂末端。','摔倒后疼痛、肿胀、淤青，可能变形。','滑雪、轮滑或骑行摔倒时手撑地。',['滑雪','轮滑','骑行'],'radius',88,46,'疑似骨折应尽快就医；变形伴麻木发凉或开放伤口需急诊。','腕上方 / 骨性']
 ],
 back:[
 ['运动相关骶髂关节疼痛','Sacroiliac joint pain','腰部最下方一侧、臀部上方附近。','翻身、单侧负重或活动时疼痛，可与腰椎、髋部问题相似。','跌倒或负荷改变可能诱发；疼痛来源需要查体判断。',['跌倒','负荷变化'],'si',46,46,'持续疼痛应评估；伴大小便异常、会阴麻木需立即急诊。','后下方'],
 ['胸腰椎骨折','Thoracolumbar fracture','背部或腰部脊柱沿线。','跌落或撞击后明显背痛，活动时加重，可能伴麻木或无力。','攀爬坠落、滑雪高速碰撞等较大外力；骨质疏松者较小外力也可能造成。',['攀爬','滑雪','高能量撞击'],'spineFracture',50,36,'高能量外伤后背痛应立即急诊，避免自行搬动；有神经症状时呼叫急救。','脊柱 / 骨性'],
 ['腰背软组织挫伤','Back contusion','背部直接受到击打的位置。','局部淤青、压痛和肿胀。','对抗运动碰撞或摔倒直接撞到背部。',['对抗运动','摔倒'],'bruise',56,38,'持续剧痛、腹痛、血尿或呼吸困难应立即就医，不能简单归因于淤青。','撞击处']
 ],
 hip:[
 ['运动性腹股沟痛（运动疝）','Athletic pubalgia','下腹与耻骨、腹股沟交界处。','扭转、冲刺或起身用力时痛，通常没有普通疝样的明显鼓包。','急停变向等可损伤下腹或腹股沟软组织；名称含疝不代表一定存在真正疝。',['足球','冰球','变向'],'pubalgia',53,49,'反复腹股沟痛应评估；突然剧烈腹痛或睾丸痛需急诊。','下腹 / 耻骨'],
 ['髋关节盂唇损伤','Hip labral tear','腹股沟或髋关节深处。','转身、屈髋时深部痛，可伴卡顿或弹响。','运动扭转、反复负荷或髋部结构问题。',['足球','舞蹈','深蹲'],'hipLabrum',58,51,'持续卡顿或负重痛应评估，弹响不能单独确诊。','深部'],
 ['疼痛性弹响髋','Painful snapping hip','髋前侧、外侧或臀部附近，取决于弹动组织。','活动髋部时弹动并疼痛；无痛弹响并不一定是损伤。','反复屈伸使肌腱在骨性结构上滑动。',['舞蹈','跑步','反复屈髋'],'snapHip',66,51,'只有弹响无需自行判为病症；伴疼痛或卡住需评估。','前侧 / 外侧'],
 ['骨盆附着点撕脱骨折','Pelvic avulsion fracture','髋周肌腱附着处，如坐骨附近。','冲刺或踢腿时突然疼痛，可能有响声、淤青和跛行。','成长中的青少年肌肉强力收缩，可能牵拉下一小块附着骨。',['青少年','冲刺','踢球'],'pelvis',60,53,'青少年突然髋痛或跛行应尽快就医，不按普通拉伤强行拉伸。','附着点 / 骨性'],
 ['髋部应力性骨折','Hip stress fracture','髋或腹股沟深部，可能表现为大腿痛。','跑步负重痛逐渐出现，后期走路或休息也可能疼痛。','耐力训练反复负荷及恢复不足，低骨强度也可增加风险。',['长跑','训练量增加'],'hipStress',57,52,'髋深部负重痛应停止跑跳并尽快评估；突然加剧或无法负重需急诊。','深部 / 骨性']
 ],
 thigh:[
 ['腘绳肌近端肌腱撕脱','Proximal hamstring avulsion','臀下坐骨附近及大腿后侧上端。','突然剧痛、大片淤青、屈膝无力或走路困难。','髋部快速屈曲而膝伸直，使肌腱受到强力牵拉。',['劈叉','滑水','冲刺'],'hamstring',35,54,'突然撕裂感或显著无力应尽快就医，严重肌腱撕脱需要及时识别。','后上方 / 肌腱'],
 ['大腿急性骨筋膜室综合征','Acute thigh compartment syndrome','大腿受伤后的肌肉区域。','疼痛持续加重、组织紧绷，可能有麻木或活动困难。','严重肌肉撞击、出血或骨折后压力升高，影响局部血供。',['严重碰撞','挤压伤'],'compartment',35,61,'属于急症：剧痛与外观不相称或迅速加重时立即急诊，不等待所有症状出现。','肌肉区域 / 急症']
 ],
 knee:[
 ['后交叉韧带损伤','PCL injury','膝关节深部或后侧。','受伤后疼痛、肿胀、行走不稳。','屈膝时小腿上端受前方撞击，或屈膝跪倒。',['橄榄球','跪倒','膝前撞击'],'pcl',64,72,'明显肿胀、不稳或无法负重应尽快评估。','后侧 / 韧带'],
 ['股四头肌腱撕裂','Quadriceps tendon tear','膝盖骨上方。','突然疼痛、肿胀，主动伸膝或抬直腿困难。','跳跃落地或负重时膝弯曲、肌肉强力收缩。',['篮球','跳跃','力量训练'],'quadTear',64,68,'受伤后无法主动伸膝应尽快就医，不反复测试。','髌骨上方 / 肌腱'],
 ['髌腱撕裂','Patellar tendon tear','膝盖骨下方至胫骨之间。','与慢性髌腱痛不同，可能突然响声、明显肿胀和伸膝无力。','跳跃、落地或膝前直接外伤可使肌腱撕裂。',['排球','篮球','落地'],'patellarTear',64,74,'突然无法伸膝或负重应尽快就医。','髌骨下方 / 肌腱'],
 ['髌骨脱位 / 不稳','Patellar dislocation or instability','膝盖骨及其周围，常向外侧偏移。','变向时膝前剧痛，可能有膝盖骨移位、肿胀或要滑出的感觉。','急停变向、碰撞以及个体解剖因素可能相关，青少年也可发生。',['篮球','足球','青少年'],'patellaDislocation',69,70,'首次疑似脱位应尽快就医，即使自行回位仍需评估；不要自行复位。','膝前 / 不稳'],
 ['鹅足滑囊炎','Pes anserine bursitis','膝内侧关节线下方数厘米。','跑步、上楼时内下侧疼痛或压痛。','反复跑动与局部肌腱、滑囊负荷增加可能相关。',['跑步','上坡'],'pes',57,75,'持续疼痛应评估；红热、发热或明显肿胀需及时就医。','内下侧'],
 ['胫骨结节骨骺炎','Osgood-Schlatter disease','膝盖下方胫骨结节凸起处。','成长中的青少年跑跳、跪地时疼痛，局部可有肿胀。','生长阶段髌腱反复牵拉胫骨结节，与跑跳负荷相关。',['青少年','篮球','足球'],'osgood',64,76,'仅适用于生长阶段相关情境；跛行、突然剧痛或无法负重应及时评估。','青少年 / 膝下']
 ],
 calf:[
 ['腓肠肌拉伤（网球腿）','Gastrocnemius strain','小腿后侧浅层，常偏内侧。','突然蹬地时撕扯痛，可有压痛、肿胀或淤青。','加速、起跳或突然改变方向使小腿肌肉过度受力。',['网球','短跑','起跳'],'calfMuscles',36,80,'急性明显无力应评估；无明确受伤却单侧红肿发热应及时就医。','后内侧 / 肌肉'],
 ['比目鱼肌拉伤','Soleus strain','小腿后侧较深处。','跑动或蹬地时深部痛，症状可能与腓肠肌及跟腱损伤重叠。','跑步中的反复负荷或过度牵拉可能相关。',['长跑','蹬地'],'calfMuscles',35,84,'无法仅凭深浅区分肌肉；疼痛持续或加重应评估。','后侧深层 / 肌肉'],
 ['小腿肌肉挫伤','Calf contusion','小腿被直接击中的位置。','局部疼痛、肿胀或淤青。','足球对抗、器械或其他物体直接击打小腿。',['足球','直接撞击'],'bruise',34,81,'迅速加重的剧痛、紧绷或麻木应立即急诊。','撞击处'],
 ['腓骨应力性骨折','Fibular stress fracture','小腿外侧腓骨附近，常接近下段。','局部骨性压痛，跑跳负重时明显。','反复跑跳冲击或训练负荷变化。',['跑步','跳跃'],'stress',29,86,'持续局部骨痛应停止冲击运动并就医。','外侧 / 骨性']
 ],
 ankle:[
 ['高位踝扭伤（下胫腓联合损伤）','High ankle sprain','踝关节上方、胫骨与腓骨之间。','扭伤后踝上方疼痛，上楼或负重可能加重。','脚相对小腿向外旋转，多见于对抗或旋转伤。',['足球','橄榄球','旋转扭伤'],'highAnkle',66,90,'应尽快评估，可与骨折同时存在，能走路也不能排除。','踝上方 / 韧带'],
 ['腓骨肌腱病','Peroneal tendinopathy','外踝后方沿肌腱走行处。','跑动时踝外后方疼痛或肿胀。','反复跑跳等负荷使肌腱受到刺激。',['跑步','越野','跳跃'],'peroneal',71,93,'持续疼痛、突然弹动或无力应评估肌腱是否受损。','外后侧 / 肌腱'],
 ['距骨骨软骨损伤','Osteochondral lesion of talus','踝关节深处。','崴脚后持续深部疼痛、肿胀，偶有卡顿。','踝扭伤或骨折可同时损伤关节软骨及其下方骨组织。',['崴脚','落地扭转'],'talus',65,94,'扭伤后长期深部痛或卡住需评估，不能只按韧带扭伤处理。','深部 / 骨软骨'],
 ['慢性踝关节不稳','Chronic ankle instability','踝关节周围，常偏外侧。','反复崴脚、在不平地面打软或不稳。','既往扭伤后韧带与神经肌肉控制恢复不足。',['反复崴脚','越野'],'ankleLigament',70,93,'反复不稳应预约评估，新的明显肿胀或不能负重需及时就医。','外侧 / 不稳'],
 ['踝关节急性骨折','Acute ankle fracture','内踝、外踝或踝后骨性区域。','扭转或落地后疼痛、肿胀、淤青，有时变形。','强力扭转、碰撞或高处落地。',['滑雪','篮球','落地'],'ankleFracture',68,94,'骨性压痛、变形或无法负重应尽快就医；皮肤破口或麻木发凉需急诊。','踝周 / 骨性']
 ],
 foot:[
 ['中足 Lisfranc 损伤','Lisfranc injury','足背中部及足弓附近。','中足肿痛、负重困难，足底淤青尤其值得注意。','脚尖着地时足部扭转或承受他人压迫，可伤及韧带或骨骼。',['足球','落地扭转'],'lisfranc',35,96,'怀疑中足损伤应尽快就医，避免继续负重；可被误认为普通扭伤。','中足 / 韧带与骨'],
 ['籽骨炎','Sesamoiditis','大脚趾根部下方的前脚掌。','前掌负重或踮脚时渐进性疼痛。','跑步、舞蹈等反复前掌负荷刺激籽骨周围组织。',['芭蕾','跑步','踮脚'],'sesamoid',30,98,'持续局部痛应评估，以区分炎性刺激与骨折。','拇趾根部足底'],
 ['足舟骨应力性骨折','Navicular stress fracture','足背中部，疼痛可能不易精确定位。','跑跳时中足痛，可能逐渐影响行走。','跑跳反复负荷使舟骨产生应力损伤。',['田径','篮球','训练增加'],'stress',35,96,'持续中足痛应停止跑跳并尽快评估，早期 X 光可能不明显。','中足 / 骨性'],
 ['第五跖骨骨折','Fifth metatarsal fracture','足外侧，从小趾根部向后延伸的跖骨。','扭伤或落地后足外侧疼痛、肿胀，负重加重。','翻脚、落地或反复运动负荷可造成不同类型骨折。',['篮球','足球','崴脚'],'toeFracture',40,97,'足外侧骨性痛应就医区分骨折类型，不能简单按崴脚处理。','足外侧 / 骨性'],
 ['脚趾急性骨折','Toe fracture','被撞击或被踩的脚趾。','局部肿痛、淤青，有时变形或活动困难。','踢到硬物、被踩踏或重物砸伤。',['足球','格斗','踩踏'],'toeFracture',34,99,'拇趾受伤、明显变形、开放伤口或持续不能负重需及时就医。','脚趾 / 骨性'],
 ['跟骨骨骺炎（Sever 病）','Calcaneal apophysitis','成长中儿童或青少年的足跟后方。','跑跳后足跟疼痛，可能跛行，双侧也可出现。','生长阶段足跟生长板承受反复冲击与肌腱牵拉。',['青少年','跑跳','足球'],'sever',35,97,'仅适用于生长阶段；明显跛行、发热或外伤后剧痛需要评估。','青少年 / 足跟']
 ]
};
for (const [id, items] of Object.entries(sportsConditions)) expandedConditions[id].push(...items);
