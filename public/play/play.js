export const play_html = `
    <section class="text-center py-16 px-8">
        <!-- Question Section -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 id="question" class="text-2xl font-bold mb-4">Loading question...</h2>

            <!-- Answer Input -->
            <input type="text" id="answer" class="w-full p-3 bg-gray-700 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your answer here" />

            <!-- Buttons -->
            <div class="flex justify-center space-x-4 mt-6">
                <button id="submit-btn" class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-lg">
                    Submit
                </button>
               
            </div>
        </div>
    </section>
    <script>
        // Utility function to parse URL parameters
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        const questionElement = document.getElementById('question');
        const answerInput = document.getElementById('answer');
        const submitBtn = document.getElementById('submit-btn');
        const nextBtn = document.getElementById('next-btn');

        // Fetch question using the queNo parameter from the URL
        async function fetchQuestion(queNo) {
            try {
                const response = await fetch('/internal/getquestion', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: "queNo=" + queNo
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch question');
                }

                const data = await response.json();
                if (data.success) {
                    questionElement.textContent = data.question || 'No question found!';
                } else {
                    questionElement.textContent = data.type;
                }
            } catch (error) {
                console.error('Error fetching question:', error);
                questionElement.textContent = 'Error loading question!';
            }
        }

        // Extract queNo from URL and fetch the question
        const queNo = getQueryParam('queNo');
        if (queNo) {
            fetchQuestion(queNo);
        } else {
            questionElement.textContent = 'Invalid question number!';
        }

        // Submit button functionality
        submitBtn.addEventListener('click', () => {
            const userAnswer = answerInput.value.trim();
            alert('You submitted :' + userAnswer);
        });

        // Next button functionality
        nextBtn.addEventListener('click', () => {
            const nextQueNo = parseInt(queNo, 10) + 1;
            window.location.href = '/play?queNo='+ nextQueNo;
        });
    </script>
</body>

</html>
`

