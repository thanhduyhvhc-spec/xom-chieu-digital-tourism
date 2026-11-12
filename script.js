const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu');menuToggle.textContent=open?'×':'☰';});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');if(menuToggle){menuToggle.textContent='☰';menuToggle.setAttribute('aria-label','Mở menu');}}));
document.getElementById('year').textContent=new Date().getFullYear();
