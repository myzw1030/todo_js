import "./styles.css";

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    
    createIncompleteList(inputText);
    
}
    // 未完了リストから指定の要素を削除
    const dleteFromIncompleteList = (target) => {
        document.getElementById("imcomplete-list").removeChild(target);
    }
    // 未完了リストに追加する関数
    const createIncompleteList = (text) => {
    // liタグ生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // pタグ生成
    const p = document.createElement("p");
    p.className = "text";
    p.innerText = text;
    
    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの祖先（li）を未完了リストから削除
        dleteFromIncompleteList(completeButton.closest("li"));
        
        // 完了リストに追加する要素
        const addTarget = completeButton.closest("li");
        // TODO内容テキストを取得
        const text = addTarget.querySelectorAll("p")[0].innerText;
        
        // li以下を初期化
        addTarget.textContent = null;
        // div生成
        const div = document.createElement("div");
        div.className = "list-row";
        // pタグ生成
        const p = document.createElement("p");
        p.className = "text";
        p.innerText = text;
        // buttonタグ生成
        const backbutton = document.createElement("button");
        backbutton.innerText = "戻す";
        backbutton.addEventListener("click", () => {
            // 押された戻すボタンの祖先（li）を完了リストから削除
            const deleteTarget = backbutton.closest("li");
            document.getElementById("complete-list").removeChild(deleteTarget);
            
            // テキスト取得
            const text = deleteTarget.querySelectorAll("p")[0].innerText;
            createIncompleteList(text);
        })
        // liタグの子要素に各要素を設定
        addTarget.appendChild(div);
        div.appendChild(p);
        div.appendChild(backbutton);
        
        // 完了リストに追加する要素
        document.getElementById("complete-list").appendChild(addTarget);
    });
    
    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    dleteFromIncompleteList(deleteButton.closest("li"));
    });
    
    // liタグの子要素に各要素を設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    
    // 未完了リストに追加
    document.getElementById("imcomplete-list").appendChild(li);         
}


document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());