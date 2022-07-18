const https = require('https');
const fs = require('fs');

const url =
	'https://api.nasa.gov/planetary/apod?api_key=u3YNZ6TQVGd5YcewPVcZphZlytyqaf5zj2QCYO2f&count=1';

async function getGif() {
	let fileData = fs.readFileSync('README.md', 'utf8');

	https.get(url, (res) => {
		res.on('data', (chunk) => {
			dataObj = JSON.parse(chunk);

			console.log(dataObj[0].url);

			fileData = fileData.replace(
				/<!-- #image -->.*<!-- #end -->/gm,
				`<!-- #image --><img align="center" src="${dataObj[0].url}"></br><!-- #end -->`
			);

			console.log(fileData);

			fs.writeFile('README.md', fileData, function (err) {
				if (err) {
					return console.log(err);
				}
				console.log('The file was saved!');
			});
		});
	});
}

getGif();
