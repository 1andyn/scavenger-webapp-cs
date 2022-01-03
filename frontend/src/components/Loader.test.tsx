import '@testing-library/jest-dom'
import { isExportDeclaration } from 'typescript';
import { Loader, getParsedData, getImageData } from '../components/Loader'

test ('Test line parsing with test keyword parameters 1', ()=> {
    const parsedLine = getParsedData('title:', 'title: this is my parsed data ', 0)
    expect(parsedLine).toBe('this is my parsed data')
});

test ('Test failed line parsing output', ()=> {
    const sampleLine = 2
    const sampleKeyword = 'title:'
    try  {
        const parsedLine = getParsedData(sampleKeyword, ' this is my parsed data ', sampleLine)
        throw Error(`Shouldn't reach here`)
    } catch (ex) {
        expect(ex.message).toBe(`Expected '${sampleKeyword}' keyword in line ${sampleLine} but didn't.`)
    }
});


