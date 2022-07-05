import React from 'react'
import Image from 'next/image'
const NextImage = ({src}) => {
  return (
    <>
    <Image blurDataURL={src} src={src} height="100%" width="100%" placeholder="blur"/>
    </>
  )
}

export default NextImage


/**
 * export async function getBase64ImageUrl(imageId: string): Promise<string | undefined> {
    const response = await fetch(`${process.env.CLOUDINARY_BASE_URL}w_100/e_blur:1000,q_auto,f_webp${imageId}`);
    const buffer = await response.arrayBuffer();
    const data = Buffer.from(buffer).toString('base64');
    return `data:image/webp;base64,${data}`;
}
 * 

export async function getStaticProps() {
    const imageSrc = process.env.CLOUDINARY_EXAMPLE_IMAGE_SRC;
    if (!imageSrc) {
        throw new Error('Missing CLOUDINARY_EXAMPLE_IMAGE_SRC env variable');
    }

    const blurDataUrl = await getBase64ImageUrl(imageSrc);
    return {
        props: {
            exampleImage: {
                src: imageSrc,
                blurDataUrl: blurDataUrl,
            },
        },
    };
}



   <Image
                        src={exampleImage.src}
                        alt="Example"
                        width="1920"
                        height="1280"
                        layout="responsive"
                        quality="75"
                        sizes="60vw"
                        placeholder="blur"
                        blurDataURL={exampleImage.blurDataUrl}
                    />
                    
 */
