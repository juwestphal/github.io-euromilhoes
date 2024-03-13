        function generateNumbers() {
            var numbers = [];
            var stars = [];

            for (var i = 1; i <= 5; i++) {
                var num = document.getElementById('num' + i).value;
                numbers.push(num);
            }

            for (var j = 1; j <= 2; j++) {
                var star = document.getElementById('star' + j).value;
                stars.push(star);
            }

            alert("Números: " + numbers.join(", ") + "\nEstrelas: " + stars.join(", "));
        }