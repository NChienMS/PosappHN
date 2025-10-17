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
