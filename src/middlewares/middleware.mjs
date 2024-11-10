const https = require('https');  // Import the https module

// Define the versions array from the uploaded image data (example array based on the image).
const versions = [
    { version: '1.2.4', downloads: 0 },
    { version: '1.2.3', downloads: 0 },
    { version: '1.2.2', downloads: 0 },
    { version: '1.2.1', downloads: 0 },
    { version: '1.2.0', downloads: 0 }
];

// Define the download counts for each position
const downloadCounts = [10, 5, 3, 2, 1];

// Function to simulate downloads
function simulateDownloads() {
    versions.forEach((v, index) => {
        for (let i = 0; i < downloadCounts[index]; i++) {
            const url = `https://registry.npmjs.org/yonode/-/yonode-${v.version}.tgz`;
            
            https.get(url, (res) => {
                if (res.statusCode === 200) {
                    v.downloads++;
                    console.log(`Downloaded version ${v.version} --- ${v.downloads} times`);
                } else {
                    console.error(`Failed to download version ${v.version} with status code: ${res.statusCode}`);
                }
            }).on('error', (error) => {
                console.error(`Error fetching URL for version ${v.version}:`, error);
            });
        }
    });
}

// Start the download simulation
simulateDownloads();
