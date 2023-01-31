import JustValidate from 'just-validate';

export const validateForms = (selector, rules, afterSend) => {
  const forms = document?.querySelectorAll(selector);

  forms.forEach(form => {

    if (!form) {
      console.error('Нет такого селектора!');
      return false;
    }

    if (!rules) {
      console.error('Вы не передали правила валидации!');
      return false;
    }

    const validation = new JustValidate(form);

    for (let item of rules) {
      validation
        .addField(item.ruleSelector, item.rules);
    }

    validation.onSuccess((ev) => {
      let formData = new FormData(ev.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (afterSend) {
              afterSend();
            }
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      ev.target.reset();
    })
  });
};
