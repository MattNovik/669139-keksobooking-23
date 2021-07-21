const FILES_TYPE = ['gif', 'png', 'jpeg', 'jpg'];

const fileChooserAvatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const fileChooserPhoto = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo img');

const clearImgSrc = () => {
  photoPreview.src ='img/muffin-grey.svg';
  avatarPreview.src ='img/muffin-grey.svg';
};

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILES_TYPE.some((opt) => fileName.endsWith(opt));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

fileChooserPhoto.addEventListener('change', () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILES_TYPE.some((opt) => fileName.endsWith(opt));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

export { clearImgSrc };
