"use client";

import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc?: string;
}

const TestimonialCard = ({ quote, name, title, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-sage-700 rounded-lg shadow-md p-6 border border-sage-600 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-8 w-8 text-sage-200" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        
        <p className="text-white italic mb-6 flex-grow">{quote}</p>
        
        <div className="flex items-center">
          {imageSrc ? (
            <div className="mr-4">
              <div className="h-10 w-10 relative rounded-full overflow-hidden">
                <Image 
                  src={imageSrc} 
                  alt={`${name}'s profile picture`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="mr-4">
              <div className="h-10 w-10 bg-sage-200 rounded-full flex items-center justify-center">
                <span className="text-sage-800 font-semibold text-sm">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-sage-200 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
