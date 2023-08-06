import os from 'node:os';
import path from 'node:path';
import fs, { readFileSync } from 'node:fs';
import fs from 'node:fs/promises';
import http from 'node:http';
import { stringify } from 'node:querystring';

console.log('Información del sistema');
console.log('-----------------');
console.log('Nombre del sistema operativo', os.platform());
console.log('Versión del sistema operativo', os.release());
console.log('Ariquitectura', os.arch());
console.log('CPUs', os.cpus());
console.log('Memoria libre', os.freemem());
console.log('Memoria total', os.totalmem());
console.log('Info del usuario', os.userInfo());
console.log('Nombre de la machine', os.hostname());
console.log('Uptime', os.uptime());

const filePath = path.join('Documents', 'Programming', 'Node-Express'); // Une diferentes partes de una url según el OS
console.log('Une diferentes partes de una url según el OS -->', filePath);
console.log('Nombre del archivo/carpeta final del path -->', path.basename(filePath)); // Nombre del archivo/carpeta final del path
console.log('Ruta del archivo/carpeta final del path -->', path.dirname(filePath)); // Ruta del archivo/carpeta final del path
console.log('Objeto con datos relacionados sobre la ruta -->', path.parse(filePath)); // Objeto con datos relacionados sobre la ruta
console.log('Resuelve la ruta completa con el nombre del archivo que recibe -->', path.resolve('app-2.js')); // Resuelve la ruta completa con el nombre del archivo que recibe

// SYNC

const first = fs.readFileSync('./file-1.txt');
const second = fs.readFileSync('./file-2.txt', 'utf-8');
const third = fs.readFileSync('./file-3.txt');

console.log('como buffer -->', first);
console.log('convertido por utf-8 -->', second);
console.log('convertido por metodo toString() -->', third.toString());

fs.writeFileSync('./file-4.txt', 'Cree este archivo apartir de usar fs.writeFileSync en Node');
fs.writeFileSync('./file-4.txt', ' Modifiqué este archivo apartir de usar fs.writeFileSync y la flag "a" de append en Node', { flag: 'a' });
const fourth = fs.readFileSync('./file-4.txt', 'utf-8');
console.log(fourth);

// ASYNC

fs.readFile('./file-1.txt', (err, res) => {
    try {
        console.log(res.toString());
    } catch {
        console.log(err);
    }
});

const json = {
    en: {
        "title": "Información del sistema",
        "personal": {
            "first_name": "Fredy",
            "second_name": "Alessandro",
            "first_lastname": "Ortiz",
            "second_lastname": "Rivas",
            "birth_date": "09/10/1998",
        },
        "experience": {
            "mag": {
                "title": "Frontend Developer",
                "entity": "Ministerio de Agricultura y Ganadería",
                "since": "March 2023",
                "until": "Now"
            },
            "conexion": {
                "title": "Frontend Developer",
                "entity": "Asociación Conexión Al Desarrollo de El Salvador",
                "since": "January 2023",
                "until": "Now"
            },
            "one": {
                "title": "Frontend Developer",
                "entity": "ONE (Oracle Next Education)",
                "since": "November 2022",
                "until": "Now"
            },
        },
        "education": {
            "conexion": {
                "title": "Frontend Developer",
                "entity": "Asociación Conexión Al Desarrollo de El Salvador",
                "since": "January 2023",
                "until": "Now"
            },
            "one_alura": {
                "title": "Frontend Developer",
                "entity": "Alura Latam",
                "since": "November 2022",
                "until": "Now"
            },
            "one_oracle": {
                "title": "Frontend Developer",
                "entity": "Oracle",
                "since": "November 2022",
                "until": "Now"
            },
            "itca": {
                "title": "Mechatronics Engineer",
                "entity": "Escuela Especializada en Ingeniería ITCA FEPADE",
                "since": "January 2017",
                "until": "October 2023"
            },
        },
        "technologies": {
            "languages": [{
                "name": "JavaScript",
                "description": "This was my introduce language to the web development so yeah, it was my first 'Hello World!'"
            }, {
                "name": "Python",
                "description": "Python, in join with JavaScript, were my best friends to understand the OOP paradigm to build backend applications."
            }]
        }
    },
    es: {
        'title': 'Información del sistema',
        'data': {
            'Nombre del sistema operativo': os.platform(),
            'Versión del sistema operativo': os.release(),
        },
        'personal': {
            'first_name': 'Fredy',
            'second_name': 'Alessandro',
            'first_lastname': 'Ortiz',
            'second_lastname': 'Rivas',
            'birth_date': '10/09/1998',
        },
        'experience': {
            'mag': {
                'title': 'Desarrollador Frontend',
                'entity': 'Ministerio de Agricultura y Ganadería',
                'since': 'Marzo 2023',
                'until': 'Ahora'
            },
            'conexion': {
                'title': 'Desarrollador Frontend',
                'entity': 'Asociación Conexión Al Desarrollo de El Salvador',
                'since': 'Enero 2023',
                'until': 'Ahora'
            },
            'one': {
                'title': 'Desarrollador Frontend',
                'entity': 'ONE (Oracle Next Education)',
                'since': 'November 2022',
                'until': 'Ahora'
            },
        },
        'education': {
            'conexion': {
                'title': 'Desarrollador Frontend',
                'entity': 'Asociación Conexión Al Desarrollo de El Salvador',
                'since': 'Enero 2023',
                'until': 'Ahora'
            },
            'one_alura': {
                'title': 'Desarrollador Frontend',
                'entity': 'Alura Latam',
                'since': 'Noviembre 2022',
                'until': 'Ahora'
            },
            'one_oracle': {
                'title': 'Desarrollador Frontend',
                'entity': 'Oracle',
                'since': 'Noviembre 2022',
                'until': 'Ahora'
            },
            'itca': {
                'title': "Ingeniero en Mecatrónica",
                'entity': 'Escuela Especializada en Ingeniería ITCA FEPADE',
                'since': 'Enero 2017',
                'until': 'October 2023'
            },
        },
    }
};

const PORT = process.env.PORT ?? 1234;

const text = fs.readFile((err, data) => {
    try {
        return data;
    } catch (err) {
        console.log(err);
        return;
    };
})

// http.createServer((request, response) => {
//     res.statusCode = 200;
//     res.statusMessage = 'OK';
//     res.setHeader('Content-Type', 'text/plain; Charset=utf-8');
//     console.log('request received', req.url);
//     res.end('Eso tilín');
// }).listen(3000);

const processResponse = (req, res) => {

    console.log('request received', req.url);

    if (req.url === '/about') {
        res.write('Eso tilin desde about');
        res.end();
    } else if (req.url === '/') {
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.setHeader('Content-Type', 'application/json; Charset=utf-8');
        res.end(JSON.stringify(json));
    } else {
        res.write('404 tilin');
        res.end();
    };
};

const server = http.createServer(processResponse);

server.listen(PORT, () => {
    console.log(`Server listening on port... ${PORT}`);
});