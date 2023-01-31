import { validateForms } from '../functions/validate-forms';

const rules1 = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.form__input--mail',
    email: true,
    telError: 'Введите корректную почту',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните почту!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.form', rules1, afterForm);
