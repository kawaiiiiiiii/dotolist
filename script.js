// 16.配列をつくる
let data = ["食う", "寝る", "遊ぶ"]
// 17.コンソールに配列の中身を出す
for (const d of data) {
    console.log(d);
}
// 新しい知識メモメモ
// ボタンのどむ入力
let memoBtn = document.querySelectorAll(".memoBtn");
// console.log(memoBtn);
let judge ="";
// クリックイベント開催
for (let i = 0; i < memoBtn.length; i++) {
    memoBtn[i].addEventListener("click", function () {




        // 押したらタイトル変更
        // どむ取得
        let btnTitle = document.querySelector(".js-title");
        let btnText = document.querySelector("#title")
        let btnContent = document.querySelector(".js-content");
        console.log(btnText.textContent = "< > </>");



        switch (memoBtn[i].textContent) {
            case "HTML":
                // 変更したいところのテキストを取得する =  テキストを変更
                btnTitle.textContent = "タグ名を入力する"
                btnText.placeholder = "< > </>"
                btnContent.textContent = "使い方の説明を入力"
                judge = `memo-list-HTML`
                break;
            case "CSS":
                // 変更したいところのテキストを取得する =  テキストを変更
                btnTitle.textContent = "プロパティー名を入力する"
                btnText.placeholder = "要素 { プロパティー： 値 }"
                btnContent.textContent = "使い方の説明を入力"
                judge = `memo-list-CSS`
                break;
            case "JS":
                // 変更したいところのテキストを取得する =  テキストを変更
                btnTitle.textContent = "何ができるか入力する"
                btnContent.textContent = "詳細を入力"
                judge = `memo-list-JS`
                break;
            case "Jquery":
                // 変更したいところのテキストを取得する =  テキストを変更
                // html
                btnTitle.textContent = "関数名を入力する"
                btnContent.textContent = "JSでいうところのなに？"
                judge = `memo-list-Jquery`
                break;

            default:
                break;
        }



        // }

        // for (let i = 0; i < memoBtn.length; i++) {
        // memoBtn[i].addEventListener("click", function () {
        // 記憶より記録ボタン
        // ボタンのどむ取得
       
    })

    // })
}

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

    if (input[0].value !== "" || input[1].value !== "" || input[2].value !== "") {
        tasklist(judge,input,link,content,title)
        // 要素の作成　ｄｔ、ｄｄ、div
        // let memo_Box = document.createElement("div");
        // let list_wrap = document.createElement("details");
        // let list_title = document.createElement("summary");
        // let list_content = document.createElement("dd");
        // let list_link = document.createElement("a");

        // // divタグにクラス名追加
        // memo_Box.classList.add("memo-box")
        // // console.log(memo_Box);
        // // ｄｔ、ｄｄ、aにユーザーが入力した内容を入れる
        // list_title.textContent = title;
        // list_content.textContent = content;
        // list_link.textContent = link
        // list_link.href = link

        // // console.log(list_title, list_content, list_link);
        // // divの中に↑を入れる
        // list_wrap.appendChild(list_title);
        // list_wrap.appendChild(list_content);
        // list_wrap.appendChild(list_link);
        // // console.log(memo_Box.appendChild(list_wrap));
        // // console.log(memo_Box);
        // // console.log(memoBtn[i].href)
        // // 親要素を取得
        // let listP = document.querySelector(`.${judge}`);
        // // 親にあわせる
        // listP.appendChild(memo_Box);
        // memo_Box.appendChild(list_wrap);
        // listP.insertBefore(memo_Box,listP.firstElementChild)



        // // deleteボタン作成
        // // iつくル
        // let deleteBtn = document.createElement("i");
        // deleteBtn.classList.add("delete");
        // // deleteBtn.textContent = "delete"
        // // console.log(deleteBtn,deleteIcon);

        // // deleteボタンにクラスを追加する
        // deleteBtn.classList.add("fa-regular");
        // deleteBtn.classList.add("fa-trash-can");

        // // 作成したボタンをdivタグの子要素に入れる
        // list_wrap.appendChild(deleteBtn)

        // for (let i = 0; i <= 2; i++) {
        //     // console.log(i);
        //     input[i].value = ""
        // }

        // // クリックイベント開催
        // deleteBtn.addEventListener("click", function () {
        //     //    ポップアップメッセージ
        //     let message = confirm("人は忘れる生き物ですよ。\n消しちゃっていいですか？")
        //     if (message == true) {
        //         memo_Box.remove()
        //     }
        // })
        // // インプットの中に入力された文字を削除する

    }

})

// ローカルストレージ--------------------------------------------
function tasklist(judge,input,link,content,title) {
    let memo_Box = document.createElement("div");
    let list_wrap = document.createElement("details");
    let list_title = document.createElement("summary");
    let list_content = document.createElement("dd");
    let list_link = document.createElement("a");

    // divタグにクラス名追加
    memo_Box.classList.add("memo-box")
    // console.log(memo_Box);
    // ｄｔ、ｄｄ、aにユーザーが入力した内容を入れる
    list_title.textContent = title;
    list_content.textContent = content;
    list_link.textContent = link
    list_link.href = link

    // console.log(list_title, list_content, list_link);
    // divの中に↑を入れる
    list_wrap.appendChild(list_title);
    list_wrap.appendChild(list_content);
    list_wrap.appendChild(list_link);
    // console.log(memo_Box.appendChild(list_wrap));
    // console.log(memo_Box);
    // console.log(memoBtn[i].href)
    // 親要素を取得
    let listP = document.querySelector(`.${judge}`);
    // 親にあわせる
    console.log(listP);
    listP.appendChild(memo_Box);
    memo_Box.appendChild(list_wrap);
    listP.insertBefore(memo_Box,listP.firstElementChild)



    // deleteボタン作成
    // iつくル
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("delete");
    // deleteBtn.textContent = "delete"
    // console.log(deleteBtn,deleteIcon);

    // deleteボタンにクラスを追加する
    deleteBtn.classList.add("fa-regular");
    deleteBtn.classList.add("fa-trash-can");

    // 作成したボタンをdivタグの子要素に入れる
    list_wrap.appendChild(deleteBtn)

    for (let i = 0; i <= 2; i++) {
        // console.log(i);
        input[i].value = ""
    }
    
}
// console.log(tasklist());

// 保留中
// // 3回ちゃれんじ------------------------------------
// let useBtn = document.querySelector(".js-ebi");
// // console.log(useBtn);
// // // ３回チェックボタンおされたら押せるしくみ
// let checkbox = document.querySelectorAll(".js-checkbox");
// // console.log(checkbox);

//     // クリックイベント開催 一旦挫折ちゅう
//     for (let i = 0; i < checkbox.length; i++) {
//             useBtn.addEventListener("change", function () {
//             if (checkbox[i].checked) {
//             useBtn.value = "ナイス！"
//             // let ebi = confirm("人は忘れる生き物ですよ。\n消しちゃっていいですか？") 
//         }
            
        
//     })
// }


// クリックされたら画像とメッセージを表示させたい



