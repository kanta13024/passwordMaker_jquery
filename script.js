// 生成ボタンを押したらパスワードを表示
const passwordLists = $('#passwordLists')
function makePassword(){
  
  resetResult();
  
  let passwordLength = 20;
  const passwordContent =[];

  let strength = $('input[name="strength"]');
  let kind = $('input[name="kind"]');
  let other = $('input[name="other"]');

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
console.log('パスワードの種類' + passwordContent)

const wordCount = $('input[name="wordCount"]');
const formNumber = $('#formNumber');
if(wordCount[0].checked){
  passwordLength = formNumber.val();
}else if(wordCount[1].cheked){
  passwordLength = 8;
}else if(wordCount[2].checked){
  passwordLength = 12;
}

const quantity = $('input[name="quantity"]');
const quantityCounter = $('#quantityCounter');
let times = "";
if(quantity[0].checked){
  times = quantityCounter.val();
}else if(quantity[1].checked){
  times = 10;
}else if(quantity[2].checked){
  times = 50;
}

// パスワードの表示
passwordContent.forEach(function(element){
  
});

// 以上の条件よりパスワードを生成
let passWord = "";  //一つのパスワード
const setPassword = passwordContent.join("");
let num = 0;
while(num < times){
  passWord = "";
    for(let i=0; i<passwordLength; i++){
    passWord += setPassword[Math.floor(Math.random()*setPassword.length)];
  }
  console.log(passWord);
  let li = $('<li>');
  li.text(passWord);
  passwordLists.append(li);
  num ++;
}



}

// パスワードのリセット
function resetResult(){
  $('li').remove();
  arryPassWord = [];
}