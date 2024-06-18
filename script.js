<script>
function analyzeData() {
    let dataInput = document.getElementById('dataInput').value;
    let dataArray = dataInput.split(',').map(Number);

    let mean = calculateMean(dataArray);
    let median = calculateMedian(dataArray);
    let mode = calculateMode(dataArray);

    document.getElementById('mean').innerText = `Mean: ${mean}`;
    document.getElementById('median').innerText = `Median: ${median}`;
    document.getElementById('mode').innerText = `Mode: ${mode}`;
}

function calculateMean(data) {
    let sum = data.reduce((a, b) => a + b, 0);
    return (sum / data.length).toFixed(2);
}

function calculateMedian(data) {
    data.sort((a, b) => a - b);
    let mid = Math.floor(data.length / 2);
    return data.length % 2 !== 0 ? data[mid] : ((data[mid - 1] + data[mid]) / 2).toFixed(2);
}

function calculateMode(data) {
    let frequency = {};
    data.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
    });

    let maxFreq = 0;
    let modes = [];
    for (let key in frequency) {
        if (frequency[key] > maxFreq) {
            maxFreq = frequency[key];
            modes = [key];
        } else if (frequency[key] === maxFreq) {
            modes.push(key);
        }
    }

    return modes.length === data.length ? 'No mode' : modes.join(', ');
}
</script>
