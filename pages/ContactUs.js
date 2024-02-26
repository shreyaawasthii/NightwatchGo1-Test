module.exports = {
    elements: {
      contactUsLink: 'a[href*="/contact_us"]',
      contactForm: '.contact-form.row',
      nameInput: 'input[name="name"]',
      emailInput: 'input[name="email"]',
      subjectInput: 'input[name="subject"]',
      messageInput: '#message',
      uploadFileInput: 'input[name="upload_file"]',
    },
    
    commands: [{
      verifyContactLink() {
        return this
          .waitForElementVisible('@contactUsLink',20000)
          .click('@contactUsLink')
      },

      submitContactForm(name, email, subject, message, filePath) {
        return this
              .setValue('@nameInput', name)
              .setValue('@emailInput', email)
              .setValue('@subjectInput', subject)
              .setValue('@messageInput', message)
              .setValue('@uploadFileInput', 
              require('path').resolve(filePath));
            
          },
    }],
  };