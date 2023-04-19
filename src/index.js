import "./styles.css";

// ①開発でわかりやすいようにアラートを設定しておく
// const onClickAdd = () => {
//   alert();
// };

// ④アラートで挙動を確認したので、実際のコードを書いていく
// テキストボックスの値を取得して、初期化するコード
// add-textが持っているvalue(値)をinputTextに格納している。
// その後、””にすることで入力フォームを空にしている。
// alert(inputText);で挙動を確認している。
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // ⑤DOMを作るコードを作っていく。createによってDOMを作っていく。(Js上でhtml分を作成していく。)
  // div.classNameによって、html上と同じクラスを付与している。
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);で都度確認するとよい。

  // liタグの生成。html上ではliタグの中に入力した値が入るので、jsでも同じように表現する。
  const li = document.createElement("li");
  li.innerText = inputText;
  // ここまでかけると、console.log(li);によって、<li>入力された値</li>がログに出てくる。

  // button（完了）の生成
  // １つずつidを振るわけではないので、生成する時点でイベントを追加する。
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("完了");
    // ますは、削除ボタンと同じ挙動なのでコピペする(ボタン名だけ変更する)
    //   const deleteTarget = completeButton.parentNode;
    //   // console.log(deleteTarget);
    //   // removeChildで小要素から削除する
    //   document.getElementById("imcomplete-list").removeChild(deleteTarget);
    // 上で書いたコードを⭐︎で関数かしたものを使用。
    deletefromIncompletelist(completeButton.parentNode);

    // 完了したリストを下のオレンジ部分に追加する
    const addTarget = completeButton.parentNode;
    //completeButton.parentNodeつまりdivタグの最初の小要素はli。つましliの中の文字列をtextとして定義している。
    const text = addTarget.firstElementChild.innerText;
    // console.log(text);

    // div以下を初期化する。
    addTarget.textContent = null;
    // console.log(addTarget);

    // liタグを生成する
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定。
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    // 完了リスト（オレンジ）に上記の要素を追加する。これが実行できないで終わった。
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //   // alert("削除");
    //   // 押された削除ボタンの親タグ（div)を未完了リストから削除したい
    //   // parentNode関数で親要素を取得できる
    //   const deleteTarget = deleteButton.parentNode;
    //   // console.log(deleteTarget);
    //   // removeChildで小要素から削除する
    //   document.getElementById("imcomplete-list").removeChild(deleteTarget);
    // 上で書いたコードを⭐︎で関数かしたのでそれを残す。（読みにくくないか）
    deletefromIncompletelist(deleteButton.parentNode);
  });

  // htmlと同じようにdivタグの下に小要素を設定する。appendChildで小要素として設定。
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // console.log(div);

  // 完了のリスト（ul)の配下に設定していく。
  document.getElementById("imcomplete-list").appendChild(div);
};

// ⭐︎完了ボタンと削除ボタンで重複する関数を別で定義してコードを綺麗にする。（つまり、後で書いて部分）
// 未完了リストから指定の要素を削除する関数を定義。
const deletefromIncompletelist = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

// ②htmlからadd-bottonを取り入れて、クリックイベントを付与。実行されるのは上で定義したアラートをならす関数。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
// ③追加を押すとアラートがなるのが確認できたので、そこから開発を開始する。
