
// 新しい知識メモメモ
// ボタンのどむ入力
let memoBtn = document.querySelectorAll("#memoBtn");
// console.log(memoBtn);
// クリックイベント開催
for (let i = 0; i < memoBtn.length; i++) {
    memoBtn[i].addEventListener("click", function () {

        // 押したらタイトル変更
        // どむ取得
        let btnTitle = document.querySelector(".js-title");
        let btnContent = document.querySelector(".js-content");
        console.log(btnTitle.textContent);


        switch (memoBtn[i].value) {
            case "HTML":
                // 変更したいところのテキストを取得する =  テキストを変更
                btnTitle.textContent = "タグ名を入力する"
                btnContent.textContent = "使い方の説明を入力"
                break;
            case "CSS":
                // 変更したいところのテキストを取得する =  テキストを変更
                btnTitle.textContent = "プロパティー名を入力する"
                btnContent.textContent = "使い方の説明を入力"
                break;
            case "JS":
                // 変更したいところのテキストを取得する =  テキストを変更
                btnTitle.textContent = "何ができるか入力する"
                btnContent.textContent = "詳細を入力"
                break;
            case "Jquery":
                // 変更したいところのテキストを取得する =  テキストを変更
                // html
                btnTitle.textContent = "関数名を入力する"
                btnContent.textContent = "JSでいうところのなに？"
                break;

            default:
                break;
        }


    })
}
// 記憶より記録ボタン
// ボタンのどむ取得
let kirokuBtn = document.querySelector("#kiroku");
// console.log(kirokuBtn);
// ボタンにイベント追


    kirokuBtn.addEventListener("click", function () {
        // ユーザーが入力した内容を取得し、変数に代入
        let input = document.querySelectorAll(".input");
        // console.log(input);

        //　タイトル、詳細、リンク
        let title = input[0].value
        let content = input[1].value
        let link = input[2].value


        // 要素の作成　ｄｔ、ｄｄ、div
        let list_wrap = document.createElement("div");
        let list_title = document.createElement("dt");
        let list_content = document.createElement("dd");
        let list_link = document.createElement("a");
        // ｄｔ、ｄｄ、aにユーザーが入力した内容を入れる
        list_title.textContent = title;
        list_content.textContent = content;
        list_link.textContent = link
        console.log(list_title, list_content, list_link);
        // divの中に↑を入れる
        list_wrap.appendChild(list_title);
        list_wrap.appendChild(list_content);
        list_wrap.appendChild(list_link);
        console.log(list_wrap);

        // 親要素を取得
        let listP = document.querySelector(".memo-list-HTML");
        // 親にあわせる
        listP.appendChild(list_wrap)

        // インプットの中に入力された文字を削除する
        for (let i = 0; i <= 2; i++) {
            // console.log(i);
            input[i].value = ""
        }
        // deleteボタン作成
        // divつくル
        let deleteBtn = document.createElement("div");
        deleteBtn.textContent = "delete"
        // console.log(deleteBtn,deleteIcon);

        // deleteボタンにクラスを追加する
        deleteBtn.classList.add("delete");
        // 作成したボタンをdivタグの子要素に入れる
        list_wrap.appendChild(deleteBtn)

        // クリックイベント開催
        deleteBtn.addEventListener("click", function () {
            deleteBtn.parentElement.remove()
        })


    })

