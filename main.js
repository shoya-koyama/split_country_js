const countries = ['ニッポン', 'チュウゴク', 'オーストラリア', 'インドネシア', 'アルゼンチン'];

let currentCountry = '';
let firstPart = '';
let secondPart = '';

function newQuiz() {
    // 国名をランダムに選ぶ
    // ここでは例として5つの国名を使用していますが、必要に応じて追加してください
    currentCountry = countries[Math.floor(Math.random() * countries.length)];

    // 分割位置を決める（1〜長さ-1の範囲）
    const splitPos = Math.floor(Math.random() * (currentCountry.length - 1)) + 1;

    firstPart = currentCountry.slice(0, splitPos);
    secondPart = currentCountry.slice(splitPos);

    // 表示更新
    document.getElementById('firstPart').textContent = '前半部分: ' + firstPart;
    document.getElementById('userInput').value = '';
    document.getElementById('result').textContent = '';
    }

    function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim();
    const result = firstPart + userInput;

    if (result === currentCountry) {
        document.getElementById('result').textContent = `OK！元の国名は：${currentCountry}`;
    } else {
        document.getElementById('result').textContent = `アウト！正解は：${currentCountry}`;
    }
}

// 初回表示
window.onload = newQuiz;
