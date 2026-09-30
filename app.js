const button=document.querySelector('#menu'),nav=document.querySelector('#nav');button.onclick=()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',open)};
