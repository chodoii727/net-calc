/**
 * 【正禾資訊】核心模組積木：商用全站通用頁首大橫幅 (header.js)
 * 功能：徹底去油膩！極簡黑曜石純色背板、平整透亮卡片設計、大廠流線視覺
 */
document.addEventListener('DOMContentLoaded', function() {
  
  // 📥 1. 注入頁首專屬的視覺衣服 (CSS 樣式)
  const style = document.createElement('style');
  style.innerHTML = `
    .zh-hero-header {
      /* 🎯 徹底移除醜陋漸層，換成乾淨、高質感的純深色底 (Tesla黑曜石風) */
      background-color: #1a1d21; 
      color: #ffffff !important;
      padding: 80px 20px 75px 20px !important; 
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
      box-sizing: border-box !important;
      position: relative;
      width: 100%;
      height: auto !important;
      /* 給底部一條極細、優雅的深色分界線 */
      border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
    }

    .zh-hero-content {
      max-width: 850px;
      margin: 0 auto !important;
      position: relative;
      width: 100%;
    }
    .zh-hero-title {
      font-size: 36px;
      font-weight: 800;
      margin-top: 0 !important;
      margin-bottom: 18px !important;
      letter-spacing: 0.5px;
      line-height: 1.3;
      color: #ffffff !important;
    }
    .zh-hero-subtitle {
      font-size: 16.5px;
      color: #94a3b8 !important; /* 舒適、高質感的灰白，完全不刺眼 */
      margin-top: 0 !important;
      margin-bottom: 45px !important;
      font-weight: 500;
      line-height: 1.6;
      word-break: keep-all; 
    }

    /* 📊 三大步驟流線卡片區 */
    .zh-step-grid {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 45px !important;
      text-align: left;
    }
    .zh-step-item {
      flex: 1;
      /* 🔒 模仿 KCouper 的精緻卡片感：極淡的透亮背景＋細框，帶出平整的現代感 */
      background: rgba(255, 255, 255, 0.02) !important; 
      border: 1px solid rgba(255, 255, 255, 0.07) !important;
      border-radius: 12px;
      padding: 20px 22px;
      box-sizing: border-box;
      transition: all 0.2s ease;
    }
    .zh-step-item:hover {
      background: rgba(255, 255, 255, 0.04) !important;
      border-color: rgba(242, 122, 43, 0.4) !important; /* 滑過時品牌橘細邊 */
    }
    .zh-step-title {
      font-size: 16px;
      font-weight: 700;
      color: #f27a2b !important; /* 正禾品牌橘 */
      margin-bottom: 8px;
      display: block;
      word-break: keep-all;
    }
    .zh-step-desc {
      font-size: 13.5px;
      color: #cbd5e1 !important; 
      line-height: 1.5;
      display: block;
    }

    /* 🔘 雙彈藥按鈕區組 */
    .zh-hero-btn-group {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 35px !important; 
    }
    .zh-hero-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      padding: 13px 32px;
      border-radius: 8px;
      transition: all 0.2s ease;
      box-sizing: border-box;
      min-width: 210px;
    }
    /* LINE 專屬綠按鈕 */
    .btn-zh-line {
      background-color: #06C167 !important;
      color: #ffffff !important;
      box-shadow: 0 4px 12px rgba(6, 193, 103, 0.15);
    }
    .btn-zh-line:hover {
      background-color: #05a859 !important;
      box-shadow: 0 6px 16px rgba(6, 193, 103, 0.25);
    }
    /* 電話諮詢高質感白框鈕 */
    .btn-zh-phone {
      border: 1px solid rgba(255, 255, 255, 0.4) !important; /* 變成精細的單線框 */
      color: #ffffff !important;
      background: transparent !important;
    }
    .btn-zh-phone:hover {
      background-color: #ffffff !important;
      color: #1a1d21 !important;
      border-color: #ffffff !important;
    }

    /* 🛡️ 底部官方證照與 B2B 合作宣告標籤 */
    .zh-hero-cert-tag {
      font-size: 14px;
      color: #64748b !important; 
      font-weight: 600;
      line-height: 1.6;
      word-break: keep-all;
      background: rgba(255, 255, 255, 0.01) !important; 
      border-radius: 30px;
      display: inline-block;
      padding: 6px 24px;
      border: 1px dashed rgba(255, 255, 255, 0.05) !important;
      letter-spacing: 0.5px;
    }
    .zh-hero-cert-tag span {
      color: #f27a2b !important;
      font-weight: 700;
    }

    /* 📱 手機版自動切換 */
    @media (max-width: 768px) {
      .zh-hero-header { padding: 50px 15px 45px 15px !important; } 
      .zh-hero-title { font-size: 26px; }
      .zh-hero-subtitle { font-size: 14.5px; margin-bottom: 30px !important; }
      .zh-step-grid { flex-direction: column; gap: 12px; margin-bottom: 35px !important; }
      .zh-step-item { padding: 16px 18px; }
      .zh-hero-btn-group { flex-direction: column; width: 100%; gap: 12px; margin-bottom: 25px !important; }
      .zh-hero-btn { width: 100%; min-width: unset; }
    }
  `;
  document.head.appendChild(style);

  // 🏗️ 2. 建立頁首骨架 (HTML 結構)
  const headerElement = document.createElement('header');
  headerElement.className = 'zh-hero-header';
  headerElement.innerHTML = `
    <div class="zh-hero-content">
      <h1 class="zh-hero-title">正禾資訊｜彰化弱電工程整合</h1>
      <p class="zh-hero-subtitle">提供案場圖面，即可獲得初步配置建議與精準預算評估。</p>
      
      <div class="zh-step-grid">
        <div class="zh-step-item">
          <span class="zh-step-title">1.傳送圖面</span>
          <span class="zh-step-desc">透過 LINE 傳送您的建築或電信圖面。</span>
        </div>
        <div class="zh-step-item">
          <span class="zh-step-title">2.專業評估</span>
          <span class="zh-step-desc">正禾資訊提供配置建議與設備清單。</span>
        </div>
        <div class="zh-step-item">
          <span class="zh-step-title">3.精準報價</span>
          <span class="zh-step-desc">根據現場需求，提供最透明的預算評估。</span>
        </div>
      </div>

      <div class="zh-hero-btn-group">
        <a href="https://line.me/ti/p/~gooa168" target="_blank" class="zh-hero-btn btn-zh-line">💬 加 LINE 線上估價</a>
        <a href="tel:0933-560468" class="zh-hero-btn btn-zh-phone">📞 電話諮詢 0933-560468</a>
      </div>

      <div class="zh-hero-cert-tag">
        本公司具備 <span>NCC 乙級證照</span> 與豐富送審經驗 ｜ 歡迎建築師、營造廠長期配合
      </div>
    </div>
  `;
  
  // 💡 關鍵智慧置入邏輯
  const navBar = document.querySelector('.zh-nav-bar');
  if (navBar) {
    navBar.parentNode.insertBefore(headerElement, navBar.nextSibling);
  } else {
    document.body.insertBefore(headerElement, document.body.firstChild);
  }
});