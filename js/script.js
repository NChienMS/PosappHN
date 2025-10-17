// ========== Năm động ==========
document.getElementById('y').textContent = new Date().getFullYear();

// ========== Tìm kiếm với phím '/' ==========
const search = document.getElementById('search');
window.addEventListener('keydown', (e)=>{
  if(e.key === '/' && document.activeElement !== search){
    e.preventDefault();
    search.focus();
  }
});

// ========== Lọc thẻ card theo từ khóa ==========
search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  document.querySelectorAll('#cards .card').forEach(c=>{
    const tags = (c.dataset.tags || '').toLowerCase();
    const text = c.innerText.toLowerCase();
    c.style.display = (q === '' || tags.includes(q) || text.includes(q)) ? '' : 'none';
  });
});

// ========== Smooth scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    if(!id) return;
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// ========== Theme: Sáng / Tối ==========
const root = document.documentElement;
const THEME_KEY = 'nt_theme';

function applyTheme(theme){
  root.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  const moon = document.getElementById('icon-moon');
  const sun  = document.getElementById('icon-sun');
  if (moon && sun){
    moon.style.display = isDark ? 'none' : '';
    sun.style.display  = isDark ? '' : 'none';
  }
  const btn = document.getElementById('themeToggle');
  if (btn) btn.setAttribute('aria-pressed', String(isDark));
}

function getSystemPrefers(){
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Khởi tạo
(function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || 'dark';
  applyTheme(theme);
  if (!saved && getSystemPrefers() === 'light'){
    applyTheme('light');
  }
})();

// Toggle
document.getElementById('themeToggle')?.addEventListener('click', ()=>{
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

// Theo dõi đổi theme hệ thống khi chưa tự đặt
window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e)=>{
  if (!localStorage.getItem(THEME_KEY)){
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation(); // tránh mở/đóng details khi bấm icon
    const details = btn.closest('details');
    const text = details.querySelector('.muted').innerText.trim();

    navigator.clipboard.writeText(text).then(() => {
      showToast('Đã sao chép nội dung');
    });
  });
});

// Tạo & hiển thị thông báo nhỏ
function showToast(msg) {
  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}


// ==== Cấu hình sheet ====
// Đọc từ sheet tên "lienket" của file 1oPF4N4MT4ZixdLgyMb7AniXBTkZZ0e3Huws7r4aM1ao
// Lấy A1 (tiêu đề) và A2 (link). Dùng gviz + out:csv theo tên sheet (không cần gid).
const SHEET_ID = "1oPF4N4MT4ZixdLgyMb7AniXBTkZZ0e3Huws7r4aM1ao";
const SHEET_NAME = "lienket";
const RANGE = "A1:A2";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}&range=${RANGE}`;

// ==== DOM ====
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const quickBtn = document.getElementById("quickBtn");
const homeBtn = document.getElementById("homeBtn");
const errorEl = document.getElementById("error");
const countdownWrap = document.getElementById("countdownWrap");
const countEl = document.getElementById("count");

// ==== CSV parser cho 1 cột nhiều dòng ====
function parseCsv(text) {
  // Với range A1:A2, CSV sẽ gồm 2 dòng, mỗi dòng 1 ô (có thể có ngoặc kép)
  const lines = text.trim().split(/\r?\n/);
  return lines.map(line => {
    // bỏ ngoặc kép nếu có và unescape ""
    if (line.startsWith('"') && line.endsWith('"')) {
      line = line.slice(1, -1).replace(/""/g, '"');
    }
    return line;
  });
}

function setDisabledQuickAccess(disabled, reason = "") {
  if (disabled) {
    quickBtn.classList.add("disabled");
    quickBtn.setAttribute("aria-disabled", "true");
    quickBtn.setAttribute("title", reason || "Nút đang bị vô hiệu");
    quickBtn.href = "#";
  } else {
    quickBtn.classList.remove("disabled");
    quickBtn.removeAttribute("aria-disabled");
    quickBtn.removeAttribute("title");
  }
}

async function main() {
  try {
    // Tải dữ liệu từ sheet
    const res = await fetch(CSV_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Sheet HTTP ${res.status}`);
    const text = await res.text();
    const rows = parseCsv(text);

    const sheetTitle = (rows[0] || "").trim(); // A1
    const targetUrl  = (rows[1] || "").trim(); // A2

    // Tiêu đề hiển thị rõ
    titleEl.textContent = sheetTitle || "Chưa có tiêu đề";

    // Xác định tính hợp lệ của link (yêu cầu http/https)
    const hasValidUrl = /^https?:\/\//i.test(targetUrl);

    if (!sheetTitle && !targetUrl) {
      // Cả A1 & A2 trống -> báo chưa có liên kết
      errorEl.style.display = "block";
      errorEl.textContent = "Chưa có liên kết chuyển hướng.";
      setDisabledQuickAccess(true, "Chưa có liên kết");
      countdownWrap.style.display = "none";
      return; // không tự chuyển
    }

    if (!hasValidUrl) {
      // Có tiêu đề nhưng link trống/không hợp lệ -> vẫn báo và vô hiệu nút
      errorEl.style.display = "block";
      errorEl.textContent = "Liên kết chưa sẵn sàng hoặc không hợp lệ.";
      setDisabledQuickAccess(true, "Liên kết không hợp lệ");
      countdownWrap.style.display = "none";
      return; // không tự chuyển
    }

    // Có link hợp lệ: kích hoạt nút và hẹn giờ tự chuyển sau 3s
    quickBtn.href = targetUrl;
    setDisabledQuickAccess(false);

    // Hiện đếm ngược 3s
    countdownWrap.style.display = "inline";
    let remain = 3;
    countEl.textContent = String(remain);

    const timer = setInterval(() => {
      remain -= 1;
      countEl.textContent = String(remain);
      if (remain <= 0) {
        clearInterval(timer);
        // Dùng replace để không thêm lịch sử
        window.location.replace(targetUrl);
      }
    }, 1000);

  } catch (e) {
    errorEl.style.display = "block";
    errorEl.textContent = "Lỗi tải dữ liệu: " + (e?.message || e);
    setDisabledQuickAccess(true, "Không thể tải dữ liệu");
    countdownWrap.style.display = "none";
  }
}

// Chặn click nếu nút đang disabled
quickBtn.addEventListener("click", (ev) => {
  if (quickBtn.classList.contains("disabled")) {
    ev.preventDefault();
  }
});

main();
