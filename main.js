{
    var remove = document.getElementById('remove');
    var save = document.getElementById('save');
    var textarea_1 = document.getElementById('text');
    if (textarea_1 === null || !('value' in textarea_1)) {
        throw new Error();
    }
    window.addEventListener('load', function () {
        var value = localStorage.getItem('value');
        textarea_1.value = value;
    });
    save === null || save === void 0 ? void 0 : save.addEventListener('click', function () {
        var text;
        text = textarea_1.value;
        localStorage.setItem('value', text);
        console.log(localStorage);
    });
    remove === null || remove === void 0 ? void 0 : remove.addEventListener('click', function () {
        // if(textarea && 'value' in textarea)
        textarea_1.value = '';
        localStorage.clear();
    });
}
