const scheduleData = [
  {
    title: 'Йога',
    time: '10:00 - 11:00',
    maxParticipants: 10,
    currentParticipants: 5
  },
  {
    title: 'Пилатес',
    time: '12:00 - 13:00',
    maxParticipants: 8,
    currentParticipants: 8
  },
  {
    title: 'Кардио тренировка',
    time: '14:00 - 15:00',
    maxParticipants: 15,
    currentParticipants: 10
  },
  {
    title: 'Бассейн',
    time: '10:00 - 15:00',
    maxParticipants: 15,
    currentParticipants: 10
  },
  {
    title: 'Тренажоры',
    time: '14:00 - 15:00',
    maxParticipants: 10,
    currentParticipants: 5
  }
];

const scheduleContainer = document.getElementById('schedule');

function createClassCard(classData) {
  const col = document.createElement('div');
  col.classList.add('col-md-4', 'mb-4');

  const card = document.createElement('div');
  card.classList.add('card', 'h-100');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const classTitle = document.createElement('h5');
  classTitle.classList.add('card-title');
  classTitle.textContent = classData.title;
  cardBody.appendChild(classTitle);

  const classTime = document.createElement('p');
  classTime.classList.add('card-text');
  classTime.innerHTML = `<strong>Время:</strong> ${classData.time}`;
  cardBody.appendChild(classTime);

  const participantsInfo = document.createElement('p');
  participantsInfo.classList.add('card-text');
  participantsInfo.innerHTML = `<strong>Участники:</strong> ${classData.currentParticipants}/${classData.maxParticipants}`;
  cardBody.appendChild(participantsInfo);

  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('d-flex', 'justify-content-between');

  const signUpButton = document.createElement('button');
  signUpButton.classList.add('btn', 'btn-primary');
  signUpButton.textContent = 'Записаться';
  if (classData.currentParticipants >= classData.maxParticipants) {
    signUpButton.disabled = true;
  }
  buttonGroup.appendChild(signUpButton);

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn', 'btn-danger');
  cancelButton.textContent = 'Отменить запись';
  cancelButton.disabled = classData.currentParticipants === 0;
  buttonGroup.appendChild(cancelButton);

  cardBody.appendChild(buttonGroup);
  card.appendChild(cardBody);
  col.appendChild(card);

  signUpButton.addEventListener('click', () => {
    if (classData.currentParticipants < classData.maxParticipants) {
      classData.currentParticipants++;
      participantsInfo.innerHTML = `<strong>Участники:</strong> ${classData.currentParticipants}/${classData.maxParticipants}`;
      if (classData.currentParticipants >= classData.maxParticipants) {
        signUpButton.disabled = true;
      }
      cancelButton.disabled = false;
    }
  });

  cancelButton.addEventListener('click', () => {
    if (classData.currentParticipants > 0) {
      classData.currentParticipants--;
      participantsInfo.innerHTML = `<strong>Участники:</strong> ${classData.currentParticipants}/${classData.maxParticipants}`;
      if (classData.currentParticipants < classData.maxParticipants) {
        signUpButton.disabled = false;
      }
      if (classData.currentParticipants === 0) {
        cancelButton.disabled = true;
      }
    }
  });

  return col;
}

scheduleData.forEach(classData => {
  const classCard = createClassCard(classData);
  scheduleContainer.appendChild(classCard);
});