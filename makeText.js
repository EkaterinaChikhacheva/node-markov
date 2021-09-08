/** Command-line tool to generate Markov text. */
const fs = require('fs')
const process = require('process')
const axios = require('axios')
const markov = require('./markov')


/** Make Markov machine from text and generate text from it. */
function genetateText(text) {
    let mm = new markov.MarkovMachine(text)
    console.log(mm.makeText())
}

/** read file and generate text from it. */

function makeText(path){
    fs.readFile(path, "utf8", function cd(err, data) {
        if (err) {
            console.error(`Cannot read file: ${path}: ${err}`)
            process.exit(1)
        } else {
            genetateText(data)
        }
    })
}

async function makeURLText(url){
    let resp

    try{
        resp = await axios.get(url)
    } catch(err) {
        console.error(`Cannot read URL:${url} : ${err} `)
        process.exit(1)
    }
    genetateText(resp.data)
}

/** interpret cmdline to decide what to do. */

let [method, path] = process.argv.slice(2)

if (method === 'file') {
    makeURLText(path)
}
else if (method === 'url') {
    makeURLText(path)
}
else {
    console.log(`Unknown method: ${method}`)
    process.exit(1)
}