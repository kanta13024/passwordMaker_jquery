// Jquery 動作確認用！
$(function(){ // if document is ready
  console.log('jQuery is ready.')
});

$('#button').on('click', function() {
  alert("クリックされました");
});

const passwordLength = 20;
const passwordContent =[];

const strength = $('input[name="strength"]');
const kind = $('input[name="kind"]');
const other = $('input[name="other"]');
if(strength[0].checked){
  if(kind[0].checked){
    if(other[0].checked){
      passwordContent.push('ABCDEFGHJKLMNPQRSTUVWXYZ'); //I,Oは取り除く
    }else {
      passwordContent.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
  }
  if(kind[1].checked){
    if(other[0].checked){
      passwordContent.push('abcdefghjklmnpqrstuvwxyz');  //i,oは取り除く
    }else {
      passwordContent.push('abcdefghijklmnopqrstuvwxyz');
    }
  }
  if(kind[2].checked){
    if(other[0].checked){
      passwordContent.push('23456789'); //1,0は取り除く
    }else {
      passwordContent.push('0123456789');
    }
  }
  if(kind[3].checked){
    passwordContent.push('!$%&¥+:*/<>}{');
  }
}

const wordCount = $('input[name="wordCount"]');
const formNumber = $('#formNumber');
if(wordCount[0].checked){

}

// パスワードの表示
passwordContent.forEach(function(element){
  console.log(element);
});


function makePassword(){
   
    const str =$('input[name=strength]:checked').val()
    console.log(str);
    
}
