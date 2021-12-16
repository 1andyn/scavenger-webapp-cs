import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.resolve(__dirname, '../datasource/rawdata')

const Loader = () => {
    const fileBuffer = fs.readFileSync(filePath, { encoding: 'utf8' });
    const lines = fileBuffer.split(/\r?\n/);

    var lineSegment = 0
    var result = []
    var currentStep = { prompt: '', images: [], answer: '', intermission: '' }
    lines.forEach((line) => {
        switch (lineSegment % 4) {
            case 0:
                currentStep.prompt = getParsedData('prompt:', line, lineSegment)
                break;
            case 1:
                currentStep.images = getParsedData('images:', line, lineSegment)
                break;
            case 2:
                currentStep.answer = getParsedData('answer:', line, lineSegment)
                break;
            case 3:
                currentStep.intermission = getParsedData('intermission:', line, lineSegment)
                result.push(currentStep);
                currentStep = { prompt: '', images: [], answer: '', intermission: '' }
                break;
            default:
                throw Error('Line could not be parsed correctly...')
        }

        lineSegment++;
    })

    return result
}

const getParsedData = (keyword, line, segment) => {
    let copy = line.replace(keyword, '')
    if (copy.length === line.length) {
        throw new Error(`Expected '${keyword}' keyword in line ${segment} but didn't.`)
    }
    copy = copy.trim()
    if (keyword === 'images:') {
        copy = copy.split(',')
        copy.forEach((line) => {
            line = line.trim()
        })
    }
    return copy
}

export default Loader;