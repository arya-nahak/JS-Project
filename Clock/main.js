function Analog_clock() {
  let Aclock = {
    isinit: false,
    deg: 6,
    init: function (hour, minute, second) {
      if (!Aclock.isinit) {
        Aclock.hr = document.querySelector(hour);
        Aclock.min = document.querySelector(minute);
        Aclock.sec = document.querySelector(second);
        Aclock.display(Aclock.hr, Aclock.min, Aclock.sec);
      }
    },
    display(h_4_hour, m_4_minute, s_4_second) {

      setInterval(() => {
    
        let fulldate = new Date() ;
        
        h_4_hour.style.transform = `rotateZ(${(fulldate.getHours() * 30) + ((fulldate.getMinutes() * Aclock.deg)/12)}deg)`
        m_4_minute.style.transform=`rotateZ(${fulldate.getMinutes() * Aclock.deg}deg)`
        s_4_second.style.transform=`rotateZ(${fulldate.getSeconds() * Aclock.deg}deg)`

      },1000);
    },
  };
  return {
    init: Aclock.init,
  };
}

let analog_Clock = new Analog_clock();
analog_Clock.init(".hr", ".min", ".sec");