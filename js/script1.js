
// Add note to local storage
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  
  
    if (addTitle.value == "" || addTxt.value == "") {
        return alert("Please add Comment Title and Details")
    }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));


 //function callme(mydata4)
 var username=localStorage.getItem("loginid");

 
 var mydata="login="+username+"&title="+addTitle.value+"&comment="+addTxt.value;
	alert(mydata);
$.ajax({
					type: "POST",
					url: "http://127.0.0.1:1234/cm1",
					dataType: "text",
					data:mydata,
					success: function(result, status, xhr){
					alert(result.comment);
					
	localStorage.setItem("comment", comment);
	location.href="http://127.0.0.1:1234/blog-details";
					
	

}
  
})



   addTxt.value = "";
  addTitle.value = "";

//   console.log(notesObj);
  showNotes();
  
  
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note">
            <p class="note-counter">Comment ${index + 1}</p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete Comment</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Edit Comment</button>
        </div>
            `;
  });
  
  


  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Comments Yet! Add a comment now.`;
  }
}

// Function to delete a note
let deletNote = localStorage.getItem("addTxt.value");

//$(document).on('click', '.note-btn',function(event)

function deleteNote(index) {
  console.log("I am deleting", index);
    let confirmDel = confirm("Delete this comment?");
    if (confirmDel == true) {
		
		   let notes = localStorage.getItem("notes");
		   
		   
		   	/* delete add*/
		 // var mydata="login="+username+"&title="+addTitle.value+"&comment="+addTxt.value;
	
	//alert(notes);
	/*
		$.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:1234/delete',
		dataType: "text",
					dataType: "text",
					data:mydata,
				/*	data:
					{
				login:username,
				title: addTitle.value,
				mydata4: addTxt.value
					} 
					success: function(result, status, xhr){
					alert(result.comment);
					
		localStorage.setItem("comment", comment);
	
		location.href="http://127.0.0.1:1234/blog-details"; 
		
		

		// }else{
		alert(data);
		

            },
            
                
            
         
		});
		
		*/
		/*delete add end!*/
		
				
		
			
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
		
		
					
		
        showNotes();
    }
  


// Function to Edit the Note
function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (addTitle.value !== "" || addTxt.value !== "") {
      return alert("Please clear the form before editing a comment")
    } 

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    console.log(notesObj);

    notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
}


showNotes();