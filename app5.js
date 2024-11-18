const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  let judgement = '';
  if (hand == 'グー')
    if(cpu == 'グー') judgement = '引き分け';
    else if(cpu == 'チョキ'){
      judgement = '勝ち';
      win += 1;
    }
    else judgement = '負け';
  if (hand == 'チョキ')
    if(cpu == 'グー') judgement = '負け';
    else if(cpu == 'チョキ') judgement = '引き分け';
    else {
      judgement = '勝ち';
      win += 1;
    }
  if (hand == 'パー')
    if(cpu == 'グー'){
      judgement = '勝ち';
      win += 1;
    }
    else if(cpu == 'チョキ') judgement = '負け';
    else judgement = '引き分け';
  total += 1;
  if(Number.isNaN(total)){
    win = 0;
    total = 0;
  }
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/squar", (req, res) => {
  let num = req.query.num;
  let ans = num * num;
  const display = {
    num: num,
    ans: ans,
  }
  res.render('squar', display)
});

app.get("/color", (req, res) => {
  let ans = '';
  if (req.query.red){
    ans = '赤が好きなあなたは「何事にも積極的な熱いハートの持ち主」です。';
  }
  if (req.query.blue){
    ans = '青が好きなあなたは「周りへの配慮が上手な思慮深い人」です。';
  }
  if (req.query.purple){
    ans = '紫が好きなあなたは「直感を信じるクリエイタータイプ」です。';
  }
  if (req.query.green){
    ans = '緑色が好きなあなたは「平和を願う平等主義の持ち主」です。';
  }
  const display = {
    ans: ans,
  }
  res.render('color', display)
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
