// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import { getEnvironments } from './src/helpers';

require('dotenv').config({
    path: '.env.test'
})

jest.mock('./src/helpers', () => ({
    getEnvironments: () => ({ ...process.env })
}))
