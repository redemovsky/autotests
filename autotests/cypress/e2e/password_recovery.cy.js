describe('восстановление пароля', function () {

    it('Проверка логики восстановления пароля', function () 
    {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton') .click();  
         cy.get('#mailForgot') .type('anatoly.4nikin@yandex.ru')
         cy.get('#restoreEmailButton') .click();  
         cy.get('#messageHeader') .contains('Успешно отправили пароль на e-mail'); 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
               })
      })
