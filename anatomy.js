// 真实解剖图与伤病条目分开维护；不以统一体表圆点冒充深层病灶。
const anatomyPlates = {
 'knee-ligaments':{title:'膝关节韧带与半月板',view:'右膝前外侧切开示意',parts:['前交叉韧带 · ACL','后交叉韧带 · PCL','半月板 · Meniscus','内外侧副韧带 · Collateral ligaments','髌腱 · Patellar ligament']},
 'ankle-ligaments':{title:'踝关节骨骼与韧带',view:'外侧视图',parts:['胫骨 · Tibia','腓骨 · Fibula','距骨 · Talus','距腓前韧带 · Anterior talofibular ligament','跟腓韧带 · Calcaneofibular ligament']},
 'foot-bones':{title:'足部骨骼排列',view:'右足背侧',parts:['距骨 · Talus','跟骨 · Calcaneus','足舟骨 · Navicular','跖骨 · Metatarsals','趾骨 · Phalanges']},
 'hand-bones':{title:'手腕与手部骨骼',view:'右手掌侧',parts:['桡骨 · Radius','尺骨 · Ulna','舟骨 · Scaphoid','钩骨 · Hamate','掌骨 · Metacarpals']},
 shoulder:{title:'肩关节解剖',view:'局部剖示',parts:['锁骨 · Clavicle','肱骨 · Humerus','肩胛骨 · Scapula','盂唇 · Labrum']},
 rotator:{title:'肩袖肌群',view:'前后侧对照',parts:['冈上肌 · Supraspinatus','冈下肌 · Infraspinatus','小圆肌 · Teres minor','肩胛下肌 · Subscapularis']},
 'rotator-injury':{title:'肩袖与肌腱',view:'肩部局部剖示',parts:['肩袖 · Rotator cuff','肱骨头 · Humeral head','肩峰 · Acromion']},
 elbow:{title:'肘部骨骼与软组织',view:'肘部局部结构',parts:['肱骨 · Humerus','桡骨 · Radius','尺骨 · Ulna','肘周肌腱 · Tendons']},
 'medial-elbow':{title:'肘内侧肌腱附着',view:'内侧视图',parts:['内上髁 · Medial epicondyle','屈肌腱附着 · Flexor tendon origin']},
 'elbow-nerves':{title:'肘部神经走行',view:'肘部神经结构',parts:['尺神经 · Ulnar nerve','肱骨 · Humerus','尺骨 · Ulna']},
 'elbow-bursa':{title:'肘后滑囊',view:'肘后侧局部',parts:['鹰嘴 · Olecranon','鹰嘴滑囊 · Olecranon bursa','肱三头肌腱 · Triceps tendon']},
 wrist:{title:'腕骨与韧带',view:'腕部局部剖示',parts:['桡骨 · Radius','尺骨 · Ulna','腕骨 · Carpal bones','腕部韧带 · Ligaments']},
 spine:{title:'腰椎与椎间盘',view:'脊柱侧面剖示',parts:['椎体 · Vertebral body','椎间盘 · Intervertebral disc','椎管 · Spinal canal']},
 'back-muscles':{title:'背部肌肉',view:'背侧肌肉层',parts:['斜方肌 · Trapezius','背阔肌 · Latissimus dorsi','脊柱旁肌群 · Paraspinal muscles']},
 disc:{title:'椎间盘与神经',view:'椎间盘局部剖示',parts:['椎间盘 · Disc','神经根 · Nerve root','椎体 · Vertebra']},
 hip:{title:'髋关节解剖',view:'髋关节剖示',parts:['骨盆 · Pelvis','股骨头 · Femoral head','髋臼 · Acetabulum','关节盂唇 · Labrum']},
 'hip-flexor':{title:'髋前侧屈肌',view:'髋前侧局部',parts:['髂腰肌 · Iliopsoas','骨盆 · Pelvis','股骨 · Femur']},
 'hip-labrum':{title:'髋臼与关节盂唇',view:'髋关节深部剖示',parts:['髋臼 · Acetabulum','盂唇 · Labrum','股骨头 · Femoral head']},
 sacroiliac:{title:'骶髂关节',view:'骨盆局部剖示',parts:['骶骨 · Sacrum','髂骨 · Ilium','骶髂关节 · Sacroiliac joint']},
 thigh:{title:'大腿前内侧解剖',view:'前侧肌肉与血管结构',parts:['股四头肌 · Quadriceps','缝匠肌 · Sartorius','内收肌群 · Adductors','股血管 · Femoral vessels']},
 hamstring:{title:'大腿后侧肌群',view:'后侧肌肉层',parts:['腘绳肌群 · Hamstrings','坐骨 · Ischium','肌腱附着 · Tendon attachment']},
 quadriceps:{title:'股四头肌与膝前结构',view:'膝前侧肌肉层',parts:['股四头肌 · Quadriceps','髌骨 · Patella','胫骨 · Tibia']},
 'quad-tendon':{title:'膝前伸膝装置',view:'膝前侧局部',parts:['股四头肌腱 · Quadriceps tendon','髌骨 · Patella','髌腱 · Patellar tendon']},
 knee:{title:'膝关节骨骼与软骨',view:'前侧局部剖示',parts:['股骨 · Femur','髌骨 · Patella','半月板 · Meniscus','胫骨 · Tibia']},
 'knee-side':{title:'膝关节内部结构',view:'前侧切开示意',parts:['股骨 · Femur','半月板 · Meniscus','胫骨 · Tibia','关节软骨 · Articular cartilage']},
 'knee-collateral':{title:'膝侧副韧带',view:'膝关节局部剖示',parts:['侧副韧带 · Collateral ligament','股骨 · Femur','腓骨 · Fibula']},
 patella:{title:'髌骨与关节对位',view:'膝前侧局部',parts:['髌骨 · Patella','股骨 · Femur','髌腱 · Patellar tendon']},
 calf:{title:'小腿肌肉与肌腱',view:'小腿肌肉层',parts:['腓肠肌 · Gastrocnemius','比目鱼肌 · Soleus','跟腱 · Achilles tendon']},
 'calf-strain':{title:'小腿后侧肌群',view:'后侧局部',parts:['腓肠肌 · Gastrocnemius','肌腱肌肉交界 · Musculotendinous junction','跟腱 · Achilles tendon']},
 achilles:{title:'跟腱与足跟',view:'足踝局部剖示',parts:['跟腱 · Achilles tendon','跟骨 · Calcaneus','踝关节 · Ankle joint']},
 'achilles-rupture':{title:'跟腱连续性',view:'跟腱局部剖示',parts:['小腿肌群 · Calf muscles','跟腱 · Achilles tendon','跟骨 · Calcaneus']},
 plantar:{title:'足底筋膜与足弓',view:'足部局部结构',parts:['足底筋膜 · Plantar fascia','跟骨 · Calcaneus','足弓 · Foot arch']}
};

const conditionAnatomy = {};
function bindAnatomy(names, asset, focus, tissue, note='') {
 for (const name of names) conditionAnatomy[name] = {asset,focus,tissue,note};
}
bindAnatomy(['肩袖相关疼痛','肩袖撕裂'],'rotator-injury','肩袖肌腱及其肱骨附着区','肌腱');
bindAnatomy(['肩部扭伤 / 拉伤'],'rotator','肩周肌肉与支持组织','软组织','扭伤与拉伤可涉及不同组织，需结合受伤方式确认。');
bindAnatomy(['肱二头肌长头腱炎','肩部肱二头肌腱撕裂'],'shoulder','肩前侧肱二头肌长头肌腱','肌腱','本图提供肩关节位置参照，长头肌腱并非在所有视角完整显示。');
bindAnatomy(['肩锁关节损伤'],'shoulder','肩峰与锁骨外端连接处','关节 / 韧带');
bindAnatomy(['锁骨骨折'],'shoulder','锁骨','骨骼');
bindAnatomy(['肩关节脱位','运动相关肩关节不稳'],'shoulder','肱骨头与肩胛盂的对位','关节');
bindAnatomy(['肩关节盂唇损伤（SLAP）'],'shoulder','肩胛盂上方的盂唇','纤维软骨');
bindAnatomy(['胸大肌腱撕裂'],'shoulder','胸大肌腱的肱骨附着处','肌腱','本图为肩部骨性参照；胸大肌及肌腱不在这张关节剖示图中完整显示。');
bindAnatomy(['网球肘'],'elbow','肘外侧伸肌腱起点','肌腱');
bindAnatomy(['高尔夫球肘'],'medial-elbow','肘内上髁处的屈肌腱起点','肌腱');
bindAnatomy(['鹰嘴滑囊炎'],'elbow-bursa','鹰嘴后方滑囊','滑囊');
bindAnatomy(['肘管综合征'],'elbow-nerves','肘内侧后方经过肘管的尺神经','神经');
bindAnatomy(['肘尺侧副韧带损伤'],'medial-elbow','肘内侧尺侧副韧带','韧带','本图主要展示内侧肌腱附着；尺侧副韧带位于相邻深层，不能把肌腱当作韧带。');
bindAnatomy(['肘部肱二头肌腱撕裂'],'elbow','肘前侧肱二头肌远端肌腱','肌腱','肘部区域参照，不同肌腱的附着点需结合专业查体确认。');
bindAnatomy(['肱三头肌腱撕裂'],'elbow-bursa','鹰嘴上方的肱三头肌腱','肌腱','图中滑囊异常示例不表示同时存在滑囊炎。');
bindAnatomy(['投掷相关肘后撞击'],'elbow','肘后侧鹰嘴与肱骨之间','骨 / 软组织');
bindAnatomy(['桡骨头骨折'],'elbow','肘外侧的桡骨头','骨骼');
bindAnatomy(['肘关节脱位'],'elbow','肱骨、尺骨与桡骨的关节对位','关节');
bindAnatomy(['腕部扭伤','舟月韧带损伤'],'wrist','腕骨之间的韧带；舟月韧带连接舟骨与月骨','韧带');
bindAnatomy(['舟骨骨折'],'wrist','腕部靠拇指侧的舟骨','骨骼');
bindAnatomy(['桡骨远端骨折'],'wrist','桡骨靠近腕关节的末端','骨骼');
bindAnatomy(['三角纤维软骨复合体损伤（TFCC）'],'wrist','小指侧、尺骨远端邻近的 TFCC','纤维软骨 / 韧带','本图为腕骨韧带参照，TFCC 的全部组成未在图中展开。');
bindAnatomy(['桡骨茎突腱鞘炎'],'wrist','拇指侧通过桡骨茎突附近的肌腱与腱鞘','肌腱 / 腱鞘','本图主要显示腕骨韧带，表浅肌腱与腱鞘未完整显示。');
bindAnatomy(['尺侧腕伸肌腱损伤'],'wrist','腕背小指侧的尺侧腕伸肌腱','肌腱','肌腱走行位于腕骨表面，本图为相邻骨性结构参照。');
bindAnatomy(['腕管综合征'],'wrist','腕掌侧腕管内的正中神经','神经','本图为骨性与韧带参照，腕掌侧神经并未完整显示。');
bindAnatomy(['钩骨钩骨折'],'wrist','掌根小指侧的钩骨钩','骨骼','钩骨钩位于掌侧，并非每个腕部视角都能直接看到。');
bindAnatomy(['腰背肌拉伤','腰背软组织挫伤'],'back-muscles','腰背部脊柱旁肌肉与软组织','肌肉','图示背肌层用于区域参照，实际痛点可能位于更下方或更深层。');
bindAnatomy(['腰椎间盘突出相关神经症状'],'disc','椎间盘与邻近神经根','椎间盘 / 神经');
bindAnatomy(['腰椎峡部应力损伤'],'spine','椎弓峡部','骨骼','本图用于认识椎体和椎间盘的相邻关系，峡部不是椎间盘。');
bindAnatomy(['胸腰椎骨折'],'spine','胸腰椎椎体或其他骨性部分','骨骼');
bindAnatomy(['运动相关骶髂关节疼痛'],'sacroiliac','骶骨与髂骨之间的关节','关节');
bindAnatomy(['腹股沟肌肉拉伤'],'thigh','髋内收肌群及其附着区','肌肉','图示为下肢肌肉参照，腹股沟肌群并非全部在同一层面可见。');
bindAnatomy(['髋屈肌拉伤'],'hip-flexor','髋前侧髂腰肌等屈肌','肌肉 / 肌腱');
bindAnatomy(['髋外侧滑囊炎'],'hip','股骨大转子外侧的滑囊区域','滑囊','本图为关节骨性参照，外侧滑囊不在关节腔内。');
bindAnatomy(['股骨髋臼撞击综合征'],'hip','股骨头颈与髋臼边缘','骨 / 关节');
bindAnatomy(['运动性腹股沟痛（运动疝）'],'hip','耻骨周围的下腹与腹股沟软组织','软组织','本图提供骨盆位置参照，腹壁与内收肌附着未完整显示。');
bindAnatomy(['髋关节盂唇损伤'],'hip-labrum','髋臼边缘的关节盂唇','纤维软骨');
bindAnatomy(['疼痛性弹响髋'],'hip-flexor','髋周跨过骨性突起的肌腱','肌腱','图示为髋前侧屈肌参照；外侧弹响可能涉及不同肌腱或髂胫束。');
bindAnatomy(['骨盆附着点撕脱骨折'],'hip','骨盆上的肌腱骨性附着点','骨 / 肌腱','骨盆存在多个附着点，需影像确定具体部位。');
bindAnatomy(['髋部应力性骨折'],'hip','股骨颈等髋周承重骨结构','骨骼');
bindAnatomy(['股四头肌拉伤'],'quadriceps','大腿前侧股四头肌','肌肉');
bindAnatomy(['腘绳肌拉伤'],'hamstring','大腿后侧腘绳肌群','肌肉');
bindAnatomy(['腘绳肌近端肌腱撕脱'],'hamstring','坐骨附近腘绳肌近端附着区','肌腱 / 骨');
bindAnatomy(['大腿肌肉挫伤','大腿急性骨筋膜室综合征'],'thigh','大腿肌群及包绕肌肉的筋膜室','肌肉 / 筋膜','图示为肌群参照，不能从表面示意判断筋膜室压力。');
bindAnatomy(['髌股疼痛'],'knee-side','髌骨与股骨之间的关节面','关节 / 软骨');
bindAnatomy(['髌腱相关疼痛','髌腱撕裂'],'quad-tendon','髌骨下缘至胫骨结节之间的髌腱','肌腱');
bindAnatomy(['股四头肌腱撕裂'],'quad-tendon','髌骨上缘的股四头肌腱','肌腱');
bindAnatomy(['膝关节扭伤'],'knee','膝周韧带与关节支持组织','韧带');
bindAnatomy(['半月板损伤'],'knee','股骨与胫骨之间的半月板','纤维软骨');
bindAnatomy(['前交叉韧带损伤'],'knee','关节深部的前交叉韧带（ACL）','韧带');
bindAnatomy(['后交叉韧带损伤'],'knee','关节深部的后交叉韧带（PCL）','韧带');
bindAnatomy(['膝侧副韧带损伤'],'knee-collateral','膝内侧或外侧的侧副韧带','韧带','图示突出外侧副韧带；内侧副韧带位于另一侧。');
bindAnatomy(['髂胫束综合征'],'thigh','大腿外侧延伸至膝外侧的髂胫束','筋膜','本图为下肢肌肉参照，髂胫束并非肌腱或关节内韧带。');
bindAnatomy(['髌前滑囊炎'],'knee-side','髌骨前方皮下滑囊','滑囊','滑囊位于髌骨前方，侧面图用于认识其位置，不在关节软骨之间。');
bindAnatomy(['髌骨脱位 / 不稳'],'patella','髌骨在股骨滑车中的对位','关节');
bindAnatomy(['鹅足滑囊炎'],'knee-side','膝内侧关节线下方的鹅足肌腱滑囊区','滑囊 / 肌腱','本图为膝关节侧面参照，鹅足区域不在膝前正中央。');
bindAnatomy(['胫骨结节骨骺炎'],'quad-tendon','髌腱附着的胫骨结节','生长板 / 附着点');
bindAnatomy(['胫骨内侧应力综合征','胫骨应力性骨折'],'calf','胫骨内侧骨缘及邻近组织','骨骼','本图主要展示肌肉层，胫骨不在所有位置都能透过肌肉直接看到。');
bindAnatomy(['腓骨应力性骨折'],'calf','小腿外侧的腓骨','骨骼','肌肉层图用于相邻结构参照，不能据此推断骨折位置。');
bindAnatomy(['慢性运动性骨筋膜室综合征'],'calf','小腿肌肉及其筋膜室','肌肉 / 筋膜');
bindAnatomy(['腓肠肌拉伤（网球腿）'],'calf-strain','小腿后侧腓肠肌及肌腱肌肉交界','肌肉');
bindAnatomy(['比目鱼肌拉伤'],'calf','腓肠肌深面的比目鱼肌','肌肉');
bindAnatomy(['小腿肌肉挫伤'],'calf','小腿受撞击的肌肉区域','肌肉');
bindAnatomy(['跟腱相关疼痛'],'achilles','小腿肌群连接跟骨的跟腱','肌腱');
bindAnatomy(['跟腱断裂'],'achilles-rupture','跟腱连续性','肌腱');
bindAnatomy(['踝关节扭伤','踝周软组织挫伤','慢性踝关节不稳'],'achilles','踝周支持韧带与软组织','韧带 / 软组织','本图重点在跟腱，作为踝后方位置参照；踝外侧韧带不等于跟腱。');
bindAnatomy(['高位踝扭伤（下胫腓联合损伤）'],'calf','踝上方胫骨与腓骨之间的联合','韧带','小腿结构图为区域参照，联合韧带位于踝关节上方。');
bindAnatomy(['腓骨肌腱病'],'calf','外踝后方走行的腓骨肌腱','肌腱');
bindAnatomy(['距骨骨软骨损伤'],'achilles','距骨关节面及其下方骨组织','软骨 / 骨','本图为踝部位置参照，距骨软骨病灶需要专门影像评估。');
bindAnatomy(['踝部应力性骨折','踝关节急性骨折'],'achilles','踝周胫骨、腓骨等骨性结构','骨骼','本图主要显示踝后侧肌腱关系，不表示骨折一定在跟腱附近。');
bindAnatomy(['足底筋膜相关疼痛'],'plantar','跟骨下方延伸至前掌的足底筋膜','筋膜');
bindAnatomy(['跖骨应力性骨折','第五跖骨骨折','脚趾急性骨折'],'plantar','前足跖骨或趾骨','骨骼','本图为足底筋膜与足弓关系参照，具体骨折位置不能用筋膜痛点代替。');
bindAnatomy(['足舟骨应力性骨折','中足 Lisfranc 损伤'],'plantar','中足足舟骨或跗跖关节复合体','骨 / 韧带','本图为足部区域参照，足舟骨与跗跖韧带未在图中完整展开。');
bindAnatomy(['莫顿神经瘤'],'plantar','前掌跖骨头间的趾间神经','神经','足底筋膜图不直接显示趾间神经；神经问题不等于筋膜损伤。');
bindAnatomy(['跖痛症（前脚掌疼痛）'],'plantar','前脚掌跖骨头下方负重区','多种组织');
bindAnatomy(['拇趾跖趾关节扭伤','籽骨炎'],'plantar','大脚趾根部关节及其足底侧籽骨','关节 / 骨','本图为足弓及足底参照，拇趾关节与籽骨未完整展开。');
bindAnatomy(['跟骨骨骺炎（Sever 病）'],'achilles','跟骨后方生长板与跟腱附着区','生长板','适用于生长阶段；图中成人样式结构仅作位置参照。');

// 骨性损伤、关节韧带损伤使用相应的骨/韧带图，而不是跟腱或足底筋膜图。
conditionAnatomy['肩袖相关疼痛'].asset='rotator';
conditionAnatomy['肩袖相关疼痛'].note='展示正常肩袖肌群作为结构参照；肩袖相关疼痛并不等于存在肌腱撕裂。';
for (const name of ['前交叉韧带损伤','后交叉韧带损伤','半月板损伤','膝关节扭伤','髌腱相关疼痛','髌腱撕裂']) conditionAnatomy[name].asset='knee-ligaments';
conditionAnatomy['髌股疼痛'].asset='knee';
conditionAnatomy['髌前滑囊炎'].note='滑囊位于髌骨前方皮下，本图为膝内部结构参照，未直接显示表浅滑囊。';
conditionAnatomy['鹅足滑囊炎'].note='鹅足区域在膝内侧关节线下方；本图用于膝关节内部位置参照，未直接显示鹅足滑囊。';
conditionAnatomy['肘尺侧副韧带损伤'].asset='elbow-nerves';
conditionAnatomy['肘尺侧副韧带损伤'].note='图中同时显示内侧尺侧副韧带及尺神经；两者不是同一结构。';
conditionAnatomy['髂胫束综合征'].note='本图为大腿前内侧解剖参照；髂胫束位于大腿外侧，未在此图完整展开。';
for (const name of ['踝关节扭伤','踝周软组织挫伤','慢性踝关节不稳','高位踝扭伤（下胫腓联合损伤）','距骨骨软骨损伤','踝部应力性骨折','踝关节急性骨折']) {
 conditionAnatomy[name].asset='ankle-ligaments';
 conditionAnatomy[name].note=name.includes('高位')?'重点关注踝关节上方胫腓联合，不要与踝外侧的距腓前韧带混淆。':name.includes('骨软骨')?'本图显示距骨与踝关节的关系，软骨下损伤需影像确认。':'图示为正常解剖参照，不能据此判断韧带损伤分级或骨折形态。';
}
for (const name of ['跖骨应力性骨折','第五跖骨骨折','脚趾急性骨折','足舟骨应力性骨折','中足 Lisfranc 损伤','跖痛症（前脚掌疼痛）','拇趾跖趾关节扭伤','籽骨炎','莫顿神经瘤']) {
 conditionAnatomy[name].asset='foot-bones';
 conditionAnatomy[name].note=['莫顿神经瘤','中足 Lisfranc 损伤','拇趾跖趾关节扭伤','籽骨炎'].includes(name)?'本图显示足部骨骼作为位置参照；神经、韧带及足底籽骨并非都能在背侧视图直接看到。':'正常足骨图用于认识具体骨骼位置，并非骨折或病变的检查影像。';
}
for (const name of ['舟骨骨折','桡骨远端骨折','钩骨钩骨折']) {
 conditionAnatomy[name].asset='hand-bones';
 conditionAnatomy[name].note='正常手腕骨骼的掌侧结构参照；骨折形态及是否移位需要影像确认。';
}
Object.assign(conditionAnatomy['跖骨应力性骨折'],{focus:'前足跖骨的骨干或基底部，具体骨位需检查确认'});
Object.assign(conditionAnatomy['第五跖骨骨折'],{focus:'小趾一侧、足外缘的第五跖骨'});
Object.assign(conditionAnatomy['脚趾急性骨折'],{focus:'受伤脚趾的趾骨'});
Object.assign(conditionAnatomy['足舟骨应力性骨折'],{focus:'距骨前方、中足偏内侧的足舟骨'});
Object.assign(conditionAnatomy['中足 Lisfranc 损伤'],{focus:'中足与前足交界的跗跖关节及稳定韧带'});
Object.assign(conditionAnatomy['拇趾跖趾关节扭伤'],{focus:'大脚趾根部第一跖趾关节及足底侧支持组织'});
Object.assign(conditionAnatomy['籽骨炎'],{focus:'第一跖骨头足底侧的籽骨区域'});
Object.assign(conditionAnatomy['腕部扭伤'],{focus:'腕关节周围及腕骨之间的韧带'});
Object.assign(conditionAnatomy['舟月韧带损伤'],{focus:'舟骨与月骨之间的舟月韧带'});

function getAnatomy(item) {
 const entry=conditionAnatomy[item[0]];
 if (!entry) throw new Error('缺少解剖图匹配：'+item[0]);
 const location=getAnatomyLocation(item[0]);
 if(location.asset==='foot-plantar') return {...entry,conditionName:item[0],asset:'foot-plantar',title:'足底骨骼与软组织定位',view:'右足足底 · 透视教学示意',parts:['跖骨头负重区','第一跖趾关节','第一跖骨头下方籽骨','足底筋膜与足跟'],focus:anatomyChineseText(entry.focus),note:'足底透视示意，结构未按比例绘制；着色范围用于对照位置。',location,credit:{custom:true,artist:'动察 · 原创足底教学示意',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',page:'https://www.orthoinfo.org/diseases--conditions/sesamoiditis/'}};
 const asset=location.asset;
 const raw=anatomyCredits[asset];
 const credit={...raw,licenseUrl:raw.licenseUrl||'https://creativecommons.org/publicdomain/mark/1.0/'};
 if(asset==='ankle-ligaments')credit.artist='Jak';
 const note=location.detail||(asset===entry.asset?entry.note:'');
 return {...entry,...anatomyPlates[asset],asset,note,conditionName:item[0],location,focus:anatomyChineseText(entry.focus),parts:anatomyPlates[asset].parts.map(part=>part.split(' · ')[0]),credit};
}
function renderAnatomy(item) {
 const plate=getAnatomy(item),credit=plate.credit;
 return `<figure class="anatomy-card"><div class="anatomy-heading"><div><span class="eyebrow">局部解剖图</span><h4>${plate.title}</h4></div><span class="anatomy-view">${plate.view}</span></div><div class="anatomy-focus"><span>${plate.tissue}</span><p><strong>本条目关注：</strong>${plate.focus}</p></div><button class="anatomy-open" type="button" data-open-anatomy aria-label="放大查看${plate.title}">${renderAnatomyGraphic(plate)}<span>⤢ 放大查看</span></button>${renderLocationKey(plate)}<figcaption><div class="anatomy-parts"><h5>结构中文名称</h5><ul>${plate.parts.map(part=>`<li>${part}</li>`).join('')}</ul></div><div class="anatomy-location"><h5>疼痛可能出现的位置</h5><p>${item[2]}</p></div>${plate.note?`<p class="anatomy-context">${plate.note}</p>`:''}<p class="anatomy-note">图为正常结构或教学病变示例，并非个人检查影像；底图用于结构参照；编号与着色为本条目新增定位，深层结构位置不等于表面痛点。</p><p class="anatomy-credit">插图：${credit.artist} · <a href="${credit.page}" target="_blank" rel="noopener">${credit.custom?'结构参考':'原图与署名'}</a> · <a href="${credit.licenseUrl}" target="_blank" rel="noopener">${credit.license}</a> · 中文标注改编</p></figcaption></figure>`;
}
function openAnatomy(item) {
 const plate=getAnatomy(item);
 let dialog=document.getElementById('anatomy-dialog');
 if(!dialog){dialog=document.createElement('dialog');dialog.id='anatomy-dialog';dialog.className='anatomy-dialog';dialog.setAttribute('aria-labelledby','anatomy-dialog-title');document.body.append(dialog);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});}
 dialog.innerHTML=`<div class="anatomy-dialog-head"><div><span>${plate.view}</span><h2 id="anatomy-dialog-title">${item[0]} · ${plate.title}</h2></div><button type="button" data-close-anatomy aria-label="关闭解剖图">×</button></div><p class="anatomy-dialog-focus">关注结构：${plate.focus}</p>${renderAnatomyGraphic(plate,true)}${renderLocationKey(plate)}<p class="anatomy-dialog-note">${plate.note||'通用解剖或教学示例，不代表个人损伤形态。'} 可在触屏上使用浏览器缩放查看。</p><p class="anatomy-credit">${plate.credit.artist} · <a href="${plate.credit.page}" target="_blank" rel="noopener">${plate.credit.custom?'结构参考':'原图'}</a> · <a href="${plate.credit.licenseUrl}" target="_blank" rel="noopener">${plate.credit.license}</a> · 中文标注改编</p>`;
 dialog.querySelector('[data-close-anatomy]').addEventListener('click',()=>dialog.close());
 dialog.showModal();
}
