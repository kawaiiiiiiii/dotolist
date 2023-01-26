// Localstorageの活用を含めたコード設計説明
// 16.配列をつくる
// let data = ["食う", "寝る", "遊ぶ"]
//            ↓この配列がJそんに
// 22.保存されたものをリロードじ取り出し、④を行う
let data = JSON.parse(localStorage.getItem("key"));;
// 17.コンソールに配列の中身を出す
if (data) { // 23.配列の中身が空だった時の条件を付け加える
    for (const d of data) {
        console.log(d);
        // 19.関数使ってリロード時に配列の中身を出すようにする。
        taskList(d)
    }
} else {
    data = [];
}


// 1 ボタン要素を取得(変数名btn)
let btn = document.querySelector("#btn")
// console.log(btn);

// 2 ボタンにクリックイベントを追加する (3-16は全てこのイベント内)
btn.addEventListener("click", function () {
    // 3 ユーザーが入力した要素を取得 (変数名input)
    let input = document.querySelector("#input");
    // console.log(input);
    // 4 上で取得した要素の入力された内容を取得し、変数(task)に代入
    let task = input.value;
    // console.log(task);
    // やることがインプットされた時のみ以下処理がされるぅ
    if (task !== "") {
        taskList(task);
        // 20.その後追加されたタスクを配列にPUSHする
        data.push(task)
        // 21.配列をローカルストレージに保存する
        let dataText = JSON.stringify(data);
        // 21.5 保存するにはJSON化で文字列に！
        localStorage.setItem("key", dataText);
    }
})

// // Localstorageの活用を含めたコード設計説明

// ---------------------------------------------
// まず読み込んだら前回保存したデータを読み込んで欲しいからこの部分をいちばん上に持っていく
// // 16.配列をつくる
// let data = ["食う","寝る","遊ぶ"]
// // 17.コンソールに配列の中身を出す
// for (const d of data) {
//     console.log(d);
// }
// ----------------------------------------------

// 18.関数を作る（関数にしただけで問題なく動くか確認）
// ↑どの番号からどの番号までが同じ処理になるの？4番から15番まで
// 18.5 引数無しの関数を一回実施、その後引数あり関数に変更
function taskList(task) {
    // 5 <li>要素を作成 (変数名list)
    let list = document.createElement("li");
    // console.log(list);
    // 6 <li>にクラス（list）を追加
    list.classList.add("list")
    // 7 <li>にユーザーが入力した内容を入れる
    list.textContent = task
    // 8 <ul>要素を取得(変数名list_wrap)
    let list_wrap = document.querySelector(".todo-list");
    // console.log(list_wrap);
    // 9 4-6で作成した<li>(list)を、8で取得した<ul>(listWrap)の子要素に入れる
    list_wrap.appendChild(list);
    // 10 inputの中に入力された文字を消去する
    input.value = ""
    // 11 Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）(変数名deleteBtn)
    let deleteBtn = document.createElement("div");
    // console.log(deleteBtn);
    // 12 Deleteボタンのコンテンツ (文字) を「delete」にする
    deleteBtn.textContent = "delete";
    // 13 Deleteボタンにクラス (delete) を追加する
    deleteBtn.classList.add("delete");
    // 14 11-13で作成したDeleteボタン(deleteBtn)を、5-8で作成した<li>(list)の子要素に入れる
    list.appendChild(deleteBtn);
    // 15 Deleteボタンにクリックイベントを追加 
    deleteBtn.addEventListener("click", function () {
        // 16 クリックした要素 (this) を親ごと削除
        deleteBtn.parentElement.remove()
        // 順番を特定するための関数indexOf();
        let target = data.indexOf(task);
        // 24.削除した時に配列からも削除するようにする
        data.splice(target, 1);
        // 25.削除後の内容をローカルストレージに保存
        let dataText = JSON.stringify(data);
        localStorage.setItem("key", dataText);
    })

}



