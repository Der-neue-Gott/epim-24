const cards = document.querySelectorAll('.card');
const dayDisplay = document.getElementById('day-display');

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const today = new Date().getDay();
dayDisplay.textContent = days[today].toUpperCase();

cards.forEach(card => {
  if (card.dataset.day === days[today]) {
    card.classList.add('today');
  }

  card.addEventListener('mouseleave', () => {
    card.classList.remove('flipped');
  });

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove('flipped');
      }
    });
  });
});



const materials = {
  'ВЕБ': [
    { title: 'Теория и лабораторные 1 - 5', url: 'https://t.me/c/2461916459/5' },
    { title: 'Лабораторная 6', url: 'https://t.me/c/2461916459/10' }
  ],
  'Теория автоматов': [
    { title: 'Теория и задания', url: 'https://t.me/c/2493950303/44' },
    { title: 'Задание', url: 'https://t.me/c/2493950303/17' },
    { title: 'Теория 1', url: 'https://t.me/c/2493950303/45' },
    { title: 'Теория 2', url: 'https://t.me/c/2493950303/46' },
    { title: 'Теория 3', url: 'https://t.me/c/2493950303/10' },
    { title: 'Теория 4', url: 'https://t.me/c/2493950303/11' },
    { title: 'Лекция 1', url: 'https://t.me/c/2493950303/15' },
    { title: 'Лекция 2', url: 'https://t.me/c/2493950303/16' },
    { title: 'Лекция 3', url: 'https://t.me/c/2493950303/13' },
    { title: 'Лекция 4', url: 'https://t.me/c/2493950303/14' },
    { title: 'Сети Петри', url: 'https://t.me/c/2493950303/176' },
    { title: 'Свойства сетей Петри', url: 'https://t.me/c/2493950303/178' },
    { title: 'Задание сети Петри', url: 'https://t.me/c/2493950303/177' },
    { title: 'Типовая по вариантам', url: 'https://t.me/c/2209505680/2328' },
    { title: 'ПО для построения сетей Петри', url: 'https://t.me/c/2209505680/2326' },
    { title: 'Практическая сетей Петри', url: 'https://t.me/c/2493950303/196' }
  ],
  'Английский': [
    { title: 'Книга', url: 'https://t.me/c/2260810691/6' }
  ],
  'Обработка сигналов': [
    { title: 'Полный курс Python', url: 'https://t.me/c/2446319002/13' },
    { title: 'Машинное обучение', url: 'https://t.me/c/2446319002/17' },
    { title: 'Личный кабинет', url: 'https://learning.imash.kg/my/' },
    { title: 'Курс Python', url: 'https://learning.imash.kg/enrol/index.php?id=3' },
    { title: 'Курс "Машинное обучение"', url: 'https://learning.imash.kg/enrol/index.php?id=2' },
    { title: 'Книга по сигналам 1', url: 'https://vk.com/wall-54530371_146152' },
    { title: 'Книга по сигналам 2', url: 'https://t.me/c/2446319002/31' },
    { title: 'Гитхаб', url: 'https://github.com/verzunov/dsp' },
    { title: 'Самостоятельная работа 1', url: 'https://learning.imash.kg/mod/assign/view.php?id=513' },
    { title: 'Видео-история быстрого преобразования Фурье', url: 'https://www.youtube.com/watch?v=eQlSvfUuQNs&t=469s' }
  ],
  'Организационное поведение': [
    { title: 'Задание', url: 'https://t.me/c/2209505680/2593' },
    { title: 'Подключиться к лекции', url: 'https://bit.ly/3ZfppLf' }
  ],
  'Психология': [
    { title: 'Подключиться к лекции', url: 'https://us04web.zoom.us/j/2481446463?pwd=WmRkRkhweUhTdEJXWGJJQUtLblRNdz09' },
    { title: 'Присоединиться к курсу (классрум)', url: 'https://classroom.google.com/c/NjAyMzg3MTgwMjYz?cjc=tlysbeo' },
    { title: 'Материалы (гугл диск)', url: 'https://drive.google.com/drive/u/1/folders/1tGJwQDsqmzdAUtw9tENSWR6-kjRGMssx' },
    { title: 'Задание 1', url: 'https://classroom.google.com/u/1/c/NjAyMzg3MTgwMjYz/a/NjAyMzg3NDg0NTAx/details' },
    { title: 'Задание 2', url: 'https://classroom.google.com/u/1/c/NjAyMzg3MTgwMjYz/a/NjAyMzg3NTY2Mjg0/details' },
    { title: 'Задание 3', url: 'https://classroom.google.com/u/1/c/NjAyMzg3MTgwMjYz/a/NjAyMzg3NTM1MjA5/details' },
    { title: 'Задание 4 (любая из тем)', url: 'https://classroom.google.com/u/1/c/NjAyMzg3MTgwMjYz/a/NjAyMzg4MTczNDU1/details' }
  ],
  'Межкультурная коммуникация': [
    { title: 'Революция ИИ', url: 'https://interpreted.d3.ru/revoliutsiia-iskusstvennogo-intellekta-684922/?sorting=rating' },
    { title: 'Гарри Поттер и методы рационального мышления', url: 'https://avidreaders.ru/book/garri-potter-i-metody-racionalnogo-myshleniya.html' },
    { title: 'Ирония судьбы глазами американца', url: 'https://onashem.mediasole.ru/ironiya_sudby_glazami_amerikanca' },
    { title: 'Подключиться к лекции', url: 'https://goo.su/fVWB2j' }
  ]
};

const popupWindow = document.querySelector('#popup-window');
const popupContent = document.querySelector('#material-list');
const popupTitle = document.querySelector('#subject-title');
const closeButton = document.querySelector('.popup-close');

function showMaterials(subject) {
  const subjectMaterials = materials[subject] || [];
  popupContent.innerHTML = '';
  popupTitle.textContent = subject;

  subjectMaterials.forEach(material => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = material.url;
    a.textContent = material.title;
    a.target = '_blank';
    li.appendChild(a);
    popupContent.appendChild(li);
  });

  popupWindow.style.display = 'block';
}


function closePopup() {
  popupWindow.style.display = 'none';
}

closeButton.addEventListener('click', closePopup);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});


const scheduleItems = document.querySelectorAll('.schedule-item');
scheduleItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemContent = item.innerHTML.split('<br>');
    const subject = itemContent[0];
    const time = itemContent[1];

    showMaterials(subject);
    popupTitle.innerHTML = `${subject}<br><small>${time}</small>`;
  });
});



document.addEventListener('wheel', function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && (event.key === '=' || event.key === '-' || event.key === '+')) {
    event.preventDefault();
  }
});