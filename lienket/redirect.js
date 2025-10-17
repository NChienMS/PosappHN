// === CONFIG (đúng theo file & sheet anh cung cấp) ===
const SHEET_ID = "1oPF4N4MT4ZixdLgyMb7AniXBTkZZ0e3Huws7r4aM1ao";
const GID = "109591365";             // gid của sheet 'lienket'
const RANGE = "A1:A2";               // A1 = Tiêu đề, A2 = Link
const DEBUG = new URLSearchParams(location.search).get("debug") === "1";

// CSV URL + cache-busting
const CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
  `?tqx=out:csv&gid=${encodeURIComponent(GID)}&range=${encodeURIComponent(RANGE)}&_ts=${Date.now()}`;

// DOM
const titleEl = document.getElementById("title");
const quickBtn = document.getElementById("quickBtn");
const errorEl = document.getElementById("error");
const countdownWrap = document.getElementById("countdownWrap");
const countEl = document.getElementById("count");

// helper
function parseCsvSimple(text) {
  // A1:A2 -> 2 dòng, có thể có ngoặc kép
  return text.trim().split(/\r?\n/).map(line => {
    if (line.startsWith('"') && line.endsWith('"')) line = line.slice(1, -1).replace(/""/g, '"');
    return line;
  });
}
function setDisabledQuick(disabled, reason = "") {
  if (disabled) {
    quickBtn.classList.add("disabled");
    quickBtn.setAttribute("aria-disabled", "true");
    quickBtn.title = reason || "Nút đang bị vô hiệu";
    quickBtn.href = "#";
  } else {
    quickBtn.classList.remove("disabled");
    quickBtn.removeAttribute("aria-disabled");
    quickBtn.removeAttribute("title");
  }
}
function looksLikeHtml(s) {
  const t = s.slice(0, 200).toLowerCase();
  return t.includes("<!doctype") || t.includes("<html");
}

// (Tùy chọn) hiện khu debug ngay trên trang khi ?debug=1
function ensureDebugPanel() {
  if (!DEBUG) return null;
  let dbg = document.getElementById("dbg");
  if (!dbg) {
    dbg = document.createElement("pre");
    dbg.id = "dbg";
    dbg.style.cssText = "text-align:left;white-space:pre-wrap;background:rgba(0,0,0,.05);padding:12px;border-radius:12px;margin:12px auto;max-width:680px;";
    document.querySelector("#redirect .card")?.appendChild(dbg);
  }
  return dbg;
}
function logDbg(...args) {
  if (!DEBUG) return;
  const dbg = ensureDebugPanel();
  if (dbg) dbg.textContent += args.map(a => (typeof a === "string" ? a : JSON.stringify(a, null, 2))).join(" ") + "\n";
  console.debug("[redirect]", ...args);
}

async function main() {
  try {
    logDbg("CSV_URL:", CSV_URL);

    const res = await fetch(CSV_URL, { cache: "no-store", mode: "cors" });
    logDbg("HTTP status:", res.status);
    if (!res.ok) throw new Error(`Sheet HTTP ${res.status}`);

    const text = await res.text();
    logDbg("Raw CSV preview:", text.slice(0, 200));

    if (looksLikeHtml(text)) {
      throw new Error("Google trả HTML (khả năng bị CSP hoặc quyền). Kiểm tra Console xem có lỗi CORS/CSP.");
    }

    const rows = parseCsvSimple(text);
    const sheetTitle = (rows[0] || "").trim(); // A1
    const targetUrl  = (rows[1] || "").trim(); // A2
    logDbg("Parsed:", { sheetTitle, targetUrl });

    titleEl.textContent = sheetTitle || "Chưa có tiêu đề";

    const hasValidUrl = /^https?:\/\//i.test(targetUrl);

    if (!sheetTitle && !targetUrl) {
      errorEl.style.display = "block";
      errorEl.textContent = "Chưa có liên kết chuyển hướng.";
      setDisabledQuick(true, "Chưa có liên kết");
      countdownWrap.style.display = "none";
      return;
    }

    if (!hasValidUrl) {
      errorEl.style.display = "block";
      errorEl.textContent = "Liên kết chưa sẵn sàng hoặc không hợp lệ.";
      setDisabledQuick(true, "Liên kết không hợp lệ");
      countdownWrap.style.display = "none";
      return;
    }

    // OK: bật nút và đếm ngược
    quickBtn.href = targetUrl;
    setDisabledQuick(false);

    countdownWrap.style.display = "inline";
    let remain = 3;
    countEl.textContent = String(remain);
    const timer = setInterval(() => {
      remain -= 1;
      countEl.textContent = String(remain);
      if (remain <= 0) {
        clearInterval(timer);
        window.location.replace(targetUrl);
      }
    }, 1000);

  } catch (e) {
    errorEl.style.display = "block";
    errorEl.textContent = "Lỗi: " + (e?.message || e);
    setDisabledQuick(true, "Không thể tải dữ liệu");
    countdownWrap.style.display = "none";
    logDbg("ERROR:", e?.stack || e?.message || String(e));
  }
}

quickBtn.addEventListener("click", (ev) => {
  if (quickBtn.classList.contains("disabled")) ev.preventDefault();
});

main();
