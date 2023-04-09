import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const btnRef = document.querySelector('button[type="submit"]');
const emailInputRef = document.querySelector('input[name="email"]');
const messageTextRef = document.querySelector('textarea[name="message"]');
const dataObj = {};
const STORAGE_KEY = 'feedback-form-state';

populate();

// Input

function onInputFill(e) {
  if (e.target.name === 'email') {
    dataObj[e.target.name] = e.target.value;
  } else if (e.target.name === 'message') {
    dataObj[e.target.name] = e.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
}

// Populate
function populate() {
  let localData = localStorage.getItem(STORAGE_KEY);

  // if (localData === undefined) {
  //   localData = JSON.parse(localData);
  //   localData.email = '';
  //   emailInputRef = '';
  //   localData.message = '';
  //   messageTextRef = '';
  //   console.log(localData);
  // }

  if (localData) {
    localData = JSON.parse(localData);
    // console.log(localData); // log object in localStorage
    // if (!localData.email === undefined) {
    //   localData.email = '';
    //   console.log('ТУТ НЕ БЫЛО ПОЧТЫ');
    // } else if (!localData.message) {
    //   localData.message = '';
    //   console.log('ТУТ НЕ БЫЛО ТЕКСТА');
    // }
    emailInputRef.value = localData.email;
    messageTextRef.value = localData.message;
  }
}

// Submit
const onClickSubmit = e => {
  e.preventDefault();

  if (
    emailInputRef.value === '' ||
    // emailInputRef.value === ' ' ||
    messageTextRef.value === ' ' ||
    messageTextRef.value === ''
  ) {
    alert('Fill all the gaps!');
  } else {
    // const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(dataObj);
    formRef.reset();
    window.localStorage.clear();
    dataObj.email = '';
    dataObj.message = '';
  }
};

formRef.addEventListener('input', throttle(onInputFill, 500));
btnRef.addEventListener('click', onClickSubmit);
