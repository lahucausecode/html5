var userList = new Array();
var count = userList.length;




function findParentNode(parentName, childObj) {
    /**var testObj = childObj.parentNode;
    while(testObj.getAttribute('name')!= parentName) {
        alert('My name is ' + testObj.getAttribute('name'));
        testObj = testObj.parentNode;
    }**/
    alert('Finally found ');
}





function editObject(email,tableId)
{
   alert(email.value);
}//editObject






function refreshTable(tableId)
{

   var table = document.getElementById(tableId);
   var lastRow = table.rows.length;
   while (table.rows.length> 0) 
      {
        if(lastRow>1)
         table.deleteRow(lastRow-1);
      }

   var table = document.getElementById(tableId);
    
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

      var cell6 = row.insertCell(5);
      var deleteButton =document.createElement("button");
      deleteButton.innerHTML = "Delete";
      var mail = userList[userList.length].emailId;
      deleteButton.onclick = function() {deleteObject(mail,tableId); return false; }
      cell6.appendChild(deleteButton);


      var cell7 = row.insertCell(6);
      var editButton =document.createElement("button");
      editButton.innerHTML = "Edit";
      editButton.onclick = function() {editObject(mail,tableId); return false; }
      cell7.appendChild(editButton);

      
   }

}





function deleteObject(email,tableId)
{
   for(var i = 0;i<userList.length;i++)
    {
      var val = userList[i].emailId.value;
      if(val===email)
        {
         alert("Emails are: " + val + "  "+ email);
         alert("Data Deleted:");
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

   var cell6 = row.insertCell(5);
   var deleteButton =document.createElement("button");
   deleteButton.innerHTML = "Delete";
   cell6.appendChild(deleteButton);
   /**deleteButton.onclick = function(e) {
	findParentNode('row',this)
   };**/
   var mail = userList[userList.length-1].emailId.value;
   deleteButton.onclick = function() {deleteObject(mail,tableId); return false; }
  

   var cell7 = row.insertCell(6);
   var editButton =document.createElement("button");
   editButton.innerHTML = "Edit";
   editButton.onclick = function() {editObject(mail,tableId); return false; }
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

           
