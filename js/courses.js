$(document).ready(function () {
  
    // Start Show data from firebase database
    var database = firebase.database();

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
  
});