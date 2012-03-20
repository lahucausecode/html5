var userList = new Array();
var count = userList.length;

function validate(tableId)
{
   alert("in validate");
   var formObject = document.forms['dataForm'];
   var firstNameElement = formObject.elements[0];
   var lastNameElement = formObject.elements[1];
   var emailElement = formObject.elements[2];
   var phoneNoElement = formObject.elements[3];
   var websiteElement = formObject.elements[4];


   addRow(tableId);
}//validate



function findParentNode(parentName, childObj) {
    /**var testObj = childObj.parentNode;
    while(testObj.getAttribute('name')!= parentName) {
        alert('My name is ' + testObj.getAttribute('name'));
        testObj = testObj.parentNode;
    }**/
    alert('Finally found ');
}//findParentNode

function save(i,tableId)
{
   var firstName=document.getElementById("firstname");
   var lastName=document.getElementById("lastname");
   var email=document.getElementById("email");
   var phoneNo=document.getElementById("phone");
   var website=document.getElementById("website");
   
   var formObject = document.forms['dataForm'];
   var button =formObject.elements[5];
   button.value = "Add data";    
   //butoon.onclick = function () {validate(tableId); return false;};   
   userList[i] = {
             "fName":firstName.value,
             "lName":lastName.value,
           "emailId":email.value,
               "phn":phone.value,
               "web":website.value
                    };
   alert("Data Saved");
   
   refreshTable(tableId); 
}//save



function editObject(email,tableId)
{
   var formObject = document.forms['dataForm'];
   var firstNameElement = formObject.elements[0];
   var lastNameElement = formObject.elements[1];
   var emailElement = formObject.elements[2];
   var phoneNoElement = formObject.elements[3];
   var websiteElement = formObject.elements[4];
   var buttonElement = formObject.elements[5];	
   buttonElement.value = "Save";
   
   for(var i = 0;i<userList.length;i++)
    {
      if(userList[i].emailId===email)
        {
         alert("In Edit:MR./Ms."+" "+userList[i].fName +" "+userList[i].lName);
         firstNameElement.value = userList[i].fName;
         lastNameElement.value = userList[i].lName;
         emailElement.value = userList[i].emailId;
         phoneNoElement.value = userList[i].phn;
         websiteElement.value = userList[i].web;
         break;
        }
    }
  buttonElement.onclick = function () { save(i,tableId); return false;};     
 
}//editObject






function refreshTable(tableId)
{

   var table = document.getElementById(tableId);
  
   var lastRow = table.rows.length;
   while (lastRow > 1) 
      {
        table.deleteRow(lastRow-1);
        lastRow--;
      }

   alert("Refreshing...");
   
   for(var i=0;i<userList.length;i++)
   {
      var rowCount = table.rows.length;
      var row = table.insertRow(rowCount);

      var cell1= row.insertCell(0);
      cell1.innerHTML= userList[i].fName;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = userList[i].lName;
            
      var cell3 = row.insertCell(2);
      cell3.innerHTML = userList[i].emailId;

      var cell4 = row.insertCell(3);
      cell4.innerHTML = userList[i].phn;
            
      var cell5 = row.insertCell(4);
      cell5.innerHTML = userList[i].web;  
      
      var mail = userList[userList.length-1].emailId;
      var cell6 = row.insertCell(5);
      var deleteButton =document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = function() {deleteObject(mail,tableId);}
      cell6.appendChild(deleteButton);


      var cell7 = row.insertCell(6);
      var editButton =document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.onclick = function() {editObject(mail,tableId);}
      cell7.appendChild(editButton);
  }
}





function deleteObject(email,tableId)
{
   for(var i = 0;i<userList.length;i++)
    {
      if(userList[i].emailId===email)
        {
         alert("Data Deleted:MR./Ms."+" "+userList[i].fName +" "+userList[i].lName);
         userList.splice(i,1);
         count--;
         refreshTable(tableId);
        }
    }
   
}//deleteObject 





function createTable(tableId)
{
   var table = document.getElementById(tableId);
   var rowCount = table.rows.length;
   var row = table.insertRow(rowCount);
            
   var cell1= row.insertCell(0);
   cell1.innerHTML= userList[count].fName;

   var cell2 = row.insertCell(1);
   cell2.innerHTML = userList[count].lName;
            
   var cell3 = row.insertCell(2);
   cell3.innerHTML = userList[count].emailId;

   var cell4 = row.insertCell(3);
   cell4.innerHTML = userList[count].phn;
            
   var cell5 = row.insertCell(4);
   cell5.innerHTML = userList[count].web;  

   var mail = userList[userList.length-1].emailId;
   var cell6 = row.insertCell(5);
   var deleteButton =document.createElement("button");
   deleteButton.innerHTML = "Delete";
   deleteButton.onclick = function() {deleteObject(mail,tableId);}
   cell6.appendChild(deleteButton);
   
   var cell7 = row.insertCell(6);
   var editButton =document.createElement("button");
   editButton.innerHTML = "Edit";
   editButton.onclick = function() {editObject(mail,tableId);}
   cell7.appendChild(editButton);

   count++;
   
        
}//createTable

           
function addRow(tableId)
{
   var firstName=document.getElementById("firstname");
   var lastName=document.getElementById("lastname");
   var email=document.getElementById("email");
   var phoneNo=document.getElementById("phone");
   var website=document.getElementById("website");
            
   userList[count] = {
             "fName":firstName.value,
             "lName":lastName.value,
           "emailId":email.value,
               "phn":phone.value,
               "web":website.value
                    };
   
   createTable(tableId);
}//addRow

           
