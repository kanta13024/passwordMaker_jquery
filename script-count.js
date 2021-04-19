function countStart(){

    // カウントボックスの要素を取得&テキストエリアの要素を取得
    const countBoxes = document.getElementsByName('countBox');
    const text = document.string.str.value

    // ■バイト数
    countBoxes[0].value = encodeURI(text).replace(/%../g, "*").length;

    // ■全角・半角共に1文字として換算した文字数
    countBoxes[1].value = text.length;

    // ■全角＝1文字、半角＝0.5文字として換算した文字数
    function getLen(text){
        let result = 0;
        for(var i=0;i<text.length;i++){
          var chr = text.charCodeAt(i);
          if((chr >= 0x00 && chr < 0x81) ||
             (chr === 0xf8f0) ||
             (chr >= 0xff61 && chr < 0xffa0) ||
             (chr >= 0xf8f1 && chr < 0xf8f4)){
            //半角文字の場合は0.5を加算
            result += 0.5;
          }else{
            //それ以外の文字の場合は1を加算
            result += 1;
          }
        }
        //結果を返す
        return result;
      };
      countBoxes[2].value = getLen(text);

    // ■全角・半角共に1文字として換算した文字数(改行、空白は除く)
    aftertext = text.replace(/\s+/g, "").replace(/\r?\n/g,"");
    countBoxes[3].value = aftertext.length;

    // ■全角＝1文字、半角＝0.5文字として換算した文字数(改行、空白は除く)
    countBoxes[4].value = getLen(aftertext);

    //■バイト数(改行、空白は除く)
    countBoxes[5].value = encodeURI(aftertext).replace(/%../g, "*").length;

    // ■行数
    function countLine(str){
        line = str.match(/\r\n|\n/g);
        if(line!=null){
            line = line.length +1;
        }else{
            line = 1;
        }
        return line;
    }
    countBoxes[6].value = countLine(text);
}   


// リセットボタンのメソッド
function countReset() {
    // カウントボックスの要素を取得&テキストエリアの要素を取得
    const countBoxes = document.getElementsByName('countBox');

    // テキストエリアのリセット
    document.string.str.value = "";

    // 結果のリセット
    console.log(countBoxes.length);
    for(let i=0; i < countBoxes.length; i++){
        countBoxes[i].value = "";
    }
}

