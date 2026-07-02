/**
 * 【正禾資訊】核心模組積木：高級下拉選單導覽列 (navbar.js)
 * 版本：V2.0 旗艦版 (支援電腦版 Hover 下拉與手機版手風琴摺疊)
 */
document.addEventListener('DOMContentLoaded', function() {
  
  // 📥 1. 注入導覽列升級版的視覺衣服 (CSS 樣式)
  const style = document.createElement('style');
  style.innerHTML = `
    .zh-nav-bar {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      z-index: 99999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft JhengHei", sans-serif;
      box-sizing: border-box;
    }
    .zh-nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 20px;
      box-sizing: border-box;
    }
    .zh-nav-logo {
      font-size: 20px;
      font-weight: 800;
      color: #111111;
      text-decoration: none;
      letter-spacing: -0.5px;
      white-space: nowrap;
    }
    .zh-nav-logo span { color: #f27a2b; }
    
    .zh-nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .zh-nav-links a {
      color: #333333;
      text-decoration: none;
      font-size: 14.5px;
      font-weight: 700;
      transition: all 0.15s ease;
    }
    .zh-nav-links > li > a:hover { color: #f27a2b; }
    
    /* 💻 電腦版下拉選單核心架構 */
    .zh-dropdown { position: relative; }
    .zh-dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #111111; /* 呼應原版的黑底色調 */
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      border-radius: 6px;
      list-style: none;
      padding: 8px 0;
      margin: 0;
      min-width: 180px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all 0.2s ease;
    }
    .zh-dropdown-menu a {
      color: #ffffff;
      padding: 10px 20px;
      display: block;
      font-size: 13.5px;
      font-weight: 600;
      white-space: nowrap;
    }
    .zh-dropdown-menu a:hover {
      background-color: #f27a2b;
      color: #ffffff;
    }
    /* 電腦版觸發：滑鼠移入時顯示下拉選專區 */
    @media (min-width: 769px) {
      .zh-dropdown:hover .zh-dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(5px);
      }
      .zh-dropdown > a::after {
        content: ' ▾';
        font-size: 11px;
        color: #888;
      }
    }
    
    /* 特別打亮右側 LINE 聯絡按鈕 */
    .zh-nav-links a.zh-nav-btn {
      background-color: #111111;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 6px;
    }
    .zh-nav-links a.zh-nav-btn:hover { background-color: #f27a2b; }
    
    /* 手機版三條線按鈕 */
    .zh-nav-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    .zh-nav-toggle .bar {
      display: block;
      width: 22px;
      height: 3px;
      margin: 4px auto;
      background-color: #111111;
      transition: all 0.2s ease;
      border-radius: 2px;
    }

    /* 📱 手機版響應式 RWD 變形防護 */
    @media (max-width: 768px) {
      .zh-nav-toggle { display: block; }
      .zh-nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #ffffff;
        flex-direction: column;
        gap: 0;
        box-shadow: 0 8px 12px rgba(0,0,0,0.08);
        border-top: 1px solid #eee;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
      }
      .zh-nav-links > li {
        width: 100%;
        text-align: left;
      }
      .zh-nav-links > li > a {
        display: block;
        padding: 14px 24px;
        border-bottom: 1px solid #f5f5f5;
        font-size: 15px;
      }
      /* 手機版下拉選單改為垂直展開 */
      .zh-dropdown-menu {
        position: static;
        background-color: #f9f9f9;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        max-height: 0;
        overflow: hidden;
        opacity: 1;
        visibility: visible;
        transform: none;
        transition: max-height 0.25s ease-out;
      }
      .zh-dropdown-menu a {
        color: #444444;
        padding: 12px 40px;
        border-bottom: 1px solid #eeeeee;
      }
      .zh-dropdown.active .zh-dropdown-menu {
        max-height: 500px; /* 給予足夠的展開空間 */
      }
      .zh-dropdown > a {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
      .zh-dropdown > a::after {
        content: ' +';
        font-size: 16px;
        color: #f27a2b;
        font-weight: bold;
      }
      .zh-dropdown.active > a::after {
        content: ' −';
      }
      .zh-nav-links.active { max-height: 80px; max-height: 100vh; overflow-y: auto; }
      .zh-nav-toggle.active .bar:nth-child(2) { opacity: 0; }
      .zh-nav-toggle.active .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      .zh-nav-toggle.active .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }
  `;
  document.head.appendChild(style);

  // 🏗️ 3. 建立並注入全新大圖層導覽列骨架
  const navElement = document.createElement('nav');
  navElement.className = 'zh-nav-bar';
  navElement.innerHTML = `
    <div class="zh-nav-container">
      <a href="index.html" class="zh-nav-logo">正禾資訊<span>.</span></a>
      
      <button class="zh-nav-toggle" id="zhNavToggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <ul class="zh-nav-links" id="zhNavLinks">
        <li><a href="index.html">首頁</a></li>
        
        <li class="zh-dropdown">
          <a href="#" class="zh-dropdown-toggle">線上估價</a>
          <ul class="zh-dropdown-menu">
            <li><a href="calc-cctv.html">攝影機系統_線上估價</a></li>
            <li><a href="network.html">網路佈線_線上估價</a></li>
          </ul>
        </li>
        
        <li class="zh-dropdown">
          <a href="#" class="zh-dropdown-toggle">施工實績</a>
          <ul class="zh-dropdown-menu">
            <li><a href="cases-ncc.html">NCC 電信送審</a></li>
            <li><a href="cases-fiber.html">光纖熔接</a></li>
            <li><a href="cases-cctv.html">監控安裝實例</a></li>
            <li><a href="cases-phone.html">電話總機</a></li>
            <li><a href="cases-broadcast.html">廣播系統</a></li>
            <li><a href="cases-access.html">門禁捲門控制</a></li>
            <li><a href="cases-office.html">辦公室設備</a></li>
          </ul>
        </li>
        
        <li class="zh-dropdown">
          <a href="#" class="zh-dropdown-toggle">標準工序流程</a>
          <ul class="zh-dropdown-menu">
            <li><a href="process-cctv.html">監控系統工序</a></li>
            <li><a href="process-ncc.html">NCC電信審驗流程工序</a></li>
          </ul>
        </li>
        
        <li><a href="faq.html">常見問題</a></li>
        <li><a href="tutorials.html">使用教學</a></li>
        <li><a href="about.html">關於我們</a></li>
        <li><a href="https://line.me/ti/p/~gooa168" target="_blank" class="zh-nav-btn">聯絡我們</a></li>
      </ul>
    </div>
  `;
  
  document.body.insertBefore(navElement, document.body.firstChild);

  // 🔄 4. 手機版選單聯動點擊展開控制 JS 邏輯
  const toggleBtn = document.getElementById('zhNavToggle');
  const navLinks = document.getElementById('zhNavLinks');
  
  // 總選單開關
  toggleBtn.addEventListener('click', function() {
    toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // 手機版子選單點擊加號展開
  const dropdowns = document.querySelectorAll('.zh-dropdown');
  dropdowns.forEach(function(dropdown) {
    const toggleLink = dropdown.querySelector('.zh-dropdown-toggle');
    toggleLink.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // 阻止手機版點擊 # 亂跳
        dropdown.classList.toggle('active');
      }
    });
  });
});
