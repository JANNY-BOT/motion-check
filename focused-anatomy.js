// JANNY-BOT 原创 SVG 教学定位图，CC BY-SA 4.0。
// 通过独立视角补充原图缺失的目标结构；不是检查影像或按比例解剖模型。
const diagramPath=(d,type='bone')=>`<path class="d-${type}" d="${d}"/>`;
const diagramEllipse=(x,y,rx,ry,type='bone')=>`<ellipse class="d-${type}" cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`;
const diagramLabel=(text,x,y,tx,ty)=>`<g class="diagram-label"><path d="M${x<320?x+215:x-10} ${y-8} L${tx} ${ty}"/><circle cx="${tx}" cy="${ty}" r="4"/><text x="${x}" y="${y}">${text}</text></g>`;
const focusedTemplates={
 kneeBack:{title:'膝后腘窝与囊肿位置',view:'右膝后侧 · 由身后观察',parts:['腘窝','半膜肌腱','腓肠肌内侧头','腘窝囊肿示例'],orientation:['内侧','外侧'],draw:()=>
  diagramPath('M360 115 Q335 235 360 325 Q375 370 355 420 Q325 545 377 675 L555 675 Q605 545 575 420 Q550 370 580 325 Q600 235 570 115Z','skin')+
  diagramPath('M410 120 Q388 240 438 335 L466 388','tendon')+diagramPath('M525 120 Q548 240 510 335 L490 390','tendon')+
  diagramPath('M463 402 Q380 402 385 490 Q395 575 454 640 Q485 522 463 402Z','muscle')+diagramPath('M489 402 Q559 406 553 492 Q540 575 478 640 Q455 526 489 402Z','muscle')+
  diagramPath('M375 367 Q465 390 558 367','crease')+diagramPath('M445 365 Q466 367 479 390','capsule')+diagramEllipse(431,378,36,48,'cyst')+
  diagramLabel('半膜肌腱',35,200,426,299)+diagramLabel('腘窝囊肿示例',35,370,431,378)+diagramLabel('腘窝（膝后凹处）',675,290,484,366)+diagramLabel('腓肠肌内侧头',35,560,425,490)},
 kneeSide:{title:'膝侧面 · 髌腱与脂肪垫',view:'膝关节侧面剖示',parts:['髌骨','髌腱','髌下脂肪垫','股骨与胫骨'],orientation:['前方','后方'],draw:()=>
  diagramPath('M437 125 L570 125 L562 270 Q615 340 554 403 Q515 435 460 398 Q408 367 439 300Z')+
  diagramPath('M420 492 Q491 456 581 483 L559 663 L444 663Z')+
  diagramEllipse(365,320,31,57)+diagramPath('M371 373 L417 497','tendon')+
  diagramPath('M389 386 Q433 390 478 441 L422 478Z','fat')+
  diagramPath('M418 463 Q496 446 583 461','cartilage')+
  diagramLabel('髌骨',35,272,365,317)+diagramLabel('髌腱',35,455,396,435)+diagramLabel('脂肪垫 · 在髌腱深面',645,425,428,430)+diagramLabel('胫骨',675,590,507,578)+diagramLabel('股骨',675,205,513,226)},
 kneeFront:{title:'膝前内侧 · 滑膜皱襞',view:'右膝前侧 · 透视示意',parts:['髌骨','内侧滑膜皱襞','股骨','髌腱'],orientation:['外侧','内侧'],draw:()=>
  diagramPath('M376 120 L548 120 L555 300 Q605 355 552 430 L390 430 Q333 355 374 300Z')+
  diagramPath('M375 470 Q460 450 555 470 L537 670 L395 670Z')+
  diagramPath('M397 278 Q464 240 540 287 L540 431 Q465 476 389 424Z','capsule')+
  diagramEllipse(465,353,51,64)+diagramPath('M455 415 L461 536','tendon')+
  diagramPath('M529 287 Q575 336 537 406 Q525 368 535 337Z','plica')+
  diagramLabel('髌骨',35,307,465,352)+diagramLabel('髌腱',35,543,460,488)+diagramLabel('内侧滑膜皱襞',675,329,543,343)+diagramLabel('胫骨',675,605,494,590)},
 shoulderFront:{title:'肩前侧 · 肌腱与前胸',view:'右肩前侧 · 局部透视',parts:['肱二头肌长头腱','胸大肌腱','肱二头肌','肱骨'],orientation:['外侧 / 上臂','内侧 / 胸部'],draw:()=>
  diagramPath('M315 150 Q410 90 548 163 L643 190 L645 440 Q586 451 535 409 L517 680 L350 680 L335 340 Q278 259 315 150Z','skin')+
  diagramEllipse(422,217,61,64)+diagramPath('M391 254 L454 254 L477 660 L394 660Z')+
  diagramPath('M411 353 Q352 401 398 575 Q420 624 454 570 Q493 407 444 353Z','muscle')+
  diagramPath('M448 167 Q412 182 414 249 L425 361','tendon')+
  diagramPath('M641 199 L642 410 Q557 399 463 331 L456 292 Q549 257 641 199Z','muscle')+
  diagramPath('M461 292 L456 332 L438 341 L437 292Z','tendonFill')+
  diagramLabel('长头腱（肩前侧）',30,230,414,256)+diagramLabel('肱二头肌',30,511,424,470)+diagramLabel('胸大肌',685,250,580,314)+diagramLabel('胸大肌腱附着',685,403,449,318)},
 elbowFront:{title:'肘前侧 · 肌腱与桡管',view:'右肘前侧 · 掌心朝前',parts:['肱二头肌远端腱','桡骨粗隆','桡管区域','桡神经深支'],orientation:['外侧 / 拇指侧','内侧 / 小指侧'],draw:()=>
  diagramPath('M350 120 L550 120 L565 325 Q579 378 550 435 L525 680 L371 680 L337 435 Q318 366 340 310Z','skin')+
  diagramPath('M415 130 L488 130 L495 322 Q512 367 477 390 L410 390 Q376 367 412 322Z')+
  diagramPath('M389 405 Q354 393 355 432 L380 674 L411 674Z')+diagramPath('M470 392 Q521 394 509 440 L497 674 L461 674Z')+
  diagramPath('M405 133 Q367 248 423 324 L456 324 Q500 228 469 133Z','muscle')+
  diagramPath('M439 322 Q433 387 393 443','tendon')+
  diagramPath('M350 326 Q329 386 366 452 Q384 494 395 545','nerve')+
  diagramPath('M352 417 Q410 421 423 485 L385 510 Q360 470 352 417Z','capsule')+
  diagramLabel('肱二头肌远端腱',650,320,421,388)+diagramLabel('桡骨粗隆附着区',650,486,393,443)+diagramLabel('桡神经深支走行',25,276,347,367)+diagramLabel('桡管 / 旋后肌区',25,565,371,462)},
 wristBack:{title:'腕背 · 尺侧肌腱与囊肿',view:'左手背侧 · 手指朝上',parts:['尺侧腕伸肌腱','尺骨远端','腕背关节','腱鞘囊肿示例'],orientation:['小指侧','拇指侧'],draw:()=>
  diagramPath('M379 676 L370 413 Q340 332 350 237 L350 160 Q365 131 379 160 L392 254 L400 126 Q418 103 431 132 L439 246 L454 119 Q472 94 486 125 L488 246 L506 151 Q526 128 537 158 L527 292 L568 254 Q593 243 597 265 L543 371 Q517 411 523 476 L525 676Z','skin')+
  diagramPath('M411 664 L410 444 L393 421 L388 397 L430 397 L443 664Z')+diagramPath('M482 662 L475 432 L457 402 L504 392 L511 422 L510 664Z')+
  diagramPath('M392 369 Q450 337 513 364 L512 395 Q450 417 388 392Z','cartilage')+
  diagramPath('M394 665 Q389 502 383 411 L382 351 L370 294','tendon')+
  diagramPath('M447 378 L452 350','capsule')+diagramEllipse(451,345,29,21,'cyst')+
  diagramLabel('尺侧腕伸肌腱',25,580,386,489)+diagramLabel('尺骨远端',25,423,407,416)+diagramLabel('腕背囊肿示例',665,295,451,345)+diagramLabel('腕背关节',665,440,492,380)},
 lumbar:{title:'腰椎后方 · 椎弓峡部与小关节',view:'单个腰椎 · 侧后方结构关系示意',parts:['椎体','椎弓峡部','上关节突','下关节突'],orientation:['前方 / 椎体','后方 / 椎弓'],draw:()=>
  diagramPath('M317 300 Q367 260 425 299 L426 475 Q374 513 317 476Z')+
  diagramPath('M425 328 L491 337 L539 295 L579 319 L555 374 L582 417 L633 432 L633 463 L563 469 L535 425 L503 443 L468 401 L425 399Z')+
  diagramPath('M503 443 L524 510 L568 521 L571 487 L550 428Z')+
  diagramEllipse(558,315,24,20,'cartilage')+diagramEllipse(548,500,22,16,'cartilage')+
  diagramPath('M530 352 L544 400','crease')+
  diagramLabel('椎体',30,290,365,385)+diagramLabel('上关节突关节面',650,235,558,315)+diagramLabel('椎弓峡部',650,395,538,380)+diagramLabel('下关节突',650,565,549,499)+
  '<text x="300" y="620" class="diagram-subtext">小关节由相邻两节椎骨的关节突组成</text>'},
 pelvis:{title:'骨盆 · 肌腱附着与腹股沟',view:'骨盆前侧 · 透视示意',parts:['髂前上棘','髂前下棘','耻骨联合','坐骨结节'],orientation:['右侧','左侧'],draw:()=>
  diagramPath('M446 251 Q381 149 304 231 Q292 314 352 382 L399 410 Q350 451 374 509 Q401 549 445 496 L467 421 L491 496 Q535 550 563 509 Q592 456 540 410 L589 380 Q650 313 628 230 Q551 145 491 250Z')+
  diagramPath('M424 389 Q388 401 401 454 Q420 472 435 435Z','hole')+diagramPath('M510 389 Q552 401 538 454 Q517 473 501 435Z','hole')+
  diagramPath('M441 149 L461 385 L480 385 L497 149','muscle')+
  diagramPath('M369 574 Q415 469 459 404 L476 404 Q513 466 558 573','tendon')+
  diagramLabel('髂前上棘',30,230,324,284)+diagramLabel('髂前下棘',30,339,349,337)+diagramLabel('下腹 / 耻骨联合',650,240,468,402)+diagramLabel('坐骨结节（深部投影）',620,570,393,502)+diagramLabel('内收肌附着方向',30,596,420,481)},
 lowerLeg:{title:'小腿外侧 · 腓骨与神经',view:'右小腿外侧 · 透视示意',parts:['腓骨头','腓骨','腓总神经','外踝'],orientation:['后方','前方'],draw:()=>
  diagramPath('M367 115 L551 115 Q590 284 541 447 L528 608 Q580 623 621 660 L610 690 L391 690 Q371 657 388 606 L355 403 Q318 243 367 115Z','skin')+
  diagramPath('M466 143 L512 143 L498 583 L468 583Z')+
  diagramEllipse(404,243,25,31)+diagramPath('M394 271 L416 273 L437 618 Q424 647 409 618Z')+
  diagramPath('M374 141 L375 210 Q361 248 403 265 Q447 276 449 338 L467 539','nerve')+
  diagramLabel('腓骨头',25,254,404,243)+diagramLabel('腓总神经绕行区',635,320,403,265)+diagramLabel('腓骨（外侧细骨）',25,499,417,469)+diagramLabel('外踝',635,604,424,616)},
 heel:{title:'跟后 · 跟腱与两层滑囊',view:'足跟侧面剖示',parts:['跟腱','跟骨','跟骨后滑囊','皮下跟骨滑囊'],orientation:['后方','前方'],draw:()=>
  diagramPath('M342 130 L535 130 L516 346 Q531 421 658 466 Q686 488 669 540 L359 552 Q319 513 332 452 L342 130Z','skin')+
  diagramPath('M408 443 Q435 395 507 428 L584 477 L560 518 L402 515Z')+
  diagramPath('M380 140 Q370 295 398 449','tendon')+
  diagramEllipse(417,405,17,30,'cyst')+diagramEllipse(359,413,13,29,'cyst')+
  diagramLabel('跟腱',30,222,382,268)+diagramLabel('皮下滑囊',30,423,359,413)+diagramLabel('跟骨后滑囊',650,326,417,405)+diagramLabel('跟骨',650,525,476,470)},
 ankleOuter:{title:'踝外侧 · 腓骨肌腱走行',view:'右踝外侧 · 脚尖向右',parts:['腓骨','外踝','腓骨长短肌腱','足外侧'],orientation:['后方','前方'],draw:()=>
  diagramPath('M345 120 L531 120 L527 390 Q548 458 668 503 L701 545 Q677 579 586 576 L353 565 Q310 533 331 468Z','skin')+
  diagramPath('M433 138 L466 138 L478 426 Q463 460 443 432Z')+
  diagramPath('M399 143 Q400 299 416 425 Q402 489 499 509 L598 531','tendon')+
  diagramPath('M384 143 Q381 309 399 431 Q388 506 481 526 L543 556','tendon')+
  diagramLabel('外踝（腓骨远端）',650,320,461,422)+diagramLabel('外踝后方肌腱',25,400,409,421)+diagramLabel('腓骨肌腱走行',25,575,469,512)},
 back:{title:'腰背受力区域定位',view:'背侧 · 体表区域示意',parts:['脊柱中线','脊柱旁肌群','腰背软组织'],orientation:['左侧','右侧'],draw:()=>
  diagramPath('M398 137 L531 137 Q548 170 616 188 L586 400 L566 657 L365 657 L347 400 L315 188 Q380 170 398 137Z','skin')+
  diagramPath('M468 166 L468 614','crease')+
  diagramPath('M439 247 Q400 427 416 590 L447 598 L451 255Z','muscle')+diagramPath('M487 255 L489 598 L524 590 Q543 420 498 247Z','muscle')+
  diagramLabel('脊柱中线',650,240,468,314)+diagramLabel('脊柱旁软组织',25,452,425,448)},
 thigh:{title:'大腿肌群 · 受累范围',view:'右大腿前侧与横断面',parts:['前侧肌群','内侧肌群','后侧肌群','股骨'],orientation:['外侧','内侧'],draw:()=>
  diagramPath('M368 125 Q323 295 370 600 L531 600 Q586 292 542 125Z','skin')+
  diagramPath('M387 168 Q349 339 392 540 L437 568 L441 173Z','muscle')+diagramPath('M461 172 L461 566 L511 535 Q549 317 523 167Z','muscle')+
  '<g transform="translate(0,35)">'+diagramEllipse(706,338,98,107,'skin')+diagramEllipse(706,338,17,22)+diagramPath('M699 315 L631 286 Q699 225 778 287 L720 317Z','muscle')+diagramPath('M686 348 L624 316 Q606 386 676 426 L696 360Z','muscle')+diagramPath('M722 354 L744 429 Q800 397 795 320Z','muscle')+'</g>'+
  diagramLabel('前侧肌群',25,285,408,323)+'<text x="610" y="520" class="diagram-subtext">横断面：可涉及不同肌群</text>'},
 calf:{title:'小腿肌群 · 受累范围',view:'小腿前侧与横断面',parts:['胫骨','前侧肌群','外侧肌群','后侧肌群'],orientation:['外侧','内侧'],draw:()=>
  diagramPath('M353 123 L523 123 Q568 273 524 452 L502 657 L390 657 L372 452 Q324 265 353 123Z','skin')+
  diagramPath('M451 180 L478 180 L467 620 L449 620Z')+
  diagramPath('M407 177 Q352 313 402 476 L435 579 L433 184Z','muscle')+
  diagramEllipse(706,346,95,107,'skin')+diagramPath('M685 300 L725 299 L737 339 L686 352Z')+diagramEllipse(645,354,12,15)+
  diagramPath('M672 292 Q714 247 774 311 L747 333 L730 286Z','muscle')+diagramPath('M670 371 L747 355 L785 390 Q704 466 642 403Z','muscle')+
  diagramLabel('胫骨',25,541,462,520)+'<text x="605" y="516" class="diagram-subtext">横断面：前、外、后侧筋膜室</text>'}
};

const focusedAnatomy={};
function focusDiagram(names,template,points,label,detail,options={}){
 for(const name of names)focusedAnatomy[name]={template,points,label,detail,...options};
}
focusDiagram(['腘窝囊肿（Baker 囊肿）'],'kneeBack',[[431,378,47,57]],'膝后偏内侧 · 腘窝囊肿常见位置','蓝色为囊肿示例，红色为局部胀痛或肿包常见区域；大小和形状因人而异，不能凭图鉴别肿块性质。');
focusDiagram(['髌下脂肪垫撞击（Hoffa 综合征）'],'kneeSide',[[428,431,42,37]],'髌腱深面 · 髌下脂肪垫','黄色结构位于髌腱后方、髌骨下方；红色表示关注的深层组织，表面痛可在髌腱两侧。',{deep:true});
focusDiagram(['膝滑膜皱襞综合征'],'kneeFront',[[542,344,27,58]],'髌骨内缘旁 · 内侧滑膜皱襞','示出常见内侧型的组织位置；皱襞可为正常结构，出现疼痛并不等于皱襞一定是病因。',{deep:true});
focusDiagram(['肱二头肌长头腱炎','肩部肱二头肌腱撕裂'],'shoulderFront',[[415,267,26,78]],'肩前侧 · 长头腱走行','绿色为肌腱，红色覆盖肩前侧长头腱区域；疼痛、淤青可延伸至上臂，图不区分腱炎与撕裂。',{deep:true});
focusDiagram(['胸大肌腱撕裂'],'shoulderFront',[[450,316,32,40]],'前腋窝皱襞附近 · 胸大肌腱','标出胸肌向肱骨附着的区域；撕裂位置、回缩与淤青范围并不固定。',{deep:true});
focusDiagram(['肘部肱二头肌腱撕裂'],'elbowFront',[[420,389,33,66]],'肘前窝 · 远端肌腱至桡骨附着','绿色显示肌腱由肘前窝斜向桡骨粗隆附着；红色用于定位，不表示具体撕裂形态。',{deep:true});
focusDiagram(['桡管综合征'],'elbowFront',[[370,445,38,61]],'肘外下方 · 桡管区域','金色为神经走行示意，局部范围位于肘外侧向下的近端前臂；症状位置不等于精确受压点。',{deep:true});
focusDiagram(['尺侧腕伸肌腱损伤'],'wristBack',[[385,420,24,74]],'腕背小指侧 · 尺侧腕伸肌腱','绿色显示肌腱沿尺骨远端后方的走行，红色标出腕背小指侧的关注区域。',{hideCyst:true});
focusDiagram(['腕部腱鞘囊肿'],'wristBack',[[451,345,39,31]],'腕背中央囊肿示例','展示常见腕背型；掌侧也可出现囊肿，不能用此图排除其他位置的肿块或深部囊肿。');
focusDiagram(['腰椎峡部应力损伤'],'lumbar',[[538,380,22,34]],'椎弓峡部 · 上下关节突之间','虚线标出后方骨桥区域，区别于前方椎体与椎间盘；体表疼痛不一定能指出具体节段。',{deep:true});
focusDiagram(['腰椎小关节相关疼痛'],'lumbar',[[558,315,30,25],[548,500,28,22]],'相邻椎骨关节突接合处','标记上下关节突关节面作为位置参照；小关节由相邻椎骨共同组成，疼痛来源需查体判断。',{deep:true});
focusDiagram(['运动性腹股沟痛（运动疝）'],'pelvis',[[468,395,53,50]],'下腹与耻骨交界 · 肌腱附着区','标出腹壁及内收肌在耻骨附近的关系；症状可偏一侧，不表示髋关节腔内损伤。');
focusDiagram(['骨盆附着点撕脱骨折'],'pelvis',[[324,284,20,22],[349,337,20,22],[393,502,23,23]],'骨盆常见撕脱附着点示例','依次示髂前上棘、髂前下棘和坐骨结节；可能只累及其中一处，也可在其他附着点发生，需影像确定。',{deep:true,multiple:true});
focusDiagram(['腓骨应力性骨折'],'lowerLeg',[[419,513,21,64]],'小腿外侧 · 腓骨下段示例','细长骨为腓骨；标记为常见骨性关注区域，不是固定骨折位置或骨折线。',{deep:true});
focusDiagram(['腓总神经受压 / 损伤'],'lowerLeg',[[401,264,43,35]],'腓骨头颈周围 · 神经绕行区','金色线路为神经简化走行；麻木可延伸至小腿外侧与足背，红色不代表完整感觉范围。',{deep:true});
focusDiagram(['跟后滑囊炎'],'heel',[[417,405,23,36],[359,413,20,35]],'跟腱前后 · 深、浅两处滑囊','蓝色分别表示跟腱与跟骨之间、跟腱与皮肤之间的滑囊；可能只累及一处，不代表同时发炎。',{multiple:true});
focusDiagram(['腓骨肌腱病'],'ankleOuter',[[409,427,27,57],[481,513,55,25]],'外踝后下方 · 腓骨肌腱','绿色肌腱绕过外踝后方再走向足部；红色沿肌腱标记，区别于踝外侧韧带。');
focusDiagram(['腰背软组织挫伤'],'back',[[399,393,46,130],[535,393,46,130]],'腰背两侧软组织 · 受撞击范围因人而异','浅红范围仅帮助对照身体区域；实际疼痛应对应受撞击位置，可在标记以外，不能以图排除深部损伤。',{variable:true});
focusDiagram(['大腿肌肉挫伤','大腿急性骨筋膜室综合征'],'thigh',[[447,350,95,203]],'大腿肌群 · 可能受累范围','范围示意，不是固定病灶。前、内、后侧肌群均可能受累；筋膜室压力无法由外观或痛点判断。',{variable:true});
focusDiagram(['慢性运动性骨筋膜室综合征','小腿肌肉挫伤'],'calf',[[437,354,82,177]],'小腿肌群 · 可能受累范围','前侧、外侧或后侧均可能出现症状；横断面用于理解筋膜室，图示范围不能判断压力或排除急症。',{variable:true});
focusDiagram(['踝周软组织挫伤'],'ankleOuter',[[442,442,90,75]],'踝周软组织 · 受撞击范围因人而异','展示外侧区域供定位；内侧、前方或后方也可能受撞击，红色不是一条指定受伤韧带。',{variable:true});

const originalGetAnatomy=getAnatomy;
getAnatomy=function(item){
 const config=focusedAnatomy[item[0]];
 if(!config)return originalGetAnatomy(item);
 const template=focusedTemplates[config.template],asset='focused-'+config.template;
 const condition=conditionAnatomy[item[0]];
 const url=expandedSources[item[6]]||condition.referenceUrl||'https://www.orthoinfo.org/';
 return {...condition,...template,asset,conditionName:item[0],focused:config,
  title:config.hideCyst?'腕背 · 尺侧腕伸肌腱':template.title,
  parts:config.hideCyst?template.parts.filter(part=>part!=='腱鞘囊肿示例'):template.parts,
  focus:config.label,note:'原创定位示意：组织形态经过简化，未按比例绘制；左右侧可作镜像参照。',
  location:{asset,points:config.points,label:config.label,kind:config.deep?'deep':'area',detail:config.detail},
  credit:{custom:true,artist:'JANNY-BOT · 动察原创定位图',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',page:url}};
};
const originalOpenAnatomy=openAnatomy;
openAnatomy=function(item){
 originalOpenAnatomy(item);
 if(!focusedAnatomy[item[0]])return;
 const dialog=document.getElementById('anatomy-dialog'),svg=dialog.querySelector('.focused-graphic');
 const scroll=document.createElement('div');scroll.className='focused-diagram-scroll';scroll.id='focused-diagram-scroll';
 scroll.setAttribute('role','region');scroll.setAttribute('aria-label','定位图，放大后可左右滑动');scroll.tabIndex=0;
 svg.replaceWith(scroll);scroll.append(svg);
 const zoom=document.createElement('button');zoom.type='button';zoom.className='focused-zoom';zoom.textContent='放大标注 · 可左右滑动';
 zoom.setAttribute('aria-pressed','false');zoom.setAttribute('aria-controls',scroll.id);scroll.before(zoom);
 zoom.addEventListener('click',()=>{const active=scroll.classList.toggle('is-zoomed');zoom.setAttribute('aria-pressed',String(active));zoom.textContent=active?'恢复全图':'放大标注 · 可左右滑动';if(active)scroll.scrollLeft=(scroll.scrollWidth-scroll.clientWidth)/2;});
};
function renderFocusedAnatomy(plate,large=false){
 const c=plate.focused,t=focusedTemplates[c.template];
 const marks=c.points.map(([x,y,rx,ry],i)=>`<g><ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#d75b4a" fill-opacity="${c.variable?'.1':'.2'}" stroke="#c24d36" stroke-width="3" ${c.deep||c.variable?'stroke-dasharray="8 6"':''}/><circle cx="${x}" cy="${y}" r="15" fill="#b84736" stroke="white" stroke-width="2"/><text x="${x}" y="${y+6}" text-anchor="middle" fill="white" font-size="19">${c.multiple?i+1:1}</text></g>`).join('');
 return `<svg class="anatomy-graphic focused-graphic${large?' anatomy-graphic-large':''}" viewBox="0 0 960 800" role="img" aria-label="${t.title}：${c.label}"><style>.d-skin{fill:#fcf0e5;stroke:#caa98d;stroke-width:3}.d-bone{fill:#e9dfc7;stroke:#ac9a7a;stroke-width:3}.d-muscle{fill:#e7b0a4;stroke:#bb8176;stroke-width:2}.d-tendon{fill:none;stroke:#83a99d;stroke-width:13;stroke-linecap:round}.d-tendonFill{fill:#a7c7b9;stroke:#648a7c;stroke-width:2}.d-nerve{fill:none;stroke:#c59639;stroke-width:9;stroke-linecap:round}.d-cyst{fill:#aed8e1;stroke:#528e9c;stroke-width:3;${c.hideCyst?'display:none;':''}}.d-cartilage{fill:#c9dcd6;stroke:#7eaaa0;stroke-width:6}.d-capsule{fill:#d4e6dc;fill-opacity:.3;stroke:#789f8f;stroke-width:3}.d-fat{fill:#efce75;stroke:#bf943a;stroke-width:3}.d-plica{fill:#b8d5bf;stroke:#648d70;stroke-width:3}.d-hole{fill:#fff8f2;stroke:#c2af94;stroke-width:2}.d-crease{fill:none;stroke:#a88575;stroke-width:3;stroke-dasharray:7 5}.diagram-label path{fill:none;stroke:#8a948c;stroke-width:1.8}.diagram-label circle{fill:#8a948c}.diagram-label text{fill:#415348;font-size:22px}.diagram-subtext{fill:#728275;font-size:19px}</style><rect width="960" height="800" rx="14" fill="#fffdfa"/><text x="32" y="48" fill="#32614d" font-size="25" font-weight="600">${t.view}</text><text x="32" y="87" fill="#7b887f" font-size="20">图左：${t.orientation[0]}　｜　图右：${t.orientation[1]}</text>${c.hideCyst?t.draw().replace(diagramLabel('腕背囊肿示例',665,295,451,345),''):t.draw()}<g class="condition-location-markers">${marks}</g><rect x="25" y="715" width="910" height="64" rx="12" fill="#fff0e8"/><text x="45" y="742" fill="#a14f3d" font-size="21">${c.variable?'范围示意 · 位置随受伤情况变化':c.deep?'虚线 · 深层结构所在区域':'红色 · 疼痛或肿包常见区域'}</text><text x="45" y="769" fill="#7f786e" font-size="18">${c.multiple?'多个标记为不同可能位置，不代表同时受伤。':'用于对照方向与邻近结构，不表示个人病灶或确诊结果。'}</text></svg>`;
}
