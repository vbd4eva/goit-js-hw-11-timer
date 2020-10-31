class CountdownTimer{ 
  constructor({
  selector,
  targetDate,
}){
    this.selector = selector;
    this.targetDate = targetDate;

    this.getRefs();
    this.start()
  }

  getRefs() { 
    this.refs = {};
    this.refs.timerEl = document.querySelector(this.selector);
    this.refs.days = document.querySelector('[data-value="days"]');
    this.refs.hours = document.querySelector('[data-value="hours"]');
    this.refs.mins = document.querySelector('[data-value="mins"]');
    this.refs.secs = document.querySelector('[data-value="secs"]');
  }

  start() { 
     this.timer =  setInterval(() => {
  const currentTimestamp = Date.now();
  const deltaTimeStamp = Math.abs(targetTimestamp - currentTimestamp);
  this.updateHtml(this.getTimerComponents(deltaTimeStamp));

       
}, 1000);
  }

  getTimerComponents(timeStamp){ 
  /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(timeStamp / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((timeStamp % (1000 * 60)) / 1000);

  return {days, hours, mins, secs};
  }
  
  updateHtml({days, hours, mins, secs}) { 
   this.refs.days.textContent = this.pad(days);
    this.refs.hours.textContent = this.pad(hours);
    this.refs.mins.textContent = this.pad(mins);
    this.refs.secs.textContent = this.pad(secs);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const example = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

// console.log(example);

const targetTimestamp = new Date('Jul 17, 2021').getTime();


const arrow = document.querySelector('.arrow');

let arrowPosition = 0;

setInterval(() => {
  arrow.style.transform = `rotate(${arrowPosition}deg)`;
  arrowPosition += 6;
}, 1000);