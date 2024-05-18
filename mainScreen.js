document.getElementById('fetchButton').addEventListener('click', async () => {

    try {
        // Make a GET request to the Node.js server

        const response = await fetch('http://localhost:3000/users');

        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        counter = 1
        newNameData = "";
        newUserNameData = "";
        newEmailData = "";

        // Extract names, usernames and email and update textfileds
        data.map(user => {
            if(counter < 4){
            newNameData += counter + " " + user.name + "\n"
            newUserNameData += counter + " " + user.username + "\n"
            newEmailData += counter + " " + user.email + "\n"
            counter++
            }
        });

        document.getElementById('nameTextArea').value = newNameData
        document.getElementById('userNameTextArea').value = newUserNameData
        document.getElementById('emailTextArea').value = newEmailData

    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
});