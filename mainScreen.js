document.getElementById('fetchButton').addEventListener('click', async () => {

    try {
        // Make a GET request to the Node.js server

        const response = await fetch('http://localhost:3000/photos');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();



        const albumIds = data.map(photo => photo.albumId).join('\n');
        const ids = data.map(photo => photo.id).join('\n');
        const titles = data.map(photo => photo.title).join('\n');
        const thumbnailUrls = data.map(photo => photo.thumbnailUrl).join('\n');
        

        const arralbumId = albumIds.split("\n")
        const arrIds = ids.split("\n")
        const arrTitle = titles.split("\n")
        const arrThumbnailUrls = thumbnailUrls.split("\n")
        const arrPhotos = []

        for (let i = 0; i < 18; i++) {
            arrPhotos.push(new photosClass(arralbumId[i], arrIds[i], arrTitle[i], arrThumbnailUrls[i]))
        }


        arrPhotos.forEach(url => {

            // Create a card container for each image
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card');
            

            // Create an image element
            const imgElement = document.createElement('img');
            imgElement.src = url.thumbnailUrl;
            imgElement.alt = 'SVG image';
            imgElement.width = 200;
            imgElement.height = 100;

            const h3albumId = document.createElement('h3');
            h3albumId.innerText = "albumId:" + url.albumId

            const h3title = document.createElement('h3');
            h3title.innerText = "albumTitle:" + url.title

            const h3id = document.createElement('h3');
            h3id.innerText = "id:" +url.id

            cardContainer.appendChild(imgElement);
            cardContainer.appendChild(h3albumId);
            cardContainer.appendChild(h3title);
            cardContainer.appendChild(h3id);

            document.getElementById('svgContainer').appendChild(cardContainer);
        });

    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
});