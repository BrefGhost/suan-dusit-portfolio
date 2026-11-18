
const mk={
  1:'<div class="m-labs"><i></i><i></i><i></i></div>',
  2:'<div class="m-win"><b></b><b></b><b></b><u></u><s></s><s></s><s></s></div>',
  3:'<div class="m-phone"><em class="m-qr"></em><s></s></div>',
  4:'<div class="m-vid"><span>▶</span><div class="m-bed"></div></div>',
  5:'<div class="m-vid"><span>▶</span><div class="m-frames"><i></i><i></i><i></i></div></div>',
  6:'<div class="m-win m-tbl"><b></b><b></b><b></b><u></u><s></s><s></s><s></s><s></s></div>',
  7:'<div class="m-phone m-tt"><span>▶</span><s></s></div>'
};
const mock=id=>mk[id]||'';

const interns=[
  {name:'นางสาวผาณิตา ปลีบุตร',id:'6611011660070',division:'ฝ่ายสำนักกิจการพิเศษ',role:'สนับสนุนห้องปฏิบัติการและออกแบบงานดิจิทัล',initial:'ผป',photo:'images/student-phanita.jpg'},
  {name:'นายปฐมพร รักภักดี',id:'6611011660058',division:'ฝ่ายสำนักกิจการพิเศษ',role:'สนับสนุนห้องปฏิบัติการและออกแบบงานดิจิทัล',initial:'ปร',photo:'images/student-pathomphon.jpg'},
  {name:'นายศุภกรณ์ สุขดำรงศักดิ์',id:'6611011660057',division:'ฝ่ายโรงแรม',role:'ผลิตสื่อวิดีโอการเรียนการสอน',initial:'ศส',photo:'images/student-supakorn.jpg'},
  {name:'นายภาคิน นิลสนธิ์',id:'6611011660068',division:'ฝ่ายครัว',role:'ออกแบบเว็บไซต์จัดเก็บข้อมูลครุภัณฑ์',initial:'ภน',photo:'images/student-phakhin.jpg'},
  {name:'นางสาวบุณยาพร พูลจันทร์',id:'6611011660056',division:'ฝ่ายบริหารกาย',role:'ผลิตคอนเทนต์วิดีโอสำหรับ TikTok',initial:'บพ',photo:'images/student-bunyaporn.jpg'}
];

const projects=[
  {
    id:1,division:'special',divisionName:'ฝ่ายสำนักกิจการพิเศษ',
    title:'ดูแลห้องปฏิบัติการคอมพิวเตอร์ 1 และ 2',
    description:'ดูแลความเรียบร้อยและความพร้อมใช้งานของห้องปฏิบัติการคอมพิวเตอร์ 1 และ 2 เพื่อรองรับการใช้งานและกิจกรรมต่าง ๆ',
    category:'Lab Support',icon:'⌘',short:'COMPUTER LABS',
    image:'images/project-cover-1.jpg',
    gallery:[1,2,3,4].map(i=>'images/lab-'+i+'.jpg'),
    galleryTitle:'ภาพกิจกรรมดูแลห้องปฏิบัติการคอมพิวเตอร์',
    modalNote:'ภาพกิจกรรมจริงจากการดูแลห้องปฏิบัติการคอมพิวเตอร์',
    color:'linear-gradient(135deg,#0b1b42,#2563eb)',people:[0,1]
  },
  {
    id:2,division:'special',divisionName:'ฝ่ายสำนักกิจการพิเศษ',
    title:'ออกแบบหน้าเว็บไซต์สำนักกิจการพิเศษ',
    description:'ออกแบบหน้าเว็บไซต์ของสำนักกิจการพิเศษให้มีความสวยงาม ชัดเจน และสะดวกต่อการใช้งาน',
    category:'Web Design',icon:'▣',short:'WEB EXPERIENCE',
    image:'images/project-cover-2.jpg',
    figmaUrl:'https://www.figma.com/design/GzMOGMT0Lixq9BG2lweFwg/AssignmentTheOfficeOfBusinessAffairs?node-id=0-1&p=f',
    modalNote:'ภาพหน้าปกผลงานออกแบบเว็บไซต์สำนักกิจการพิเศษ พร้อมลิงก์ไปยังงานออกแบบ Figma',
    color:'linear-gradient(135deg,#2563eb,#38bdf8)',people:[0,1]
  },
  {
    id:3,division:'special',divisionName:'ฝ่ายสำนักกิจการพิเศษ',
    title:'ออกแบบระบบสั่งอาหารผ่าน QR Code',
    description:'ออกแบบประสบการณ์สั่งอาหารผ่าน QR Code เพื่อให้การดูรายการอาหาร ค้นหาเมนู เลือกภาษา ตรวจสอบรายการ และสั่งซื้อได้สะดวกยิ่งขึ้น',
    category:'Digital System',icon:'▦',short:'QR ORDERING',
    image:'images/project-cover-3.jpg',
    gallery:[1,2,3,4,5,6,7].map(i=>'images/qr-order-'+i+'.jpg'),
    galleryTitle:'ภาพหน้าจอระบบสั่งอาหารผ่าน QR Code',
    modalNote:'ภาพหน้าจอจริงของระบบสั่งอาหารผ่าน QR Code ที่ออกแบบและพัฒนา',
    color:'linear-gradient(135deg,#173fb1,#8266ff)',people:[0,1,2,3,4],collaborative:true
  },
  {
    id:4,division:'hotel',divisionName:'ฝ่ายโรงแรม',
    title:'คลิปสื่อการเรียนการสอน: การปูเตียงตามมาตรฐาน',
    description:'ผลิตคลิปวิดีโอสื่อการเรียนการสอนเพื่อสาธิตขั้นตอนการปูเตียงตามมาตรฐานงานโรงแรม',
    image:'images/project-cover-4.jpg',
    localVideo:'videos/hotel-bed-making.mp4',
    category:'Video Production',icon:'▶',short:'HOTEL TRAINING',
    color:'linear-gradient(135deg,#166eaa,#3bc4d8)',people:[2]
  },
  {
    id:5,division:'hotel',divisionName:'ฝ่ายโรงแรม',
    title:'คลิปสื่อการเรียนการสอน: การจัดวางตามมาตรฐาน',
    description:'ผลิตคลิปวิดีโอสื่อการเรียนการสอนเกี่ยวกับการจัดวางตามมาตรฐานงานโรงแรม',
    image:'images/project-cover-5.jpg',
    localVideo:'videos/hotel-standard-setup.mp4',
    category:'Video Production',icon:'▤',short:'STANDARD SETUP',
    color:'linear-gradient(135deg,#123e8c,#5691ed)',people:[2]
  },
  {
    id:6,division:'kitchen',divisionName:'ฝ่ายครัว',
    title:'ออกแบบเว็บไซต์จัดเก็บข้อมูลครุภัณฑ์',
    description:'ออกแบบเว็บไซต์เพื่อจัดระเบียบ บันทึก และค้นคืนข้อมูลครุภัณฑ์และอุปกรณ์ของฝ่ายครัว',
    category:'Web Design',icon:'▥',short:'INVENTORY SYSTEM',
    image:'images/project-cover-6.jpg',
    gallery:[1,2,3,4,5,6,7,8].map(i=>'images/kitchen-system-'+i+'.jpg'),
    galleryTitle:'ภาพหน้าจอระบบจัดเก็บข้อมูลครุภัณฑ์',
    modalNote:'ภาพหน้าจอจากระบบจัดเก็บข้อมูลครุภัณฑ์ที่ออกแบบ',
    color:'linear-gradient(135deg,#173c81,#16a5b8)',people:[3]
  },
  {
    id:7,division:'physical',divisionName:'ฝ่ายบริหารกาย',
    title:'ผลิตคลิปคอนเทนต์สำหรับ TikTok',
    description:'วางแผนและผลิตวิดีโอคอนเทนต์รูปแบบสั้นสำหรับ TikTok เพื่อสื่อสารกิจกรรมของฝ่ายบริหารกายอย่างน่าสนใจ พร้อมมีภาพปกแสดงก่อนกดเข้าชมคลิป',
    category:'Social Media',icon:'♫',short:'SHORT-FORM VIDEO',
    image:'images/project-cover-7.jpg',
    gallery:[1,2,3,4,5].map(i=>'images/tiktok-'+i+'.jpg'),
    galleryTitle:'ภาพปกและตัวอย่างคอนเทนต์ TikTok',
    modalNote:'ภาพปกคอนเทนต์ก่อนกดเข้าสู่คลิป TikTok',
    videos:[
      {url:'https://vt.tiktok.com/ZSpWHg9Km/',cover:'images/tiktok-1.jpg',label:'คลิปคอนเทนต์ TikTok ที่ 1'},
      {url:'https://vt.tiktok.com/ZSpWHmHXo/',cover:'images/tiktok-2.jpg',label:'คลิปคอนเทนต์ TikTok ที่ 2'},
      {url:'https://vt.tiktok.com/ZSpWHXdpF/',cover:'images/tiktok-3.jpg',label:'คลิปคอนเทนต์ TikTok ที่ 3'},
      {url:'https://vt.tiktok.com/ZSpWHfMMH/',cover:'images/tiktok-4.jpg',label:'คลิปคอนเทนต์ TikTok ที่ 4'}
    ],
    color:'linear-gradient(135deg,#202c80,#895dea)',people:[4]
  }
  ,{
    id:8,division:'hotel',divisionName:'ฝ่ายโรงแรม',
    title:'ออกแบบอินโฟกราฟิกเพื่อการโฆษณาและนำเสนอขายโรงแรมสวนดุสิตเพลส',
    description:'ออกแบบสื่ออินโฟกราฟิกประชาสัมพันธ์ห้องพัก ห้องประชุม ห้องฝึกอบรม และพื้นที่บริการของโรงแรมสวนดุสิตเพลส เพื่อให้ทีมฝ่ายขายนำไปใช้แนะนำสถานที่ รูปแบบการใช้งาน และข้อมูลแพ็กเกจแก่ลูกค้าได้อย่างชัดเจนและน่าสนใจ',
    category:'Marketing Infographic',icon:'▧',short:'HOTEL SALES MEDIA',
    image:'images/hotel-infographic-cover.png',
    gallery:[1,2,3,4,5,6,7,8,9].map(i=>'images/hotel-infographic-'+i+'.jpg'),
    galleryTitle:'ตัวอย่างอินโฟกราฟิกเพื่อการนำเสนอขาย (9 แบบ)',
    galleryCaptions:[
      ['ห้องกุมาริกา','ประชาสัมพันธ์ห้องประชุมสัมมนาและจัดเลี้ยง พร้อมตัวอย่างการจัดพื้นที่'],
      ['ห้องกาหลา — แบบที่ 1','แนะนำทางเลือกการจัดห้องและรูปแบบกิจกรรมสำหรับลูกค้ากลุ่มต่าง ๆ'],
      ['ห้องกาหลา — แบบที่ 2','นำเสนอภาพบรรยากาศและการจัดพื้นที่อีกแนวทางสำหรับทีมฝ่ายขาย'],
      ['ศาลาชื่นอารมณ์','สื่อแนะนำพื้นที่สำหรับการประชุมและกิจกรรมกลุ่มขนาดใหญ่'],
      ['ห้อง 1119','แสดงตัวอย่างการจัดโต๊ะประชุมและสิ่งอำนวยความสะดวกในห้อง'],
      ['ห้อง 1215','สื่อแนะนำบรรยากาศและรูปแบบการใช้งานห้องประชุม'],
      ['Lecture Room','ประชาสัมพันธ์พื้นที่บรรยายและการฝึกอบรมในรูปแบบห้องเรียน'],
      ['Mock Up Room','นำเสนอห้องตัวอย่างสำหรับฝึกปฏิบัติและการเรียนรู้'],
      ['Lab Computer','สื่อแนะนำห้องปฏิบัติการคอมพิวเตอร์สำหรับการอบรม']
    ],
    modalNote:'สื่อออกแบบสำหรับนำเสนอข้อมูลพื้นที่และบริการให้ทีมฝ่ายขายใช้ประกอบการพูดคุยกับลูกค้า • รายละเอียดและราคาที่ปรากฏในภาพเป็นข้อมูลบนชิ้นงานตัวอย่าง ควรตรวจสอบก่อนนำไปเสนอขายจริง',
    color:'linear-gradient(135deg,#063925,#b99542)',people:[0,1,2,3,4],collaborative:true
  }

];

const grid=document.getElementById('projectGrid'),teamGrid=document.getElementById('teamGrid'),filters=document.getElementById('filters'),modal=document.getElementById('projectModal');
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderProjects(filter='all'){
  const visible=projects.filter(p=>filter==='all'||p.division===filter);
  grid.innerHTML=visible.map(p=>`<article class="project-card reveal">
    <div class="project-visual ${p.localVideo?'has-local-video':''}" style="--visual-bg:${p.color}" ${p.localVideo?'':`role="img" aria-label="ภาพประกอบสำหรับ${escapeHtml(p.title)}"`}>
      ${p.image?`<img class="project-image" src="${escapeHtml(p.image)}" alt="ภาพผลงาน ${escapeHtml(p.title)}" loading="lazy"><span class="media-note">${p.localVideo?'โปสเตอร์คลิปสื่อการสอน':p.id===8?'ภาพปกอินโฟกราฟิก':'ภาพกิจกรรม / ผลงานจริง'}</span>`:`<div class="visual-art">${mock(p.id)}<strong>${escapeHtml(p.short)}</strong></div><span class="media-note">ภาพกราฟิกตัวอย่าง</span>`}
      ${p.localVideo?`<button class="project-video-launch" type="button" data-project-video="${p.id}" aria-label="เปิดหน้ารับชมคลิป ${escapeHtml(p.title)}"><span aria-hidden="true">▶</span><strong>ชมคลิปผลงาน</strong></button>`:''}
    </div>
    <div class="project-body"><span class="tag">${escapeHtml(p.category)}</span><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="project-meta"><div><strong>ฝ่าย:</strong> ${escapeHtml(p.divisionName)}</div><div><strong>${p.collaborative?'ผลงานร่วม 5 คน:':'ผู้รับผิดชอบ:'}</strong> ${p.people.map(i=>escapeHtml(interns[i].name)).join(', ')}</div></div><button class="detail-button" type="button" data-project="${p.id}" aria-label="ดูรายละเอียด ${escapeHtml(p.title)}">ดูรายละเอียดโปรเจกต์ ↗</button></div>
  </article>`).join('');
}
function selectFilter(key){filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===key)));renderProjects(key)}
filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)selectFilter(b.dataset.filter)});
document.addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(b){selectFilter(b.dataset.jump);document.getElementById('mobileNav').classList.remove('open');document.getElementById('menuToggle').setAttribute('aria-expanded','false')}});

function renderProjectDetails(p){
  const modalVisual=document.getElementById('modalVisual');
  const modalIcon=document.getElementById('modalIcon');
  const gallery=document.getElementById('modalGallery');
  modalVisual.style.background=p.color;
  // Only projects 4 and 5 get an in-page HTML5 video player. All other projects stay unchanged.
  modalIcon.setAttribute('aria-hidden',p.localVideo?'false':'true');
  if(p.localVideo){
    modalIcon.innerHTML=`<div class="hotel-video-stage" data-hotel-video-stage>
      <video class="hotel-video-player" controls playsinline preload="metadata" poster="${escapeHtml(p.image)}" aria-label="วิดีโอ ${escapeHtml(p.title)}">
        <source src="${escapeHtml(p.localVideo)}" type="video/mp4">
        เบราว์เซอร์นี้ไม่รองรับการเล่นวิดีโอ HTML5
      </video>
      <div class="hotel-video-standby">
        <img src="${escapeHtml(p.image)}" alt="โปสเตอร์ ${escapeHtml(p.title)}">
        <div class="hotel-video-standby-content"><span class="hotel-video-icon" aria-hidden="true">▶</span><strong>พื้นที่แสดงคลิปผลงาน</strong><span data-video-state role="status">กำลังตรวจสอบไฟล์วิดีโอ...</span></div>
      </div>
    </div>`;
  }else{
    modalIcon.innerHTML=p.image?`<img class="modal-cover-image" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">`:mock(p.id);
  }
  modalVisual.classList.toggle('has-image',!!p.image&&!p.localVideo);
  modalVisual.classList.toggle('has-local-video',!!p.localVideo);

  let html='';
  if(p.localVideo){
    html+=`<div class="hotel-video-info"><strong>วิดีโอสื่อการเรียนการสอน</strong><p>เมื่อมีไฟล์ MP4 ให้วางไว้ที่ <code>${escapeHtml(p.localVideo)}</code> ระบบจะแสดงเครื่องเล่นวิดีโอด้านบนโดยอัตโนมัติ พร้อมปุ่มเล่น หยุด ปรับเสียง และเต็มหน้าจอ</p></div>`;
  }
  if(p.gallery?.length){
    if(p.id===8){
      html+=`<p class="hotel-gallery-intro">ตัวอย่างสื่อประชาสัมพันธ์สำหรับนำเสนอขายแก่ลูกค้า คลิกภาพเพื่อดูในพื้นที่แสดงภาพขนาดใหญ่ด้านบน</p><div class="hotel-gallery-grid">${p.gallery.map((src,i)=>`<article class="hotel-gallery-card"><button type="button" class="hotel-gallery-image" data-src="${escapeHtml(src)}" aria-label="ดูภาพ ${escapeHtml(p.galleryCaptions[i][0])}"><img src="${escapeHtml(src)}" alt="อินโฟกราฟิก ${escapeHtml(p.galleryCaptions[i][0])}" loading="lazy"></button><div class="hotel-gallery-caption"><strong>${escapeHtml(p.galleryCaptions[i][0])}</strong><p>${escapeHtml(p.galleryCaptions[i][1])}</p></div></article>`).join('')}</div>`;
    }else{
      html+=`<h3>${escapeHtml(p.galleryTitle||'ภาพผลงาน')} (${p.gallery.length} ภาพ)</h3><div class="gallery-thumbs">${p.gallery.map((src,i)=>`<button type="button" class="gallery-thumb ${i===0?'active':''}" data-src="${escapeHtml(src)}" aria-label="ดูภาพที่ ${i+1}"><img src="${escapeHtml(src)}" alt="ภาพประกอบ ${escapeHtml(p.title)} ลำดับที่ ${i+1}" loading="lazy"></button>`).join('')}</div>`;
    }
  }
  if(p.videos?.length){
    html+=`<h3 class="video-section-title">คลิปคอนเทนต์ TikTok (${p.videos.length} รายการ)</h3><div class="video-preview-grid">${p.videos.map((video,i)=>`<a class="video-preview-card" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer"><div class="video-preview-thumb">${video.cover?`<img src="${escapeHtml(video.cover)}" alt="ภาพปก ${escapeHtml(video.label||('คลิป TikTok ที่ '+(i+1)))}" loading="lazy">`:''}<span class="video-preview-play">▶</span></div><div class="video-preview-meta"><strong>${escapeHtml(video.label||('คลิป TikTok ที่ '+(i+1)))}</strong><span>กดเพื่อเปิดชมคลิปใน TikTok ↗</span></div></a>`).join('')}</div><p class="video-disclaimer">คลิปจะเปิดใน TikTok และต้องเชื่อมต่ออินเทอร์เน็ต</p>`;
  }
  if(p.figmaUrl){
    html+=`<div class="design-source"><h3>ต้นฉบับงานออกแบบ</h3><p>ดูรายละเอียดหน้าจอและองค์ประกอบ UI/UX ของเว็บไซต์ใน Figma</p><a class="figma-link" href="${escapeHtml(p.figmaUrl)}" target="_blank" rel="noopener noreferrer">เปิดผลงานบน Figma ↗</a></div>`;
  }
  if(p.collaborative){
    html+=`<section class="joint-credit"><h3>เครดิตผลงานร่วม</h3><p>โปรเจกต์นี้เป็นผลงานร่วมกันของนักศึกษาฝึกงานทั้ง 5 คน จาก 4 ฝ่าย</p><div class="credit-list">${p.people.map(i=>`<div><strong>${escapeHtml(interns[i].name)}</strong><span>${escapeHtml(interns[i].division)} · ${escapeHtml(interns[i].id)}</span></div>`).join('')}</div></section>`;
  }
  gallery.innerHTML=html;

  document.getElementById('modalMediaNote').textContent=p.localVideo?'รองรับคลิป MP4 สำหรับผลงานนี้โดยเฉพาะ':p.modalNote|| (p.videos?.length?'หมายเหตุ: คลิกดูวิดีโอผลงานผ่านลิงก์ TikTok ด้านล่าง':p.image?'หมายเหตุ: ภาพหน้าจอจากระบบที่พัฒนา':'หมายเหตุ: ภาพประกอบเป็นกราฟิกตัวอย่าง สามารถเปลี่ยนเป็นภาพผลงานจริงได้ภายหลัง');
  document.getElementById('modalCategory').textContent=p.category;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalDescription').textContent=p.description;
  document.getElementById('modalDivision').textContent=p.divisionName;
  document.getElementById('modalPeople').textContent=(p.collaborative?'ผลงานร่วม 5 คน: ':'')+p.people.map(i=>interns[i].name+' ('+interns[i].id+')').join(', ');
  modal.showModal();
  if(p.localVideo){
    const stage=modalIcon.querySelector('[data-hotel-video-stage]');
    const player=stage.querySelector('video');
    const status=stage.querySelector('[data-video-state]');
    const ready=()=>{stage.classList.add('is-ready');status.textContent='พร้อมรับชม'};
    const missing=()=>{if(!stage.classList.contains('is-ready'))status.textContent='ยังไม่มีไฟล์คลิป — เพิ่มไฟล์ MP4 ตามตำแหน่งที่ระบุด้านล่าง';};
    player.addEventListener('loadedmetadata',ready,{once:true});
    player.addEventListener('error',missing,{once:true});
    player.querySelector('source')?.addEventListener('error',missing,{once:true});
    if(player.readyState>=1)ready();
    else player.load();
  }
}

grid.addEventListener('click',e=>{
  const b=e.target.closest('[data-project-video],[data-project]');if(!b)return;
  const id=b.dataset.projectVideo||b.dataset.project;
  const p=projects.find(p=>p.id===Number(id));if(p)renderProjectDetails(p);
});
document.getElementById('modalGallery').addEventListener('click',e=>{const b=e.target.closest('[data-src]');if(!b)return;const img=document.querySelector('#modalIcon img');if(img){img.src=b.dataset.src;document.getElementById('modalVisual').scrollIntoView({block:'nearest',behavior:'smooth'});document.querySelectorAll('.gallery-thumb').forEach(x=>x.classList.toggle('active',x===b));}});
document.getElementById('modalClose').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
modal.addEventListener('close',()=>{modal.querySelectorAll('video').forEach(video=>video.pause())});

// ID-badge cards: barcode bars are derived from each student ID, so every badge is unique
const barcode=id=>[...String(id)].map(d=>`<i style="--b:${1+d%3}px"></i><i style="--b:${1+(9-d)%2}px"></i>`).join('');
teamGrid.innerHTML=interns.map(p=>`<article class="team-card id-badge" tabindex="0" aria-label="${escapeHtml(p.name)} · ${escapeHtml(p.division)}">
  <span class="badge-slot" aria-hidden="true"></span>
  <span class="badge-org">มหาวิทยาลัยสวนดุสิต</span>
  <div class="badge-photo"><img src="${escapeHtml(p.photo)}" alt="ภาพนักศึกษา ${escapeHtml(p.name)}" loading="lazy" decoding="async"></div>
  <h3 class="badge-name">${p.name.split(' ').map(w=>`<span>${escapeHtml(w)}</span>`).join(' ')}</h3>
  <div class="badge-id">ID: ${escapeHtml(p.id)}</div>
  <span class="badge-dept">${escapeHtml(p.division)}</span>
  <span class="badge-barcode" aria-hidden="true">${barcode(p.id)}</span>
</article>`).join('');
const toggle=document.getElementById('menuToggle'),nav=document.getElementById('mobileNav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'ปิดเมนู':'เปิดเมนู');toggle.textContent=open?'✕':'☰'});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','เปิดเมนู');toggle.textContent='☰'}});
renderProjects();

/* ===== v2 upgrades: Gen Z bounce layer ===== */
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,$=s=>document.querySelector(s);
$('#mt').innerHTML=Array(8).fill(['ฝ่ายสำนักกิจการพิเศษ','ฝ่ายโรงแรม','ฝ่ายครัว','ฝ่ายบริหารกาย'].map(n=>`<span>${n}</span><span>✦</span>`).join('')).join('');
const sync=()=>{grid.dataset.n=grid.children.length};sync();
if(!RM){
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');io.unobserve(t);if(t.classList.contains('rv'))setTimeout(()=>{t.classList.remove('rv','in');t.style.transitionDelay=''},1300)}),{threshold:.12});
const watch=()=>grid.querySelectorAll('.project-card').forEach(c=>io.observe(c));watch();
new MutationObserver(()=>{sync();watch()}).observe(grid,{childList:true});
document.querySelectorAll('.eyebrow,.section-title,.feature,.team-card,.division-strip,.filters,.closing .container>*').forEach((el,i)=>{if(el.closest('.hero'))return;el.classList.add('rv');el.style.transitionDelay=(i%4)*.09+'s';io.observe(el)});
// headline bounce-in
const seg=new Intl.Segmenter('th',{granularity:'word'});let k=0;
const wrapW=n=>[...n.childNodes].forEach(c=>{if(c.nodeType==3){const f=document.createDocumentFragment();for(const{segment:s}of seg.segment(c.textContent)){const sp=document.createElement('span');sp.className='w';sp.textContent=s;sp.style.animationDelay=(k++*.07+.15)+'s';f.append(sp)}c.replaceWith(f)}else wrapW(c)});wrapW($('.hero h1'));
// count-up stats
document.querySelectorAll('.hero-statistics strong').forEach(b=>{const n=+b.textContent;b.textContent='00';let t=0;setTimeout(()=>{const iv=setInterval(()=>{b.textContent=String(Math.round(n*++t/10)).padStart(2,'0');if(t>=10)clearInterval(iv)},90)},2200)});
// jelly + hop
const jel=el=>{if(el._j&&el._j.playState=='running')return;el._j=el.animate([{scale:'1'},{scale:'1.25 .78',offset:.25},{scale:'.88 1.14',offset:.5},{scale:'1.06 .96',offset:.75},{scale:'1'}],{duration:650})};
const hop=el=>{if(el._j&&el._j.playState=='running')return;el._j=el.animate([{translate:'0 0',scale:'1',rotate:'0deg'},{translate:'0 -26px',scale:'1.2 .85',rotate:'-6deg',offset:.4},{translate:'0 0',scale:'.9 1.15',rotate:'3deg',offset:.7},{translate:'0 0',scale:'1',rotate:'0deg'}],{duration:600,easing:'cubic-bezier(.34,1.6,.5,1)'})};
// drag with elastic spring-back
const DR='.glow-orb,.glass-panel,.sparkle,.avatar,.feature,.feature-icon,.project-card,.division-pills a,.hero-statistics>div';
let drag=null,moved=false;
const spring=el=>{let x=el._x||0,y=el._y||0,vx=0,vy=0;cancelAnimationFrame(el._r);(function f(){vx=(vx-x*.11)*.87;vy=(vy-y*.11)*.87;x+=vx;y+=vy;el._x=x;el._y=y;const L=Math.hypot(x,y);el.style.translate=`${x}px ${y}px`;el.style.rotate=x/12+'deg';el.style.scale=`${1+L/900} ${1-L/1500}`;if(Math.abs(x)+Math.abs(y)+Math.abs(vx)+Math.abs(vy)>.3)el._r=requestAnimationFrame(f);else{el.style.translate=el.style.rotate=el.style.scale='';el._x=el._y=0}})()};
document.addEventListener('pointerdown',e=>{const el=e.target.closest(DR);if(!el||e.button>0)return;cancelAnimationFrame(el._r);drag={el,x0:e.clientX-(el._x||0),y0:e.clientY-(el._y||0),on:false}});
document.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x0,dy=e.clientY-drag.y0;if(!drag.on){if(Math.hypot(dx,dy)<7)return;drag.on=true;try{drag.el.setPointerCapture(e.pointerId)}catch(_){}}const L=Math.hypot(dx,dy)||1,m=170*Math.tanh(L/170)/L,el=drag.el;el._x=dx*m;el._y=dy*m;const R=Math.hypot(el._x,el._y);el.style.translate=`${el._x}px ${el._y}px`;el.style.rotate=el._x/12+'deg';el.style.scale=`${1+R/900} ${1-R/1500}`});
const rel=()=>{if(!drag)return;const d=drag;drag=null;if(d.on){moved=true;setTimeout(()=>moved=false,0);spring(d.el)}};
addEventListener('pointerup',rel);addEventListener('pointercancel',rel);
addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault()}},true);
document.addEventListener('pointerover',e=>{const w=e.target.closest('.w,.tag,.feature-icon,.avatar,.hero-statistics>div,.division-pills a,.btn,.filter');if(!w||w.contains(e.relatedTarget)||drag)return;w.classList.contains('w')?hop(w):jel(w)});
// confetti + click sparkles
const conf=(x,y,n=36)=>{for(let i=0;i<n;i++){const s=document.createElement('i'),c=['#2563EB','#38BDF8','#E0F2FE','#fff','#8266ff'][i%5];s.style.cssText=`position:fixed;left:${x}px;top:${y}px;width:${6+Math.random()*8}px;height:${10+Math.random()*10}px;background:${c};border-radius:${i%3?2:9}px;z-index:250;pointer-events:none`;document.body.append(s);const a=-Math.PI/2+(Math.random()-.5)*2.4,d=140+Math.random()*260;s.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) rotate(${Math.random()*720}deg)`,opacity:1,offset:.45},{transform:`translate(${Math.cos(a)*d*1.2}px,${Math.sin(a)*d+300}px) rotate(${Math.random()*1000}deg)`,opacity:0}],{duration:1500+Math.random()*600,easing:'cubic-bezier(.2,.7,.4,1)'}).onfinish=()=>s.remove()}};
window.conf=conf;setTimeout(()=>conf(innerWidth/2,innerHeight*.35),2500);$('.brand').addEventListener('click',e=>conf(e.clientX,e.clientY,30));
document.addEventListener('click',e=>{if(!e.target.closest('.btn,.filter,.detail-button,.division-pills a,.menu-toggle'))return;for(let i=0;i<12;i++){const s=document.createElement('span');s.textContent=['✦','✧','💙','✨'][i%4];s.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;z-index:250;pointer-events:none;font-size:${12+Math.random()*14}px;color:#38BDF8`;document.body.append(s);const a=Math.random()*6.28,d=50+Math.random()*70;s.animate([{transform:'translate(-50%,-50%) scale(.3)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(1.3) rotate(${Math.random()*360}deg)`,opacity:0}],{duration:800,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>s.remove()}});
if(matchMedia('(pointer:fine)').matches){
// 3D tilt + magnetic buttons (delegated, works after filter re-render)
const TL='.project-card,.feature',MG='.btn,.filter';
document.addEventListener('pointermove',e=>{if(e.pointerType!='mouse'||(drag&&drag.on))return;const el=e.target.closest(TL);if(el){const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transition='transform .12s';el.style.transform=`perspective(800px) translateY(-8px) rotateX(${-y*8}deg) rotateY(${x*10}deg)`}const b=e.target.closest(MG);if(b){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px) scale(1.06)`}});
document.addEventListener('pointerout',e=>{for(const [s,t] of [[TL,'tilt'],[MG,'mag']]){const el=e.target.closest(s);if(el&&!el.contains(e.relatedTarget)){el.style.transition='';el.style.transform=''}}});
// hero 3D parallax
const art=$('.hero-art');if(art&&innerWidth>1020)document.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;art.style.transform=`perspective(1000px) rotateY(${x*12}deg) rotateX(${-y*9}deg)`});
// cursor blob
const cur=document.createElement('div');cur.className='cur';document.body.append(cur);let mx=0,my=0,cx=0,cy=0;
addEventListener('pointermove',e=>{if(e.pointerType!='mouse')return;mx=e.clientX;my=e.clientY;cur.classList.add('on');const hot=e.target.closest('a,button'),big=!hot&&e.target.closest(DR);cur.classList.toggle('hot',!!hot);cur.classList.toggle('big',!!big||!!(drag&&drag.on));cur.textContent=cur.classList.contains('big')?'ลาก':''});
document.addEventListener('mouseout',e=>{if(!e.relatedTarget)cur.classList.remove('on')});
(function loop(){cx+=(mx-cx)*.2;cy+=(my-cy)*.2;cur.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(loop)})();
}
// scroll-velocity skew
let ly=scrollY,sv=0;(function sk(){const v=scrollY-ly;ly=scrollY;sv+=(v-sv)*.12;const st=document.documentElement.style;st.setProperty('--sk',Math.max(-3,Math.min(3,sv*.15))+'deg');st.setProperty('--sk2',Math.max(-14,Math.min(14,-sv*.5))+'deg');requestAnimationFrame(sk)})();
}

/* ===== v2.1 smooth-motion layer ===== */
if(!RM){
const prog=document.createElement('div');prog.className='prog';document.body.append(prog);
const hd=$('.site-header'),heroIn=$('.hero-inner>div:first-child'),heroArt=$('.hero-art');
let pp=0,ps=scrollY;
// inertial mouse-wheel scrolling (trackpads and touch keep native scrolling)
if(matchMedia('(pointer:fine)').matches){let tgt=scrollY,cur=scrollY,run=false;
const mx=()=>document.documentElement.scrollHeight-innerHeight;
addEventListener('wheel',e=>{const d=e.deltaY*(e.deltaMode==1?32:1);if(e.ctrlKey||Math.abs(d)<50||Math.abs(e.deltaX)>Math.abs(d)||document.querySelector('dialog[open]'))return;e.preventDefault();if(!run)tgt=cur=scrollY;tgt=Math.max(0,Math.min(mx(),tgt+d));run=true},{passive:false});
(function f(){if(run){cur+=(tgt-cur)*.1;if(Math.abs(tgt-cur)<.5){cur=tgt;run=false}scrollTo({top:cur,behavior:'instant'})}requestAnimationFrame(f)})()}
// sliding nav pill
const nav=$('.desktop-nav'),pill=document.createElement('i');pill.className='nav-pill';nav.append(pill);
const links=[...nav.querySelectorAll('a')],secs=links.map(a=>document.querySelector(a.getAttribute('href')));let act=null,last=-2;
const go=a=>{if(!a){pill.style.opacity=0;return}pill.style.opacity=1;pill.style.left=a.offsetLeft+'px';pill.style.width=a.offsetWidth+'px'};
links.forEach(a=>{a.addEventListener('pointerenter',()=>go(a));a.addEventListener('pointerleave',()=>go(act))});
// card spotlight follows the pointer
document.addEventListener('pointermove',e=>{const c=e.target.closest('.project-card,.team-card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')});
// one smooth loop: progress bar, header, parallax, active link
(function loop(){const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;ps+=(y-ps)*.12;pp+=(y/(m||1)-pp)*.15;prog.style.transform=`scaleX(${pp})`;hd.classList.toggle('sc',y>40);
if(y<innerHeight*1.3){if(heroIn)heroIn.style.translate=`0 ${ps*.1}px`;if(heroArt)heroArt.style.translate=`0 ${-ps*.06}px`}
document.querySelectorAll('.visual-art').forEach(a=>{const r=a.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;a.style.translate=`0 ${(r.top+r.height/2-innerHeight/2)*-.04}px`});
let k=-1;secs.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<innerHeight*.45)k=i});if(k!==last){last=k;act=links[k]||null;go(act)}
requestAnimationFrame(loop)})();
}

/* ===== v2.2 pretty + bouncy layer ===== */
document.querySelectorAll('.section-title span[style]').forEach(s=>s.classList.add('gt'));
const up=document.createElement('button');up.className='up';up.setAttribute('aria-label','กลับขึ้นด้านบน');up.textContent='↑';document.body.append(up);
up.onclick=()=>{scrollTo({top:0,behavior:'smooth'});if(window.conf)conf(innerWidth-50,innerHeight-60,24)};
addEventListener('scroll',()=>up.classList.toggle('show',scrollY>700),{passive:true});
if(!RM){
const hart=$('.hero-art');
if(hart)[['ring','left:2%;top:6%'],['cube','right:14%;top:2%'],['ball','left:46%;bottom:2%'],['cube sm','left:-3%;bottom:30%'],['ring sm','right:0;top:44%']].forEach(([c,s],i)=>{const d=document.createElement('div');d.className='sparkle shp '+c;d.style.cssText=s+`;animation-delay:${-i*1.3}s`;hart.append(d)});
const cl=$('.closing');if(cl)new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){if(window.conf)conf(innerWidth/2,innerHeight*.7,50);o.disconnect()}},{threshold:.5}).observe(cl);
if(matchMedia('(pointer:fine)').matches){let lt=0;addEventListener('pointermove',e=>{if(e.pointerType!='mouse')return;const n=performance.now();if(n-lt<70)return;lt=n;const s=document.createElement('span');s.textContent=['✦','✧','·'][Math.random()*3|0];s.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;z-index:299;pointer-events:none;color:#38BDF8;font-size:${10+Math.random()*10}px`;document.body.append(s);s.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:.9},{transform:`translate(${(Math.random()-.5)*30}px,${20+Math.random()*30}px) scale(.2) rotate(180deg)`,opacity:0}],{duration:700,easing:'ease-out'}).onfinish=()=>s.remove()})}
}

/* ===== v3: preloader and accent theming ===== */
(()=>{const pre=$('#pre');if(!pre)return;if(RM){pre.remove();document.body.classList.add('ready');return}
let n=0;const pn=$('#pn'),t=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*7));pn.textContent=n;if(n>=100){clearInterval(t);setTimeout(()=>{pre.classList.add('go');document.body.classList.add('ready');setTimeout(()=>pre.remove(),1200)},260)}},60)})();
// filter: exit animation + per-division accent colour
(()=>{const acc={all:'#38bdf8',special:'#2563eb',hotel:'#06b6d4',kitchen:'#6366f1',physical:'#8b5cf6'},_sf=selectFilter;let busy=0,want=0;
selectFilter=k=>{$('#projects').style.setProperty('--acc',acc[k]||acc.all);const cs=[...grid.children];if(RM||!cs.length)return _sf(k);if(busy){want=k;return}busy=1;
cs.forEach((c,i)=>c.animate([{opacity:0,transform:'scale(.7) rotate(4deg)'}],{duration:260,delay:i*35,fill:'forwards',easing:'ease-in'}));
setTimeout(()=>{_sf(k);busy=0;if(want&&want!==k){const w=want;want=0;selectFilter(w)}else want=0},260+cs.length*35)}})();
