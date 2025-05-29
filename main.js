// 重み付き配列：ニッポンの出現確率を高く（3倍）
const weightedCountries = [
    'ニッポン',
    'チュウゴク',
    'カナダ',
    'オーストラリア',
    'インドネシア', 'インドネシア', 'インドネシア', 'インドネシア', 'インドネシア', // 重み5
    'アルゼンチン', 'アルゼンチン', 'アルゼンチン', 'アルゼンチン', 'アルゼンチン', // 重み5
];

let currentCountry = '';
let firstPart = '';
let secondPart = '';

function newQuiz() {
    // 重み付き配列からランダムに国名を選ぶ
    currentCountry = weightedCountries[Math.floor(Math.random() * weightedCountries.length)];

    // 分割位置を決める（1〜長さ-1の範囲）
    const splitPos = Math.floor(Math.random() * (currentCountry.length - 1)) + 1;

    firstPart = currentCountry.slice(0, splitPos);
    secondPart = currentCountry.slice(splitPos);

    // 表示更新
    document.getElementById('firstPart').textContent = '前半部分: ' + firstPart;
    document.getElementById('userInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('countryImage').style.display = 'none';
}

function checkAnswer() {
    const userInput = document.getElementById('userInput').value.trim();
    const result = firstPart + userInput;

    if (result === currentCountry) {
        document.getElementById('result').textContent = `OK！元の国名は：${currentCountry}`;

        // 画像を表示（例: ニッポン.png）
        const img = document.getElementById('countryImage');
        img.src = `${currentCountry}.png`;
        img.alt = currentCountry;
        img.style.display = 'block';
    } else {
        document.getElementById('result').textContent = `アウト！正解は：${currentCountry}`;
        document.getElementById('countryImage').style.display = 'none';
    }
}

// 初回表示
window.onload = newQuiz;
