getData();
function getData() {
  fetch("https://tribe.api.fdnd.nl/v1/list")
    .then((response) => response.json())
    .then((responseJSON) => {
      let data = responseJSON.data;
      return data;
    })
    .then((data) => {
      console.log(data);

      let basketballPlayers = data
        .filter(function (student) {
          return student.teams[3] === 5;
        })
        .map(function (student) {
          // const info = {
          //   firstname: student.memberSurname,
          // };

          return student.memberSurname;
        });

      basketballPlayers.forEach(function (players) {
        console.log(players);
      });
    })

    .catch((error) => {
      console.log(error);
    });
}
