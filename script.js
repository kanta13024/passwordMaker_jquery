function makePassword(){
    resetResult()
    checkedStrength(passwordNumber);
    wordcounter(passwordNumber);
    quantity();
    // quantityメソッドで決めたtimesぶん繰り返し
    for (let index = 0; index < times; index++) {
        Make(passwordNumber,passwordFilter(passwordContent));
    }
}

// パスワードの文字数(初期値)
let passwordNumber = 20;
// パスワードに使う文字(初期値)
let passwordContent = "";



// フォーム：文字  パスワードに使う文字のフィルター
// 文字のラジオボックスを取得
let kind = $("*[name=kind]");
function passwordFilter(content){
    if(kind[0].checked){
        // 英文字（大文字）
        content += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(kind[1].checked){
        // 英文字（小文字）
        content += 'abcdefghijklmnopqrstuvwxyz'
    }
    if(kind[2].checked){
        // 数字
        content += '0123456789';
    }
    if(kind[3].checked){
        // 記号
        content += '!$%&¥+:*/<>}{';

    }
    // ■似通った英数字にチェックを入れたら、パスワードが変わります。
    if(condition[0].checked){
        console.log('チェック入りました！' + content)
        content = content.replace(/1/, '').replace(/I/,'').replace(/i/,'').replace(/0/,'').replace(/O/,'').replace(/o/,'');
        console.log(content);
    }
    // resemblesWord(content);
    console.log('今回のパスワードの種類です：' + content);
    return content;
}

// パスワードの作成、パスワードを追加ファンクション
function Make(passwordNumber,passwordContent){
    var cl = passwordContent.length;
    var passWord = '';
    let beforeNumber = '';
    for(var j=0; j<passwordNumber; j++){
        let afterNumber = Math.floor(Math.random()*cl)
        
        // 文字数８以上なら同じ数字が並んだらもう一回やり直し
        if( passwordNumber < 9 && condition[1].checked ){
           while( beforeNumber == afterNumber){
            afterNumber = Math.floor(Math.random()*cl);
            console.log('パスワード変更');
        }
        }

        passWord += passwordContent[afterNumber];
        console.log('出力する数字' + afterNumber);

        beforeNumber = afterNumber;
        console.log('前の数字' + beforeNumber);

        }
    console.log('Makeメソッドによるパスワード：' + passWord);

    // ul要素にli要素を追加、パスワードを追加！
    const passwordLists = $('#password-lists').get(0);
    
    // let li = $('<li>');
    // li.text(passWord);
    // passwordLists.append(li);
    var li = document.createElement('li');
    li.textContent = passWord;
    passwordLists.append(li);
}


// フォーム：強度による文字列の変化(文字数の変化)
let strNumber = 0;
// 強度のラジオボックス要素の取得
let strength = $("*[name=strength]");
function checkedStrength(strNumber){

    if(strength[0].checked){
        // カスタムパスワード用
        wordcounter();

        }else if(strength[1].checked){
            // 強力パスワード
            // ！！！８字以上のパスワードを作成する→できないときは注意喚起！
            strNumber = 8;
            console.log('強度によるパスワードの文字数：' + strNumber);
    
        }else if(strength[2].checked){
            // 最強パスワード
            // ！！！１２字以上のパスワードを作成する→できないときは注意喚起！
            strNumber = 12;
            console.log('強度によるパスワードの文字数：' + strNumber);
    }
    return ;
}

// 強度フォームによる文字数欄の制御

// 強度：カスタムを選択したら文字数自由にカウント
function checked_custom(){
    wordCount[0].checked = true;
    for(let m=0; m < wordCount.length; m++){
        wordCount[m].disabled = false;
    }
}

// 強度：強力を選択したら、文字数は自由にカウント,文字は記号なし
function checked_strong(){
    kind[0].checked = true;
    kind[1].checked = true;
    kind[2].checked = true;
    kind[3].checked = false;
    for(let m=0; m < wordCount.length; m++){
        wordCount[m].disabled = false;
    }
}

// 強度：最強を選択したら、文字数は１２文字
function checked_word12(){
    wordCount[2].checked = true;
    for(let m=0; m < kind.length; m++){
        kind[m].checked = true;
    }
    for(let m=0; m < wordCount.length; m++){
        wordCount[m].disabled = true;
    }
    alert('文字数１２文字の最強なパスワードを生成します')
}

// 強度：強力、最強を押したらpasswordContetentと文字数を制限するメソッド

const selected = $('#selected').get(0); 
// .select_disabledのＣＳＳを呼び出す
function setDisabled(){
    for(let k=0; k < kind.length; k++){
        kind[k].disabled = true;
    }
    selected.classList.add('select_disabled');
}
// .select_disabledのＣＳＳを消す。
function removeDisabled(){
    for(let k=0; k < kind.length; k++){
        kind[k].disabled = false;
    }
    selected.classList.remove('select_disabled');
}


// フォーム：文字数（パスワードの文字数を決める）
// 文字数のラジオボックス要素の取得
let wordCount = $('input:radio[name="wordCount"]'); //$('input:radio[name="wordCount"]')
//文字数のナンバーカウンターの要素取得
let counter = $('#form_number').get(0); // $('#selected').get(0); 

function wordcounter(){
    if(wordCount[0].checked){
        // 文字数のカウンターによって数字を決める
        passwordNumber = counter.value;
        console.log('ワードカウンターによる文字数：' + passwordNumber);
    
    }else if(wordCount[1].checked){
        // ８文字を作成
        passwordNumber = 8;
        console.log('ワードカウンターによる文字数：' + passwordNumber);
    }else if(wordCount[2].checked){
        // １２文字を作成
        passwordNumber = 12;
        console.log('ワードカウンターによる文字数：' + passwordNumber);
    }
    return passwordNumber ;
}

// フォーム：個数（パスワードの個数を決める）
let times = 1; //回数の初期値
// 個数のラジオボックスの取得
let timesCount = document.getElementsByName('time');  //$('input[name="time"]') $("*[name=time]");
// 個数のナンバーカウンターの要素を取得
let timescounter = $("#timescounter").get(0);//$("#timescounter").get(0)

function quantity(){

    if(timesCount[0].checked){
        times = timescounter.value;
        console.log(times);
    }else if(timesCount[1].checked){
        times = 10;
        console.log(times);
    }else if(timesCount[2].checked){
        times = 50;
        console.log(times);
    }
    return times;
}

// その他の要素を取得
let condition = $('input[name="condition"]');

// リセットボタンを押したらリセット！

function resetResult(){
    let ul = $("#password-lists").get(0);
    while( ul.firstChild ){
    ul.removeChild( ul.firstChild );
} 
}

// ■似通った英数字にチェックを入れたら、パスワードが変わります。
function resemblesWord(content){
    if(condition[0].checked){
        content = content.replace(/1/, '').replace(/I/,'').replace(/i/,'').replace(/0/,'').replace(/O/,'').replace(/o/,'');
        console.log(content);
        return content;
    }
        return content;
}

