
// ---------------------------------------------
// データをローカルストレージに保管
// まず読み込んだら前回保存したデータを読み込んで欲しいからこの部分をいちばん上に持っていく
// // 16.配列をつくる
let data = ["食う","寝る","遊ぶ"]
// // 17.コンソールに配列の中身を出す
// for (const d of data) {
    console.log(data);
// }
// ----------------------------------------------


//メモの選択ボタン
// htmlボタン--------------------------------------------
// 1　ボタン要素を取得
let memoBtn = document.querySelectorAll("#memoBtn");
// console.log(memoBtn);
// console.log(memoBtn[0].value);///////////
// // 2 ボタンにクリックイベントを追加
memoBtn[0].addEventListener("click", function () {
    // input要素を作成 
    let memoInputTitle = document.createElement("input");
    let memoInputContent = document.createElement("textarea");
    let memoInputLink = document.createElement("input");
    let memoInputBtn = document.createElement("input");
    // console.log(memoInputLink);

    // タグ名を入力
    memoInputTitle.setAttribute("type", "text");
    memoInputTitle.setAttribute("id", "title");
    memoInputTitle.setAttribute("class", "input");
    memoInputTitle.setAttribute("placeholder", "タグ名を入力");

    // 詳細を入力
    memoInputContent.setAttribute("name", "content");
    memoInputContent.setAttribute("id", "Content");
    memoInputContent.setAttribute("class", "input");
    memoInputContent.setAttribute("placeholder", "詳細を入力");
    memoInputContent.setAttribute("cols", "30");
    memoInputContent.setAttribute("rows", "10");

    // リンクを入力
    memoInputLink.setAttribute("type", "text");
    memoInputLink.setAttribute("id", "Link");
    memoInputLink.setAttribute("class", "input");
    memoInputLink.setAttribute("placeholder", "参考ページのリンク");

    // 記憶より記憶ボタン
    memoInputBtn.setAttribute("type", "button");
    memoInputBtn.setAttribute("id", "kiroku");
    memoInputBtn.setAttribute("value", "記憶より記録");

    // input要素を親にあわす
    let memoInputP = document.querySelector(".memo-Input")
    // console.log(memoInputP);
    memoInputP.appendChild(memoInputTitle);
    memoInputP.appendChild(memoInputContent);
    memoInputP.appendChild(memoInputLink);
    memoInputP.appendChild(memoInputBtn);

    // 記憶より記録
    let kirokuBtn = document.querySelector("#kiroku");
    // console.log(kirokuBtn);
    // 記憶より記録ボタンにイベントを追加
    kirokuBtn.addEventListener("click", function () {
        // ユーザーが入力した内容を取得
        let input = document.querySelectorAll(".input");
        // console.log(input);
        // 上で取得した要素の入力された内容を取得し,変数に代入yeah!
        // タイトル
        let title = input[0].value;
        console.log(title);
        // // 内容
        let content = input[1].value;
        console.log(content);
        // // リンク
        let link = input[2].value;
        console.log(link);
       

        // li要素を作成
        let list_title = document.createElement("dt");
        let list_content = document.createElement("dd");
        let list_link = document.createElement("dd");
        // console.log(list);
        // liにクラス名を追加
        // list_title.classList.add("list-title");
        // list_content.classList.add("list-title");
        list_link.classList.add("list-title");
        // liにユーザーが入力した内容を入れる
        list_title.textContent = title;
        list_content.textContent = content;
        list_link.textContent = link;

        // ulの要素を取得
        let list_wrap = document.querySelector(".memo-list-html");
        // console.log(list_wrap);
        // ul(親)にli(子)を会わせてあげる
        list_wrap.appendChild(list_title);
        list_wrap.appendChild(list_content);
        list_wrap.appendChild(list_link);

         // inputの中に入力された文字を削除する
         for (let i = 0; i <= 2; i++) {
            // console.log(i);
            input[i].value = ""
         }
        // //  deleteボタンを作成 保留中
        //  let deleteBtn = document.createElement("div");
        //  console.log(deleteBtn);
        // deleteBtn.textContent = "delete";
        // deleteBtn.classList.add("delete");
        // list_title.appendChild(deleteBtn);
        // // deleteBtnにクリックイベントを追加
        // deleteBtn.addEventListener("click",function () {
        //     deleteBtn.parentElement.remove()
        // })

    })
    
    
})

// htmlボタン終了----------------------------------


// cssボタン--------------------------------------------
// 1　ボタン要素を取得
// let memoBtn = document.querySelectorAll("#memoBtn");
// console.log(memoBtn);
// console.log(memoBtn[0].value);///////////
// // 2 ボタンにクリックイベントを追加
memoBtn[1].addEventListener("click", function () {
    // input要素を作成 
    let memoInputTitle = document.createElement("input");
    let memoInputContent = document.createElement("textarea");
    let memoInputLink = document.createElement("input");
    let memoInputBtn = document.createElement("input");
    let momeInputSelect = document.createElement("select")
    let momeInputOption1 = document.createElement("option")
    let momeInputOption2 = document.createElement("option")
    let momeInputOption3 = document.createElement("option")
    console.log(momeInputOption2);

    // タグ名を入力
    memoInputTitle.setAttribute("type", "text");
    memoInputTitle.setAttribute("id", "title");
    memoInputTitle.setAttribute("class", "input");
    memoInputTitle.setAttribute("placeholder", "プロパティー名を入力");

    // 詳細を入力
    memoInputContent.setAttribute("name", "content");
    memoInputContent.setAttribute("id", "Content");
    memoInputContent.setAttribute("class", "input");
    memoInputContent.setAttribute("placeholder", "詳細を入力");
    memoInputContent.setAttribute("cols", "30");
    memoInputContent.setAttribute("rows", "10");

    // リンクを入力
    memoInputLink.setAttribute("type", "text");
    memoInputLink.setAttribute("id", "Link");
    memoInputLink.setAttribute("class", "input");
    memoInputLink.setAttribute("placeholder", "参考ページのリンク");

    // どんな装飾？一旦保留
    //     momeInputOption1.text = "配置"
    //     momeInputOption2.text = "サイズ"
    //     momeInputOption3.text = "見た目"
    //    console.log(momeInputSelect.appendChild(momeInputOption[i])); momeInputSelect.appendChild(momeInputOption1)
    //     // for (let i = 1; i <= 3; i++) {
    //     //    console.log(momeInputSelect.appendChild(momeInputOption[i]));  
    //     // }


    // 記憶より記憶ボタン
    memoInputBtn.setAttribute("type", "button");
    memoInputBtn.setAttribute("id", "kiroku");
    memoInputBtn.setAttribute("value", "記憶より記録");

    // input要素を親にあわす
    let memoInputP = document.querySelector(".memo-Input")
    // console.log(memoInputP);
    memoInputP.appendChild(memoInputTitle);
    memoInputP.appendChild(memoInputContent);
    memoInputP.appendChild(memoInputLink);
    memoInputP.appendChild(memoInputBtn);
    // memoInputP.appendChild(momeInputSelect);

    // 記憶より記録
    let kirokuBtn = document.querySelector("#kiroku");
    // console.log(kirokuBtn);
    // 記憶より記録ボタンにイベントを追加
    kirokuBtn.addEventListener("click", function () {
        // ユーザーが入力した内容を取得
        let input = document.querySelectorAll(".input");
        // console.log(input);
        // 上で取得した要素の入力された内容を取得し,変数に代入yeah!
        // タイトル
        let title = input[0].value;
        console.log(title);
        // // 内容
        let content = input[1].value;
        console.log(content);
        // // リンク
        let link = input[2].value;
        console.log(link);

        // li要素を作成
        let list_title = document.createElement("dt");
        let list_content = document.createElement("dd");
        let list_link = document.createElement("dd");
        // console.log(list);
        // liにクラス名を追加
        list_title.classList.add("list-title")
        // liにユーザーが入力した内容を入れる
        list_title.textContent = title;
        list_content.textContent = content;
        list_link.textContent = link;

        // ulの要素を取得
        let list_wrap = document.querySelector(".memo-list-css");
        // console.log(list_wrap);
        // ul(親)にli(子)を会わせてあげる
        list_wrap.appendChild(list_title);
        list_wrap.appendChild(list_content);
        list_wrap.appendChild(list_link);
    })
})
// cssボタン終了---------------------------------------------


// JSボタン--------------------------------------------
// 1　ボタン要素を取得
// let memoBtn = document.querySelectorAll("#memoBtn");
// console.log(memoBtn);
// console.log(memoBtn[0].value);///////////
// // 2 ボタンにクリックイベントを追加
memoBtn[2].addEventListener("click", function () {
    // input要素を作成 
    let memoInputTitle = document.createElement("input");
    let memoInputContent = document.createElement("textarea");
    let memoInputLink = document.createElement("input");
    let memoInputBtn = document.createElement("input");
    // console.log(memoInputLink);

    // タグ名を入力
    memoInputTitle.setAttribute("type", "text");
    memoInputTitle.setAttribute("id", "title");
    memoInputTitle.setAttribute("class", "input");
    memoInputTitle.setAttribute("placeholder", "何ができる？？");

    // 詳細を入力
    memoInputContent.setAttribute("name", "content");
    memoInputContent.setAttribute("id", "Content");
    memoInputContent.setAttribute("class", "input");
    memoInputContent.setAttribute("placeholder", "詳細を入力");
    memoInputContent.setAttribute("cols", "30");
    memoInputContent.setAttribute("rows", "10");

    // リンクを入力
    memoInputLink.setAttribute("type", "text");
    memoInputLink.setAttribute("id", "Link");
    memoInputLink.setAttribute("class", "input");
    memoInputLink.setAttribute("placeholder", "参考ページのリンク");

    // 記憶より記憶ボタン
    memoInputBtn.setAttribute("type", "button");
    memoInputBtn.setAttribute("id", "kiroku");
    memoInputBtn.setAttribute("value", "記憶より記録");

    // input要素を親にあわす
    let memoInputP = document.querySelector(".memo-Input")
    // console.log(memoInputP);
    memoInputP.appendChild(memoInputTitle);
    memoInputP.appendChild(memoInputContent);
    memoInputP.appendChild(memoInputLink);
    memoInputP.appendChild(memoInputBtn);

    // 記憶より記録
    let kirokuBtn = document.querySelector("#kiroku");
    // console.log(kirokuBtn);
    // 記憶より記録ボタンにイベントを追加
    kirokuBtn.addEventListener("click", function () {
        // ユーザーが入力した内容を取得
        let input = document.querySelectorAll(".input");
        // console.log(input);
        // 上で取得した要素の入力された内容を取得し,変数に代入yeah!
        // タイトル
        let title = input[0].value;
        console.log(title);
        // // 内容
        let content = input[1].value;
        console.log(content);
        // // リンク
        let link = input[2].value;
        console.log(link);

        // li要素を作成
        let list_title = document.createElement("dt");
        let list_content = document.createElement("dd");
        let list_link = document.createElement("dd");
        // console.log(list);
        // liにクラス名を追加
        list_title.classList.add("list-title")
        // liにユーザーが入力した内容を入れる
        list_title.textContent = title;
        list_content.textContent = content;
        list_link.textContent = link;

        // ulの要素を取得
        let list_wrap = document.querySelector(".memo-list-js");
        // console.log(list_wrap);
        // ul(親)にli(子)を会わせてあげる
        list_wrap.appendChild(list_title);
        list_wrap.appendChild(list_content);
        list_wrap.appendChild(list_link);
    }


    )
})

// JSボタン終了--------------------------------------------


// Jｑボタン-----------------------------------------------
// 1　ボタン要素を取得
// let memoBtn = document.querySelectorAll("#memoBtn");
// console.log(memoBtn);
// console.log(memoBtn[0].value);///////////
// // 2 ボタンにクリックイベントを追加
memoBtn[3].addEventListener("click", function () {
    // input要素を作成 
    let memoInputTitle = document.createElement("input");
    let memoInputContent = document.createElement("textarea");
    let memoInputLink = document.createElement("input");
    let memoInputBtn = document.createElement("input");
    // console.log(memoInputLink);

    // タグ名を入力
    memoInputTitle.setAttribute("type", "text");
    memoInputTitle.setAttribute("id", "title");
    memoInputTitle.setAttribute("class", "input");
    memoInputTitle.setAttribute("placeholder", "JSでいうところの？？");

    // 詳細を入力
    memoInputContent.setAttribute("name", "content");
    memoInputContent.setAttribute("id", "Content");
    memoInputContent.setAttribute("class", "input");
    memoInputContent.setAttribute("placeholder", "詳細を入力");
    memoInputContent.setAttribute("cols", "30");
    memoInputContent.setAttribute("rows", "10");

    // リンクを入力
    memoInputLink.setAttribute("type", "text");
    memoInputLink.setAttribute("id", "Link");
    memoInputLink.setAttribute("class", "input");
    memoInputLink.setAttribute("placeholder", "参考ページのリンク");

    // 記憶より記憶ボタン
    memoInputBtn.setAttribute("type", "button");
    memoInputBtn.setAttribute("id", "kiroku");
    memoInputBtn.setAttribute("value", "記憶より記録");

    // input要素を親にあわす
    let memoInputP = document.querySelector(".memo-Input")
    // console.log(memoInputP);
    memoInputP.appendChild(memoInputTitle);
    memoInputP.appendChild(memoInputContent);
    memoInputP.appendChild(memoInputLink);
    memoInputP.appendChild(memoInputBtn);

    // 記憶より記録
    let kirokuBtn = document.querySelector("#kiroku");
    // console.log(kirokuBtn);
    // 記憶より記録ボタンにイベントを追加
    kirokuBtn.addEventListener("click", function () {
        // ユーザーが入力した内容を取得
        let input = document.querySelectorAll(".input");
        // console.log(input);
        // 上で取得した要素の入力された内容を取得し,変数に代入yeah!
        // タイトル
        let title = input[0].value;
        console.log(title);
        // // 内容
        let content = input[1].value;
        console.log(content);
        // // リンク
        let link = input[2].value;
        console.log(link);

        // li要素を作成
        let list_title = document.createElement("dt");
        let list_content = document.createElement("dd");
        let list_link = document.createElement("dd");
        // console.log(list);
        // liにクラス名を追加
        list_title.classList.add("list-title")
        // liにユーザーが入力した内容を入れる
        list_title.textContent = title;
        list_content.textContent = content;
        list_link.textContent = link;

        // ulの要素を取得
        let list_wrap = document.querySelector(".memo-list-jq");
        // console.log(list_wrap);
        // ul(親)にli(子)を会わせてあげる
        list_wrap.appendChild(list_title);
        list_wrap.appendChild(list_content);
        list_wrap.appendChild(list_link);
    }


    )
})
// jqボタン終了------------------------------------------------

// function kiroku() {// 記憶より記録ボタン押したら下に出力してくれる内容の
//     let input = document.querySelectorAll(".input");
//     // console.log(input);
//     // 上で取得した要素の入力された内容を取得し,変数に代入yeah!
//     // タイトル
//     let title = input[0].value;
//     console.log(title);
//     // // 内容
//     let content = input[1].value;
//     console.log(content);
//     // // リンク
//     let link = input[2].value;
//     console.log(link);

//     // li要素を作成
//     let list_title = document.createElement("dt");
//     let list_content = document.createElement("dd");
//     let list_link = document.createElement("dd");
//     // console.log(list);
//     // liにクラス名を追加
//     list_title.classList.add("list-title")
//     // liにユーザーが入力した内容を入れる
//     list_title.textContent = title;
//     list_content.textContent = content;
//     list_link.textContent = link;

//     // ulの要素を取得
//     let list_wrap = document.querySelector(".memo-list-html");
//     // console.log(list_wrap);
//     // ul(親)にli(子)を会わせてあげる
//     list_wrap.appendChild(list_title);
//     list_wrap.appendChild(list_content);
//     list_wrap.appendChild(list_link);
// }