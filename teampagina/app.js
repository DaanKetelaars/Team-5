const CONFIG = {
    api: './list.json'
}




const cards = document.querySelectorAll('li');


fetch(CONFIG.api)
    .then(response => response.json())
    .then(data => {

        const firstNames = data.map(item => {
            return item.name
        });

        function makeUL(firstNames) {
            const list = document.createElement('article');

            for (let i = 0; i < firstNames.length; i++) {
                const item = document.createElement('a');
                item.appendChild(document.createTextNode(firstNames[i]));

                list.appendChild(item);
            }

            return list;
        }

        document.getElementById('whiteboard').appendChild(makeUL(firstNames));


        const anchorDaan = document.querySelector('a:nth-child(1)');
        anchorDaan.setAttribute("href", "https://daanketelaars.github.io/WAFS-Visitekaartje/visitekaartje/");

        const anchorTristan = document.querySelector('a:nth-child(2)');
        anchorTristan.setAttribute("href", "https://github.com/TristanVarewijck/css-to-the-resque/visitekaartje");

        const anchorPepijn = document.querySelector('a:nth-child(3)');
        anchorPepijn.setAttribute("href", "https://ppijn.github.io/web-app-from-scratch-2122/visitekaartje/index.html");

        const anchorJulian = document.querySelector('a:nth-child(4)');
        anchorJulian.setAttribute("href", "https://juliandecloe.github.io/WAFS-visitekaartje/");

        const anchorNora = document.querySelector('a:nth-child(5)');
        anchorNora.setAttribute("href", "https://norakramer1.github.io/WAfS-visitekaartje/");

        // !!!!!! don't delete this code: necessary if tribe api works again


        // const memberFirstName = data.map(item => {
        //     const newCardOne = document.createElement('p');
        //     newCardOne.appendChild(document.createTextNode(item[0].name));
        //     cardOne.appendChild(newCardOne);
        //     // return document.body.insertAdjacentHTML('beforebegin', `<p>${item.name}</p>`)
        // })

        // const teamInfo = data.map(item => {
        //     return item.teams
        // })

        // const teamId = (teamInfo.map(item => {
        //     return item.teamId
        // }));

        // console.log(teamInfo.filter(item => item.teamId === 5))


    })
    .catch((error) => {
        console.error('error');
    });