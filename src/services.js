import fs from 'fs'


export default function () {
    return JSON.stringify(fs.readFileSync('database/data.json'))
} 