/**
 * 【正禾資訊】標準商用核心模組：原生網頁元件全站通用高級頁尾 (Web Component)
 * 旗艦升級版：承襲三欄頂級佈局、精準搜尋地標針內嵌、RWD手機自動適應
 */
class ZhWebFooter extends HTMLElement {
  constructor() {
    super();
  }

  // 🏗️ 當網頁一出現 <zh-footer></zh-footer> 標籤時，自動觸發並渲染
  connectedCallback() {
    this.innerHTML = `
      <style>
        .zh-footer {
          background-color: #111111;
          color: #ffffff;
          padding: 60px 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
          box-sizing: border-box;
          border-top: 3px solid #f27a2b; /* 頂部精緻的正禾橘滾邊 */
          margin-top: 60px; /* 與上方內容保持舒適距離 */
        }
        .zh-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
        }
        
        /* 🏢 左側公司資料區 */
        .zh-footer-info {
          flex: 1;
          min-width: 280px;
        }
        .zh-footer-company {
          font-size: 24px;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 22px;
          letter-spacing: 0.5px;
        }
        .zh-footer-company span { color: #f27a2b; }
        .zh-footer-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .zh-footer-details li {
          font-size: 14.5px;
          color: #cccccc;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        .zh-footer-details li strong {
          color: #ffffff;
          width: 85px;
          display: inline-block;
          flex-shrink: 0;
        }

        /* 🗺️ 中間 Google 商家地圖完美嵌入區 */
        .zh-footer-map-box {
          flex: 1.2;
          min-width: 320px;
          width: 100%;
        }
        .zh-footer-map-container {
          border: 1px solid #2d3239;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          height: 220px;
          background-color: #1a1d21;
        }

        /* 📱 右側精緻 LINE 聯絡卡片區 */
        .zh-footer-card-box {
          flex: 0.8;
          min-width: 260px;
        }
        .zh-footer-card {
          background-color: #1a1d21; /* 帶有一點層次感的深灰黑 */
          border: 1px solid #2d3239;
          border-radius: 12px;
          padding: 24px 30px;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
          text-align: center;
        }
        .zh-card-hours {
          font-size: 13px;
          color: #888888;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: 1px;
        }
        .zh-card-hours-val {
          font-size: 15px;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .zh-card-phone-label {
          font-size: 11px;
          color: #f27a2b;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 2px;
        }
        .zh-card-phone {
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          font-family: Arial, sans-serif;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }
        
        /* 🟢 LINE 綠色按鈕樣式 */
        .zh-card-btn {
          display: block;
          background-color: #06C167;
          color: #ffffff !important;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          padding: 13px 0;
          border-radius: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(6, 193, 103, 0.25);
        }
        .zh-card-btn:hover {
          background-color: #05a95a;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(6, 193, 103, 0.4);
        }
        
        /* 底部最迷你的版權宣告 */
        .zh-footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #222222;
          font-size: 12px;
          color: #666666;
          text-align: left;
          font-weight: 600;
        }

        /* 📱 手機版自動變形排版 */
        @media (max-width: 992px) {
          .zh-footer { padding: 40px 20px 30px 20px; }
          .zh-footer-container { flex-direction: column; align-items: flex-start; gap: 35px; }
          .zh-footer-map-box, .zh-footer-card-box { width: 100%; }
          .zh-footer-card { max-width: 100%; padding: 24px; }
          .zh-card-phone { font-size: 26px; }
        }
      </style>

      <footer class="zh-footer">
        <div class="zh-footer-container">
          <div class="zh-footer-info">
            <h4 class="zh-footer-company">正禾資訊有限公司<span>.</span></h4>
            <ul class="zh-footer-details">
              <li><strong>營業時間</strong> <span>週一至週五 08:00 - 17:30</span></li>
              <li><strong>公司地址</strong> <span>彰化縣永靖鄉永坡路50號1樓</span></li>
              <li><strong>聯絡電話</strong> <span>04-8221966</span></li>
              <li><strong>傳真號碼</strong> <span>04-8227689</span></li>
              <li><strong>統一編號</strong> <span>24865834</span></li>
              <li><strong>服務區域</strong> <span>彰化、台中、南投、雲林</span></li>

            </ul>
          </div>
          
          <div class="zh-footer-map-box">
            <div class="zh-footer-map-container">
              <iframe 
                src="https://maps.google.com/maps?q=正禾資訊有限公司 彰化縣永靖鄉永坡路50號&t=&z=16&ie=UTF-8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
          <div class="zh-footer-card-box">
            <div class="zh-footer-card">
              <div class="zh-card-hours">營業時間</div>
              <div class="zh-card-hours-val">週一至週五 08:00 - 17:30</div>
              <div class="zh-card-phone-label">聯絡專線</div>
              <div class="zh-card-phone">0933-560468</div>
              <a href="https://line.me/ti/p/~gooa168" target="_blank" class="zh-card-btn">LINE 快速報價</a>
            </div>
          </div>
        </div>
        
        <div class="zh-footer-bottom">
          &copy; ${new Date().getFullYear()} 正禾資訊有限公司 版權所有 | 全線路設備工程完善保固 2 年
        </div>
      </footer>
    `;
  }
}

// 🎯 註冊全球唯一標籤
customElements.define('zh-footer', ZhWebFooter);