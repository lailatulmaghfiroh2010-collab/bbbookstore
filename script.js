
'use strict';

const WA_NUMBER = '62895369410157';

//data
const BOOKS = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 65000,
    category: 'pengembangan-diri',
    condition: 'Bagus',
    desc: 'Atomic Habits menjelaskan bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat menghasilkan perubahan besar dalam hidup. Membahas bagaimana kebiasaan terbentuk, cara mengubah kebiasaan buruk, serta membangun kebiasaan baik secara konsisten. Cocok untuk siapa saja yang ingin meningkatkan produktivitas dan mencapai tujuan secara lebih efektif.',
    img: 'Atomic-habits.jpg',
    imgFallback: '📗'
  },
  {
    id: 2,
    title: 'Morfologi Tumbuhan',
    author: 'Tjitrosoepomo',
    price: 45000,
    category: 'sains',
    condition: 'Baik',
    desc: 'Membahas secara lengkap struktur dan bentuk bagian-bagian tumbuhan seperti akar, batang, daun, bunga, dan buah. Materi dijelaskan sistematis sehingga memudahkan pembaca memahami karakteristik setiap bagian tumbuhan. Sangat cocok untuk pelajar dan mahasiswa biologi/botani.',
    img: 'Motoforlogi-tumbuhan.jpg',
    imgFallback: '🌿'
  },
  {
    id: 3,
    title: 'Genetika Manusia',
    author: 'Suryo',
    price: 55000,
    category: 'sains',
    condition: 'Bagus',
    desc: 'Membahas pewarisan sifat pada manusia serta bagaimana gen memengaruhi berbagai karakteristik biologis. Di dalamnya dijelaskan konsep dasar genetika: DNA, kromosom, mutasi gen, hingga pola pewarisan sifat dalam keluarga. Sangat relevan dengan dunia kesehatan dan penelitian modern.',
    img: 'Genetika-manusia.png',
    imgFallback: '🧬'
  },
  {
    id: 4,
    title: 'Rumus Anti Lupa Fisika',
    author: 'Tim Redaksi',
    price: 73000,
    category: 'sains',
    condition: 'Baik',
    desc: 'Merangkum berbagai rumus penting yang sering digunakan dalam pelajaran fisika beserta penjelasan sederhana cara penggunaannya. Dilengkapi contoh soal dan pembahasan. Sangat cocok untuk mempersiapkan ujian atau meningkatkan pemahaman konsep fisika.',
    img: 'Rumus-anti-lupa-fisika.jpg',
    imgFallback: '⚛️'
  },
  {
    id: 5,
    title: 'Autumn in Paris',
    author: 'Ilana Tan',
    price: 74000,
    category: 'roman',
    condition: 'Bagus',
    desc: 'Kisah cinta antara Tara Dupont dan Tatsuya Fujisawa yang berlatar di Paris dengan nuansa musim gugur yang hangat. Novel yang menyajikan kisah cinta manis namun penuh konflik emosional, dengan gaya penulisan ringan dan menyentuh.',
    img: 'Autumn-in-paris.jpg',
    imgFallback: '🍂'
  },
  {
    id: 6,
    title: 'Spring in London',
    author: 'Ilana Tan',
    price: 50000,
    category: 'roman',
    condition: 'Baik',
    desc: 'Salah satu novel dari seri Four Seasons karya Ilana Tan. Mengisahkan perjalanan cinta antara Naomi Ishida dan Danny Jo yang bertemu di kota London. Penuh kejutan dan konflik yang membuat pembaca ikut merasakan emosi para tokohnya.',
    img: 'Spring-in-London.jpg',
    imgFallback: '🌸'
  },
  {
    id: 7,
    title: 'Winter in Tokyo',
    author: 'Ilana Tan',
    price: 74000,
    category: 'roman',
    condition: 'Bagus',
    desc: 'Kisah cinta antara Ishida Keiko dan Kazuto yang berkembang perlahan di tengah kehidupan mereka di Tokyo. Memiliki alur cerita hangat dengan sentuhan misteri yang membuat pembaca penasaran hingga akhir.',
    img: 'Winter-in-tokyo.jpg',
    imgFallback: '❄️'
  },
  {
    id: 8,
    title: 'Summer in Seoul',
    author: 'Ilana Tan',
    price: 75000,
    category: 'roman',
    condition: 'Baik',
    desc: 'Novel romantis berlatar Seoul, Korea Selatan. Mengikuti perjalanan cinta Sandy dan Jung Tae-Woo yang bertemu dalam situasi tak terduga. Dengan latar kota Seoul yang modern dan alur yang ringan, ini salah satu karya paling populer Ilana Tan.',
    img: 'Summer-in-seoul.jpg',
    imgFallback: '🌇'
  },
  {
    id: 9,
    title: 'Pulau Batu di Samudra Buatan',
    author: 'Ziggy Zezsyazeoviennazabrizkie',
    price: 76000,
    category: 'fiksi',
    condition: 'Bagus',
    desc: 'Novel absurdist-satir tentang 87 tamu hotel yang terjebak banjir buatan dan misteri pembunuhan. Berfokus pada perjuangan bertahan hidup, dengan kritik sosial, relasi kuasa, dan feminisme dalam nuansa dark comedy.',
    img: 'Pulau-batu.jpg',
    imgFallback: '🏝️'
  },
  {
    id: 10,
    title: 'Jakarta Sebelum Pagi',
    author: 'Ziggy Zezsyazeoviennazabrizkie',
    price: 84000,
    category: 'fiksi',
    condition: 'Bagus',
    desc: 'Novel misteri-fantasi tentang Emina, gadis unik yang menyelidiki pengirim bunga misterius ke balkonnya. Bersama Abel, ia menyusuri Jakarta yang sepi pukul 3 dini hari, mengungkap rahasia kota dan kisah masa lalu.',
    img: 'Jakarta-sebelum-Pagi.png',
    imgFallback: '🌃'
  },
  {
    id: 11,
    title: 'Mari Pergi Lebih Jauh',
    author: 'Ziggy Zezsyazeoviennazabrizkie',
    price: 96000,
    category: 'fiksi',
    condition: 'Baik',
    desc: 'Melanjutkan petualangan trio bersaudara Mi, Ma, dan Mo setelah kejadian tragis dan aneh di buku sebelumnya. Fokus utama adalah misi pencarian Fifi yang dinyatakan hilang. Penuh imajinasi gelap yang khas Ziggy.',
    img: 'Mari-pergi-lebih-jauh.jpg',
    imgFallback: '🚶'
  },
  {
    id: 12,
    title: 'Kita Pergi Hari Ini',
    author: 'Ziggy Zezsyazeoviennazabrizkie',
    price: 94000,
    category: 'fiksi',
    condition: 'Bagus',
    desc: 'Novel fantasi gelap yang menceritakan petualangan lima anak bersama pengasuh kucing ajaib, Nona Gigi. Mereka menjelajahi tempat-tempat ajaib namun cerita berujung pada akhir yang tragis dan kelam.',
    img: 'Kita-pergi-hari-ini.jpg',
    imgFallback: '🐱'
  },
  {
    id: 13,
    title: 'Semua Ikan di Langit',
    author: 'Ziggy Zezsyazeoviennazabrizkie',
    price: 87000,
    category: 'fiksi',
    condition: 'Baik',
    desc: 'Novel fantasi yang mengisahkan perjalanan surealis sebuah bus Damri bernama "Saya". Dipandu sosok misterius dan ikan julung-julung, bus ini menjelajahi ruang dan waktu, mengamati suka duka kehidupan manusia dan ketuhanan.',
    img: 'Semua-ikan-di-langit.jpg',
    imgFallback: '🐟'
  }
];

let currentFilter   = 'semua';
let currentSearch   = '';
let selectedPayment = 'transfer';
let activeBook      = null;   // buku yang sedang diorder
let orderStep       = 1;

/**
 * @param {number} n
 * @returns {string}
 */
const fmt = (n) => 'Rp ' + n.toLocaleString('id-ID');

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('fade-out');
  }, 1800);
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 60) {
    navbar.style.boxShadow = '0 4px 28px rgba(20,10,3,0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(20,10,3,0.26)';
  }
});

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/**
 * @returns {Array}
 */
function getFilteredBooks() {
  const q = currentSearch.trim().toLowerCase();
  return BOOKS.filter((b) => {
    const matchCat = currentFilter === 'semua' || b.category === currentFilter;
    const matchQ   = !q
      || b.title.toLowerCase().includes(q)
      || b.author.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
}

function renderBooks() {
  const grid     = document.getElementById('productsGrid');
  const empty    = document.getElementById('emptyState');
  const filtered = getFilteredBooks();

  if (!grid) return;
  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty && empty.classList.remove('hidden');
    return;
  }

  empty && empty.classList.add('hidden');

  filtered.forEach((book, i) => {
    const card = createBookCard(book, i);
    grid.appendChild(card);
  });
  observeCards();
}

/**
 * @param {Object} book
 * @param {number} index
 * @returns {HTMLElement}
 */
function createBookCard(book, index) {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.style.animationDelay = (index * 0.07) + 's';

  const condClass = {
    'Bagus': 'cond-bagus',
    'Baik':  'cond-baik',
    'Cukup': 'cond-cukup'
  }[book.condition] || 'cond-baik';

  const catLabel = {
    'pengembangan-diri': 'Self-Improvement',
    'sains':             'Sains',
    'roman':             'Roman',
    'fiksi':             'Fiksi & Sastra'
  }[book.category] || book.category;

  card.innerHTML = `
    <div class="book-img-wrap">
      <img
        class="book-img"
        src="BOOK-IMG/image/${book.img}"
        alt="${book.title}"
        loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div style="display:none; align-items:center; justify-content:center;
                  font-size:4rem; height:100%; background:#f5edd8; position:absolute; inset:0; border-radius:0;">
        ${book.imgFallback}
      </div>
      <span class="book-category-badge">${catLabel}</span>
      <span class="book-condition-badge ${condClass}">${book.condition}</span>
    </div>
    <div class="book-body">
      <div class="book-title">${book.title}</div>
      <div class="book-author">${book.author}</div>
      <div class="book-price">${fmt(book.price)}</div>
      <div class="book-actions">
        <button class="book-btn-desc" onclick="openDescModal(${book.id})">
          📄 Deskripsi
        </button>
        <button class="book-btn-order" onclick="openOrderModal(${book.id})">
          🛒 Order
        </button>
      </div>
    </div>`;

  return card;
}

let cardObserver = null;

function observeCards() {
  if (cardObserver) cardObserver.disconnect();

  cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.book-card').forEach((card) => {
    cardObserver.observe(card);
  });
}

/**
 * @param {string} cat
 * @param {HTMLElement} el
 */
function filterCategory(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('.ftab').forEach((t) => t.classList.remove('active'));
  el.classList.add('active');
  renderBooks();
}

function searchBook() {
  currentSearch = document.getElementById('searchInput')?.value || '';
  renderBooks();
}

/**
 * @param {number} id
 */
function openDescModal(id) {
  const book = BOOKS.find((b) => b.id === id);
  if (!book) return;

  const catLabel = {
    'pengembangan-diri': 'Self-Improvement',
    'sains':             'Sains & Akademik',
    'roman':             'Roman',
    'fiksi':             'Fiksi & Sastra'
  }[book.category] || book.category;

  document.getElementById('modalImg').src         = "BOOK-IMG/image/" + book.img;
  document.getElementById('modalImg').alt         = book.title;
  document.getElementById('modalCategory').textContent  = catLabel;
  document.getElementById('modalTitle').textContent     = book.title;
  document.getElementById('modalAuthor').textContent    = 'oleh ' + book.author;
  document.getElementById('modalPrice').textContent     = fmt(book.price);
  document.getElementById('modalCondition').textContent = '📦 Kondisi: ' + book.condition;
  document.getElementById('modalDesc').textContent      = book.desc;

  document.getElementById('modalOrderBtn').onclick = () => {
    closeDescModalDirect();
    setTimeout(() => openOrderModal(id), 200);
  };

  document.getElementById('descModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDescModal(e) {
  if (e.target === document.getElementById('descModal')) {
    closeDescModalDirect();
  }
}

function closeDescModalDirect() {
  document.getElementById('descModal').classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * @param {number} id
 */
function openOrderModal(id) {
  const book = BOOKS.find((b) => b.id === id);
  if (!book) return;

  activeBook      = book;
  selectedPayment = 'transfer';
  orderStep       = 1;

  document.getElementById('orderBookPreview').innerHTML = `
    <strong>${book.title}</strong><br>
    ${book.author} &nbsp;·&nbsp; ${fmt(book.price)} &nbsp;·&nbsp; Kondisi: ${book.condition}
  `;

  ['oName', 'oPhone', 'oNotes'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) { el.value = ''; el.classList.remove('invalid'); }
  });
  const addr = document.getElementById('oAddress');
  if (addr) { addr.value = ''; addr.classList.remove('invalid'); }

  selectedPayment = 'transfer';
  document.querySelectorAll('.om-pay-tab').forEach((t) => t.classList.remove('active'));
  const firstTab = document.getElementById('tabTransfer');
  if (firstTab) firstTab.classList.add('active');

  ['panelTransfer', 'panelQris', 'panelCod'].forEach((id) => {
    const p = document.getElementById(id);
    if (p) p.classList.add('hidden');
  });
  const pTransfer = document.getElementById('panelTransfer');
  if (pTransfer) pTransfer.classList.remove('hidden');

  const codAddr = document.getElementById('oCodAddress');
  const codEksp = document.getElementById('oCodEkspedisi');
  const codNote = document.getElementById('oCodNotes');
  if (codAddr) { codAddr.value = ''; codAddr.classList.remove('invalid'); }
  if (codEksp) { codEksp.value = ''; codEksp.classList.remove('invalid'); }
  if (codNote)   codNote.value = '';

  qrGenerated = false;

  goOrderStepRaw(1);
  document.getElementById('orderModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderModalDirect() {
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
  activeBook = null;
}

function closeOrderModal(e) {
  if (e.target === document.getElementById('orderModal')) {
    closeOrderModalDirect();
  }
}

/**
 * @param {number} step - 1, 2, atau 3
 */
function goOrderStepRaw(step) {
  orderStep = step;

  ['oStep1', 'oStep2', 'oStep3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', i + 1 !== step);
  });

  [1, 2, 3].forEach((n) => {
    const stepEl = document.getElementById('ostep' + n);
    const lineEl = document.getElementById('oline' + n);
    if (!stepEl) return;

    stepEl.classList.remove('active', 'done');
    if (n < step)       stepEl.classList.add('done');
    else if (n === step) stepEl.classList.add('active');

    const numSpan = stepEl.querySelector('span');
    if (numSpan) numSpan.textContent = n < step ? '✓' : String(n);

    if (lineEl) lineEl.classList.toggle('done', n < step);
  });

  document.getElementById('orderModalBox')?.scrollTo({ top: 0, behavior: 'smooth' });
}

function goOrderStep1() {
  goOrderStepRaw(1);
}

function goOrderStep2() {
  const name    = document.getElementById('oName');
  const phone   = document.getElementById('oPhone');
  const address = document.getElementById('oAddress');
  let valid = true;

  [name, phone, address].forEach((el) => {
    if (!el.value.trim()) {
      el.classList.add('invalid');
      valid = false;
    }
  });

  if (phone.value.trim() && !/^[0-9+\-\s]{8,15}$/.test(phone.value.trim())) {
    phone.classList.add('invalid');
    valid = false;
  }

  if (!valid) {
    showToast('Harap isi semua field yang wajib!', '⚠️');
    return;
  }

  document.getElementById('oSumBook').textContent  = activeBook?.title || '–';
  document.getElementById('oSumPrice').textContent = activeBook ? fmt(activeBook.price) : '–';

  goOrderStepRaw(2);
}

function goOrderStep3() {
  const payMap = {
    'transfer': 'Transfer Bank',
    'qris':     'QRIS',
    'cod':      'COD (Bayar di Tempat)'
  };

  if (selectedPayment === 'cod') {
    const codAddr = document.getElementById('oCodAddress');
    const codEksp = document.getElementById('oCodEkspedisi');
    let valid = true;
    if (!codAddr.value.trim()) { codAddr.classList.add('invalid'); valid = false; }
    if (!codEksp.value)        { codEksp.classList.add('invalid'); valid = false; }
    if (!valid) { showToast('Harap isi alamat dan pilih ekspedisi COD!', '⚠️'); return; }
  }

  const pay  = payMap[selectedPayment] || selectedPayment;
  const name    = document.getElementById('oName').value;
  const phone   = document.getElementById('oPhone').value;
  const address = document.getElementById('oAddress').value;
  const notes   = document.getElementById('oNotes').value;
  const codAddr = document.getElementById('oCodAddress')?.value || '';
  const codEksp = document.getElementById('oCodEkspedisi')?.value || '';
  const codNote = document.getElementById('oCodNotes')?.value || '';
  document.getElementById('oSumPay').textContent = pay;

  // ── Kolom kiri: ringkasan harga ──
  document.getElementById('confirmSummary').innerHTML = `
    <div><strong>Buku</strong><br><span class="val">${activeBook?.title || '–'}</span></div>
    <div><strong>Penulis</strong><br><span class="val">${activeBook?.author || '–'}</span></div>
    <div><strong>Kondisi</strong><br><span class="val">${activeBook?.condition || '–'}</span></div>
    <div><strong>Harga</strong><br><span class="price-val">${activeBook ? fmt(activeBook.price) : '–'}</span></div>
    <div><strong>Ongkir</strong><br><span class="val" style="font-style:italic;color:var(--ink-muted)">Dikonfirmasi admin</span></div>
    <div><strong>Metode Bayar</strong><br><span class="val" style="font-weight:700;color:var(--terracotta)">${pay}</span></div>
  `;

  let shippingRows = '';
  if (selectedPayment === 'cod') {
    shippingRows = `
      <div><strong>Ekspedisi</strong><br><span class="val">${codEksp}</span></div>
      <div><strong>Alamat COD</strong><br><span class="val">${codAddr}</span></div>
      ${codNote ? `<div><strong>Catatan COD</strong><br><span class="val">${codNote}</span></div>` : ''}
    `;
  }

  document.getElementById('confirmDetail').innerHTML = `
    <div><strong>Nama</strong><br><span class="val">${name}</span></div>
    <div><strong>WhatsApp</strong><br><span class="val">${phone}</span></div>
    <div><strong>Alamat</strong><br><span class="val">${address}</span></div>
    ${notes ? `<div><strong>Catatan</strong><br><span class="val">${notes}</span></div>` : ''}
    ${shippingRows}
  `;

  goOrderStepRaw(3);
}

/**
 * @param {HTMLElement} el     - elemen pay-method yang diklik
 * @param {string}      method - 'transfer' | 'qris' | 'cod'
 */
function selectPay(el, method) {
  document.querySelectorAll('.om-pay-tab').forEach((t) => t.classList.remove('active'));
  el.classList.add('active');
  selectedPayment = method;

  const payLabel = { transfer: 'Transfer Bank', qris: 'QRIS', cod: 'COD' };
  const badge = document.getElementById('oSumPay');
  if (badge) badge.textContent = payLabel[method] || method;

  ['panelTransfer', 'panelQris', 'panelCod'].forEach((id) => {
    const p = document.getElementById(id);
    if (p) p.classList.add('hidden');
  });
  const panelMap = { transfer: 'panelTransfer', qris: 'panelQris', cod: 'panelCod' };
  const target = document.getElementById(panelMap[method]);
  if (target) target.classList.remove('hidden');

  if (method === 'qris') generateQrPlaceholder();
}

let qrGenerated = false;

/**
 * Generate pseudo-QR code visual menggunakan CSS grid
 * Hanya sebagai placeholder — ganti dengan QR asli
 */
function generateQrPlaceholder() {
  if (qrGenerated) return;
  qrGenerated = true;

  const grid = document.getElementById('qrGrid');
  if (!grid) return;

  // Pola QR sederhana — 3 finder pattern + data noise
  const SIZE = 10;
  const cells = Array(SIZE * SIZE).fill(0);

  // Finder pattern kiri atas (baris 0-2, kolom 0-2)
  const finderTL = [0,1,2,10,12,20,21,22];
  // Finder pattern kanan atas (baris 0-2, kolom 7-9)
  const finderTR = [7,8,9,17,19,27,28,29];
  // Finder pattern kiri bawah (baris 7-9, kolom 0-2)
  const finderBL = [70,71,72,80,82,90,91,92];

  [...finderTL, ...finderTR, ...finderBL].forEach((i) => { cells[i] = 1; });

  for (let i = 0; i < SIZE * SIZE; i++) {
    if (cells[i] !== 1) {
      cells[i] = ((i * 7 + i * i * 3) % 5 < 2) ? 1 : 0;
    }
  }

  grid.innerHTML = '';
  cells.forEach((val) => {
    const cell = document.createElement('div');
    cell.className = 'qr-cell';
    cell.style.background = val ? '#2C1F0E' : 'transparent';
    grid.appendChild(cell);
  });
}

function sendToWhatsApp() {
  if (!activeBook) return;

  const name    = document.getElementById('oName')?.value    || '';
  const phone   = document.getElementById('oPhone')?.value   || '';
  const address = document.getElementById('oAddress')?.value || '';
  const notes   = document.getElementById('oNotes')?.value   || '';
  const payMap  = {
    transfer : 'Transfer Bank',
    qris     : 'QRIS',
    cod      : 'COD (Bayar di Tempat)'
  };
  const pay = payMap[selectedPayment] || selectedPayment;

  const codAddr = document.getElementById('oCodAddress')?.value || '';
  const codEksp = document.getElementById('oCodEkspedisi')?.value || '';
  const codNote = document.getElementById('oCodNotes')?.value || '';

  const lines = [
    '📚 *PESANAN BUKU — Bibbidi Bobbidi Books*',
    '',
    `📖 *Judul   :* ${activeBook.title}`,
    `✍️ *Penulis :* ${activeBook.author}`,
    `💰 *Harga   :* ${fmt(activeBook.price)}`,
    `📦 *Kondisi :* ${activeBook.condition}`,
    '',
    '─────────────────────',
    '*👤 Data Pembeli*',
    `Nama    : ${name}`,
    `WA      : ${phone}`,
    `Alamat  : ${address}`,
    notes ? `Catatan : ${notes}` : null,
    '',
    '─────────────────────',
    `*💳 Metode Bayar: ${pay}*`,
  ];

  if (selectedPayment === 'qris') {
    lines.push('');
    lines.push('📌 _Bukti pembayaran QRIS akan dikirim menyusul_');
  } else if (selectedPayment === 'cod') {
    lines.push('');
    lines.push('*🛵 Detail COD*');
    lines.push(`📍 Alamat COD : ${codAddr}`);
    lines.push(`🚚 Ekspedisi  : ${codEksp}`);
    if (codNote) lines.push(`📝 Catatan COD: ${codNote}`);
  } else {
    lines.push('');
    lines.push('_Bukti transfer akan dikirim setelah pembayaran_');
  }

  lines.push('');
  lines.push('─────────────────────');
  lines.push('Mohon dikonfirmasi ya, Kak! 🙏');

  const msg = lines.filter((l) => l !== null).join('\n');
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  closeOrderModalDirect();
  showToast('Mengalihkan ke WhatsApp admin... 💬', '✅');
}

/**
 * @param {string} message
 */
function openWhatsApp(message) {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/**
 * @param {string} text
 * @param {string} bankName
 */
function copyText(text, bankName) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Nomor ${bankName} tersalin! ✓`, '📋');
  }).catch(() => {
    // Fallback untuk browser lama
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(`Nomor ${bankName} tersalin! ✓`, '📋');
  });
}

/**
 * @param {HTMLElement} el
 */
function clearOInvalid(el) {
  el.classList.remove('invalid');
}

/**
 * Tampilkan notifikasi toast
 * @param {string} msg
 * @param {string} icon
 */
function showToast(msg, icon = '📖') {
  const wrap  = document.getElementById('toastWrap');
  if (!wrap) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> ${msg}`;
  wrap.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
});
