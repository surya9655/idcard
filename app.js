let imageFile; 

       
        function loadImage(event) {
            imageFile = event.target.files[0];
        }

        document.getElementById('btn').addEventListener('click', displayIDCard);

        function displayIDCard() {
           
            const id = document.getElementById('id').value;
            const blood = document.getElementById('blood').value;
            const mail = document.getElementById('mail').value;
            const phone = document.getElementById('number').value;

            
            if (!id || !blood || !mail || !phone || !imageFile) {
                alert("Please fill all fields and upload a photo.");
                return;
            }

           
            document.getElementById('IDNO').innerText = id;
            document.getElementById('BLOOD').innerText = blood;
            document.getElementById('EMAIL').innerText = mail;
            document.getElementById('PHONENUMBER').innerText = phone;

          
            const imgDisplayed = document.getElementById('imgDisplayed');
            imgDisplayed.src = URL.createObjectURL(imageFile); 

            
            document.getElementById('cardContainer').style.display = 'block';
        }