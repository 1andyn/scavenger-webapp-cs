
export const Loader = async (text : string) => {

    var fileBuffer
    const resp = await fetch(text)
    if(resp.ok) {
        fileBuffer = await resp.text()
    }

    if(!fileBuffer) {
        throw Error("File Buffer is empty!")
    }
    const lines = fileBuffer.toString().split('\n');

    var lineSegment = 0
    var result : Array<{prompt: string, images: Array<string>, answer: string, intermission: string, interImages: Array<string>}> = []
    var currentStep = { prompt: '', images: [] as any, answer: '', intermission: '', interImages: [] as any }
    lines.forEach((line) => {
        switch (lineSegment % 5) {
            case 0:
                currentStep.prompt = getParsedData('prompt:', line, lineSegment)
                break;
            case 1:
                currentStep.images = getImageData('images:', line, lineSegment)
                break;
            case 2:
                currentStep.answer = getParsedData('answer:', line, lineSegment)
                break;
            case 3:
                currentStep.intermission = getParsedData('intermission:', line, lineSegment)
                break;
            case 4:
                currentStep.interImages = getImageData('interImages:', line, lineSegment)
                result.push(currentStep);
                currentStep = { prompt: '', images: [] as any, answer: '', intermission: '', interImages: [] as any }
                break;
            default:
                throw Error('Line could not be parsed correctly...')
        }

        lineSegment++;
    })

    return result
}

export const getParsedData = (keyword : string, line : string, segment : number) => {
    let copy = line.replace(keyword, '')
    if (copy.length === line.length) {
        throw new Error(`Expected '${keyword}' keyword in line ${segment} but didn't.`)
    }
    copy = copy.trim()
    return copy
}

export const getImageData = (keyword : string, line : string, segment : number) => {
    let copy = line.replace(keyword, '')
    copy = copy.trim()
    if (keyword !== 'images:' && keyword !== 'interImages:') {
        throw new Error(`Expected '${keyword}' keyword in line ${segment} but didn't.`)
    }
    let copyArray = copy.split(',')
    copyArray.forEach((line) => {
        line = line.trim()
    })
    return copyArray
}