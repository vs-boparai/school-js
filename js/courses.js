$(document).ready(function () {
  
  try {

    // Start Show data from firebase database
    var database = firebase.database();
    
    getDB(database);

    $("#search_course").keyup(function() {
      let search_course = document.querySelector("#search_course").value;

      searchDB(database, search_course)
    })

    $("#clear_result").click(() => {
      document.getElementById("search_course").value = "";
      getDB(database);
    })
  } catch (error) {
    console.log(error);
  }
  
});

function getDB(database) {
  document.getElementById("courses").innerHTML = "";
  database.ref('courses').once('value', function (snapshot) {
    if (snapshot.exists()) {
      // Start Checking each value from database
      snapshot.forEach(function (data) {
        var dataValue = data.val();
        $('#courses').append(
          `
          <div class="col-3">
              <div class="card">
                  <img src="${dataValue.img_src}" class="course-img">
                  <div class="course-body">
                      <div class="course-heading">
                          ${dataValue.heading}
                      </div>
                      <p class="course-text">
                          ${dataValue.text}
                      </p>
                      <div class="course-price">
                          $ ${dataValue.price}
                      </div>
                  </div> 
              </div>
          </div>
          `
        );
      });
      // End Checking each value from database
    }
  });
  // End Show data from firebase database
}

function searchDB(database, search_course) {
  database.ref('courses').once('value', function (snapshot) {
    if (snapshot.exists()) {
      // Start Checking each value from database
      snapshot.forEach(function (data) {
        var dataValue = data.val();
        let heading = dataValue.heading.toLowerCase();
        if(heading.includes(search_course)) {
          document.getElementById("courses").innerHTML = "";
          $('#courses').append(
            `
            <div class="col-3">
                <div class="card">
                    <img src="${dataValue.img_src}" class="course-img">
                    <div class="course-body">
                        <div class="course-heading">
                            ${dataValue.heading}
                        </div>
                        <p class="course-text">
                            ${dataValue.text}
                        </p>
                        <div class="course-price">
                            $ ${dataValue.price}
                        </div>
                    </div> 
                </div>
            </div>
            `
          );
        }
      });
      // End Checking each value from database
    }
  });
  // End Show data from firebase database
}
