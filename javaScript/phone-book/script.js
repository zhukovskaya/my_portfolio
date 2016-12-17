 window.onload = function(){ 

   var doc = document,
	name = doc.getElementById("user-name"),
	phone = doc.getElementById("phone"),
	email = doc.getElementById("email"),
	buttonAdd = doc.getElementById("add"),
	phoneRegExp = /^([+]38)[(][\d]{3}[)]([\d]){7}$/im,
	emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	errorMessage = doc.getElementById("error"),
	form = doc.getElementById("info"),
	tableBody = doc.getElementById("table-body");
	searchBtn = doc.getElementById("search-btn");
	resetBtn = doc.getElementById("reset-btn");
	search = doc.getElementById("search");

	buttonAdd.addEventListener("click", add);

// creating a table

	function add() {
		if(!isValid ()) return;
		
		var newRow = tableBody.insertRow(-1);
		var cellName = newRow.insertCell(-1);
		cellName.innerHTML = name.value;
		var cellPhone = newRow.insertCell(-1);
		cellPhone.innerHTML = phone.value;
		var cellEmail = newRow.insertCell(-1);
		cellEmail.innerHTML = email.value;
		var cellDelete = newRow.insertCell(-1);
		cellDelete.innerHTML = "<a>Delete</a>";

	}
// delete a row

	tableBody.addEventListener("click", deleteContact);	

	function deleteContact(event) {
	  	if ((event.target.innerText == "Delete") && (event.target == event.target.parentNode.lastChild)) {
	    	tableBody.deleteRow((event.target.parentNode.parentNode.rowIndex)-1);
	  	}
	}

// search name in the table

	searchBtn.addEventListener("click", searchInTable);
	
	function searchInTable () {
 		 	  			
   			for (var i = 0; i < tableBody.rows.length; i++) {
    			if (tableBody.rows[i].firstChild.innerHTML == search.value || search.value == "") {
    				tableBody.rows[i].style.display = "table-row";
   			
   				} else {
      				tableBody.rows[i].style.display = "none";
   					}
				}
	}

	resetBtn.addEventListener("click", resetSearch);
	
	function resetSearch() {
		search.value = "";
		searchInTable();
	}
		


//validation

	function validName() {
		return !!name.value.trim();
		
	}

	function validPhone() {
		return phoneRegExp.test(phone.value); 
	}

	function validEmail() {
	 	return emailRegExp.test(email.value);
	}

	 function isValid() {
		if(!validName() || !validPhone() || !validEmail()) {
			errorMessage.innerHTML = "Please, enter <strong>valid</strong> information";
			errorMessage.classList.remove("alert", "alert-success");
			errorMessage.classList.add("alert", "alert-danger");
			return false;
		} else {
			errorMessage.innerHTML = "You have added a new person to your phonebook. Please, add more information and test search/reset buttons.";
			errorMessage.classList.remove("alert", "alert-danger");
			errorMessage.classList.add("alert", "alert-success");
			return true;
		}
	}
}
