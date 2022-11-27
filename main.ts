

//let stack = [];
let expresion = ''
let mode = 'light';
let hist: string[] = [];
let isShowHistoryLog = true;
let isShowScientific = true;

function printInfoToAlert() {

    alert('Einat Cohen\n1.0.0\n This app calculate numbers, the app have dark and light mode.');

}



}

function showOrHiddeScientific() {
    const scientific = document.getElementById('scientificId');

    if (scientific == null)
        return;

    if (isShowScientific) {
        scientific.style.display = 'none';
        isShowScientific = false;
        return;
    }

    scientific.style.display = 'block';
    isShowScientific = true;
}

function showOrHiddeHis() {
    const hist = document.getElementById('historyId');

    if (hist == null)
        return;

    if (isShowHistoryLog) {
        hist.style.display = 'none';
        isShowHistoryLog = false;
        return;
    }

    hist.style.display = 'block';
    isShowHistoryLog = true;
}

function calculate() {

    try {

        const ans = eval(expresion);
        hist.push(expresion + ' = ' + ans + ' <br/>');
        expresion = ans;

        updateScreen();
        updateHistoryScreen();
    } catch (error) { alert('invatid expression!!') }


}

function updateHistoryScreen() {

    const screen = document.getElementById('history-screen-id');

    if (screen === null) {
        return;
    }
    else {
        screen.innerHTML = hist.join();
    }
}

function minusToExpresion() {

    if (expresion === '' || expresion.length === 0)
        return;

    expresion = expresion.substring(0, expresion.length - 1)
    updateScreen();
}

function appendToExpresion(c) {

    expresion += c;
    updateScreen();
}

function onClear() {

    expresion = '';
    updateScreen();
}

function updateScreen() {
    const screen = document.getElementById('screenId');

    if (screen === null) {
        return;
    }
    else {
        screen.innerHTML = expresion;
    }
}

function chengeColorMode(): void {

    if (mode === 'dark') {

        mode = 'light';
        document.body.classList.remove('dark');
    } else {

        mode = 'dark';
        document.body.classList.add('dark');
    }



    //alert('color mode: ' + mode)
}


