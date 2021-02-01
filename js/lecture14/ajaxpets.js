let url = "http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/ajaxpets.php";

function displaySelectedPets(data) {
  console.log(data);
}

function displayError() {

}

function showPets() {
  let selectedAnimal = $("input[type='radio']:checked").val();
  console.log(selectedAnimal);
  $.ajax(url,
      {
        type: "GET",
        origin: url,
        mode: 'cors',
        headers: {
          "Access-Control-Allow-Origin":"*",
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            animal: selectedAnimal
          }
      })
  .done(displaySelectedPets)
  .fail(displayError);

}
$(function(){
  let animalRadio =  $("input[name=animal]");
  animalRadio.click(showPets);
});