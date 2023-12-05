import React from 'react';

interface DynamicComponentProps {
    imgSrc: string;
    altText: string;
    heading: string;
    paragraph: string;
    imagePosition?: 'left' | 'right';
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({
    imgSrc,
    altText,
    heading,
    paragraph,
    imagePosition = 'left',
}) => {
    const isImageOnLeft = imagePosition === 'left';

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div
                    className={`grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] ${isImageOnLeft ? '' : 'lg:flex-row-reverse'
                        }`}
                >
                    <img
                        alt={altText}
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
                        height="310"
                        src={imgSrc}
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{heading}</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                {paragraph}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DynamicComponent;
