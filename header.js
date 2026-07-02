/**
 * 【正禾資訊】核心模組積木：可選式商用頁首大橫幅 (header.js)
 * 功能：高質感科技深色背板、主副標題、一鍵撥號按鈕，適合放在形象頁面
 */
document.addEventListener('DOMContentLoaded', function() {
  
  // 📥 1. 注入頁首專屬的視覺衣服 (CSS 樣式)
  const style = document.createElement('style');
  style.innerHTML = `
    .zh-hero-header {
      background: linear-gradient(135deg, #111111 0%, #1a1d21 100%);
      color: #ffffff;
      padding: 80px 20px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }
    /* 科技感微光網格背景裝飾 */
    .zh-hero-header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: linear-gradient(rgba(242, 122, 43, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(242, 122, 43, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
      pointer-events: none;
    }
    .zh-hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }
    .zh-hero-tag {
      display: inline-block;
      background-color: rgba(242, 122, 43, 0.15);
      color: #f27a2b;
      font-size: 13px;
      font-weight: 800;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }
    .zh-hero-title {
      font-size: 38px;
      font-weight: 800;
      margin: 0 0 16px 0;
      letter-spacing: 0.5px;
      line-height: 1.3;
    }
    .zh-hero-title span { color: #f27a2b; }
    .zh-hero-subtitle {
      font-size: 17px;
      color: #aaaaaa;
      margin: 0 0 30px 0;
      font-weight: 500;
      line-height: 1.6;
    }
    .zh-hero-action-btn {
      display: inline-block;
      border: 2px solid #ffffff;
      color: #ffffff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      padding: 10px 24px;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    .zh-hero-action-btn:hover {
      background-color: #ffffff;
      color: #111111;
    }

    /* 📱 手機版自動縮小字體 */
    @media (max-width: 768px) {
      .zh-hero-header { padding: 50px 20px; }
      .zh-hero-title { font-size: 26px; }
      .zh-hero-subtitle { font-size: 14.5px; }
    }
  `;
  document.head.appendChild(style);

  // 🏗️ 2. 建立頁首骨架 (HTML 結構)
  const headerElement = document.createElement('header');
  headerElement.className = 'zh-hero-header';
  headerElement.innerHTML = `
    <div class="zh-hero-content">
      <div class="zh-hero-tag">專業弱電工程專家</div>
      <h1 class="zh-hero-title">正禾資訊<span>.</span> 結構化佈線與監控系統</h1>
      <p class="zh-hero-subtitle">提供中部地區最專業的網路佈線、工業級監視系統、電話總機、門禁控制及電信送審服務，全線路設備完善保固兩年。</p>
      <a href="tel:0933-560468" class="zh-hero-action-btn">📞 電話諮詢 0933-560468</a>
    </div>
  `;
  
  // 💡 關鍵智慧置入邏輯：
  // 頁首必須乖乖躺在導覽列 (nav) 的正下方。如果網頁有 nav，就塞在 nav 後面；沒有，就塞在最上面。
  const navBar = document.querySelector('.zh-nav-bar');
  if (navBar) {
    navBar.parentNode.insertBefore(headerElement, navBar.nextSibling);
  } else {
    document.body.insertBefore(headerElement, document.body.firstChild);
  }
});
