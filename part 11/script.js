(function() {
    const inner = document.querySelector('#carousel .carousel-inner');
    const slides = inner.querySelectorAll('img');
    let idx = 0, total = slides.length;
    const update = () => {
      const w = slides[0].clientWidth;
      inner.style.transform = `translateX(-${idx * w}px)`;
    };
    document.getElementById('prev').onclick = () => { idx = idx>0? idx-1: total-1; update(); };
    document.getElementById('next').onclick = () => { idx = idx<total-1? idx+1: 0; update(); };
    window.addEventListener('resize', update);

    // Auto-slide every 5s
    setInterval(() => { idx = (idx<total-1)? idx+1: 0; update(); }, 5000);
  })();