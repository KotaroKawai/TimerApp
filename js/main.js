'use strict';
{
  const disp = document.getElementById('disp');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const startbtn = document.getElementById('startbtn');
  const stopbtn = document.getElementById('stopbtn');
  const clearbtn = document.getElementById('clearbtn');
  let time = 0;
  let startTimer;
  let minute;
  let second;

  //タイマーを開始する処理
  startbtn.addEventListener('click', ()=>{
    if(minutes.value !== '' && seconds.value !== '' && time == 0){
      console.log(time);
      minute = minutes.value;
      second = seconds.value;
      minutes.value = '';
      seconds.value = '';
      startTimer = setInterval(passOnesec,1000);
    }else if(minutes.value == '' || seconds.value == ''){
      if(time == 0){
        alert('時間を入力してください');
      }
      else{
        startTimer = setInterval(passOnesec,1000);
      }
    }
  });
  //タイマーを止める処理
  stopbtn.addEventListener('click', ()=>{
    time = 1;
    console.log(time);
    clearInterval(startTimer);
  });
  //タイマーをクリアする処理
  clearbtn.addEventListener('click', ()=>{
    clearInterval(startTimer);
    disp.textContent = '00:00';
    time = 0;
  });

  //1秒経過の処理
  function passOnesec(){
    //時間が0秒になった時
    // console.log(minute);
    // console.log(second);
    if(minute == 0 && second == 0){
      clearInterval(startTimer);
      alert('finish!!')
      time = 0;
      //秒が0になった時
    }else if(minute != 0 && second == 0){
      minute -= 1;
      second = 59;
      juige(minute,second);
    }else{
      second -= 1;
      juige(minute,second);
    }
  };
  //一桁だった場合に0を付与する関数
  function juige(min,sec){
    if(min.toString().length == 1){
      if(sec.toString().length == 1 ){
        disp.textContent = '0' + min + ':' + '0' + sec;
      }else{
        disp.textContent = '0' + min + ':' + sec;
      }
    }else if(sec.toString().length == 1){
      disp.textContent = min + ':' + '0' + sec
    }else{
      disp.textContent = minute + ':' + second;
    }
  }
  
}