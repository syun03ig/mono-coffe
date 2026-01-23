// ページが読み込まれてから実行する設定
window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navUl = document.querySelector('nav ul');
  // アイコン（iタグ）を直接つかんでおく
  const icon = menuIcon.querySelector('i');

  // 三本線をクリックした時の動き
  menuIcon.addEventListener('click', () => {
    if (navUl.classList.contains('active')) {
      // --- メニューを閉じる動き ---
      navUl.classList.remove('active');
      navUl.style.display = 'none';
      // アイコンを三本線に戻す
      icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
      // --- メニューを開く動き ---
      navUl.classList.add('active');
      navUl.style.display = 'flex';
      // アイコンを「×」に変える
      icon.classList.replace('fa-bars', 'fa-xmark');
    }
  });

  // リンクを押したら閉じる（ここでもアイコンを三本線に戻す）
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('active');
      navUl.style.display = 'none';
      // 忘れずにアイコンを三本線に戻す
      icon.classList.replace('fa-xmark', 'fa-bars');
    });
  });
});