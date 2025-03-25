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
  'Управление проектами': [
    { title: 'Подключиться к лекции', url: 'https://vk.cc/cIIiI7' },
    { title: 'Лекция 1 и реферат', url: 'https://t.me/c/2209505680/7070' },
    { title: 'Лекция 2 и аналитическая работа', url: 'https://t.me/c/2209505680/7303' },
    { title: 'Лекция 3', url: 'https://t.me/c/2209505680/7883' },
    { title: 'Задачи лекции 3', url: 'https://t.me/c/2209505680/7884' },
    { title: 'Материал к лекции 4', url: 'https://t.me/c/2209505680/8035' },
    { title: 'Лекция 4', url: 'https://t.me/c/2209505680/8139' },
    { title: 'Лекция 5', url: 'https://t.me/c/2209505680/8140' },
    { title: 'Лекция 6', url: 'https://t.me/c/2209505680/8141' }
  ],
  'Английский': [
    { title: 'What is computer networking', url: 'https://t.me/c/2260810691/68' },
    { title: 'Professional English: Use Computer Internet', url: 'https://vk.cc/cIIig1' },
    { title: 'Аудиозаписи из книги', url: 'https://t.me/c/2260810691/2' },
    { title: 'Задание 1', url: 'https://t.me/c/2260810691/68' },
    { title: 'Задание 2', url: 'https://t.me/c/2260810691/76' },
    { title: 'Задание 3', url: 'https://t.me/c/2260810691/90' }
  ],
  'Машинное обучение и анализ данных': [
    { title: 'Теория и задания', url: 'https://t.me/c/2446319002/95' },
    { title: 'Anaconda Navigator Requirements', url: 'https://t.me/c/2446319002/96' },
    { title: 'Презентация с теорией 1', url: 'https://t.me/c/2446319002/97' }
  ],
  'Имитационное моделирование': [
    { title: 'Задание 1', url: 'https://t.me/c/2209505680/7551' },
    { title: 'Задание 2', url: 'https://t.me/c/2209505680/7744' },
    { title: 'Задачи для ознакомления с PDE Tool', url: 'https://t.me/c/2209505680/7852' },
    { title: 'Установить MatLab и Simulink', url: 'https://rutracker.net/forum/viewtopic.php?t=6510025' },
    { title: 'Задание 3', url: 'https://t.me/c/2209505680/8021' },
    { title: 'Установить GPSS World', url: 'https://gpss-world-student-version.software.informer.com/download/' }
  ],
  'Системы обработки экспериментальных данных': [
    { title: 'Лабораторные работы', url: 'https://vk.cc/cIZX9T' }
  ],
  'Методология программной инженерии': [
    { title: 'Основы программной инженерии (презентация)', url: 'https://t.me/c/2209505680/7508' },
    { title: 'Группа в ВЦ', url: 'https://chat.whatsapp.com/DzFR6mVsxTuGWQiiuiPAtE' }
  ],
  'Проектирование распределенных информационных систем': [
    { title: 'Группа в ТГ', url: 'https://t.me/+jJcsnQgFKsUwYzQy' }
  ],
  'Методология научного познания': [
    { title: 'Пример введения ВКР', url: 'https://t.me/c/2209505680/8042' }
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