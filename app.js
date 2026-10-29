/* Café des Amis v4 concept — behaviour, bilingual content (EN/TH), in-page menus.
   All menu items and prices transcribed from the restaurant's own published menus
   (CDA Food Menu 27 Sept 2026, Seafood Chef Menu Aug 2026, Wine by the Glass Dec 2025,
   Wine List Sept 2026, cafe-des-amis.com vegetarian & children's menu pages). */
(function () {
  'use strict';
  var d = document.documentElement;
  d.classList.add('js');

  /* ---------------- Thai strings for static copy (EN lives in the HTML) ---------------- */
  var TH = {
    'skip': 'ข้ามไปยังเนื้อหา',
    'nav.courses': 'เมนูคอร์ส', 'nav.menu': 'เมนู', 'nav.rooms': 'สวนและห้องอาหาร', 'nav.gin': 'จินและไวน์', 'nav.occ': 'โอกาสพิเศษ', 'nav.visit': 'การเดินทาง',
    'cta.reserve': 'จองโต๊ะ', 'cta.table': 'จองโต๊ะ', 'cta.menu': 'ดูเมนู',
    'hero.kicker': 'ร้านอาหารไฟน์ไดนิ่ง พัทยา',
    'hero.lede': 'อาหารยุโรปและฝรั่งเศสอันประณีต เสิร์ฟใต้แสงเทียนในสวนคอร์ทยาร์ด ท้ายซอย 11',
    'f.hours.t': 'เปิดทุกวัน', 'f.early.t': 'เออร์ลี่เบิร์ด', 'f.early.d': 'ลด 10% เมื่อสั่งอาหารภายใน 17:30',
    'f.award.t': 'Travellers’ Choice', 'f.award.d': 'ทุกปีตั้งแต่ 2014',
    'house.label': 'ตัวตนของเรา',
    'house.title': 'เราคัดสรรปูอลาสก้า เนื้อโกเบ คาเวียร์รัสเซีย ทรัฟเฟิลสด หอยนางรม ล็อบสเตอร์ เนื้อสัตว์ และปลา คุณภาพดีที่สุด',
    'house.l1': 'อาหารยุโรปและฝรั่งเศสอันประณีต',
    'house.l2': 'เนื้อวัวและเนื้อแกะระดับโลก ปลา ล็อบสเตอร์ คาเวียร์ และหอยนางรม หลากหลายรายการ',
    'house.l3': 'หนึ่งในห้องเก็บไวน์ที่ดีที่สุดในพัทยา',
    'house.l4': 'บาร์จินที่ใหญ่ที่สุดในประเทศไทย — มากกว่า 200 ชนิด',
    'house.l5': 'บาร์ที่มีเครื่องดื่มครบที่สุดในพัทยา กว่า 300 ฉลาก',
    'house.early.t': 'เออร์ลี่เบิร์ด',
    'house.early.d': 'กรุณานั่งในร้านและสั่งอาหารภายในเวลา 17:30 น. รับส่วนลด 10% จากยอดรวมทั้งหมด ไม่รวมงานพิเศษ ดินเนอร์พิเศษ และบางวันพิเศษ เว้นแต่ระบุไว้ในเมนูนั้น ๆ',
    'house.amex.t': 'อเมริกัน เอ็กซ์เพรส',
    'house.amex.d': 'ยินดีต้อนรับผู้ถือบัตรอเมริกัน เอ็กซ์เพรสที่ Café des Amis',
    'courses.label': 'เมนูคอร์ส',
    'courses.title': 'หกคอร์ส พร้อมไวน์คู่กันทุกจาน',
    'courses.lede': 'เมนูชิมของเชฟชุดใหม่ ที่มีคาเวียร์รัสเซีย ปูอลาสก้า และเนื้อโกเบ เสิร์ฟทีละคอร์สพร้อมไวน์จากห้องเก็บไวน์ของเรา',
    'courses.m1': '#1 เมนูชิมกูร์เมต์ของเชฟ', 'courses.m2': '#2 เมนูชิมซีฟู้ดของเชฟ',
    'courses.hint': 'เลื่อนลงต่อ — แต่ละคอร์สจะมาถึงบนจานของมัน พร้อมไวน์คู่กัน',
    'ws.1': '01 — บีฟเวลลิงตัน ใต้แสงเทียน', 'ws.2': '02 — สันในเนื้อ ดุกเซลส์เห็ด และพรอสชุตโต',
    'ws.3': '03 — แป้งพัฟลายตาข่าย ทาไข่ อบจนเหลืองทอง', 'ws.4': '04 — หั่นที่โต๊ะ เนื้อชมพูมีเดียมแรร์',
    'well.label': 'จานซิกเนเจอร์',
    'well.title': 'บีฟเวลลิงตัน Jack’s Creek',
    'well.p1': 'ดื่มด่ำกับบีฟเวลลิงตันที่ปรุงอย่างพิถีพิถันและสมบูรณ์แบบ เวลลิงตันขนาดเต็มจะถูกนำมาหั่นและเสิร์ฟที่โต๊ะของคุณ',
    'well.p2': 'บีฟเวลลิงตัน “Long” จากเนื้อ Kimbara สำหรับ 3 ท่านขึ้นไป ท่านละ 1,590 บาท กรุณาจองล่วงหน้า — ต้องชำระมัดจำ',
    'well.cap': 'เวลลิงตันเดี่ยว ต่อท่าน — เนื้อสันในอบในแป้งพัฟ เสิร์ฟพร้อมมันฝรั่งกราแตงโดฟินัวส์และซอสเดมิกลาซไวน์แดงโรสแมรี่ ระดับมีเดียมแรร์หรือมีเดียม',
    'well.b1': 'สันในแบล็คแองกัส MB3', 'well.b2': 'สันในวากิว Hawkes Bay นิวซีแลนด์', 'well.b3': 'วากิว Okan ออสเตรเลีย MB9',
    'well.mb': '“MB” คือระดับไขมันแทรก ตัวเลขยิ่งสูงยิ่งเข้มข้น เวลลิงตันหนึ่งชิ้นสำหรับหนึ่งท่าน สามารถสั่งชิ้นใหญ่ล่วงหน้าเพื่อแบ่งกันทั้งโต๊ะได้',
    'well.cta': 'จองบีฟเวลลิงตันล่วงหน้า',
    'menu.label': 'เมนู',
    'menu.title': 'ไฟน์ไดนิ่ง อาหารฝรั่งเศสและยุโรป',
    'menu.lede': 'ลองหอยนางรมฝรั่งเศสและไอริช กุ้งแดงซิซิลีหมักมะนาว เกลือ และน้ำมันมะกอก และล็อบสเตอร์เทอร์มิดอร์ สอบถามพนักงานเรื่องขาปูอลาสก้าไซซ์พิเศษได้วันนี้',
    'menu.t.carte': 'อา ลา การ์ต', 'menu.t.veg': 'มังสวิรัติ', 'menu.t.kids': 'เมนูเด็ก', 'menu.t.glass': 'ไวน์แก้ว', 'menu.t.bottle': 'แชมเปญและไวน์ขวด',
    'menu.baht': 'ราคาทั้งหมดเป็นเงินบาท ทรัฟเฟิลสดฝานขึ้นอยู่กับสินค้าที่มี — กรุณาสอบถาม',
    'menu.pdf': 'เมนูสำหรับพิมพ์ (PDF):', 'pdf.food': 'เมนูอาหาร', 'pdf.sea': 'เมนูชิมซีฟู้ด', 'pdf.glass': 'ไวน์แก้ว', 'pdf.wine': 'รายการไวน์ทั้งหมด',
    'rooms.label': 'สองมุมให้เลือกนั่ง',
    'rooms.title': 'สวนคอร์ทยาร์ด หรือภายในห้องอาหารหลัก',
    'rooms.g': 'สวนคอร์ทยาร์ด', 'rooms.i': 'ภายในร้าน',
    'rooms.g1': 'ระเบียงสวนคอร์ทยาร์ดตั้งอยู่ใจกลางของ Café des Amis — มุมโรแมนติกที่อบอุ่นและมีเสน่ห์ ไม่ต้องกังวลเรื่องค่ำคืนที่อากาศร้อน เรามีเครื่องปรับอากาศส่วนตัว และเมื่อฝนตก เราจะปิดหลังคาเพื่อให้มื้อค่ำของคุณเป็นส่วนตัวและแห้งสบาย ใต้ท้องฟ้าที่ระยิบระยับด้วยดวงดาว',
    'rooms.g2': 'โรแมนติกและเป็นส่วนตัว',
    'rooms.g3': 'เราปกป้องคุณ (และข้อเท้าของคุณ!) จากยุงด้วยสารไล่ยุงชนิดพิเศษ',
    'rooms.g4': 'พัดลมไอเย็นเคลื่อนที่ประจำทุกโต๊ะ',
    'rooms.g5': 'เปิดหลังคาเมื่อฝนไม่ตก',
    'rooms.i1': 'ห้องอาหารภายในควบคุมอุณหภูมิ ตกแต่งอย่างร่วมสมัย สวยงาม และหรูหรา',
    'rooms.i2': 'ควบคุมอุณหภูมิ', 'rooms.i3': 'ร่วมสมัยและตกแต่งอย่างสวยงาม',
    'gin.label': 'บาร์',
    'gin.title': 'คอลเลกชันจินพิเศษอันยิ่งใหญ่',
    'gin.p1': 'คอลเลกชันจินระดับโลกที่มีรสชาติแปลกใหม่และเป็นเอกลักษณ์จากกว่า 20 ประเทศ — จินที่หายากและโดดเด่นที่สุดที่คุณจะได้พบ ไม่ว่าคุณจะชอบผจญภัยหรือชอบแบบดั้งเดิม ตั้งแต่ลอนดอนดรายอันประณีตไปจนถึงโมเดิร์นโบทานิคัลที่หอมหวานกลิ่นผลไม้ เตรียมพร้อมสำหรับการเดินทางแห่งจินที่น่าประทับใจ',
    'gin.n1': 'ชนิดของจิน โดยประมาณ', 'gin.n2': 'โทนิก', 'gin.n3': 'ประเทศ', 'gin.n4': 'ฉลากในบาร์',
    'gin.wine': 'และหนึ่งในห้องเก็บไวน์ที่ดีที่สุดในพัทยา — ตั้งแต่ Crémant de Bourgogne แบบแก้ว จนถึง Opus One และ Château Margaux',
    'gin.cta': 'ดูรายการไวน์',
    'occ.label': 'โอกาสพิเศษ',
    'occ.title': 'ร้านอาหารคือความหลงใหลของเรา',
    'occ.p1': 'ให้เราพาคุณสู่โลกแห่งศิลปะการทำอาหาร ที่การรับประทานอาหารกลายเป็นงานศิลป์ เรารอคอยที่จะต้อนรับคุณสู่มื้อค่ำอันประณีตที่ทุกรายละเอียดถูกออกแบบให้น่าจดจำ ไม่ว่าจะเป็นวันครบรอบหรือโอกาสอันมีค่า เฉลิมฉลองอย่างมีสไตล์',
    'occ.o1': 'วาเลนไทน์', 'occ.o2': 'คริสต์มาส', 'occ.o3': 'ครบรอบแต่งงาน', 'occ.o4': 'วันเกิด', 'occ.o5': 'ดินเนอร์ครอบครัว',
    'occ.p2': 'กำลังมองหาสถานที่จัดวันเกิด วันครบรอบ หรืองานพิเศษที่กำลังจะมาถึงใช่ไหม หากมีเวลาเตรียมการ เราจัดช่อดอกไม้ เค้กวันเกิด ลูกโป่ง และของตกแต่งให้ได้ เราเชี่ยวชาญในการเปลี่ยนทุกโอกาสให้เป็นความทรงจำที่งดงาม และดูแลให้แขกทุกท่านรู้สึกพิเศษ',
    'dress.t': 'การแต่งกาย — สมาร์ทแคชวล',
    'dress.p': 'แขกของเราแต่งกายเรียบร้อยเพื่อเฉลิมฉลองโอกาสพิเศษ เช่น วันครบรอบแต่งงาน กรุณาเคารพกฎการแต่งกายของเรา',
    'dress.1': 'ไม่สวมรองเท้าแตะฟองน้ำหรือเสื้อแขนกุด', 'dress.2': 'ไม่สวมชุดเที่ยวทะเล', 'dress.3': 'กางเกงขาสั้นและเสื้อโปโลได้ หากดูเรียบร้อย พร้อมรองเท้าดี ๆ รองเท้าแตะรัดส้น หรือโลฟเฟอร์',
    'notes.t': 'ที่โต๊ะของคุณ',
    'notes.1': 'มีแว่นอ่านหนังสือให้บริการ',
    'notes.2': 'มีที่ชาร์จโทรศัพท์ที่โต๊ะ ที่ชาร์จเร็วที่บาร์ และ Wi-Fi สำหรับแขก',
    'notes.3': 'หากแอร์เป่าใส่คุณ หรืออุ่นหรือเย็นเกินไป กรุณาแจ้งพนักงาน',
    'notes.4': 'มีผ้าคลุมไหล่ที่ซักสะอาดสำหรับสุภาพสตรีหากรู้สึกหนาว',
    'notes.5': 'เรามีพาราเซตามอล นูโรเฟน และกาวิสคอน สอบถามพนักงานได้',
    'notes.6': 'เราไม่ใช้ดอกไม้ปลอม ดอกไม้ทุกดอกที่นี่เป็นดอกไม้สด',
    'notes.7': 'กรุณางดวิดีโอคอล การเปิดลำโพงสนทนา หรือการดูวิดีโอที่รบกวนแขกท่านอื่น',
    'notes.8': 'หากมีสิ่งใดไม่ถูกต้องหรือไม่น่าพอใจ กรุณาแจ้งเราทันที เราจะแก้ไขอย่างรวดเร็วเพื่อให้ค่ำคืนที่เหลือของคุณดีเยี่ยม',
    'acc.big': 'ได้รับรางวัล Tripadvisor Travellers’ Choice ตั้งแต่ปี 2014 ติดต่อกันเก้าปี',
    'acc.small': 'เคยได้รับการจัดอันดับที่ห้าของร้านอาหารที่ดีที่สุดในประเทศไทยโดย Tripadvisor และติดอันดับ 25 ร้านอาหารที่ดีที่สุดในเอเชียหลายปี',
    'acc.ta': 'Tripadvisor Travellers’ Choice', 'acc.yt': 'ชมรีวิวบน YouTube',
    'res.label': 'จองโต๊ะ', 'res.title': 'จองได้สามช่องทาง หรือเริ่มแชทกับเรา',
    'res.en': 'English', 'res.th': 'ภาษาไทย', 'res.also': 'หมายเลขเพิ่มเติม',
    'res.deposit': 'โต๊ะขนาดใหญ่และบีฟเวลลิงตัน Long ต้องชำระมัดจำการจอง',
    'demo': 'เดโมเท่านั้น ยังไม่ได้เชื่อมต่อ',
    'form.name': 'ชื่อ', 'form.phone': 'โทรศัพท์หรือ LINE', 'form.date': 'วันที่', 'form.time': 'เวลา', 'form.guests': 'จำนวนแขก', 'form.seat': 'ที่นั่ง',
    'form.well': 'สั่งบีฟเวลลิงตัน Long ล่วงหน้า (3 ท่านขึ้นไป ต้องชำระมัดจำ)', 'form.notes': 'โอกาสพิเศษหรือหมายเหตุ', 'form.send': 'ขอจองโต๊ะ',
    'visit.label': 'การเดินทาง', 'visit.title': 'ท้ายซอย 11 ถนนทัพพระยา',
    'visit.p1': 'เราอยู่ห่างจากวอล์กกิ้งสตรีทไม่ถึง 1 กม. มุ่งหน้าไปทางจอมเทียน ก่อนถึง Sugar Hut และแยกพระตำหนักประมาณ 200 หลา',
    'visit.gps': 'หากใช้ GPS กรุณาตรวจสอบว่าที่อยู่แสดงซอย 11 ใช้ถนนเส้นตรงยาว หากเส้นทางดูคดเคี้ยวหรือซับซ้อน ให้เลือกเส้นทางตรง',
    'visit.map': 'เปิดใน Google Maps', 'visit.a': 'ที่อยู่', 'visit.co': 'บริษัท', 'visit.h': 'เวลาเปิด', 'visit.hv': 'เปิดทุกวัน 17:00 – 23:00 น.', 'visit.f': 'ติดตาม',
    'foot.tag': 'ร้านอาหารไฟน์ไดนิ่ง พัทยา',
    'foot.concept': 'ตัวอย่างแนวคิด — ไม่ใช่เว็บไซต์ทางการ ระบบจองและแบบฟอร์มเป็นเดโมเท่านั้น ยังไม่ได้เชื่อมต่อ',
    'foot.by': 'ออกแบบโดย',
    'dock.call': 'โทร'
  };
  var UI = {
    en: { courses: 'courses', pairing: 'Wine pairing', perPerson: 'per person', sweet: 'Sweet', option: 'Option', glass: 'glass', bottle: 'bottle', jump: 'Jump to', included: 'Included', formOk: 'Thank you. This is a demo — nothing was sent. Please call or LINE the restaurant to book.', formNeed: 'Please add a name — demo form, nothing is sent.', themeL: 'Switch to light theme', themeD: 'Switch to dark theme', lang: 'ไทย', langLabel: 'เปลี่ยนเป็นภาษาไทย', openMenu: 'Open menu', closeMenu: 'Close menu', pairNone: 'Paired by the sommelier', price: 'Menu price on request', exact: 'As served', illus: 'Illustrative photo from the kitchen', illusBar: 'Illustrative photo from the bar', menuN: 'Tasting menu', of: 'of', course: 'Course' },
    th: { courses: 'คอร์ส', pairing: 'ไวน์คู่อาหาร', perPerson: 'ต่อท่าน', sweet: 'ของหวาน', option: 'ตัวเลือก', glass: 'แก้ว', bottle: 'ขวด', jump: 'ไปที่', included: 'รวมแล้ว', formOk: 'ขอบคุณ นี่คือเดโม — ยังไม่มีการส่งข้อมูล กรุณาโทรหรือ LINE หาร้านเพื่อจอง', formNeed: 'กรุณากรอกชื่อ — แบบฟอร์มเดโม ไม่มีการส่งข้อมูล', themeL: 'เปลี่ยนเป็นธีมสว่าง', themeD: 'เปลี่ยนเป็นธีมมืด', lang: 'EN', langLabel: 'Switch to English', openMenu: 'เปิดเมนู', closeMenu: 'ปิดเมนู', pairNone: 'ซอมเมอลิเยร์เลือกให้', price: 'สอบถามราคาเมนู', exact: 'ภาพจานจริงของคอร์สนี้', illus: 'ภาพประกอบจากครัวของร้าน', illusBar: 'ภาพประกอบจากบาร์ของร้าน', menuN: 'เมนูชิม', of: 'จาก', course: 'คอร์ส' }
  };

  /* ---------------- Tasting menus ---------------- */
  var COURSES = {
    m1: {
      meta: [{ en: '6 items', th: '6 รายการ' }, { en: 'Wine pairing + 1,900 – 2,990 baht per person', th: 'ไวน์คู่อาหาร + 1,900 – 2,990 บาท ต่อท่าน' }, { en: 'Option: Beef Wellington + 400 baht', th: 'ตัวเลือก: บีฟเวลลิงตัน + 400 บาท' }],
      items: [
        { n: { en: 'Foie Gras Goose Terrine with gingerbread', th: 'เทอร์รีนฟัวกราห่าน กับขนมปังขิง' }, w: 'Chezatte Sancerre Rosé, France 2023' },
        { n: { en: 'Norwegian Langoustine with Lobster Bisque & Hennessy cognac', th: 'กุ้งลังกูสตีนนอร์เวย์ กับล็อบสเตอร์บิสก์และคอนยัคเฮนเนสซี่' } },
        { n: { en: 'Duck ravioli, pan-seared foie gras, Champagne parmesan sauce', th: 'ราวิโอลี่เป็ด ฟัวกราจี่ ซอสแชมเปญพาร์เมซาน' }, w: 'Chablis, Christophe Patrice, France 2022' },
        { n: { en: 'Roasted Snow Fish with Morel mushroom risotto', th: 'ปลาหิมะอบ กับริซอตโต้เห็ดมอเรล' }, w: 'Château De Ribebon, France 2019' },
        { n: { en: 'USA Prime Beef Fillet, red wine rosemary demi-glace', th: 'สันในเนื้อ USDA Prime ซอสเดมิกลาซไวน์แดงโรสแมรี่' }, d: { en: 'Baked creamed mash, pumpkin, asparagus, baby carrot', th: 'มันบดอบครีม ฟักทอง หน่อไม้ฝรั่ง แครอทเล็ก' }, w: 'Amarone Valpolicella, Le Preare', o: { en: 'Option: Beef Wellington + 400', th: 'ตัวเลือก: บีฟเวลลิงตัน + 400' } },
        { sweet: 1, n: { en: 'Tarte Tatin, brandy flambé, vanilla ice cream', th: 'ทาร์ตตาแต็ง ฟลัมเบบรั่นดี กับไอศกรีมวานิลลา' }, d: { en: 'French apple pie with puff pastry, flamed with brandy on top', th: 'พายแอปเปิ้ลฝรั่งเศสแป้งพัฟ ราดบรั่นดีจุดไฟ' }, w: 'Haut Charmes Sauternes, France 2022' }
      ]
    },
    m2: {
      meta: [{ en: '6 items · 3,400 baht per person', th: '6 รายการ · 3,400 บาท ต่อท่าน' }, { en: '5-glass wine pairing + 1,800', th: 'ไวน์คู่อาหาร 5 แก้ว + 1,800' }],
      items: [
        { n: { en: 'Two fresh La Perle Noire oysters with caviar & crispy shallots', th: 'หอยนางรม La Perle Noire สด 2 ตัว กับคาเวียร์และหอมเจียว' }, w: 'André Delorme Blanc de Blancs (sparkling)' },
        { n: { en: 'Norwegian Langoustine with Lobster Bisque & Hennessy cognac', th: 'กุ้งลังกูสตีนนอร์เวย์ กับล็อบสเตอร์บิสก์และคอนยัคเฮนเนสซี่' }, w: 'André Delorme Blanc de Blancs (sparkling)' },
        { n: { en: 'Raw wild-caught Italian Red Prawns (Rosso di Mazara)', th: 'กุ้งแดงอิตาลีจากธรรมชาติแบบดิบ (Rosso di Mazara)' }, d: { en: 'Cured with extra virgin olive oil, lemon, salt and black pepper', th: 'หมักน้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิน มะนาว เกลือ และพริกไทยดำ' }, w: 'Chezatte Sancerre Rosé, France 2023' },
        { n: { en: 'Alaska King Crab & Avocado Cocktail, caviar & mild wasabi', th: 'ค็อกเทลปูอลาสก้ากับอะโวคาโด คาเวียร์ และวาซาบิอ่อน' }, w: 'Chablis, Christophe Patrice, France 2022' },
        { n: { en: 'Roasted Snow Fish with Morel mushroom risotto', th: 'ปลาหิมะอบ กับริซอตโต้เห็ดมอเรล' }, w: 'La Torre Delle Venezie Pinot Grigio, Northern Italy', o: { en: 'Option: Beef Wellington + 400', th: 'ตัวเลือก: บีฟเวลลิงตัน + 400' } },
        { sweet: 1, n: { en: 'Hot chocolate fondant, roasted crushed pistachio & walnut, ice cream', th: 'ช็อกโกแลตฟองดองต์อุ่น พิสตาชิโอและวอลนัทคั่ว กับไอศกรีม' }, w: 'Haut Charmes Sauternes, France 2022' }
      ]
    }
  };

  /* ---------------- À la carte (CDA Food Menu, 27 Sept 2026) ---------------- */
  function I(en, th, p, den, dth, extra) { var o = { n: { en: en, th: th }, p: p }; if (den) o.d = { en: den, th: dth }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }
  var CARTE = [
    { id: 'oysters', t: { en: 'Oysters, caviar & crab', th: 'หอยนางรม คาเวียร์ และปู' }, items: [
      I('Caviar de Neuvic Oscietra (15g)', 'คาเวียร์ Neuvic Oscietra (15 กรัม)', '1,800', 0, 0, { tag: 'new' }),
      I('Black Pearl French Oysters #3', 'หอยนางรมฝรั่งเศส Black Pearl #3', null, 'Perle Noire — premium French concave oysters farmed by the Cadoret family in Brittany, France', 'Perle Noire หอยนางรมฝรั่งเศสพรีเมียม เลี้ยงโดยครอบครัว Cadoret แคว้นบริตทานี ฝรั่งเศส', { opts: [[{ en: '3 pieces', th: '3 ตัว' }, '510'], [{ en: 'Half dozen', th: 'ครึ่งโหล' }, '890'], [{ en: 'Dozen', th: '1 โหล' }, '1,750']] }),
      I('Rosso di Mazara Italian Red Prawns (raw)', 'กุ้งแดงอิตาลี Rosso di Mazara (ดิบ)', null, 'Wild caught. Olive oil, lemon, salt and black pepper', 'จากธรรมชาติ น้ำมันมะกอก มะนาว เกลือ และพริกไทยดำ', { opts: [[{ en: '4 pieces', th: '4 ตัว' }, '990'], [{ en: '8 pieces', th: '8 ตัว' }, '1,790']] }),
      I('Alaska King Crab & Avocado Cocktail', 'ค็อกเทลปูอลาสก้ากับอะโวคาโด', '850', 'Caviar & mild wasabi crème', 'คาเวียร์และครีมวาซาบิอ่อน'),
      I('Chilled Alaskan King Crab', 'ปูอลาสก้าแช่เย็น', '1,490', 'With caviar & wasabi dressing', 'กับคาเวียร์และน้ำสลัดวาซาบิ'),
      I('Alaskan King Crab legs with dressing', 'ขาปูอลาสก้ากับน้ำสลัด', null, 'Warm or cold', 'แบบอุ่นหรือเย็น', { opts: [[{ en: '250g pieces', th: '250 กรัม' }, '1,350'], [{ en: '500g, 1 full leg', th: '500 กรัม (1 ขาเต็ม)' }, '2,100'], [{ en: '1 kg', th: '1 กิโลกรัม' }, '3,500']] })
    ]},
    { id: 'cold', t: { en: 'Cold appetisers', th: 'อาหารเรียกน้ำย่อยแบบเย็น' }, items: [
      I('Crispy Parmesan Parma Ham Chef’s Salad', 'สลัดของเชฟ พาร์มาแฮมกรอบพาร์เมซาน', '590', 'Crispy romaine, Parma ham, quail egg croquette, pine nuts, mild wasabi dressing', 'ผักโรเมนกรอบ พาร์มาแฮม โครเก้ไข่นกกระทา เมล็ดสน น้ำสลัดวาซาบิอ่อน'),
      I('Home Smoked Duck Breast Rocket Salad', 'สลัดร็อกเก็ตกับอกเป็ดรมควันโฮมเมด', '450'),
      I('“Not a Greek”', '“Not a Greek”', '480', 'Thirteen ingredients including Greek feta, semi-roasted cherry tomatoes, Japanese cucumber pesto, pistachio, walnut, almond, caper flowers, mint and watermelon', 'ส่วนผสม 13 อย่าง เช่น เฟต้ากรีก มะเขือเทศเชอร์รี่อบ เพสโต้แตงกวาญี่ปุ่น พิสตาชิโอ วอลนัท อัลมอนด์ ดอกเคเปอร์ สะระแหน่ และแตงโม', { tag: 'v' }),
      I('Goose Foie Gras Terrine', 'เทอร์รีนฟัวกราห่าน', '990', 'Blackberry compote, apple purée, gingerbread', 'แบล็กเบอร์รี่คอมโพต แอปเปิ้ลบด ขนมปังขิง'),
      I('Steak Tartare', 'สเต๊กทาร์ทาร์', null, 'Spicy raw chopped beef fillet with onions, capers, black pepper, Worcestershire sauce and seasonings, with French bread', 'สันในเนื้อดิบสับรสเผ็ด หอมใหญ่ เคเปอร์ พริกไทยดำ ซอสวูสเตอร์ และเครื่องปรุง เสิร์ฟกับขนมปังฝรั่งเศส', { opts: [[{ en: 'Wagyu MB9', th: 'วากิว MB9' }, '950'], [{ en: 'Black Angus', th: 'แบล็คแองกัส' }, '750']] })
    ]},
    { id: 'soups', t: { en: 'Gourmet soups', th: 'ซุปกูร์เมต์' }, items: [
      I('Porcini (Cèpes) Wild Mushroom Soup, croutons', 'ซุปเห็ดป่าพอร์ชินี (Cèpes) กับครูตอง', '590', 0, 0, { tag: 'v' }),
      I('Lobster Bisque with Cognac and lobster meat', 'ล็อบสเตอร์บิสก์ กับคอนยัคและเนื้อล็อบสเตอร์', '790')
    ]},
    { id: 'warm', t: { en: 'Warm appetisers', th: 'อาหารเรียกน้ำย่อยแบบร้อน' }, items: [
      I('Grilled Tiger Prawn with Japanese Scallops', 'กุ้งลายเสือย่างกับหอยเชลล์ญี่ปุ่น', '990', 'Sweet chilli coconut sauce, Parma ham crisp', 'ซอสพริกหวานมะพร้าว พาร์มาแฮมกรอบ', { tag: 'new' }),
      I('Crispy Fried Duck with Hoisin', 'เป็ดทอดกรอบซอสฮอยซิน', '490', 'Julienne of crispy bean shoots, onion & peppers, plum and hoisin sauce', 'ถั่วงอกกรอบ หอมใหญ่ และพริกหวานหั่นเส้น ซอสบ๊วยและฮอยซิน'),
      I('Whole Norwegian Langoustine', 'กุ้งลังกูสตีนนอร์เวย์ทั้งตัว', '890', 'Prawn fagottini pasta parcel, lobster & cognac sauce', 'พาสต้าฟาก็อตตินีไส้กุ้ง ซอสล็อบสเตอร์และคอนยัค'),
      I('Pan-fried Blue Crab Cake', 'ครับเค้กปูม้าทอด', '650'),
      I('Spicy Red Prawns with Avocado Salsa', 'กุ้งแดงรสเผ็ดกับซัลซ่าอะโวคาโด', '650', 'Choose mild, medium or spicy', 'เลือกเผ็ดน้อย กลาง หรือเผ็ด'),
      I('Époisses Cheese Ravioli with Champagne sauce', 'ราวิโอลี่ชีสเอปวส ซอสแชมเปญ', '790', 0, 0, { tag: 'v' }),
      I('Duck Ravioli, Goose Foie Gras, Parmesan cream', 'ราวิโอลี่เป็ด ฟัวกราห่าน ครีมพาร์เมซาน', '890'),
      I('Organic Tasmanian Mussels — Moules Marinière', 'หอยแมลงภู่ออร์แกนิกแทสเมเนีย — มูลมารินิแยร์', '690', 'White wine, cream, leek, carrot, spring onion and parsley', 'ไวน์ขาว ครีม ต้นกระเทียม แครอท ต้นหอม และพาร์สลีย์'),
      I('Burgundy Snails — Escargots de Bourgogne', 'หอยทากเบอร์กันดี — เอสการ์โก', '690', 'Baked with butter, garlic and parsley', 'อบเนย กระเทียม และพาร์สลีย์'),
      I('Sautéed Goose Foie Gras & fruits, passion fruit foam', 'ฟัวกราห่านผัดกับผลไม้ โฟมเสาวรส', '1,250'),
      I('Grilled Kobe Beef & Foie Gras sushi rolls', 'ซูชิโรลเนื้อโกเบย่างกับฟัวกรา', '890'),
      I('Kobe Beef with Foie Gras Nigiri Trio', 'นิกิริเนื้อโกเบกับฟัวกรา 3 ชิ้น', '1,390')
    ]},
    { id: 'seafood', t: { en: 'Seafood — main courses', th: 'อาหารจานหลัก — ซีฟู้ด' }, items: [
      I('Classic French Lobster Thermidor', 'ล็อบสเตอร์เทอร์มิดอร์สไตล์ฝรั่งเศส', '2,400', '800g lobster cooked with wine, mustard and a touch of brandy, morel mushroom cheese gratin', 'ล็อบสเตอร์ 800 กรัม ปรุงกับไวน์ มัสตาร์ด และบรั่นดี อบชีสกับเห็ดมอเรล'),
      I('Lobster Risotto', 'ริซอตโต้ล็อบสเตอร์', '1,290', 'Saffron, Parmesan crisp, bisque sauce', 'หญ้าฝรั่น พาร์เมซานกรอบ ซอสบิสก์'),
      I('Roasted Snow Fish, Porcini and Morel mushroom', 'ปลาหิมะอบ เห็ดพอร์ชินีและมอเรล', '1,290'),
      I('Grilled Salmon Trout', 'ปลาแซลมอนเทราต์ย่าง', '790', 'Himalayan salmon with a black garlic & parsley herb crust, Pernod lemongrass beurre blanc, pea purée, fennel oil', 'แซลมอนหิมาลัยเคลือบกระเทียมดำและพาร์สลีย์ ซอสเบอร์บลองเปอร์โนตะไคร้ ถั่วลันเตาบด น้ำมันเฟนเนล')
    ]},
    { id: 'meat', t: { en: 'Meat — main courses', th: 'อาหารจานหลัก — เนื้อสัตว์' }, items: [
      I('Signature Beef Wellington', 'บีฟเวลลิงตัน ซิกเนเจอร์', null, 'Beef fillet baked in puff pastry, Gratin Dauphinois, red wine rosemary demi-glace. Medium rare or medium', 'สันในเนื้ออบแป้งพัฟ มันฝรั่งกราแตงโดฟินัวส์ ซอสเดมิกลาซไวน์แดงโรสแมรี่ มีเดียมแรร์หรือมีเดียม', { opts: [[{ en: 'Black Angus MB3', th: 'แบล็คแองกัส MB3' }, '1,590'], [{ en: 'NZ Hawkes Bay Wagyu', th: 'วากิว Hawkes Bay นิวซีแลนด์' }, '1,950'], [{ en: 'AUS Okan Wagyu MB9', th: 'วากิว Okan ออสเตรเลีย MB9' }, '2,490']] }),
      I('Oven-roasted sous-vide Chicken Breast', 'อกไก่ซูวีอบ', '690', 'Layered baked potato, demi-glace morel mushroom sauce', 'มันฝรั่งอบเป็นชั้น ซอสเดมิกลาซเห็ดมอเรล'),
      I('Iberico Pork Tenderloin (Spain)', 'สันในหมูไอบีเรีย (สเปน)', '790', 'Sous vide at 57°C and flame grilled; caramelised apple, baby carrot, parsnip purée, cider sauce', 'ซูวีที่ 57°C แล้วย่างไฟ แอปเปิ้ลคาราเมล แครอทเล็ก พาร์สนิปบด ซอสไซเดอร์'),
      I('Veal Tenderloin', 'สันในเนื้อลูกวัว', '1,400', 'Pan-seared premium veal medallion from Holland, gourmet creamed potato, red wine rosemary demi-glace. Recommended medium rare', 'เนื้อลูกวัวพรีเมียมจากฮอลแลนด์จี่กระทะ มันบดครีม ซอสเดมิกลาซไวน์แดงโรสแมรี่ แนะนำมีเดียมแรร์'),
      I('Herb Crusted Duo of Lamb', 'เนื้อแกะคู่เคลือบสมุนไพร', '1,190', 'Thomas Farms Australia (Grand Championship winners): lamb rack and fillet, cherry red wine-rosemary sauce, black garlic purée, creamed potatoes', 'เนื้อแกะ Thomas Farms ออสเตรเลีย (แชมป์ Grand Championship): แร็คและสันในแกะ ซอสเชอร์รี่ไวน์แดงโรสแมรี่ กระเทียมดำบด มันบดครีม'),
      I('Flame-grilled Australian Lamb Cutlets', 'ซี่โครงแกะออสเตรเลียย่างไฟ', null, 'Finest quality large cutlets, rosemary red wine jus, your choice of potatoes', 'ซี่โครงแกะชิ้นใหญ่คุณภาพเยี่ยม น้ำเกรวี่ไวน์แดงโรสแมรี่ เลือกมันฝรั่งได้', { opts: [[{ en: '3 cutlets, 330g', th: '3 ชิ้น 330 กรัม' }, '1,450'], [{ en: '2 cutlets, 220g', th: '2 ชิ้น 220 กรัม' }, '1,290']] })
    ]},
    { id: 'grill', t: { en: 'Flame grill', th: 'เฟลมกริลล์' }, sub: { en: 'Certified Black Angus, Wagyu and USDA Prime. Larger fillets cut on request.', th: 'แบล็คแองกัส วากิว และ USDA Prime รับรองคุณภาพ ตัดสันในชิ้นใหญ่ขึ้นได้ตามต้องการ' }, items: [
      I('F1 · Black Angus Beef Fillet', 'F1 · สันในแบล็คแองกัส', '1,450', 'Rangers Valley, 100-day grain fed · 7oz / 200g · extra 50g +250', 'Rangers Valley เลี้ยงด้วยธัญพืช 100 วัน · 7 ออนซ์ / 200 กรัม · เพิ่ม 50 กรัม +250'),
      I('HB2 · Hawkes Bay NZ Wagyu MB5 Fillet', 'HB2 · สันในวากิว Hawkes Bay นิวซีแลนด์ MB5', '1,950', '7oz / 200g · extra 50g +390', '7 ออนซ์ / 200 กรัม · เพิ่ม 50 กรัม +390'),
      I('F3 · Okan AUS Wagyu MB9 Fillet', 'F3 · สันในวากิว Okan ออสเตรเลีย MB9', '2,250', 'Melt in your mouth, rich and nutty — the best from Australia · 7oz / 200g · extra 50g +390', 'นุ่มละลายในปาก เข้มข้นหอมมัน — ที่สุดจากออสเตรเลีย · 7 ออนซ์ / 200 กรัม · เพิ่ม 50 กรัม +390'),
      I('Japanese A5 Beef Fillet, Kagoshima', 'สันในเนื้อญี่ปุ่น A5 คาโกชิมะ', '2,800', 'Highest quality, rich and nutty — the best from Japan · 7oz / 200g · extra 50g +700', 'คุณภาพสูงสุด เข้มข้นหอมมัน — ที่สุดจากญี่ปุ่น · 7 ออนซ์ / 200 กรัม · เพิ่ม 50 กรัม +700', { tag: 'new' }),
      I('Carrera New York Strip, Australia MB5', 'สตริปลอยน์ Carrera ออสเตรเลีย MB5', '1,250', 'Tender and flavoursome, nutty and creamy notes · 10oz / 290g', 'นุ่มและรสชาติดี หอมมันเนียน · 10 ออนซ์ / 290 กรัม'),
      I('WXR · Rangers Valley WX Wagyu Rib Eye MB9', 'WXR · ริบอายวากิว Rangers Valley WX MB9', '1,800', 'Top-grade marbling — fatty, flavourful, juicy and tender · 11oz / 300g', 'ไขมันแทรกเกรดสูงสุด ฉ่ำ นุ่ม และรสเข้ม · 11 ออนซ์ / 300 กรัม')
    ]},
    { id: 'sides', wide: 1, t: { en: 'Included with grills — and extras', th: 'รวมกับเมนูย่าง — และรายการเพิ่ม' }, items: [
      I('Potatoes (included)', 'มันฝรั่ง (รวมแล้ว)', null, 'Chef’s gourmet creamed potato · steamed potatoes · Gratin Dauphinois · lightly salted French fries', 'มันบดครีมของเชฟ · มันฝรั่งนึ่ง · กราแตงโดฟินัวส์ · เฟรนช์ฟรายส์เกลืออ่อน'),
      I('Sauces (included)', 'ซอส (รวมแล้ว)', null, 'Red wine rosemary demi-glace (chef’s speciality) · pepper · porcini mushroom · béarnaise · onion confit', 'เดมิกลาซไวน์แดงโรสแมรี่ (สูตรพิเศษของเชฟ) · พริกไทย · เห็ดพอร์ชินี · แบร์เนส · หอมใหญ่คอนฟี'),
      I('Gorgonzola / blue cheese Dolce DOP sauce', 'ซอสกอร์กอนโซล่า / บลูชีส Dolce DOP', '+190'),
      I('Morel mushroom sauce', 'ซอสเห็ดมอเรล', '+400'),
      I('Saffron Parmesan Risotto side dish', 'ริซอตโต้หญ้าฝรั่นพาร์เมซาน (เครื่องเคียง)', '+590'),
      I('Extra vegetables & sauce', 'ผักและซอสเพิ่ม', { en: 'No charge', th: 'ไม่คิดค่าบริการ' })
    ]}
  ];
  /* Vegetarian (cafe-des-amis.com/vegetarian_menu) */
  var VEG = [
    { id: 'vstart', t: { en: 'Vegetarian appetisers', th: 'อาหารเรียกน้ำย่อยมังสวิรัติ' }, items: [
      I('Marinated Beetroot Carpaccio', 'คาร์ปาชโชบีทรูทหมัก', '480', 'Pistachio and pea purée, lemon dressing', 'พิสตาชิโอและถั่วลันเตาบด น้ำสลัดเลมอน', { tag: 'vegan' }),
      I('Avocado Mousse with Peach', 'มูสอะโวคาโดกับพีช', '480', 'Marinated cherry tomato, preserved onion', 'มะเขือเทศเชอร์รี่หมัก หอมใหญ่ดอง', { tag: 'vegan' }),
      I('Watermelon Greek Salad', 'สลัดกรีกแตงโม', '480', 'Thirteen ingredients including feta, mint and fresh watermelon, semi-roasted cherry tomatoes, Japanese cucumber pesto, pistachio, walnut, almond, caper flowers', 'ส่วนผสม 13 อย่าง เช่น เฟต้า สะระแหน่ แตงโมสด มะเขือเทศเชอร์รี่อบ เพสโต้แตงกวาญี่ปุ่น พิสตาชิโอ วอลนัท อัลมอนด์ ดอกเคเปอร์'),
      I('Caesar Salad', 'ซีซาร์สลัด', '450', 'Parmesan mousse, crostini & Parmesan crisps', 'มูสพาร์เมซาน ครอสตินี และพาร์เมซานกรอบ'),
      I('Porcini (Cèpes) Wild Mushroom Soup', 'ซุปเห็ดป่าพอร์ชินี (Cèpes)', '590', 'With crispy croutons', 'กับครูตองกรอบ'),
      I('Taleggio Cheese Ravioli', 'ราวิโอลี่ชีสทาเลจโจ', '890', 'Fresh dark truffle, Champagne cream sauce', 'ทรัฟเฟิลดำสด ซอสครีมแชมเปญ'),
      I('Mushroom Tortellini', 'ทอร์เทลลินี่เห็ด', '680', 'Champagne & Parmesan cream sauce', 'ซอสครีมแชมเปญและพาร์เมซาน'),
      I('Fettuccine with truffle oil', 'เฟตตูชินี่น้ำมันทรัฟเฟิล', '790', 'Fresh porcini & Champagne sauce', 'เห็ดพอร์ชินีสดและซอสแชมเปญ')
    ]},
    { id: 'vmain', t: { en: 'Vegetarian main courses', th: 'อาหารจานหลักมังสวิรัติ' }, items: [
      I('Baked Bell Pepper', 'พริกหวานอบ', '690', 'Stuffed with lentils & mushroom, roasted vegetables and a saffron ratatouille sauce', 'สอดไส้ถั่วเลนทิลและเห็ด ผักอบ และซอสราตาตูยหญ้าฝรั่น', { tag: 'vegan' }),
      I('Angel Hair Spaghetti al Pesto', 'สปาเกตตี้เส้นแองเจิลแฮร์ซอสเพสโต้', '650', 'Special pesto sauce with vegetables', 'ซอสเพสโต้สูตรพิเศษกับผัก'),
      I('Zurich-style Morel Mushrooms', 'เห็ดมอเรลสไตล์ซูริก', '1,100', 'Flamed in cognac cream sauce, with fettuccine', 'ฟลัมเบในซอสครีมคอนยัค กับเฟตตูชินี่'),
      I('Époisses Cheese Ravioli with Champagne sauce', 'ราวิโอลี่ชีสเอปวส ซอสแชมเปญ', '790', 'From the main menu', 'จากเมนูหลัก'),
      I('“Not a Greek”', '“Not a Greek”', '480', 'From the main menu', 'จากเมนูหลัก')
    ]}
  ];
  /* Children (cafe-des-amis.com/childrens_menu) */
  var KIDS = [
    { id: 'kstart', t: { en: 'Children — appetisers', th: 'เมนูเด็ก — เรียกน้ำย่อย' }, items: [
      I('Gourmet Porcini Mushroom Soup', 'ซุปเห็ดพอร์ชินีกูร์เมต์', '350', 'Dried wild and fresh mushrooms, shallots, garlic, stock, cream and herbs', 'เห็ดป่าแห้งและเห็ดสด หอมแดง กระเทียม น้ำซุป ครีม และสมุนไพร'),
      I('Prawn Cocktail', 'ค็อกเทลกุ้ง', '390', 'Fresh large prawns in a Marie Rose sauce', 'กุ้งตัวใหญ่สดในซอสมารีโรส'),
      I('Parma Ham & Cold Cuts', 'พาร์มาแฮมและโคลด์คัท', '550', 'Parma ham, Salami Napoli, Mortadella, mixed cheeses, olives, pickles', 'พาร์มาแฮม ซาลามีนาโปลี มอร์ตาเดลลา ชีสรวม มะกอก ผักดอง'),
      I('Battered Mini Cod Bites', 'ปลาค็อดชุบแป้งทอดชิ้นเล็ก', '350', 'Skinless, deboned cod in a light crispy batter, tartar sauce', 'ปลาค็อดไร้หนังไร้ก้าง ชุบแป้งบางกรอบ ซอสทาร์ทาร์')
    ]},
    { id: 'kmain', t: { en: 'Children — main courses', th: 'เมนูเด็ก — จานหลัก' }, items: [
      I('Roasted Chicken Breast', 'อกไก่อบ', '450', 'Mashed potatoes, gravy and a selection of vegetables', 'มันบด น้ำเกรวี่ และผักรวม'),
      I('Breaded Fried Chicken Tenders', 'ไก่ชุบเกล็ดขนมปังทอด', '450', 'Mashed potatoes and a selection of vegetables', 'มันบดและผักรวม'),
      I('Spaghetti Bolognaise', 'สปาเกตตี้โบโลเนส', '450', 'Minced prime Wagyu beef in a rich traditional tomato sauce', 'เนื้อวากิวบดในซอสมะเขือเทศสูตรดั้งเดิม'),
      I('Spaghetti Carbonara', 'สปาเกตตี้คาโบนาร่า', '350', 'Crispy bacon in a creamy Parmesan and egg sauce', 'เบคอนกรอบในซอสครีมพาร์เมซานและไข่'),
      I('Fish & Chips', 'ฟิชแอนด์ชิปส์', '450', 'Battered fresh Norwegian cod fillet, French fries and peas', 'ปลาค็อดนอร์เวย์ชุบแป้งทอด เฟรนช์ฟรายส์ และถั่วลันเตา'),
      I('Wagyu Beef Cheese Burger', 'ชีสเบอร์เกอร์เนื้อวากิว', '490', 'Prime minced Wagyu patty with melted cheese, served with fries', 'แพตตี้วากิวกับชีสละลาย เสิร์ฟกับเฟรนช์ฟรายส์')
    ]}
  ];
  /* Wine by the glass (Dec 2025) */
  function W(name, meta, p) { return { n: { en: name, th: name }, meta: meta, p: p }; }
  var GLASS = [
    { id: 'gspark', t: { en: 'Sparkling by the glass', th: 'สปาร์กลิงแบบแก้ว' }, items: [W('André Delorme Blanc de Blancs Brut', 'Crémant de Bourgogne, France · Chardonnay', '390')] },
    { id: 'gwhite', t: { en: 'White by the glass', th: 'ไวน์ขาวแบบแก้ว' }, items: [
      W('Château Reillanne Emoa Blanc 2023', 'Côtes de Provence AOP, France · Rolle (Vermentino)', '390'),
      W('Tinazzi Tenuta Delle Venezie Pinot Grigio 2024', 'Veneto, Northern Italy · Pinot Grigio', '390')] },
    { id: 'gred', wide: 1, t: { en: 'Red by the glass', th: 'ไวน์แดงแบบแก้ว' }, items: [
      W('Château Malijay Côtes-du-Rhône 2023', 'Southern Rhône, France · Syrah, Grenache, Mourvèdre', '380'),
      W('La Parenthèse d’Hugues Laborde 2022', 'Château Haut-Meyreau, Bordeaux AOC · Malbec', '390'),
      W('Saint-Paul de Dominique, Saint-Émilion Grand Cru 2018', 'Château la Dominique, Bordeaux · Merlot, Cabernet Sauvignon, Cabernet Franc', '590'),
      W('Le Preare Amarone della Valpolicella DOCG 2020', 'Valpolicella, Veneto · Rondinella, Corvina, Corvinone', '590'),
      W('Petra Toscana Rosso IGT 2017', 'Terra Moretti, Tuscany · Cabernet Sauvignon & Merlot', '790'),
      W('Clos d’Agon Tinto 2018', 'Catalunya, Spain · Cabernet Sauvignon, Cabernet Franc, Merlot, Syrah, Petit Verdot', '790')] }
  ];
  /* Wine list Sept 2026 — Champagne & sparkling in full, plus a cellar selection; full list via PDF */
  var SEL = { en: 'A selection from the September 2026 wine list — the full list is in the PDF below.', th: 'คัดสรรจากรายการไวน์เดือนกันยายน 2026 — ดูรายการทั้งหมดใน PDF ด้านล่าง' };
  var BOTTLE = [
    { id: 'champ', t: { en: 'Champagne', th: 'แชมเปญ' }, items: [
      W('B Martin Brut Réserve', '', '2,750'), W('Champagne Foissy Jolly Brut Rosé', '', '2,750'), W('Ernest Rapeneau, Épernay Brut', '', '3,000'),
      W('Drappier Carte d’Or Brut', '', '3,800'), W('Moët & Chandon Brut Impérial — half (375ml)', '', '2,000'), W('Moët & Chandon Brut Impérial', '', '3,900'),
      W('Gremillet Sélection Brut', '', '3,990'), W('Demoiselle Vranken Tête de Cuvée', '', '4,900'), W('Bollinger Brut', '', '5,490'),
      W('G.H. Mumm Brut Cordon Rouge', '', '5,500'), W('Bollinger Brut Rosé', '', '5,990'), W('Ruinart Brut', '', '6,500'),
      W('Billecart-Salmon Brut Rosé', '', '6,900'), W('Laurent-Perrier Cuvée Rosé', '', '7,900'), W('Ruinart Rosé', '', '7,900'), W('Ruinart Blanc de Blancs', '', '8,900')] },
    { id: 'spark', t: { en: 'Prosecco & sparkling', th: 'โปรเซคโกและสปาร์กลิง' }, items: [
      W('Cava Brut, Codorníu Clásico', '', '1,750'), W('Cuvée Étoile Brut, Monmousseau', '', '1,790'), W('Prosecco DOC Astoria Butterfly', '', '1,850'),
      W('Bottignolo Agathe Prosecco', '', '1,890'), W('V8 Prosecco Brut Millesimato', '', '1,990'), W('André Delorme Blanc de Blancs Brut', '', '1,950')] },
    { id: 'whites', sub: SEL, t: { en: 'Cellar selection — white & rosé', th: 'ไวน์คัดสรร — ขาวและโรเซ่' }, items: [
      W('House Pinot Grigio, La Torre 2024', 'Italy', '1,790'), W('Dr. L Riesling Dry, Dr Loosen 2023', 'Mosel, Germany', '1,590'),
      W('Calrossie Sauvignon Blanc 2025', 'Marlborough, New Zealand', '1,890'), W('Trimbach Riesling 2023', 'Alsace, France', '2,190'),
      W('Génetin Pouilly-Fumé, Tinel-Blondelet 2022', 'Loire Valley, France', '2,490'), W('Chablis 1er Cru Montmains, Closerie des Alisiers 2023', 'Chablis, France', '2,590'),
      W('Chablis Premier Cru Montmains, Domaine Gérard Duplessis 2022', 'Chablis, France', '4,300'), W('Vie di Romans 2020', 'Italy', '3,700'),
      W('Domaine de la Chezatte, Sancerre Rosé 2023', 'Loire, France', '1,990'), W('Haut Charmes Sauternes 2022 (375ml)', 'Sauternes, France · dessert', '1,500')] },
    { id: 'reds', sub: SEL, t: { en: 'Cellar selection — red', th: 'ไวน์คัดสรร — แดง' }, items: [
      W('Château de Ribebon, Bordeaux Supérieur 2018', 'France', '1,690'), W('Block 88 Pinot Noir 2023', 'New Zealand', '1,990'),
      W('Le Preare Amarone DOCG 2020', 'Veneto, Italy', '2,490'), W('Châteauneuf-du-Pape, Famille JM Cazes 2019', 'Rhône, France', '3,650'),
      W('Buon Padre Barolo, Viberti Giovanni 2020', 'Piedmont, Italy', '2,990'), W('Brunello di Montalcino, Tenuta di Sesta 2020', 'Tuscany, Italy · J. Suckling 93', '2,890'),
      W('Pastourelle de Clerc Milon, Baron de Rothschild 2018', 'Pauillac, France', '3,390'), W('Château Clerc Milon Grand Cru Classé 2020', 'Pauillac, France', '6,200'),
      W('Clos Apalta 2018', 'Chile · Bordeaux blend', '7,990'), W('Moorooroo, Schild Estate 2021', 'Barossa Valley, Australia', '7,490'),
      W('Opus One 2021', 'Napa Valley, USA', '22,990'), W('Château Margaux Premier Grand Cru Classé 2014', 'Margaux, France', '44,900')] }
  ];

  /* ---------------- state ---------------- */
  var lang = d.lang === 'th' ? 'th' : 'en';
  var EN = {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var L = function (o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] || o.en)); };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var TAGS = { v: { en: 'V', th: 'มังสวิรัติ' }, vegan: { en: 'Vegan', th: 'วีแกน' }, 'new': { en: 'New', th: 'ใหม่' } };

  function renderSections(list, el, withJump) {
    var h = '';
    if (withJump) {
      h += '<nav class="jump" aria-label="' + esc(UI[lang].jump) + '">' + list.map(function (s) { return '<a href="#s-' + s.id + '">' + esc(L(s.t)) + '</a>'; }).join('') + '</nav>';
    }
    h += '<div class="msecs">' + list.map(function (s) {
      return '<section class="msec' + (s.wide ? ' msec--wide' : '') + '" id="s-' + s.id + '" aria-labelledby="h-' + s.id + '"><h3 id="h-' + s.id + '">' + esc(L(s.t)) + '</h3>' +
        (s.sub ? '<p class="intro">' + esc(L(s.sub)) + '</p>' : '') +
        s.items.map(function (it) {
          var r = '<div class="item"><p class="item__n">' + esc(L(it.n)) + (it.tag ? '<span class="tag">' + esc(L(TAGS[it.tag])) + '</span>' : '') + '</p>';
          r += '<p class="item__p">' + (it.p ? esc(L(it.p)) : '') + '</p>';
          if (it.meta) r += '<p class="item__meta">' + esc(it.meta) + '</p>';
          if (it.d) r += '<p class="item__d">' + esc(L(it.d)) + '</p>';
          if (it.opts) r += '<p class="item__opts">' + it.opts.map(function (o) { return '<span>' + esc(L(o[0])) + '<b>' + esc(o[1]) + '</b></span>'; }).join('') + '</p>';
          return r + '</div>';
        }).join('') + '</section>';
    }).join('') + '</div>';
    el.innerHTML = h;
    if (el.id === 'p-glass' || el.id === 'p-bottle') el.classList.add('wine');
  }
  /* Plate photos per course — real restaurant photos only. x = exact dish, b = from the bar; others are illustrative */
  var PH = {
    m1: [['dish4', .55, .45], ['dish7', .5, .45], ['dish5', .55, .68], ['dish1', .5, .46], ['hero', .56, .6, 'x'], ['gin2', .5, .5, 'b']],
    m2: [['dish2', .5, .47], ['dish1', .52, .42], ['dish0', .5, .46, 'x'], ['dish6', .5, .52], ['dish7', .5, .45], ['gin1', .5, .55, 'b']]
  };
  function srcFor(n, want) {
    var m = (window.CDA_IMG || {})[n]; if (!m) return 'img/' + n + '-800.webp';
    var s = m.s.filter(function (w) { return w <= want; }); return 'img/' + n + '-' + (s.length ? s[s.length - 1] : m.s[0]) + '.webp';
  }
  window.CDA_PH = PH; window.CDA_SRC = srcFor;
  var platesBuilt = false;
  function renderCourses() {
    ['m1', 'm2'].forEach(function (k, mi) {
      var c = COURSES[k], el = document.getElementById(k), ph = PH[k], u = UI[lang];
      if (!platesBuilt) {
        el.innerHTML = '<div class="plates__pin"><div class="plates__head"></div>' +
          '<div class="plates__disc" data-menu="' + k + '"><div class="plates__css">' + ph.map(function (p, i) {
            return '<img alt="" data-src="' + srcFor(p[0], 800) + '" data-n="' + p[0] + '" data-f="' + p[1] + ',' + p[2] + '" style="object-position:' + (p[1] * 100) + '% ' + (p[2] * 100) + '%"' + (i ? '' : ' class="is-cur"') + ' decoding="async">';
          }).join('') + '</div><canvas class="plates__gl" aria-hidden="true"></canvas></div>' +
          '<ol class="plates__caps"></ol><ol class="plates__ticks" aria-hidden="true">' + ph.map(function (_, i) { return '<li' + (i ? '' : ' class="is-on"') + '><span>0' + (i + 1) + '</span></li>'; }).join('') + '</ol></div>';
      }
      var head = '<p class="plates__k"><span class="num">' + (mi + 1) + '</span>' + esc(u.menuN) + '</p><h3 id="' + k + 'T">' + esc(TH && lang === 'th' ? TH['courses.' + k] : (EN['courses.' + k] || '')).replace(/^#\d\s*/, '') + '</h3>' +
        '<p class="cm__meta">' + c.meta.map(function (m, i) { return i ? '<span>' + esc(L(m)) + '</span>' : '<b>' + esc(L(m)) + '</b>'; }).join('') + '</p>';
      el.querySelector('.plates__head').innerHTML = head;
      el.querySelector('.plates__caps').innerHTML = c.items.map(function (it, i) {
        var p = ph[i], lab = p[3] === 'x' ? u.exact : (p[3] === 'b' ? u.illusBar : u.illus);
        return '<li class="cap' + (it.sweet ? ' cap--sweet' : '') + (i ? '' : ' is-on') + '" data-c="' + i + '">' +
          '<img class="cap__img" alt="" loading="lazy" decoding="async" src="' + srcFor(p[0], 480) + '" style="object-position:' + (p[1] * 100) + '% ' + (p[2] * 100) + '%">' +
          '<p class="cap__n">' + (it.sweet ? esc(u.sweet) + ' · ' : '') + '<b>0' + (i + 1) + '</b> / 06</p>' +
          '<h4>' + esc(L(it.n)) + '</h4>' + (it.d ? '<p class="cap__d">' + esc(L(it.d)) + '</p>' : '') +
          '<p class="pair"><span>' + esc(u.pairing) + '</span>' + esc(it.w || u.pairNone) + '</p>' +
          (it.o ? '<p class="opt">' + esc(L(it.o)) + '</p>' : '') +
          '<p class="cap__ph">' + esc(lab) + '</p></li>';
      }).join('');
    });
    platesBuilt = true;
    document.dispatchEvent(new CustomEvent('cda:courses'));
  }
  function renderAll() {
    renderCourses();
    renderSections(CARTE, $('#p-carte'), true);
    renderSections(VEG, $('#p-veg'));
    renderSections(KIDS, $('#p-kids'));
    renderSections(GLASS, $('#p-glass'));
    renderSections(BOTTLE, $('#p-bottle'), true);
  }

  /* ---------------- i18n ---------------- */
  $$('[data-i]').forEach(function (el) { EN[el.getAttribute('data-i')] = el.innerHTML; });
  function applyLang(l, persist) {
    lang = l; d.lang = l;
    $$('[data-i]').forEach(function (el) {
      var k = el.getAttribute('data-i');
      if (l === 'th' && TH[k] != null) el.textContent = TH[k]; else if (EN[k] != null) el.innerHTML = EN[k];
    });
    var u = UI[l];
    $('#langTxt').textContent = u.lang;
    $('#langBtn').setAttribute('aria-label', u.langLabel);
    setThemeLabel();
    $('#menuBtn').setAttribute('aria-label', drawerOpen ? u.closeMenu : u.openMenu);
    document.title = l === 'th' ? 'Café des Amis — ร้านอาหารไฟน์ไดนิ่ง พัทยา' : 'Café des Amis — Fine dining restaurant, Pattaya';
    renderAll();
    if (persist) try { localStorage.setItem('cda6-lang', l); } catch (e) {}
    d.classList.remove('i18n-wait');
    document.dispatchEvent(new CustomEvent('cda:lang'));
  }

  /* ---------------- theme ---------------- */
  function setThemeLabel() {
    var light = d.getAttribute('data-theme') === 'light';
    $('#themeBtn').setAttribute('aria-label', light ? UI[lang].themeD : UI[lang].themeL);
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = light ? '#f4efe6' : '#0c0b0a';
  }
  $('#themeBtn').addEventListener('click', function () {
    var next = d.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    d.setAttribute('data-theme', next);
    try { localStorage.setItem('cda6-theme', next); } catch (e) {}
    setThemeLabel();
  });
  $('#langBtn').addEventListener('click', function () { applyLang(lang === 'th' ? 'en' : 'th', true); });

  /* ---------------- drawer ---------------- */
  var drawerOpen = false, bar = $('#bar'), drawer = $('#drawer'), menuBtn = $('#menuBtn');
  function setDrawer(open) {
    drawerOpen = open;
    drawer.classList.toggle('is-open', open); bar.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) drawer.removeAttribute('inert'); else drawer.setAttribute('inert', '');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? UI[lang].closeMenu : UI[lang].openMenu);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  menuBtn.addEventListener('click', function () { setDrawer(!drawerOpen); });
  drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawerOpen) { setDrawer(false); menuBtn.focus(); } });
  window.matchMedia('(min-width:1180px)').addEventListener('change', function (m) { if (m.matches) setDrawer(false); });

  /* ---------------- tabs (generic) ---------------- */
  function tabs(list, onChange) {
    var btns = $$('[role=tab]', list);
    function sel(b, focus) {
      btns.forEach(function (x) {
        var on = x === b; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        var p = document.getElementById(x.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
      if (focus) b.focus();
      if (onChange) onChange(b);
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { sel(b); });
      b.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowRight') n = btns[(i + 1) % btns.length]; else if (k === 'ArrowLeft') n = btns[(i - 1 + btns.length) % btns.length];
        else if (k === 'Home') n = btns[0]; else if (k === 'End') n = btns[btns.length - 1];
        if (n) { e.preventDefault(); sel(n, true); }
      });
    });
    return sel;
  }
  var selBook = tabs($('#bookTabs'), function (b) {
    var tb = $('#bookTabs'); var r = b.getBoundingClientRect(), pr = tb.getBoundingClientRect();
    if (r.left < pr.left || r.right > pr.right) tb.scrollBy({ left: r.left - pr.left - 24, behavior: 'smooth' });
  });
  tabs($('.seg--rooms'), function (b) {
    var id = b.getAttribute('aria-controls') === 'r-garden' ? 'garden' : 'inside';
    $$('.rooms .xfade').forEach(function (x) { x.classList.toggle('is-on', x.getAttribute('data-room') === id); });
  });
  $$('[data-open]').forEach(function (a) {
    a.addEventListener('click', function () { var t = $('[aria-controls="' + a.getAttribute('data-open') + '"]'); if (t) selBook(t); });
  });

  /* ---------------- reveal ---------------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var ro = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); ro.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach(function (el) { ro.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('is-in'); }); }

  /* ---------------- scroll: bar, dock, wellington reveal ---------------- */
  var dock = $('.dock'), pano = $('#wellPano'), hero = $('.hero'), ticking = false;
  var navSecs = [], navLinks = $$('.bar__nav a'), lastHere = null;
  function measureNav() {
    var y0 = window.scrollY;
    navSecs = $$('main > section[id]').map(function (s) { var r = s.getBoundingClientRect(); return [s.id, r.top + y0, r.bottom + y0]; });
  }
  function onScroll() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight;
    var heroH = hero.offsetHeight, r = (!reduce && pano) ? pano.getBoundingClientRect() : null;
    bar.classList.toggle('is-solid', y > 40);
    if (dock) dock.classList.toggle('is-on', y > Math.min(heroH * 0.6, vh * 0.7));
    if (r) {
      var t = Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height * 0.4)));
      pano.style.setProperty('--clip', ((1 - t) * 12).toFixed(2) + '%');
      pano.style.setProperty('--zoom', (1.08 - t * 0.08).toFixed(3));
    }
    var here = null, py = y + vh * 0.4;
    navSecs.forEach(function (s) { if (s[1] < py && s[2] > py) here = s[0]; });
    if (here !== lastHere) { lastHere = here; navLinks.forEach(function (a) { a.classList.toggle('is-here', a.getAttribute('href') === '#' + here); }); }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', function () { measureNav(); onScroll(); });
  window.addEventListener('load', function () { measureNav(); onScroll(); });
  document.addEventListener('cda:layout', function () { measureNav(); onScroll(); });

  /* ---------------- demo form ---------------- */
  var toastT;
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('is-on'); }, 4200); }
  $('#resForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, msg = $('#formMsg');
    if (!f.name.value.trim()) { msg.textContent = UI[lang].formNeed; f.name.focus(); return; }
    msg.textContent = UI[lang].formOk;
  });
  var dt = $('#resForm input[type=date]'); if (dt) { var n = new Date(); dt.min = n.toISOString().slice(0, 10); }

  applyLang(lang, false);
  measureNav();
  onScroll();
})();
