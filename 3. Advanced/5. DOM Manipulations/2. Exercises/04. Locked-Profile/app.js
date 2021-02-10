function lockedProfile() {
    
    document.querySelector('main').addEventListener('click', onClick);
    
    function onClick(e){
        
        if (e.target.nodeName === 'BUTTON') {
            const btn = e.target;
            const parent = e.target.parentNode;
            
            const lock = parent.querySelector('input[type="radio"][value="lock"]');
            if (lock.checked) {  return;  }

            const hiddenFields = [...parent.querySelectorAll('div')]
            .filter(div => div.id.includes('HiddenFields'))[0];
            
            
            if (hiddenFields.style.display !== 'block') {
                hiddenFields.style.display = 'block';
                btn.textContent = 'Hide it';
                
            } else {
                hiddenFields.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}