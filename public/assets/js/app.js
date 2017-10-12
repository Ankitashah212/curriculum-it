// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  // $(".container1").hide();
  // $(".classes").hide();
  // $(".container2").hide();
  
  $("#enroll").on("click", function(event){
    $(".container1").show();
    $(".classes").show();
    $(".well").hide();

  })

  $("#track").on("click", function(event){
    $(".container2").show();
    $(".classes").hide();
    $(".well").hide();
    $(".container1").hide();
  })

  $("#home").on("click", function(event){
    $(".container2").hide();
    $(".classes").hide();
    $(".well").show();
    $(".container1").hide();
  })

  // $(".change-sleep").on("click", function(event) {
  //   var id = $(this).data("id");
  //   var newSleep = $(this).data("newsleep");

  //   var newSleepState = {
  //     sleepy: newSleep
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "PUT",
  //     data: newSleepState
  //   }).then(
  //     function() {
  //       console.log("changed sleep to", newSleep);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newCat = {
  //     name: $("#ca").val().trim(),
  //     sleepy: $("[name=sleepy]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/cats", {
  //     type: "POST",
  //     data: newCat
  //   }).then(
  //     function() {
  //       console.log("created new cat");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
