// Main Logic Starts
// sets locale to India
faker.locale = 'en_IND';

let btnGen = document.querySelector('.generateButton');
btnGen.addEventListener('click', () => {     
    // Personal Details
    faker.locale = 'en_IND';
    var firstName = faker.name.firstName(); 
    var lastName = faker.name.lastName(); 
    var middleName = faker.name.firstName(); 
    var emailNew = firstName+'_'+lastName+'@invalid.test.com';
    var emailWork = firstName+'_'+lastName+'@invalid.work.com';
    /* old email logic 
    var email = faker.internet.email();
    var email2 =email.replaceAll('.','.invalid.'); 
    var workEmail0 = faker.internet.email();
    var workEmail = workEmail0.replaceAll('.','.invalid.'); */
    // Formatting phone number start
    var phoneNumber = faker.phone.phoneNumber();
    var phoneNumber0 = phoneNumber.substring(3);
    var phoneNumber1 = phoneNumber0.replace(/[-&_\/\\#,+()$~%.'":*?<>{}]/g,' ');
    var phone1 = phoneNumber1.replaceAll(' ','');
    // Formatting phone number end
    var company = faker.company.companyName();
  
    //address starts 
    var streetName = faker.address.streetName();
    var secondaryAddress = faker.address.secondaryAddress();
    var houseLane = faker.address.streetName();
    var houseNumber = secondaryAddress + ', ' + houseLane ;
    var addressLine = faker.address.streetAddress();
    var landmark = faker.address.streetName();
       
    // Find IDs
    // Personal Details
    document.querySelector('#firstName').value = firstName;
    document.querySelector('#middleName').value = middleName;
    document.querySelector('#lastName').value = lastName;
    document.querySelector('#phoneNumber').value = phone1;
    document.querySelector('#email').value = emailNew;
    document.querySelector('#workEmail').value = emailWork;
    document.querySelector('#company').value = company;
  
   // Address
    document.querySelector('#secondaryAddress').value = houseNumber;
    document.querySelector('#streetName').value = streetName;
    document.querySelector('#addressLine').value = addressLine;
    document.querySelector('#landmark').value = landmark;   
   
  // Identity Section
  //regex starts
    var panRegex = new RandExp(/[A-Z]{5}[0-9]{4}[A-Z]{1}/).gen();
    var voterRegex = new RandExp(/[A-Z]{3}[0-9]{6}/).gen();
    var passportRegex = new RandExp(/^[A-Z][0-9]{7}$/).gen();
    var aadharRegex = new RandExp(/^[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}$/).gen();
   // var drlicenceRegex = new RandExp(/^[A-Z]{2}[-][1-9]{13}$/).gen();
   // Driving License State Year 000 RNG
    var licenseState = new RandExp(/^[A-Z]{2}$/).gen();
    var licenseRng = new RandExp(/^[1-9]{4}$/).gen();
    var randomnumber = Math.floor(Math.random()*10)
    var today = new Date();
    var licenseYear = today.getFullYear() - randomnumber;
    var finalLicense = licenseState + licenseYear + '000' +licenseRng;
   // get id
    document.querySelector('#panCard').value = panRegex; 
    document.querySelector('#voterid').value = voterRegex;  
    document.querySelector('#passport').value = passportRegex; 
    document.querySelector('#aadhar').value = aadharRegex; 
    document.querySelector('#drlicence').value = finalLicense; 
  
}); 
// Main Logic Ends Here

//ClipboardJS Intialization
let copyFunction = new ClipboardJS('#btnCopy');

// Tooltip
tippy('[data-tippy-content]', {
  trigger: 'click',
  duration: 800,
}); 