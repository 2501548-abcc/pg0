let budou_kaisuu = 0;
let cherry_kaisuu = 0;
let sou_kaiten = 0;

function countBudou() {
    budou_kaisuu = budou_kaisuu + 1;
    
    let span = document.getElementById("budou_num");
    span.innerHTML = budou_kaisuu;

    // 確率を計算する関数を呼ぶ
    keisan();
}

// チェリーをカウントする関数（ブドウのコピー）
function countCherry() {
    // 回数を1増やす
    cherry_kaisuu = cherry_kaisuu + 1;

    // 画面の数字を変える
    let span = document.getElementById("cherry_num");
    span.innerHTML = cherry_kaisuu;

    // 確率を計算する関数を呼ぶ
    keisan();
}

// 確率を計算する関数
function keisan() {
    // 入力された回転数を取得する
    let input = document.getElementById("sou_kaiten");
    sou_kaiten = Number(input.value);

    // 回転数が0のときは計算しない（エラー防止）
    if (sou_kaiten == 0) {
        return;
    }

    // ブドウの確率計算
    if (budou_kaisuu > 0) {
        let kakuritsu = sou_kaiten / budou_kaisuu;
        // 小数点第1位までにする
        let kaku_str = kakuritsu.toFixed(1);
        document.getElementById("budou_kakuritsu").innerHTML = kaku_str;
    }

    // チェリーの確率計算
    if (cherry_kaisuu > 0) {
        let kakuritsu = sou_kaiten / cherry_kaisuu;
        let kaku_str = kakuritsu.toFixed(1);
        document.getElementById("cherry_kakuritsu").innerHTML = kaku_str;
    }
}

// リセットボタン
function resetData() {
    // アラートを出す
    let check = confirm("本当に消しますか？");
    
    if (check == true) {
        budou_kaisuu = 0;
        cherry_kaisuu = 0;
        
        // 画面を0に戻す
        document.getElementById("budou_num").innerHTML = 0;
        document.getElementById("cherry_num").innerHTML = 0;
        document.getElementById("budou_kakuritsu").innerHTML = "0.0";
        document.getElementById("cherry_kakuritsu").innerHTML = "0.0";
        document.getElementById("sou_kaiten").value = 0;
    }
}