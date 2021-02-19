function encodeAndDecodeMessages() {

    const encodedMsg = [];
    const [encodeTA, decodeTA] = document.querySelectorAll('textarea');
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    encodeBtn.addEventListener('click', encodeMsg);
    decodeBtn.addEventListener('click', decodeMsg);
    
    function encodeMsg(e){
        const input = encodeTA.value;
        encodeTA.value = '';

        [...input].map(letter => letter.charCodeAt(0) + 1).forEach(letter => encodedMsg.push(letter));

        decodeTA.value = encodedMsg.map(letter => String.fromCharCode(letter)).join('');
    }

    function decodeMsg(e){
        decodeTA.value = encodedMsg.map(letter => String.fromCharCode(letter - 1)).join('');
    }
}