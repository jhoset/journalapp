import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'drufubdsp',
    api_key: '631284518152315',
    api_secret: 's-yLXwtLmTnW9GWT4uEtfvtskuo',
    secure: true
})

describe('Tests on fileUpload', () => {


    test('Should upload file correctly to cloudinary', async () => {
        const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDLFYKw5q8KpIX4yRz9RD5C8FQQy7Zv_ChA&usqp=CAU";

        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'test.jpg')

        const url = await fileUpload(file)
        // console.log(url)
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
        expect(typeof url).toBe('string');

    })

    test('Should return NULL', async () => {
        const file = new File([], 'test.jpg');

        const url = await fileUpload(file)
        expect(url).toBe(null);
    })
})
