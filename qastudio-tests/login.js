describe('Тестирование формы логина', function () {
   it('1.1)Позитивный тест на валидный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина');
    })


    it('1.2)Tест на смену пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon');
    })
    
    
    it('1.3)Негативный тест не валидный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('1234QAGG');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
        })
    
        it('1.4)Негативный тест не валидный и-маил', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('dudebe.chill')
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon');
            })

            it('1.5)Негативный тест не валидный и-маил без "@"', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germandolnikov.ru')
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Нужно исправить проблему валидации');
                })

                it('1.6)Тест поля логин на строчные буквы', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru')
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.contains('Такого логина или пароля нет');
                    cy.get('#exitMessageButton > .exitIcon');
                    })
        })
    