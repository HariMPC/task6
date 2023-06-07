class myself{
    constructor(name,age,email,mobilenumber,address,studies,experience){
       this.name = name;
       this.age = age;
       this.email = email;
       this.mobilenumber = mobilenumber;
       this.address = address;
       this.studies = studies;
       this.experience = experience;
          
    }
    mybio(){
      console.log('MY BIO :');
      console.log('Name:',this.name);
      console.log('Age:',this.age);
      console.log('Mobilenumber:',this.mobilenumber);
      console.log('Address:',this.address);
    }
    myacademics(){
        console.log('MY ACADEMICS :');
        console.log('Studies:',this.studies);
    }
    myworkexperience(){
        console.log('MY EXPERIENCE :');
        console.log('My Experience:',this.experience)
    }
}
var personobj = new myself('Hari Sudhan M','24','harimurugan763979@gmail.com','7639792213','149a,Baba street,Dharmapuri-636 701',
['PG in Applied Electronics - 78%','UG in elecronics - 60%','HSC in Bio Maths - 77%','SSLC - 88%'],'Fresher');
personobj.mybio();
personobj.myacademics();
personobj.myworkexperience();