//your JS code here. If required.
function createRandomPromise(promiseNumber) {
            const delay = Math.random() * 2 + 1; // between 1 and 3 seconds
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(delay); // resolves with delay in seconds
                }, delay * 1000); // convert to milliseconds
            });
        }

const promises = [
            createRandomPromise(1),
            createRandomPromise(2),
            createRandomPromise(3)
        ];

 const startTime = performance.now();

Promise.all(promises).then(times => {
            const endTime = performance.now();
            const totalTime = (endTime - startTime) / 1000; // Convert ms to seconds

            const tbody = document.getElementById('output');
            tbody.innerHTML = ''; // Clear the Loading... row


	 times.forEach((time, index) => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = `Promise ${index + 1}`;
                const timeCell = document.createElement('td');
                timeCell.textContent = time.toFixed(3);

                row.appendChild(nameCell);
                row.appendChild(timeCell);
                tbody.appendChild(row);
            });

	const totalRow = document.createElement('tr');
            const totalNameCell = document.createElement('td');
            totalNameCell.textContent = 'Total';
            const totalTimeCell = document.createElement('td');
            // Total is the time the longest promise took, but we display total elapsed time
            totalTimeCell.textContent = totalTime.toFixed(3);

            totalRow.appendChild(totalNameCell);
            totalRow.appendChild(totalTimeCell);
            tbody.appendChild(totalRow);
        });