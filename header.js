/**
 * 【正禾資訊】標準商用核心模組：原生網頁元件頁首大橫幅 (Web Component)
 * 基礎打底：符合 W3C 規範，不繞彎、不強行插隊、完全由 HTML 標籤自由掌控
 */
class ZhHeroHeader extends HTMLElement {
  constructor() {
    super();
  }

  // 🏗️ 當網頁一出現 <zh-header> 標籤時，自動觸發這個正統地基
  connectedCallback() {
    this.innerHTML = `
      <style>
        .zh-hero-header {
          background-color: #1a1d21; 
          color: #ffffff;
          padding: 80px 20px 75px 20px; 
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          box-sizing: border-box;
          position: relative;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
        }
        .zh-hero-content { max-width: 850px; margin: 0 auto; position: relative; width: 100%; }
        .zh-hero-title { font-size: 36px; font-weight: 800; margin: 0 0 18px 0; letter-spacing: 0.5px; line-height: 1.3; }
        .zh-hero-subtitle { font-size: 16.5px; color: #94a3b8; margin: 0 0 45px 0; font-weight: 500; line-height: 1.6; word-break: keep-all; }
        .zh-step-grid { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 45px; text-align: left; }
        .zh-step-item { flex: 1; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 12px; padding: 20px 22px; box-sizing: border-box; transition: all 0.2s ease; }
        .zh-step-item:hover { background: rgba(255, 255, 255, 0.04); border-color: rgba(242, 122, 43, 0.4); }
        .zh-step-title { font-size: 16px; font-weight: 700; color: #f27a2b; margin-bottom: 8px; display: block; word-break: keep-all; }
        .zh-step-desc { font-size: 13.5px; color: #cbd5e1; line-height: 1.5; display: block; }
        .zh-hero-btn-group { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 35px; }
        .zh-hero-btn { display: inline-flex; align-items: center; justify-content: center; text-decoration: none; font-size: 15px; font-weight: 700; padding: 13px 32px; border-radius: 8px; transition: all 0.2s ease; box-sizing: border-box; min-width: 210px; }
        .btn-zh-line { background-color: #06C167; color: #ffffff; box-shadow: 0 4px 12px rgba(6, 193, 103, 0.15); }
        .btn-zh-line:hover { background-color: #05a859; box-shadow: 0 6px 16px rgba(6, 193, 103, 0.25); }
        .btn-zh-phone { border: 1px solid rgba(255, 255, 255, 0.4); color: #ffffff; background: transparent; }
        .btn-zh-phone:hover { background-color: #ffffff; color: #1a1d21; border-color: #ffffff; }
        .zh-hero-cert-tag { font-size: 14px; color: #64748b; font-weight: 600; line-height: 1.6; word-break: keep-all; background: rgba(255, 255, 255, 0.01); border-radius: 30px; display: inline-block; padding: 6px 24px; border: 1px dashed rgba(255, 255, 255, 0.05); letter-spacing: 0.5px; }
        .zh-hero-cert-tag span { color: #f27a2b; font-weight: 700; }
        @media (max-width: 768px) {
          .zh-hero-header { padding: 50px 15px 45px 15px; } 
          .zh-hero-title { font-size: 26px; }
          .zh-hero-subtitle { font-size: 14.5px; margin-bottom: 30px; }
          .zh-step-grid { flex-direction: column; gap: 12px; margin-bottom: 35px; }
          .zh-step-item { padding: 16px 18px; }
          .zh-hero-btn-group { flex-direction: column; width: 100%; gap: 12px; margin-bottom: 25px; }
          .zh-hero-btn { width: 100%; min-width: unset; }
        }
      </style>

      <header class="zh-hero-header">
        <div class="zh-hero-content">
          <h1 class="zh-hero-title">正禾資訊｜彰化弱電工程整合</h1>
          <p class="zh-hero-subtitle">提供案場圖面，即可獲得初步配置建議與精準預算評估。</p>
          <div class="zh-step-grid">
            <div class="zh-step-item"><span class="zh-step-title">1.傳送圖面</span><span class="zh-step-desc">透過 LINE 傳送您的建築或電信圖面。</span></div>
            <div class="zh-step-item"><span class="zh-step-title">2.專業評估</span><span class="zh-step-desc">正禾資訊提供配置建議與設備清單。</span></div>
            <div class="zh-step-item"><span class="zh-step-title">3.精準報價</span><span class="zh-step-desc">根據現場需求，提供最透明的預算評估。</span></div>
          </div>
          <div class="zh-hero-btn-group">
            <a href="https://line.me/ti/p/~gooa168" target="_blank" class="zh-hero-btn btn-zh-line">💬 加 LINE 線上估價</a>
            <a href="tel:0933-560468" class="zh-hero-btn btn-zh-phone">📞 電話諮詢 0933-560468</a>
          </div>
          <div class="zh-hero-cert-tag">本公司具備 <span>NCC 乙級證照</span> 與豐富送審經驗 ｜ 歡迎建築師、營造廠長期配合</div>
        </div>
      </header>
    `;
  }
}

// 🎯 全球唯一認證：向瀏覽器註冊這個專屬於正禾的自訂 HTML5 標籤
customElements.define('zh-header', ZhHeroHeader);