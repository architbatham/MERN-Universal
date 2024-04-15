import http from 'http';
import url from 'url';
import fs from 'fs';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let filePath = './views' + parsedUrl.pathname + '.html';

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            filePath = './views/pnf.html'; // File not found, serve the 404 page
        }

        // Read the file asynchronously
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    });
});

server.listen(8081, () => {
    console.log("Server is running at http://localhost:8081");
});
