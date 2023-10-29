// date ->day
const btn = document.querySelector('.btn');
const calculation = document.getElementById('calculation-content');
const reset = document.querySelector('.calc-reset')

function calculateAge() {
  const year = document.getElementById('year-input');
  const month = document.getElementById('month-input');
  const day = document.getElementById('day-input');

  // calculate year
  const dob = new Date();
  const getYear = dob.getFullYear();
  const calculateYears = getYear - year.value;

  // calculate month
  const getMonth = dob.getMonth() + 1;
  const calculateMonth = getMonth - month.value;
  console.log(`Calculate Month -> ${calculateMonth}`);

  // calculate day
  const getDay = dob.getDate();
  const myDay = getDay - day.value;
  console.log(`${calculateYears} years`);

  // calculate how manu days, moth left till bday left
  let oneDay = 24 * 60 * 60 * 1000;
  let daysLeft = Math.ceil((dob.getTime() - myDay) / (oneDay));
  console.log(daysLeft);

  console.log(`${calculateYears} years, ${calculateMonth} months ${daysLeft} days left`);

  calculation.innerHTML = `
  <div>
  <h1><span>${calculateYears}</span> years</h1>
  </div>
  <div>
  <h1><span>${calculateMonth}</span> months</h1>
  </div>
  <div>
  <h1><span>${daysLeft}</span> days</h1>
  </div>`

  year.value = '';
  month.value = '';
  day.value = '';
}

btn.addEventListener('click', calculateAge);