"use strict"

let ProfileEditButton = document.getElementById('profile__edit-button');
let PopUp = document.getElementById('popup');
let PopUpCloseButton = document.getElementById('popup__close-button');
let PopUpFirstInput = document.getElementById('lastname');
let PopUpSecondInput = document.getElementById('discription');
let ProfileName = document.getElementById('profile__name');
let ProfileDiscription = document.getElementById('profile__discription');
let PopUpSaveButton = document.getElementById('popup__button');
let PopUpTitle = document.getElementById('popup__title');
let PlacesList = document.getElementById('places__list');
let PlaceAddButton = document.getElementById('add-button');
let ImgPopUpImg = document.getElementById('imgpopup__img')
let ImgPopUp = document.getElementById('imgpopup')
let ImgPopUpFigcaption = document.getElementById('imgpopup__figcaption')
let ImgPopUpCloseButton = document.getElementById('imgpopup__close-button')

let PlacesToCreate = [
  {
    name: 'Карачаевск',
    link: './images/Karachayevsk.png'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Elbrus.png'
  },
  {
    name: 'Домбай',
    link: './images/Dombay.png'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Elbrus.png'
  },
  {
    name: 'Домбай',
    link: './images/Dombay.png'
  },
  {
    name: 'Карачаево-Черкессия',
    link: './images/Karachayevsk.png'
  }
]

function OpenPopUpProfile() {
  PopUp.classList.add('popup_opened');

  PopUpFirstInput.value = ProfileName.innerText;
  PopUpSecondInput.value = ProfileDiscription.innerText;
  PopUpFirstInput.placeholder = "Введите Вашу фамилию";
  PopUpSecondInput.placeholder = "Введите описание";
  PopUpTitle.textContent = "Редактировать профиль";

  window.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && PopUp.classList.contains('popup_opened') && PopUpTitle.textContent == "Редактировать профиль") {
      event.preventDefault();
      SavePopUpProfile(event);
    }
  });
  PopUpCloseButton.addEventListener('click', ClosePopUpProfile);
  PopUpSaveButton.addEventListener('click', SavePopUpProfile);
  PopUpCloseButton.removeEventListener('click', ClosePopUpPlaceAdd);
  PopUpSaveButton.removeEventListener('click', SavePopUpPlaceAdd);
}

function ClosePopUpProfile() {
  PopUp.classList.remove('popup_opened');
}

function SavePopUpProfile(event) {
  event.preventDefault()
  PopUp.classList.remove('popup_opened');
  ProfileName.innerText = PopUpFirstInput.value;
  ProfileDiscription.innerText = PopUpSecondInput.value;
}

function OpenPopUpPlaceAdd() {
  PopUp.classList.add('popup_opened');

  PopUpFirstInput.placeholder = "Название";
  PopUpSecondInput.placeholder = "Ссылка на картинку";
  PopUpTitle.textContent = "Новое место";
  PopUpFirstInput.value = '';
  PopUpSecondInput.value = '';
  PopUpCloseButton.addEventListener('click', ClosePopUpPlaceAdd);
  PopUpSaveButton.addEventListener('click', SavePopUpPlaceAdd);
  PopUpCloseButton.removeEventListener('click', ClosePopUpProfile);
  PopUpSaveButton.removeEventListener('click', SavePopUpProfile);
}

function ClosePopUpPlaceAdd() {
  PopUp.classList.remove('popup_opened');
}

function SavePopUpPlaceAdd(event) {
  event.preventDefault()
  PopUp.classList.remove('popup_opened');
  PlacesList.insertAdjacentHTML('afterbegin', CreateCard(PopUpFirstInput.value, PopUpSecondInput.value))
}

function LikeCard(target) {
  target.classList.toggle('place__like_like');
}

function DellCard(target) {
  target.closest(".place").remove();
}

function OpenImgPopUp(target) {
  ImgPopUp.classList.toggle('imgpopup_opened')
  ImgPopUpImg.src = target.src
  ImgPopUpFigcaption.textContent = target.alt
}

function CloseImgPopUp() {
  ImgPopUp.classList.toggle('imgpopup_opened')
}

function CreateCard(name, link) {
  return `
    <li class="place">
      <article>
        <img src="${link}" alt="${name}" class="place__photo" onclick="OpenImgPopUp(this)">
        <button type="submit" class="place__trash" onclick="DellCard(this)"></button>
        <div class="place__discription">
          <h2 class="place__title">
          ${name}
          </h2>
          <button type="submit" class="place__like" onclick="LikeCard(this)"></button>
        </div>
      </article>
    </li>
      `;
}

for (let Place of PlacesToCreate) {
  PlacesList.insertAdjacentHTML('beforeend', CreateCard(Place.name, Place.link))
}

ProfileEditButton.addEventListener('click', OpenPopUpProfile);
PlaceAddButton.addEventListener('click', OpenPopUpPlaceAdd);
ImgPopUpCloseButton.addEventListener('click', CloseImgPopUp)
