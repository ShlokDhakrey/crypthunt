export const contact_html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - CryptHunt</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-900 text-white">
    <!-- Navbar -->
    <nav class="flex justify-between items-center py-4 px-8 bg-gray-900">
        <div class="flex items-center space-x-2">
            <div
                class="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-full flex justify-center items-center">
                <span class="text-white text-xl font-bold">C</span>
            </div>
            <h1 class="text-2xl font-bold">CryptHunt</h1>
        </div>

        <ul id="menu" class="hidden md:flex space-x-6 text-lg">
            <li><a href="/" class="hover:text-blue-500">Home</a></li>

            <li><a href="/play" class="hover:text-blue-500">Play</a></li>
            <li><a href="/leaderboard" class="hover:text-blue-500">LeaderBoard</a></li>
            <li><a href="/rules" class="hover:text-blue-500">Rules</a></li>
            <li><a href="/contact" class="hover:text-blue-500">ContactUs</a></li>
        </ul>

        <div class="flex items-center space-x-4">
          <!--  <button id="login-btn"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg md:inline-block block">
                Login
            </button>-->
            <!-- Hamburger Button -->
            <button id="menu-btn" class="block md:hidden text-gray-300 text-2xl focus:outline-none">
                <span>☰</span>
            </button>
        </div>
    </nav>
    <!-- Dropdown Menu for Small Screens -->
    <div id="dropdown-menu" class="hidden bg-gray-800 md:hidden">
        <ul class="space-y-2 text-lg text-center py-4">
            <li><a href="/" class="block hover:text-blue-500">Home</a></li>
            <li><a href="/play" class="block hover:text-blue-500">Play</a></li>
            <li><a href="/leaderboard" class="block hover:text-blue-500">LeaderBoard</a></li>
            <li><a href="/rules" class="block hover:text-blue-500">Rules</a></li>
            <li><a href="/contact" class="block hover:text-blue-500">ContactUs</a></li>
        </ul>
    </div>
    <!-- Main Content -->
    <section class="text-center py-24 px-8">
        <h2 class="text-4xl font-bold mb-4">Contact Us</h2>
        <p class="text-gray-300 text-lg mb-8">Feel free to reach out for any questions or assistance related to
            CryptHunt.</p>

        <div class="max-w-lg mx-auto space-y-4">
            <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-white">
                    📧
                </div>
                <div>
                    <h3 class="font-bold">Email</h3>
                    <p>support@crypthunt.com</p>
                </div>
            </div>

            <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-purple-600 rounded-full flex justify-center items-center text-white">
                    📞
                </div>
                <div>
                    <h3 class="font-bold">Phone</h3>
                    <p>+914567890</p>
                </div>
            </div>

            <div class="flex items-center space-x-4">


            </div>
        </div>
    </section>



    <script>

        const menuBtn = document.getElementById('menu-btn');
        const dropdownMenu = document.getElementById('dropdown-menu');
        menuBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        const loginBtn = document.getElementById('login-btn');

        loginBtn.addEventListener('click', () => {
            window.location.href = '/login';
        });


    </script>
</body>

</html>
`