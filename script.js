function toggleSidebar() {
    const sidebar = document.getElementById('appSidebar');
    const icon = document.getElementById('sidebarToggleIcon');
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        icon.setAttribute('data-lucide', 'chevron-right');
    } else {
        icon.setAttribute('data-lucide', 'chevron-left');
    }
    lucide.createIcons();
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'error') iconName = 'alert-circle';

    toast.innerHTML = `
        <i data-lucide="${iconName}" style="width: 18px; height: 18px;"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons({ props: { "stroke-width": 2 }, elements: [toast] });

    // Auto hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

const CONFIG = {
    spreadsheetId: "12FBtF0VyDdMqNxCN6CMrvDdFtxVw4b4e6qIUs5QQ_ZA",
    serviceAccountEmail: "kieuduc123@kieuducwml123.iam.gserviceaccount.com",
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQu0DqH8iQlilt
woGRPxJsieyf1tfp71AluBTZknJ/0+3jMjWzeRgdt6XffU1Zi1baWr4IdsLKl1jZ
mEkvps+6tYjMrwfg3U3e4X6jrPERCHLncptUKNrAH1+GZawwpvD+bqzMj8EdvDc5
29CDz+RCCaGHOAqlobDJ9gBYy32/if82OlhPdbiGR+sN1DLlGoegzzhxP8pgHbMr
7xgT4OAoXQWMa36hgkzNsa8KcmFdH1yoFAlU81wbdCR34Ge7J7s5V2wdT4oyRwvI
mBKgYWAhkphH3WhwhW+TjDcveW4sDcYnDeo42c43rr01e3gX4v71rEZ1ovCBOcc8
EYr7hSTDAgMBAAECggEAQMyZGvXSBHzxkJcNNUOw2ww4bui6L/Aw3/zVUDQkIqXu
2JT6UeS6hWNBde/G5xEYXgJEs4j28QDqPucFdWsiWxLHTM/bsMXTSmmTsIlcb07B
qTONoCNswa8brzP6MEJrV3mRYJISQEJxnJ8ujPUppgyqXjmaKJBZO2GI+wf1WlQT
w2Bp5WAMwnqcrH2nh0qc56YZyDJBMjYgQAJBzcQY9Ohh2osNEftBrSeDkWdZVd9+
9SRAl1oRFdF141FjxSkP69777thBwdhgrdCHNBb4cbo8B4I2W01iwruo1UbferAY
Vb1eQIFI7RivClwKEVfG4xOMdd6Am7TQs6nrLLReXQKBgQDxViQPGeg924NHk3ad
oLEZC0c1/HY/KJcEabzIGpP6TTzg3Touahib22o4IJ+uT7YHHCUQlAZpx/9NQpsL
ZYGg+dRLNsr6yzU79fBNPdp6BDr1EXAtUp9A7dDQlu1dHMr44W2NnykF2O4DRmcf
RX3Peo/GFbGkYLispEFQc4U+7wKBgQDdafWEcdFflSPjID6d8ZKBaSVecBS2vZvg
6uUdLwkoDZpS3RHzH5iagz9iN0oBRQDwLEI/Nw4/UHYO/vkvLl/PATkbesBe1RWK
0TmAvSN7qby0TzFLlLuYcm1mchkqQwmdDRVzFLEPdQxCFXFj4itnMts6hFtwP8RP
E1EVSPw3bQKBgAc10aH53ixq8IMk7rhK4r+izJ/aSRYd+lURa6h20tD5mcYGFgTo
+o89gPDoWJz2mLOhraHPKlnitcfzI3q1r6fFjwgoPOw9QfvmnyVPocVfdvt3Z+iS
vVtNP53bxH+xqobBBWrjxG/+SS4j3lTa2KVoPf9nCoWkth/CUIk8ylBVAoGBAK1g
KUZ6sY59BEr3ltCqtyPqp75ZWX723jay+JFvoWXhsPQt875DAYYMO/e2f5aa5+8p
WP6TJ+7gHHIFqi4NzCwWMxeXeUdI58N5reNnN3/AG+m9EUazwmnPQGc19Qqoz8BQ
3HjuvO7zopOkotOp6H64zf32Ynt1E00wPQ/DxOvJAoGAO/1jGvrVbTViCZTPhKzA
Kb5sBFcILEhNsh9tN52QFzLRmNt6NJc0qVEJqrIKns1ka4i/UtmeWZwygEBD92hk
BLtpn5jGPNDbYe57bCPbn/rr3WIe7KGZU6o7JwIOskc30KOrOhycTu/Saunw5xdv
jWGRDHx//vnfM3DTa5v6Vxw=
-----END PRIVATE KEY-----`,
    tokenUrl: "https://oauth2.googleapis.com/token",
    tabs: {
        'TK_AFF': {
            range: 'TK_AFF!A1:ZZ',
            clearRange: 'TK_AFF!A2:ZZ1000',
            headers: [],
            priceCols: [],
            imgCol: -1
        },
        'DATA': {
            range: 'DATA!A1:ZZ',
            clearRange: 'DATA!A2:ZZ10000',
            headers: [],
            priceCols: [5, 6, 7, 8, 10], // hoa_hong, video, live, mxh, gmv
            imgCol: -1
        },
        'PAY': {
            range: 'PAY!A2:D',
            clearRange: 'PAY!A2:D10000',
            headers: ['id', 'ngay', 'tk', 'so_tien'],
            visibleCols: [1, 2, 3],
            priceCols: [3],
            imgCol: -1
        },
        'DASHBOARD': {
            range: 'DATA!A2:L'
        }
    }
};

// Đọc tham số ?up= từ URL của trang này (ví dụ: sp_pm_joy.html?up=txx1)
const UP_PARAM = new URLSearchParams(window.location.search).get('up') || '';

const JOY_TAB_STORAGE_KEY = 'AFFActiveTab';
const JOY_VALID_TABS = ['TK_AFF', 'DATA', 'DASHBOARD', 'PAY'];

let currentTab = 'DASHBOARD', allData = [], accessToken = null, tokenExpiry = 0;
let currentPage = 1, rowsPerPage = 100, filteredData = [];
let editingSheetRow = null;
let pendingData = [];
let pendingPayData = [];
/** Map tên tab (tên sheet) → sheetId Google, cache nhẹ cho batchUpdate */
let sheetTitleToIdCache = null;
let sheetTitlesCache = null;

function formatSheetRange(sheetTitle, cellRange) {
    const cleanTitle = String(sheetTitle).replace(/'/g, "''");
    return `'${cleanTitle}'!${cellRange}`;
}

async function getSheetTitles(token) {
    if (sheetTitlesCache && sheetTitlesCache.length > 0) return sheetTitlesCache;
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}?fields=sheets(properties(sheetId,title))`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Không đọc được danh sách sheet');
    const data = await res.json();
    sheetTitlesCache = (data.sheets || []).map(s => s.properties.title);
    const map = {};
    for (const s of data.sheets || []) {
        map[s.properties.title] = s.properties.sheetId;
    }
    sheetTitleToIdCache = map;
    return sheetTitlesCache;
}

async function getActualSheetTitle(tabKey, token) {
    try {
        const titles = await getSheetTitles(token);
        if (tabKey === 'TK_AFF') {
            if (titles.includes('TK_AFF')) return 'TK_AFF';
            if (titles.includes('Tài Khoản')) return 'Tài Khoản';
            if (titles.includes('Tài khoản')) return 'Tài khoản';
            if (titles.includes('Tai Khoan')) return 'Tai Khoan';
            if (titles.includes('TK AFF')) return 'TK AFF';
            const found = titles.find(t => {
                const lower = t.toLowerCase();
                return lower.includes('tài khoản') || lower.includes('tai khoan') || lower.includes('tk_aff') || lower.includes('tk aff') || lower === 'tk';
            });
            if (found) return found;
            return titles[1] || 'TK_AFF';
        }
        if (tabKey === 'DATA') {
            if (titles.includes('DATA')) return 'DATA';
            const found = titles.find(t => t.toLowerCase() === 'data' || t.toLowerCase().includes('data'));
            if (found) return found;
            return 'DATA';
        }
        if (tabKey === 'PAY') {
            if (titles.includes('PAY')) return 'PAY';
            const found = titles.find(t => t.toLowerCase() === 'pay' || t.toLowerCase().includes('pay'));
            if (found) return found;
            return 'PAY';
        }
        return tabKey;
    } catch (e) {
        console.warn('Lỗi getActualSheetTitle:', e);
        return tabKey;
    }
}

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiry - 300000) return accessToken;
    const header = { alg: "RS256", typ: "JWT" }, now = Math.floor(Date.now() / 1000),
        payload = { iss: CONFIG.serviceAccountEmail, scope: "https://www.googleapis.com/auth/spreadsheets", aud: CONFIG.tokenUrl, exp: now + 3600, iat: now };
    const sJWT = KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), CONFIG.privateKey);
    const res = await fetch(CONFIG.tokenUrl, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${sJWT}` });
    const data = await res.json();
    accessToken = data.access_token; tokenExpiry = Date.now() + (data.expires_in * 1000);
    return accessToken;
}

async function switchTab(tabName) {
    currentTab = tabName;
    if (JOY_VALID_TABS.includes(tabName)) {
        try { sessionStorage.setItem(JOY_TAB_STORAGE_KEY, tabName); } catch (_) { /* ignore */ }
    }
    const uploadBtn = document.getElementById('uploadBtn');
    const statsGrid = document.getElementById('statsGrid');
    const tabLabels = {
        'TK_AFF': 'TK_AFF',
        'DATA': 'DATA',
        'DASHBOARD': 'DASHBOARD',
        'PAY': 'PAY'
    };

    document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        if (t.innerText === tabLabels[tabName]) t.classList.add('active');
    });

    const tableWrapper = document.getElementById('tableWrapper');
    const pagination = document.getElementById('pagination');
    const headerActions = document.getElementById('headerActions');
    const pageTitle = document.getElementById('pageTitle');

    const searchContainer = document.querySelector('.search-container');
    const addBtn = document.getElementById('addBtn');

    // Show standard UI
    if (tabName === 'DASHBOARD') {
        tableWrapper.style.display = 'none';
        pagination.style.display = 'none';
        headerActions.style.display = 'flex';
        if (searchContainer) searchContainer.style.display = 'none';
        if (addBtn) addBtn.style.display = 'none';
    } else {
        tableWrapper.style.display = 'block';
        pagination.style.display = 'flex';
        headerActions.style.display = 'flex';
        if (searchContainer) searchContainer.style.display = 'flex';
        if (addBtn) addBtn.style.display = 'flex';
    }

    const statClick = document.getElementById('statClick');
    const statDonHang = document.getElementById('statDonHang');
    const statHoaHong = document.getElementById('statHoaHong');
    const statLuotBan = document.getElementById('statLuotBan');
    const statGmv = document.getElementById('statGmv');
    const statPay = document.getElementById('statPay');
    const dataFilters = document.getElementById('dataFilters');

    if (tabName === 'DATA') {
        if (statsGrid) statsGrid.style.display = 'grid';
        if (statClick) statClick.style.display = 'block';
        if (statDonHang) statDonHang.style.display = 'block';
        if (statHoaHong) statHoaHong.style.display = 'block';
        if (statLuotBan) statLuotBan.style.display = 'block';
        if (statGmv) statGmv.style.display = 'block';
        if (statPay) statPay.style.display = 'none';
        if (dataFilters) dataFilters.style.display = 'flex';
    } else if (tabName === 'PAY') {
        if (statsGrid) statsGrid.style.display = 'grid';
        if (statClick) statClick.style.display = 'none';
        if (statDonHang) statDonHang.style.display = 'none';
        if (statHoaHong) statHoaHong.style.display = 'none';
        if (statLuotBan) statLuotBan.style.display = 'none';
        if (statGmv) statGmv.style.display = 'none';
        if (statPay) statPay.style.display = 'block';
        if (dataFilters) dataFilters.style.display = 'flex';
    } else {
        if (statsGrid) statsGrid.style.display = 'none';
        if (dataFilters) dataFilters.style.display = tabName === 'DASHBOARD' ? 'flex' : 'none';
    }

    const dashboardWrapper = document.getElementById('dashboardWrapper');
    if (dashboardWrapper) {
        dashboardWrapper.style.display = tabName === 'DASHBOARD' ? 'block' : 'none';
    }

    pageTitle.innerText = tabName;

    document.getElementById('searchInput').value = '';
    if (document.getElementById('monthFilter')) document.getElementById('monthFilter').value = '';
    if (document.getElementById('fromDate')) document.getElementById('fromDate').value = '';
    if (document.getElementById('toDate')) document.getElementById('toDate').value = '';
    if (document.getElementById('tkFilter')) document.getElementById('tkFilter').value = '';
    currentPage = 1;
    await fetchData();
}

async function fetchData() {
    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang tải dữ liệu ${currentTab}...`;
    try {
        const token = await getAccessToken();
        const actualSheetTitle = await getActualSheetTitle(currentTab, token);
        const tabConfig = CONFIG.tabs[currentTab];

        if (currentTab === 'TK_AFF' || currentTab === 'DATA') {
            // Lấy toàn bộ hàng tiêu đề và các dòng dữ liệu của TK_AFF hoặc DATA
            const range = formatSheetRange(actualSheetTitle, 'A1:ZZ');
            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(range)}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            const allRows = data.values || [];

            if (allRows.length > 0) {
                const headerRow = allRows[0] || [];
                // Lấy toàn bộ tên cột có tiêu đề (không rỗng)
                let lastValidHeaderIdx = -1;
                for (let i = headerRow.length - 1; i >= 0; i--) {
                    if (headerRow[i] !== undefined && headerRow[i] !== null && String(headerRow[i]).trim() !== '') {
                        lastValidHeaderIdx = i;
                        break;
                    }
                }

                const headers = [];
                for (let i = 0; i <= lastValidHeaderIdx; i++) {
                    const h = headerRow[i] !== undefined && headerRow[i] !== null ? String(headerRow[i]).trim() : '';
                    headers.push(h || `Cột ${i + 1}`);
                }

                const defaultHeaders = currentTab === 'TK_AFF' 
                    ? ['id', 'Tên TK', 'mail'] 
                    : ['id', 'ngay', 'tk', 'click', 'don_hang', 'hoa_hong', 'hoa_hong_video', 'hoa_hong_live', 'hoa_hong_mxh', 'luot_ban', 'gmv', 'nam_thang'];
                tabConfig.headers = headers.length > 0 ? headers : defaultHeaders;
                const rawRows = allRows.slice(1);
                allData = rawRows.map((row, i) => {
                    const arr = Array.isArray(row) ? row.slice() : [];
                    while (arr.length < tabConfig.headers.length) {
                        arr.push('');
                    }
                    arr._sheetRow = i + 2;
                    return arr;
                });
            } else {
                tabConfig.headers = currentTab === 'TK_AFF' 
                    ? ['id', 'Tên TK', 'mail'] 
                    : ['id', 'ngay', 'tk', 'click', 'don_hang', 'hoa_hong', 'hoa_hong_video', 'hoa_hong_live', 'hoa_hong_mxh', 'luot_ban', 'gmv', 'nam_thang'];
                allData = [];
            }

            // Fetch account names for mapping if in DATA
            if (currentTab === 'DATA') {
                try {
                    const affSheetName = await getActualSheetTitle('TK_AFF', token);
                    const affRange = formatSheetRange(affSheetName, 'A2:B');
                    const AFFRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(affRange)}`, { headers: { Authorization: `Bearer ${token}` } });
                    const AFFData = await AFFRes.json();
                    let AFFNamesMap = {};
                    (AFFData.values || []).forEach(r => {
                        if (r[0]) AFFNamesMap[String(r[0]).trim()] = String(r[1] || '').trim();
                    });
                    window._AFFNamesMap = AFFNamesMap; // Cache globally
                } catch (e) { console.warn("Không tải được tên tài khoản:", e); }
            }
        } else {
            // Fetch main data for DASHBOARD or PAY
            let dataRange = 'A2:D';
            if (currentTab === 'DASHBOARD') {
                const dataSheetTitle = await getActualSheetTitle('DATA', token);
                dataRange = formatSheetRange(dataSheetTitle, 'A1:ZZ');
            } else {
                dataRange = formatSheetRange(actualSheetTitle, 'A2:D');
            }

            const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(dataRange)}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();

            // Fetch account names for mapping if in DASHBOARD or PAY
            let AFFNamesMap = {};
            try {
                const affSheetName = await getActualSheetTitle('TK_AFF', token);
                const affRange = formatSheetRange(affSheetName, 'A2:B');
                const AFFRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(affRange)}`, { headers: { Authorization: `Bearer ${token}` } });
                const AFFData = await AFFRes.json();
                (AFFData.values || []).forEach(r => {
                    if (r[0]) AFFNamesMap[String(r[0]).trim()] = String(r[1] || '').trim();
                });
                window._AFFNamesMap = AFFNamesMap; // Cache globally
            } catch (e) { console.warn("Không tải được tên tài khoản:", e); }

            const rawRows = (currentTab === 'DASHBOARD' && (data.values || []).length > 0)
                ? (data.values || []).slice(1)
                : (data.values || []);

            allData = rawRows.map((row, i) => {
                const arr = Array.isArray(row) ? row.slice() : [];
                arr._sheetRow = i + 2;
                return arr;
            });
        }

        if (currentTab === 'DASHBOARD') {
            try {
                const paySheetName = await getActualSheetTitle('PAY', token);
                const payRange = formatSheetRange(paySheetName, 'A2:D');
                const payRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(payRange)}`, { headers: { Authorization: `Bearer ${token}` } });
                const payData = await payRes.json();
                window._allPayData = (payData.values || []).map((row, i) => {
                    const arr = Array.isArray(row) ? row.slice() : [];
                    arr._sheetRow = i + 2;
                    return arr;
                });
            } catch (e) { console.warn("Không tải được dữ liệu PAY cho Dashboard:", e); }
        }
        if (currentTab === 'DATA' || currentTab === 'DASHBOARD' || currentTab === 'PAY') {
            allData.sort((a, b) => {
                const tA = parseNgayForSort(a[1]);
                const tB = parseNgayForSort(b[1]);
                return tB - tA;
            });

            const monthSelect = document.getElementById('monthFilter');
            if (monthSelect) {
                const currentMonthVal = monthSelect.value;
                const monthsSet = new Set();
                allData.forEach(r => {
                    const m = getRowMonth(r[1], r[11]);
                    if (m) monthsSet.add(m);
                });
                if (currentTab === 'DASHBOARD' && window._allPayData) {
                    window._allPayData.forEach(r => {
                        const m = getRowMonth(r[1], r[11]);
                        if (m) monthsSet.add(m);
                    });
                }
                const sortedMonths = Array.from(monthsSet).sort(compareMonthKeys);
                monthSelect.innerHTML = '<option value="">Tất cả Tháng</option>' +
                    sortedMonths.map(m => `<option value="${m}">Tháng ${m}</option>`).join('');
                if (sortedMonths.includes(currentMonthVal)) {
                    monthSelect.value = currentMonthVal;
                }
            }

            const tkSelect = document.getElementById('tkFilter');
            if (tkSelect) {
                const uniqueTks = [...new Set(allData.map(r => String(r[2] || '').trim()).filter(Boolean))].sort();
                const currentValue = tkSelect.value;
                const namesMap = window._AFFNamesMap || {};
                tkSelect.innerHTML = '<option value="">Tất cả TK</option>' +
                    uniqueTks.map(tk => {
                        const displayName = namesMap[tk] ? `${tk} - ${namesMap[tk]}` : tk;
                        return `<option value="${tk}">${displayName}</option>`;
                    }).join('');
                if (uniqueTks.includes(currentValue)) tkSelect.value = currentValue;
            }
        }
        filteredData = [...allData];

        if (currentTab === 'DASHBOARD') {
            filterTable();
        } else {
            renderHeaders();
            filterTable();
        }
    } catch (e) {
        console.error("Lỗi khi tải dữ liệu:", e);
        showToast("Không thể tải dữ liệu. Vui lòng kiểm tra lại sheet '" + currentTab + "' có tồn tại không.", "error");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

let dTrendChart, dTkPieChart, dTkBarChart, dHhTypeChart;

function renderDashboard(dataData, payData = []) {
    let tClick = 0, tDonHang = 0, tHoaHong = 0, tGmv = 0, tPay = 0;
    let tHhVideo = 0, tHhLive = 0, tHhMxh = 0;
    const dateMap = {};
    const tkMap = {};

    dataData.forEach(row => {
        const ngayStr = String(row[1] || '').trim();
        const tkStr = String(row[2] || '').trim() || 'Khác';
        const click = Number(String(row[3] || '').replace(/[^0-9.-]+/g, "")) || 0;
        const donHang = Number(String(row[4] || '').replace(/[^0-9.-]+/g, "")) || 0;
        const hoaHong = Number(String(row[5] || '').replace(/[^0-9.-]+/g, "")) || 0;
        const hhVideo = Number(String(row[6] || '').replace(/[^0-9.-]+/g, "")) || 0;
        const hhLive = Number(String(row[7] || '').replace(/[^0-9.-]+/g, "")) || 0;
        const hhMxh = Number(String(row[8] || '').replace(/[^0-9.-]+/g, "")) || 0;
        const gmv = Number(String(row[10] || '').replace(/[^0-9.-]+/g, "")) || 0;

        tClick += click; tDonHang += donHang; tHoaHong += hoaHong; tGmv += gmv;
        tHhVideo += hhVideo; tHhLive += hhLive; tHhMxh += hhMxh;

        if (ngayStr) {
            if (!dateMap[ngayStr]) dateMap[ngayStr] = { hoaHong: 0, gmv: 0 };
            dateMap[ngayStr].hoaHong += hoaHong;
            dateMap[ngayStr].gmv += gmv;
        }

        if (!tkMap[tkStr]) tkMap[tkStr] = { hoaHong: 0, click: 0, donHang: 0 };
        tkMap[tkStr].hoaHong += hoaHong;
        tkMap[tkStr].click += click;
        tkMap[tkStr].donHang += donHang;
    });

    payData.forEach(row => {
        const soTien = Number(String(row[3] || '').replace(/[^0-9.-]+/g, "")) || 0;
        tPay += soTien;
    });

    document.getElementById('dashTotalClick').innerText = tClick.toLocaleString('vi-VN');
    document.getElementById('dashTotalDonHang').innerText = tDonHang.toLocaleString('vi-VN');
    document.getElementById('dashTotalHoaHong').innerText = formatCurrency(tHoaHong);
    document.getElementById('dashTotalGmv').innerText = formatCurrency(tGmv);
    document.getElementById('dashTotalPay').innerText = formatCurrency(tPay);

    const rawDateKeys = Object.keys(dateMap).sort((a, b) => parseNgayForSort(a) - parseNgayForSort(b));
    const dateKeys = rawDateKeys.slice(-30);

    const trendHoaHong = dateKeys.map(k => dateMap[k].hoaHong);
    const trendGmv = dateKeys.map(k => dateMap[k].gmv);

    if (dTrendChart) dTrendChart.destroy();
    const ctxTrend = document.getElementById('trendChart').getContext('2d');
    dTrendChart = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: dateKeys,
            datasets: [
                { label: 'Hoa Hồng', data: trendHoaHong, borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', fill: true, tension: 0.3 },
                { label: 'GMV', data: trendGmv, borderColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.1)', fill: true, tension: 0.3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    const namesMap = window._AFFNamesMap || {};
    const allTks = Object.keys(tkMap).sort((a, b) => tkMap[b].hoaHong - tkMap[a].hoaHong);
    const tkLabels = allTks.map(k => namesMap[k] ? `${k} - ${namesMap[k]}` : k);
    const tkHoaHongValues = allTks.map(k => tkMap[k].hoaHong);

    if (dTkPieChart) dTkPieChart.destroy();
    const ctxPie = document.getElementById('tkPieChart').getContext('2d');
    dTkPieChart = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: tkLabels,
            datasets: [{
                data: tkHoaHongValues,
                backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16', '#94a3b8']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 12,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) label += ': ';
                            if (context.raw !== null) {
                                label += formatCurrency(context.raw);
                                const percentage = tHoaHong > 0 ? (context.raw / tHoaHong * 100).toFixed(1) + '%' : '0%';
                                label += ' (' + percentage + ')';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    const tkBarKeys = Object.keys(tkMap).sort((a, b) => tkMap[b].click - tkMap[a].click);
    const tkBarLabels = tkBarKeys.map(k => namesMap[k] ? `${k} - ${namesMap[k]}` : k);
    const tkClickValues = tkBarKeys.map(k => tkMap[k].click);
    const tkDonHangValues = tkBarKeys.map(k => tkMap[k].donHang);

    if (dTkBarChart) dTkBarChart.destroy();
    const ctxBar = document.getElementById('tkBarChart').getContext('2d');
    dTkBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: tkBarLabels,
            datasets: [
                { label: 'Click', data: tkClickValues, backgroundColor: '#3b82f6' },
                { label: 'Đơn Hàng', data: tkDonHangValues, backgroundColor: '#10b981' }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // New Chart: Commission Type Breakdown
    if (dHhTypeChart) dHhTypeChart.destroy();
    const ctxHhType = document.getElementById('hhTypeChart').getContext('2d');
    dHhTypeChart = new Chart(ctxHhType, {
        type: 'doughnut',
        data: {
            labels: ['Video', 'Live', 'MXH'],
            datasets: [{
                data: [tHhVideo, tHhLive, tHhMxh],
                backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6'],
                hoverOffset: 4
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}

function renderHeaders() {
    const head = document.getElementById('tableHead');
    const tabConfig = CONFIG.tabs[currentTab];
    const visibleCols = tabConfig.visibleCols;
    const headers = visibleCols
        ? visibleCols.map(idx => tabConfig.headers[idx]).filter(Boolean)
        : [...(tabConfig.headers || [])];
    headers.push('Xóa');
    head.innerHTML = `<tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr>`;
}

function getDataSheetRow(row) {
    if (row && typeof row._sheetRow === 'number' && row._sheetRow >= 2) return row._sheetRow;
    const idx = allData.indexOf(row);
    return idx >= 0 ? idx + 2 : 0;
}

async function getSheetTitleToIdMap(token) {
    if (sheetTitleToIdCache) return sheetTitleToIdCache;
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}?fields=sheets(properties(sheetId,title))`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Không đọc được metadata spreadsheet');
    const data = await res.json();
    const map = {};
    for (const s of data.sheets || []) {
        map[s.properties.title] = s.properties.sheetId;
    }
    sheetTitleToIdCache = map;
    return map;
}

async function deleteDataSheetRow(sheetRow1Based) {
    const rowNum = Number(sheetRow1Based);
    if (!rowNum || rowNum < 2) {
        showToast('Không xác định được dòng cần xóa.', 'error');
        return;
    }
    if (!confirm('Xóa dòng này trên Google Sheet? Thao tác không hoàn tác.')) return;

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = 'Đang xóa dòng...';
    try {
        const token = await getAccessToken();
        const actualSheetTitle = await getActualSheetTitle(currentTab, token);
        const map = await getSheetTitleToIdMap(token);
        const sheetId = map[actualSheetTitle] ?? map[currentTab];
        if (sheetId === undefined) throw new Error('Không tìm thấy sheet: ' + actualSheetTitle);

        const startIndex = rowNum - 1;
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}:batchUpdate`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                requests: [{
                    deleteDimension: {
                        range: {
                            sheetId,
                            dimension: 'ROWS',
                            startIndex,
                            endIndex: startIndex + 1
                        }
                    }
                }]
            })
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error?.message || 'batchUpdate thất bại');
        }
        sheetTitleToIdCache = null;
        sheetTitlesCache = null;
        await fetchData();
        filterTable();
    } catch (e) {
        console.error(e);
        showToast('Không xóa được: ' + e.message, 'error');
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function init() {
    lucide.createIcons();
    initDragAndDrop();
    if (UP_PARAM) {
        await fetchData();
    } else {
        let saved = '';
        try { saved = sessionStorage.getItem(JOY_TAB_STORAGE_KEY) || ''; } catch (_) { }
        if (saved && JOY_VALID_TABS.includes(saved)) {
            await switchTab(saved);
        } else {
            await fetchData();
        }
    }
}

function initDragAndDrop() {
    const body = document.body;
    const overlay = document.getElementById('dropOverlay');

    window.addEventListener('dragover', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
    });

    window.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === null) overlay.classList.remove('active');
    });

    window.addEventListener('drop', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        if (e.dataTransfer.files.length > 0) {
            processFiles(Array.from(e.dataTransfer.files));
        }
    });
}

function truncateExcelNumericCellsInRow(row) {
    return Array.isArray(row) ? row : row;
}

function formatCurrency(val) {
    if (!val || isNaN(val)) return val;
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
}

function parseNgayForSort(raw) {
    if (raw === undefined || raw === null) return Number.NEGATIVE_INFINITY;
    const s0 = String(raw).trim();
    if (!s0) return Number.NEGATIVE_INFINITY;
    if (typeof raw === 'number' && Number.isFinite(raw) && raw > 25000 && raw < 120000) return (raw - 25569) * 86400000;
    const s = s0.replace(',', '.'); const asNum = Number(s);
    if (Number.isFinite(asNum) && asNum > 25000 && asNum < 120000 && !/[\/\-]/.test(s0)) return (asNum - 25569) * 86400000;
    if (/^\d{4}-\d{2}-\d{2}/.test(s0)) { const t = Date.parse(s0); if (!isNaN(t)) return t; }
    const m = s0.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
    if (m) {
        const day = parseInt(m[1], 10), month = parseInt(m[2], 10) - 1, year = parseInt(m[3], 10);
        const d = new Date(year, month, day);
        if (!isNaN(d.getTime())) return d.getTime();
    }
    const fallback = Date.parse(s0);
    if (!isNaN(fallback)) return fallback;
    return Number.NEGATIVE_INFINITY;
}

function getRowMonth(ngayRaw, namThangRaw) {
    if (ngayRaw !== undefined && ngayRaw !== null && String(ngayRaw).trim() !== '') {
        const ts = parseNgayForSort(ngayRaw);
        if (Number.isFinite(ts) && ts > 0) {
            const d = new Date(ts);
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const y = d.getFullYear();
            return `${m}/${y}`;
        }
    }
    if (namThangRaw !== undefined && namThangRaw !== null && String(namThangRaw).trim() !== '') {
        const s = String(namThangRaw).trim().replace('-', '/').replace('.', '/');
        const m = s.match(/^(\d{1,2})\/(\d{4})/);
        if (m) {
            return `${String(m[1]).padStart(2, '0')}/${m[2]}`;
        }
    }
    return '';
}

function compareMonthKeys(a, b) {
    const [mA, yA] = a.split('/').map(Number);
    const [mB, yB] = b.split('/').map(Number);
    if (yA !== yB) return (yB || 0) - (yA || 0);
    return (mB || 0) - (mA || 0);
}

function onMonthFilterChange() {
    const mVal = document.getElementById('monthFilter')?.value;
    if (mVal) {
        const [m, y] = mVal.split('/').map(Number);
        const firstDay = `${y}-${String(m).padStart(2, '0')}-01`;
        const lastDayNum = new Date(y, m, 0).getDate();
        const lastDay = `${y}-${String(m).padStart(2, '0')}-${String(lastDayNum).padStart(2, '0')}`;
        if (document.getElementById('fromDate')) document.getElementById('fromDate').value = firstDay;
        if (document.getElementById('toDate')) document.getElementById('toDate').value = lastDay;
    } else {
        if (document.getElementById('fromDate')) document.getElementById('fromDate').value = '';
        if (document.getElementById('toDate')) document.getElementById('toDate').value = '';
    }
    filterTable();
}

function onDateFilterChange() {
    const mSelect = document.getElementById('monthFilter');
    if (mSelect && mSelect.value) {
        const [m, y] = mSelect.value.split('/').map(Number);
        const firstDay = `${y}-${String(m).padStart(2, '0')}-01`;
        const lastDayNum = new Date(y, m, 0).getDate();
        const lastDay = `${y}-${String(m).padStart(2, '0')}-${String(lastDayNum).padStart(2, '0')}`;
        const fVal = document.getElementById('fromDate')?.value;
        const tVal = document.getElementById('toDate')?.value;
        if (fVal !== firstDay || tVal !== lastDay) {
            mSelect.value = '';
        }
    }
    filterTable();
}



function renderTable() {
    if (currentTab === 'DATA') {
        const totals = { click: 0, donHang: 0, hoaHong: 0, luotBan: 0, gmv: 0 };
        filteredData.forEach(row => {
            totals.click += Number(String(row[3] || '').replace(/[^0-9.-]+/g, "")) || 0;
            totals.donHang += Number(String(row[4] || '').replace(/[^0-9.-]+/g, "")) || 0;
            totals.hoaHong += Number(String(row[5] || '').replace(/[^0-9.-]+/g, "")) || 0;
            totals.luotBan += Number(String(row[9] || '').replace(/[^0-9.-]+/g, "")) || 0;
            totals.gmv += Number(String(row[10] || '').replace(/[^0-9.-]+/g, "")) || 0;
        });
        document.getElementById('totalClick').innerText = totals.click.toLocaleString('vi-VN');
        document.getElementById('totalDonHang').innerText = totals.donHang.toLocaleString('vi-VN');
        document.getElementById('totalHoaHong').innerText = formatCurrency(totals.hoaHong);
        document.getElementById('totalLuotBan').innerText = totals.luotBan.toLocaleString('vi-VN');
        document.getElementById('totalGmv').innerText = formatCurrency(totals.gmv);
    } else if (currentTab === 'PAY') {
        let totalPay = 0;
        filteredData.forEach(row => {
            totalPay += Number(String(row[3] || '').replace(/[^0-9.-]+/g, "")) || 0;
        });
        document.getElementById('totalPay').innerText = formatCurrency(totalPay);
    }

    const tbody = document.getElementById('tableBody');
    const tabConfig = CONFIG.tabs[currentTab];
    const visibleCols = tabConfig.visibleCols;

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);

    const colIndices = visibleCols || (tabConfig.headers || []).map((_, idx) => idx);

    tbody.innerHTML = pageData.map(row => {
        const cells = colIndices.map(idx => {
            const cell = row[idx];
            if (tabConfig.imgCol !== undefined && tabConfig.imgCol >= 0 && idx === tabConfig.imgCol && cell) {
                const firstImg = cell.split(',')[0].trim();
                return `<td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <img src="${firstImg}" class="table-img" onerror="this.style.display='none'">
                        <a href="${cell.split(',')[0].trim()}" target="_blank" style="color: var(--primary); text-decoration: none; font-size: 11px; font-weight: 600;">Xem</a>
                    </div>
                </td>`;
            }
            if (tabConfig.priceCols && tabConfig.priceCols.includes(idx)) {
                return `<td class="price-cell">${cell === null || cell === undefined ? '' : formatCurrency(cell)}</td>`;
            }
            const cellStr = String(cell || '').trim();
            if (cellStr.startsWith('http://') || cellStr.startsWith('https://')) {
                const parts = cellStr.split(',');
                const linksHtml = parts.map((l, i) => `<a href="${l.trim()}" target="_blank" style="color: var(--primary); font-weight: 600; text-decoration: none;">Link ${parts.length > 1 ? i + 1 : ''}</a>`.trim());
                return `<td>${linksHtml.join(', ')}</td>`;
            }
            return `<td>${cell !== undefined && cell !== null ? cell : ''}</td>`;
        }).join('');

        const sr = getDataSheetRow(row);
        let extraCols = `<td><button type="button" class="btn-delete" onclick="deleteDataSheetRow(${sr})">Xóa</button></td>`;

        return `<tr style="cursor: pointer;" title="Nhấp đúp để sửa" ondblclick='handleEditRow(${sr})'>${cells}${extraCols}</tr>`;
    }).join('');
}

function handleEditRow(sheetRow) {
    const rowData = allData.find(r => r._sheetRow === sheetRow);
    if (!rowData) return;

    editingSheetRow = sheetRow;
    if (currentTab === 'DATA') {
        openAddModal(rowData);
    } else if (currentTab === 'PAY') {
        openAddModalPay(rowData);
    } else {
        openAddModalAFF(rowData);
    }

    renderPagination();
}

function renderPagination() {
    const totalRows = filteredData.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage) || 1;
    const pagination = document.getElementById('pagination');

    if (totalRows <= rowsPerPage) {
        pagination.innerHTML = '';
        return;
    }

    pagination.innerHTML = `
        <button class="pagination-btn" onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
            <i data-lucide="chevron-left" style="width:16px;"></i> Trước
        </button>
        <div class="page-info">Trang ${currentPage} / ${totalPages} (${totalRows} dòng)</div>
        <button class="pagination-btn" onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
            Tiếp <i data-lucide="chevron-right" style="width:16px;"></i>
        </button>
    `;
    lucide.createIcons();
}

function changePage(delta) {
    currentPage += delta;
    renderTable();
    document.querySelector('.table-wrapper').scrollTop = 0;
}

function filterTable() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    let fromDateTS = -Infinity;
    let toDateTS = Infinity;
    let tkTerm = "";
    let monthVal = "";

    if (currentTab === 'DATA' || currentTab === 'DASHBOARD' || currentTab === 'PAY') {
        const fVal = document.getElementById('fromDate')?.value;
        if (fVal) fromDateTS = new Date(fVal).setHours(0, 0, 0, 0);
        const tVal = document.getElementById('toDate')?.value;
        if (tVal) toDateTS = new Date(tVal).setHours(23, 59, 59, 999);
        tkTerm = (document.getElementById('tkFilter')?.value || "").toLowerCase();
        monthVal = document.getElementById('monthFilter')?.value || "";
    }

    filteredData = allData.filter(row => {
        const matchTerm = !term ? true : row.some(cell => String(cell).toLowerCase().includes(term));

        if (currentTab === 'DATA' || currentTab === 'DASHBOARD' || currentTab === 'PAY') {
            if (monthVal) {
                const rowM = getRowMonth(row[1], row[11]);
                if (rowM && rowM !== monthVal) return false;
            }
            if (fromDateTS !== -Infinity || toDateTS !== Infinity) {
                const rowDateTS = parseNgayForSort(row[1]);
                if (rowDateTS !== Number.NEGATIVE_INFINITY) {
                    if (rowDateTS < fromDateTS || rowDateTS > toDateTS) return false;
                }
            }
            if (tkTerm) {
                const rowTk = String(row[2] || '').toLowerCase();
                if (!rowTk.includes(tkTerm) && rowTk !== tkTerm) return false;
            }
        }
        return matchTerm;
    });

    if (currentTab === 'DASHBOARD') {
        const filteredPay = (window._allPayData || []).filter(row => {
            const matchTerm = !term ? true : row.some(cell => String(cell).toLowerCase().includes(term));
            if (monthVal) {
                const rowM = getRowMonth(row[1], row[11]);
                if (rowM && rowM !== monthVal) return false;
            }
            if (fromDateTS !== -Infinity || toDateTS !== Infinity) {
                const rowDateTS = parseNgayForSort(row[1]);
                if (rowDateTS !== Number.NEGATIVE_INFINITY) {
                    if (rowDateTS < fromDateTS || rowDateTS > toDateTS) return false;
                }
            }
            if (tkTerm) {
                const rowTk = String(row[2] || '').toLowerCase();
                if (!rowTk.includes(tkTerm) && rowTk !== tkTerm) return false;
            }
            return matchTerm;
        });
        renderDashboard(filteredData, filteredPay);
    } else {
        currentPage = 1;
        renderTable();
    }
}

async function handleFileUpload(event) {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    await processFiles(files);
    event.target.value = '';
}

function readExcelRows(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                let rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (rows[0] && rows[0][0] && String(rows[0][0]).toUpperCase().includes("ID")) {
                    rows = rows.slice(1);
                }
                if (currentTab === 'DH_SHOPE' && rows[0] && String(rows[0][0]).toLowerCase().includes('mã đơn hàng')) {
                    rows = rows.slice(1);
                }
                while (rows.length && (!Array.isArray(rows[0]) || rows[0].every(cell => String(cell ?? '').trim() === ''))) {
                    rows.shift();
                }
                while (rows.length && (!Array.isArray(rows[rows.length - 1]) || rows[rows.length - 1].every(cell => String(cell ?? '').trim() === ''))) {
                    rows.pop();
                }
                resolve(rows);
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = () => reject(new Error(`Không thể đọc file ${file.name}`));
        reader.readAsArrayBuffer(file);
    });
}

async function processFiles(files) {
    const excelFiles = files.filter(f => /\.(xlsx|xls|csv)$/i.test(f.name));
    if (!excelFiles.length) {
        showToast("Vui lòng tải lên file Excel hoặc CSV.", "error");
        return;
    }

    const fileNames = excelFiles.map(f => f.name).join(", ");
    const confirmMessage = currentTab === 'DH_SHOPE'
        ? `Dữ liệu từ ${excelFiles.length} file (${fileNames}) sẽ được THÊM MỚI xuống dưới sheet '${currentTab}' (không xóa dữ liệu cũ). Tiếp tục?`
        : `Dữ liệu từ ${excelFiles.length} file (${fileNames}) sẽ ghi đè sheet '${currentTab}' (xóa dữ liệu cũ). Tiếp tục?`;
    if (!confirm(confirmMessage)) return;

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = `Đang xử lý ${excelFiles.length} file và cập nhật Google Sheets...`;

    try {
        const rowsFromFiles = await Promise.all(excelFiles.map(readExcelRows));
        const allRowsToUpload = rowsFromFiles
            .flat()
            .map(truncateExcelNumericCellsInRow)
            .filter(r => Array.isArray(r) && r.some(c => String(c || '').trim() !== ''));

        if (!allRowsToUpload.length) {
            throw new Error("Không có dòng dữ liệu hợp lệ để tải lên.");
        }

        const token = await getAccessToken();
        const actualSheetTitle = await getActualSheetTitle(currentTab, token);
        const clearRange = formatSheetRange(actualSheetTitle, 'A2:ZZ10000');
        await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(clearRange)}:clear`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` }
        });

        const updateRange = formatSheetRange(actualSheetTitle, 'A2');
        const updateRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(updateRange)}?valueInputOption=RAW`, {
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ values: allRowsToUpload })
        });

        if (!updateRes.ok) {
            const err = await updateRes.json();
            throw new Error(err.error.message || "Lỗi cập nhật API");
        }

        alert(`Đã tải dữ liệu từ ${excelFiles.length} file lên sheet '${actualSheetTitle}' thành công!`);
        try { sessionStorage.setItem(JOY_TAB_STORAGE_KEY, currentTab); } catch (_) { }
        location.reload();
    } catch (err) {
        console.error(err);
        showToast("Lỗi khi tải dữ liệu: " + err.message, "error");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}



function openCorrectAddModal() {
    editingSheetRow = null;
    if (currentTab === 'DATA') {
        openAddModal();
    } else if (currentTab === 'PAY') {
        openAddModalPay();
    } else {
        openAddModalAFF();
    }
}

function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function colIndexToA1(idx) {
    let letter = '';
    let temp = idx;
    while (temp >= 0) {
        letter = String.fromCharCode((temp % 26) + 65) + letter;
        temp = Math.floor(temp / 26) - 1;
    }
    return letter;
}

function openAddModalAFF(editData = null) {
    document.getElementById('addModalAFF').style.display = 'flex';
    const title = document.getElementById('affModalTitle') || document.querySelector('#addModalAFF h2');
    const saveBtn = document.getElementById('affSaveBtn') || document.querySelector('#addModalAFF button[onclick="saveAddDataAFF()"]');
    const container = document.getElementById('addAFFFormContainer');

    const headers = (CONFIG.tabs['TK_AFF'].headers && CONFIG.tabs['TK_AFF'].headers.length > 0)
        ? CONFIG.tabs['TK_AFF'].headers
        : ['id', 'Tên TK', 'mail'];

    title.innerText = editData ? 'Sửa TK AFF' : 'Thêm Mới TK AFF';
    saveBtn.innerText = editData ? 'Cập Nhật' : 'Lưu';

    if (container) {
        container.innerHTML = headers.map((h, i) => {
            const val = editData ? (editData[i] ?? '') : '';
            return `
                <div style="display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 0.85rem; font-weight: 600; color: #475569;">${escapeHtml(h)} ${i === 0 ? '*' : ''}</label>
                    <input type="text" id="affCol_${i}" class="search-input" style="width: 100%;" placeholder="Nhập ${escapeHtml(h)}..." value="${escapeHtml(val)}">
                </div>
            `;
        }).join('');
    }
}

function closeAddModalAFF() {
    document.getElementById('addModalAFF').style.display = 'none';
    editingSheetRow = null;
}

async function saveAddDataAFF() {
    const headers = (CONFIG.tabs['TK_AFF'].headers && CONFIG.tabs['TK_AFF'].headers.length > 0)
        ? CONFIG.tabs['TK_AFF'].headers
        : ['id', 'Tên TK', 'mail'];
    const newRow = headers.map((_, i) => document.getElementById(`affCol_${i}`)?.value?.trim() || '');

    if (newRow.length > 0 && !newRow[0]) {
        showToast(`Vui lòng nhập ${headers[0] || 'ID'}.`, 'error');
        return;
    }

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = editingSheetRow ? `Đang cập nhật TK AFF...` : `Đang thêm TK AFF...`;
    try {
        const token = await getAccessToken();
        const actualSheetTitle = await getActualSheetTitle('TK_AFF', token);
        const endCol = colIndexToA1(Math.max(0, newRow.length - 1));

        let res;
        if (editingSheetRow) {
            const range = formatSheetRange(actualSheetTitle, `A${editingSheetRow}:${endCol}${editingSheetRow}`);
            res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({ values: [newRow] })
            });
        } else {
            const appendRange = formatSheetRange(actualSheetTitle, 'A2');
            res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(appendRange)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({ values: [newRow] })
            });
        }

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error?.message || "Lỗi cập nhật API");
        }

        showToast(editingSheetRow ? "Cập nhật TK AFF thành công!" : "Thêm TK AFF thành công!", "success");
        closeAddModalAFF();
        await fetchData();
    } catch (err) {
        console.error(err);
        showToast("Lỗi: " + err.message, "error");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

async function openAddModal(editData = null) {
    document.getElementById('addModal').style.display = 'flex';
    const title = document.querySelector('#addModal h2');
    const saveBtn = document.querySelector('#addModal button[onclick="saveAddData()"]');

    const selectTk = document.getElementById('addTk');
    selectTk.innerHTML = '<option value="">-- Đang tải TK... --</option>';

    try {
        const token = await getAccessToken();
        const affSheetName = await getActualSheetTitle('TK_AFF', token);
        const affRange = formatSheetRange(affSheetName, 'A2:B');
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(affRange)}`, { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        const opts = (data.values || []).map(r => {
            const id = String(r[0] || '').trim();
            const ten = String(r[1] || '').trim();
            if (!id) return '';
            return `<option value="${id}">${id} - ${ten}</option>`;
        }).filter(Boolean).join('');
        selectTk.innerHTML = `<option value="">-- Chọn TK --</option>` + opts;

        const headers = CONFIG.tabs['DATA'].headers || [];
        const extraContainer = document.getElementById('addDataExtraFieldsContainer');
        if (extraContainer) {
            if (headers.length > 12) {
                extraContainer.style.display = 'grid';
                extraContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
                extraContainer.style.gap = '10px';
                extraContainer.style.marginTop = '10px';
                extraContainer.style.paddingTop = '10px';
                extraContainer.style.borderTop = '1px dashed #cbd5e1';

                let extraHtml = '';
                for (let i = 12; i < headers.length; i++) {
                    const colName = headers[i];
                    const val = editData ? (editData[i] ?? '') : '';
                    extraHtml += `
                        <div>
                            <label style="font-size: 0.85rem; font-weight: 600; color: #475569; display:block; margin-bottom: 5px;">${escapeHtml(colName)}</label>
                            <input type="text" id="addDataCol_${i}" class="search-input" style="width: 100%;" placeholder="Nhập ${escapeHtml(colName)}..." value="${escapeHtml(val)}">
                        </div>
                    `;
                }
                extraContainer.innerHTML = extraHtml;
            } else {
                extraContainer.innerHTML = '';
                extraContainer.style.display = 'none';
            }
        }

        if (editData) {
            title.innerText = 'Sửa Dữ Liệu DATA';
            saveBtn.innerText = 'Cập Nhật';

            // Format date for input: DD/MM/YYYY -> YYYY-MM-DD
            if (editData[1]) {
                const parts = editData[1].split('/');
                if (parts.length === 3) {
                    document.getElementById('addNgay').value = `${parts[2]}-${parts[1]}-${parts[0]}`;
                } else {
                    document.getElementById('addNgay').value = editData[1];
                }
            }

            selectTk.value = editData[2] || '';
            document.getElementById('addClick').value = (Number(editData[3]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addDonHang').value = (Number(editData[4]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addHoaHong').value = (Number(editData[5]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addHhVideo').value = (Number(editData[6]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addHhLive').value = (Number(editData[7]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addHhMxh').value = (Number(editData[8]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addLuotBan').value = (Number(editData[9]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            document.getElementById('addGmv').value = (Number(editData[10]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
            if (document.getElementById('addGhiChuViec')) document.getElementById('addGhiChuViec').value = editData[12] || '';
            if (document.getElementById('addGhiChuTiet')) document.getElementById('addGhiChuTiet').value = editData[13] || '';
        } else {
            title.innerText = 'Thêm Mới Dữ Liệu DATA';
            saveBtn.innerText = 'Lưu';
            document.getElementById('addNgay').value = new Date().toISOString().split('T')[0];
            document.getElementById('addClick').value = '';
            document.getElementById('addLuotBan').value = '';
            document.getElementById('addDonHang').value = '';
            document.getElementById('addHoaHong').value = '';
            document.getElementById('addHhVideo').value = '';
            document.getElementById('addHhLive').value = '';
            document.getElementById('addHhMxh').value = '';
            document.getElementById('addGmv').value = '';
            if (document.getElementById('addGhiChuViec')) document.getElementById('addGhiChuViec').value = '';
            if (document.getElementById('addGhiChuTiet')) document.getElementById('addGhiChuTiet').value = '';
        }
    } catch (err) {
        console.error(err);
        selectTk.innerHTML = '<option value="">Lỗi tải dữ liệu TK</option>';
    }
}

function closeAddModal() {
    document.getElementById('addModal').style.display = 'none';
    editingSheetRow = null;
    clearPendingData();
}

function addCurrentToPending() {
    if (editingSheetRow) {
        showToast("Không thể thêm vào danh sách khi đang ở chế độ sửa dòng.", "error");
        return;
    }

    const ngay = document.getElementById('addNgay').value;
    const tk = document.getElementById('addTk').value.trim();
    const click = cleanNumber(document.getElementById('addClick').value);
    const donHang = cleanNumber(document.getElementById('addDonHang').value);
    const luotBan = cleanNumber(document.getElementById('addLuotBan').value);
    const hoaHong = cleanNumber(document.getElementById('addHoaHong').value);
    const hhVideo = cleanNumber(document.getElementById('addHhVideo').value);
    const hhLive = cleanNumber(document.getElementById('addHhLive').value);
    const hhMxh = cleanNumber(document.getElementById('addHhMxh').value);
    const gmv = cleanNumber(document.getElementById('addGmv').value);

    if (!ngay || !tk) {
        showToast("Vui lòng nhập Ngày và TK.", "error");
        return;
    }

    const d = new Date(ngay);
    const nam_thang = `${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
    const ngayFormat = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

    // Collect extra dynamic fields if any
    const headers = CONFIG.tabs['DATA'].headers || [];
    const extraValues = [];
    for (let i = 12; i < headers.length; i++) {
        const input = document.getElementById(`addDataCol_${i}`);
        extraValues.push(input ? input.value : '');
    }

    // Collect data object
    const entry = {
        ngay, ngayFormat, tk, click, donHang, hoaHong, hhVideo, hhLive, hhMxh, luotBan, gmv, nam_thang, extraValues
    };

    pendingData.push(entry);
    updatePendingUI();

    // Increment date for convenience
    const nextDate = new Date(ngay);
    nextDate.setDate(nextDate.getDate() + 1);
    document.getElementById('addNgay').value = nextDate.toISOString().split('T')[0];

    // Reset numeric fields
    document.getElementById('addClick').value = '';
    document.getElementById('addLuotBan').value = '';
    document.getElementById('addDonHang').value = '';
    document.getElementById('addHoaHong').value = '';
    document.getElementById('addHhVideo').value = '';
    document.getElementById('addHhLive').value = '';
    document.getElementById('addHhMxh').value = '';
    document.getElementById('addGmv').value = '';
    for (let i = 12; i < headers.length; i++) {
        const input = document.getElementById(`addDataCol_${i}`);
        if (input) input.value = '';
    }
}

function formatInput(el) {
    let val = el.value.replace(/[^0-9]/g, '');
    if (val === '') { el.value = ''; return; }
    el.value = Number(val).toLocaleString('vi-VN').replace(/,/g, '.');
}

function cleanNumber(val) {
    if (!val) return 0;
    return Number(String(val).replace(/\./g, '')) || 0;
}

function calculateTotalHoaHong() {
    const v = cleanNumber(document.getElementById('addHhVideo').value);
    const l = cleanNumber(document.getElementById('addHhLive').value);
    const m = cleanNumber(document.getElementById('addHhMxh').value);
    const total = v + l + m;
    document.getElementById('addHoaHong').value = total.toLocaleString('vi-VN').replace(/,/g, '.');
}

function updatePendingUI() {
    const container = document.getElementById('pendingRowsContainer');
    const list = document.getElementById('pendingRowsList');
    const count = document.getElementById('pendingCount');
    const mainSaveBtn = document.getElementById('mainSaveBtn');

    if (pendingData.length > 0) {
        container.style.display = 'block';
        count.innerText = pendingData.length;
        mainSaveBtn.innerText = `Lưu (${pendingData.length} dòng)`;

        list.innerHTML = pendingData.map((item, idx) => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding: 4px 6px; border-bottom: 1px solid #f1f5f9; background: #f8fafc; margin-bottom:2px; border-radius:4px;">
                <span><b>${item.ngayFormat}</b> - ${item.tk} (Click: ${item.click})</span>
                <button onclick="removePendingRow(${idx})" style="color:#ef4444; border:none; background:none; cursor:pointer; font-weight:700;">×</button>
            </div>
        `).join('');
    } else {
        container.style.display = 'none';
        count.innerText = '0';
        mainSaveBtn.innerText = 'Lưu';
        list.innerHTML = '';
    }
}

function removePendingRow(index) {
    pendingData.splice(index, 1);
    updatePendingUI();
}

function clearPendingData() {
    pendingData = [];
    updatePendingUI();
}

async function saveAddData() {
    const token = await getAccessToken();
    let rowsToSave = [];
    const headers = CONFIG.tabs['DATA'].headers || [];
    const totalCols = Math.max(headers.length, 12);
    const lastColLetter = colIndexToA1(totalCols - 1);

    // Nếu có danh sách tạm chờ, ưu tiên lưu danh sách đó
    if (pendingData.length > 0 && !editingSheetRow) {
        if (!confirm(`Lưu tất cả ${pendingData.length} dòng dữ liệu đã nhập?`)) return;

        document.getElementById('loading').style.display = 'flex';
        document.querySelector('#loading p').innerText = `Đang lấy ID và chuẩn bị dữ liệu...`;

        try {
            // Lấy ID cuối cùng một lần duy nhất
            const actualSheetTitle = await getActualSheetTitle('DATA', token);
            const idRange = formatSheetRange(actualSheetTitle, 'A2:A');
            const idRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(idRange)}`, { headers: { Authorization: `Bearer ${token}` } });
            const idData = await idRes.json();
            const ids = (idData.values || []).map(r => Number(r[0])).filter(n => Number.isFinite(n));
            let currentNextId = ids.length ? Math.max(...ids) + 1 : 1;

            rowsToSave = pendingData.map(item => {
                const baseRow = [currentNextId, item.ngayFormat, item.tk, item.click, item.donHang, item.hoaHong, item.hhVideo, item.hhLive, item.hhMxh, item.luotBan, item.gmv, item.nam_thang];
                const fullRow = item.extraValues && item.extraValues.length > 0 ? baseRow.concat(item.extraValues) : baseRow;
                while (fullRow.length < totalCols) fullRow.push('');
                currentNextId++;
                return fullRow;
            });
        } catch (e) {
            showToast("Lỗi khi lấy ID: " + e.message, "error");
            document.getElementById('loading').style.display = 'none';
            return;
        }
    } else {
        // Lưu duy nhất dòng đang có trên form
        const ngay = document.getElementById('addNgay').value;
        const tk = document.getElementById('addTk').value.trim();
        const click = cleanNumber(document.getElementById('addClick').value);
        const donHang = cleanNumber(document.getElementById('addDonHang').value);
        const luotBan = cleanNumber(document.getElementById('addLuotBan').value);
        const hoaHong = cleanNumber(document.getElementById('addHoaHong').value);
        const hhVideo = cleanNumber(document.getElementById('addHhVideo').value);
        const hhLive = cleanNumber(document.getElementById('addHhLive').value);
        const hhMxh = cleanNumber(document.getElementById('addHhMxh').value);
        const gmv = cleanNumber(document.getElementById('addGmv').value);

        if (!ngay || !tk) {
            showToast("Vui lòng nhập Ngày và TK.", "error");
            return;
        }

        const d = new Date(ngay);
        const nam_thang = `${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
        const ngayFormat = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

        let nextId;
        if (editingSheetRow) {
            const rowData = allData.find(r => r._sheetRow === editingSheetRow);
            nextId = rowData ? rowData[0] : 1; // Giữ ID cũ khi sửa
        } else {
            try {
                const actualSheetTitle = await getActualSheetTitle('DATA', token);
                const idRange = formatSheetRange(actualSheetTitle, 'A2:A');
                const idRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(idRange)}`, { headers: { Authorization: `Bearer ${token}` } });
                const idData = await idRes.json();
                const ids = (idData.values || []).map(r => Number(r[0])).filter(n => Number.isFinite(n));
                nextId = ids.length ? Math.max(...ids) + 1 : 1;
            } catch (e) { nextId = 1; }
        }

        const extraValues = [];
        for (let i = 12; i < headers.length; i++) {
            const input = document.getElementById(`addDataCol_${i}`);
            extraValues.push(input ? input.value : '');
        }

        const baseRow = [nextId, ngayFormat, tk, click, donHang, hoaHong, hhVideo, hhLive, hhMxh, luotBan, gmv, nam_thang];
        const fullRow = extraValues.length > 0 ? baseRow.concat(extraValues) : baseRow;
        while (fullRow.length < totalCols) fullRow.push('');

        rowsToSave = [fullRow];
    }

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = editingSheetRow ? `Đang cập nhật dữ liệu...` : `Đang lưu ${rowsToSave.length} dòng...`;

    try {
        const actualSheetTitle = await getActualSheetTitle('DATA', token);
        let res;
        if (editingSheetRow) {
            const range = formatSheetRange(actualSheetTitle, `A${editingSheetRow}:${lastColLetter}${editingSheetRow}`);
            res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({ values: rowsToSave })
            });
        } else {
            const appendRange = formatSheetRange(actualSheetTitle, 'A2');
            res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(appendRange)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({ values: rowsToSave })
            });
        }

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error?.message || "Lỗi cập nhật API");
        }

        showToast(editingSheetRow ? "Cập nhật dữ liệu thành công!" : `Đã lưu thành công ${rowsToSave.length} dòng!`, "success");
        closeAddModal();
        await fetchData();
    } catch (err) {
        console.error(err);
        showToast("Lỗi: " + err.message, "error");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}


async function openAddModalPay(editData = null) {
    document.getElementById('addModalPay').style.display = 'flex';
    const selectTk = document.getElementById('payTk');
    selectTk.innerHTML = '<option value="">-- Đang tải TK... --</option>';

    try {
        const token = await getAccessToken();
        const actualAffTitle = await getActualSheetTitle('TK_AFF', token);
        const range = formatSheetRange(actualAffTitle, 'A2:B');
        const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(range)}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        const accounts = data.values || [];
        selectTk.innerHTML = '<option value="">Chọn Tài Khoản...</option>';
        accounts.forEach(acc => {
            const val = `${acc[0]} - ${acc[1]}`;
            selectTk.innerHTML += `<option value="${val}">${val}</option>`;
        });

        const title = document.getElementById('payModalTitle');
        const saveBtn = document.getElementById('paySaveBtn');

        if (editData) {
            editingSheetRow = editData._sheetRow;
            title.innerText = 'Sửa Dữ Liệu PAY';
            saveBtn.innerText = 'Cập Nhật';

            if (editData[1]) {
                const parts = editData[1].split('/');
                if (parts.length === 3) {
                    document.getElementById('payNgay').value = `${parts[2]}-${parts[1]}-${parts[0]}`;
                } else {
                    document.getElementById('payNgay').value = editData[1];
                }
            }
            selectTk.value = editData[2] || '';
            document.getElementById('paySoTien').value = (Number(editData[3]) || 0).toLocaleString('vi-VN').replace(/,/g, '.');
        } else {
            title.innerText = 'Thêm Mới Dữ Liệu PAY';
            saveBtn.innerText = 'Lưu';
            document.getElementById('payNgay').value = new Date().toISOString().split('T')[0];
            document.getElementById('paySoTien').value = '';
        }
    } catch (e) { console.error(e); }
}

function closeAddModalPay() {
    document.getElementById('addModalPay').style.display = 'none';
    editingSheetRow = null;
    clearPendingPayData();
}

function addCurrentPayToPending() {
    if (editingSheetRow) {
        showToast("Không thể thêm vào danh sách khi đang ở chế độ sửa dòng.", "error");
        return;
    }

    const ngay = document.getElementById('payNgay').value;
    const tk = document.getElementById('payTk').value.trim();
    const soTien = cleanNumber(document.getElementById('paySoTien').value);

    if (!ngay || !tk || !soTien) {
        showToast("Vui lòng nhập Ngày, TK và Số Tiền.", "error");
        return;
    }

    const d = new Date(ngay);
    const ngayFormat = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

    const entry = { ngay, ngayFormat, tk, soTien };
    pendingPayData.push(entry);
    updatePendingPayUI();

    // Tăng ngày lên 1 cho tiện
    const nextDate = new Date(ngay);
    nextDate.setDate(nextDate.getDate() + 1);
    document.getElementById('payNgay').value = nextDate.toISOString().split('T')[0];

    // Reset fields
    document.getElementById('paySoTien').value = '';
}

function updatePendingPayUI() {
    const container = document.getElementById('pendingPayRowsContainer');
    const list = document.getElementById('pendingPayRowsList');
    const count = document.getElementById('pendingPayCount');
    const paySaveBtn = document.getElementById('paySaveBtn');

    if (pendingPayData.length > 0) {
        container.style.display = 'block';
        count.innerText = pendingPayData.length;
        paySaveBtn.innerText = `Lưu (${pendingPayData.length} dòng)`;

        list.innerHTML = pendingPayData.map((item, idx) => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding: 4px 6px; border-bottom: 1px solid #f1f5f9; background: #f8fafc; margin-bottom:2px; border-radius:4px;">
                <span><b>${item.ngayFormat}</b> - ${item.tk} (${item.soTien.toLocaleString('vi-VN')}đ)</span>
                <button onclick="removePendingPayRow(${idx})" style="color:#ef4444; border:none; background:none; cursor:pointer; font-weight:700;">×</button>
            </div>
        `).join('');
    } else {
        container.style.display = 'none';
        count.innerText = '0';
        paySaveBtn.innerText = 'Lưu';
        list.innerHTML = '';
    }
}

function removePendingPayRow(index) {
    pendingPayData.splice(index, 1);
    updatePendingPayUI();
}

function clearPendingPayData() {
    pendingPayData = [];
    updatePendingPayUI();
}

async function saveAddDataPay() {
    const token = await getAccessToken();
    const actualPayTitle = await getActualSheetTitle('PAY', token);
    let rowsToSave = [];

    if (pendingPayData.length > 0 && !editingSheetRow) {
        if (!confirm(`Lưu tất cả ${pendingPayData.length} dòng dữ liệu PAY đã nhập?`)) return;

        document.getElementById('loading').style.display = 'flex';
        document.querySelector('#loading p').innerText = `Đang lấy ID và chuẩn bị dữ liệu...`;

        try {
            const idRange = formatSheetRange(actualPayTitle, 'A2:A');
            const idRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(idRange)}`, { headers: { Authorization: `Bearer ${token}` } });
            const idData = await idRes.json();
            const ids = (idData.values || []).map(r => Number(r[0])).filter(n => Number.isFinite(n));
            let currentNextId = ids.length ? Math.max(...ids) + 1 : 1;

            rowsToSave = pendingPayData.map(item => {
                const row = [currentNextId, item.ngayFormat, item.tk, item.soTien];
                currentNextId++;
                return row;
            });
        } catch (e) {
            showToast("Lỗi khi lấy ID: " + e.message, "error");
            document.getElementById('loading').style.display = 'none';
            return;
        }
    } else {
        const ngay = document.getElementById('payNgay').value;
        const tk = document.getElementById('payTk').value.trim();
        const soTien = cleanNumber(document.getElementById('paySoTien').value);

        if (!ngay || !tk) {
            showToast("Vui lòng nhập Ngày và TK.", "error");
            return;
        }

        const d = new Date(ngay);
        const ngayFormat = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

        let nextId;
        if (editingSheetRow) {
            const rowData = allData.find(r => r._sheetRow === editingSheetRow);
            nextId = rowData[0];
        } else {
            try {
                const idRange = formatSheetRange(actualPayTitle, 'A2:A');
                const idRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(idRange)}`, { headers: { Authorization: `Bearer ${token}` } });
                const idData = await idRes.json();
                const ids = (idData.values || []).map(r => Number(r[0])).filter(n => Number.isFinite(n));
                nextId = ids.length ? Math.max(...ids) + 1 : 1;
            } catch (e) { nextId = 1; }
        }

        rowsToSave = [[nextId, ngayFormat, tk, soTien]];
    }

    document.getElementById('loading').style.display = 'flex';
    document.querySelector('#loading p').innerText = editingSheetRow ? `Đang cập nhật...` : `Đang lưu ${rowsToSave.length} dòng...`;

    try {
        let res;
        if (editingSheetRow) {
            const range = formatSheetRange(actualPayTitle, `A${editingSheetRow}:D${editingSheetRow}`);
            res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({ values: rowsToSave })
            });
        } else {
            const appendRange = formatSheetRange(actualPayTitle, 'A2');
            res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.spreadsheetId}/values/${encodeURIComponent(appendRange)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
                body: JSON.stringify({ values: rowsToSave })
            });
        }

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error?.message || "Lỗi cập nhật API");
        }

        showToast(editingSheetRow ? "Cập nhật thành công!" : `Đã lưu thành công ${rowsToSave.length} dòng!`, "success");
        closeAddModalPay();
        await fetchData();
    } catch (err) {
        console.error(err);
        showToast("Lỗi: " + err.message, "error");
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

init();
