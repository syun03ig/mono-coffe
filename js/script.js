window.addEventListener('DOMContentLoaded', () => {
  // --- 1. ハンバーガーメニュー ---
  const menuIcon = document.querySelector('.menu-icon');
  const navUl = document.querySelector('nav ul');
  const icon = menuIcon.querySelector('i');

  const toggleMenu = () => {
    const isActive = navUl.classList.toggle('active');
    if (isActive) {
      icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
      icon.classList.replace('fa-xmark', 'fa-bars');
    }
  };

  menuIcon.addEventListener('click', toggleMenu);

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navUl.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // --- 2. スライドショー (ここを追加！) ---
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentIndex = 0;

  // ボタン（nextBtn）が存在するときだけ動かす（エラー防止）
  if (slides.length > 0 && nextBtn && prevBtn) {
    const updateSlides = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides(currentIndex);
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides(currentIndex);
    };

    // 5秒ごとに自動再生
    let timer = setInterval(showNext, 5000);

    // 矢印クリックで操作
    nextBtn.addEventListener('click', () => {
      clearInterval(timer);
      showNext();
      timer = setInterval(showNext, 5000);
    });

    prevBtn.addEventListener('click', () => {
      clearInterval(timer);
      showPrev();
      timer = setInterval(showNext, 5000);
    });
  }
});

// --- 3. 写真拡大機能 (そのまま残す) ---
const modal = document.getElementById('modalOverlay');
const modalImg = document.getElementById('modalImg');
const thumbs = document.querySelectorAll('.menu-thumb');

if (modal && thumbs.length > 0) {
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = thumb.src;
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}