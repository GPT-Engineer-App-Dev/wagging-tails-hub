import { useState } from "react";
import { Paw, Heart } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", description: "Friendly and outgoing" },
  { name: "German Shepherd", description: "Intelligent and versatile" },
  { name: "Golden Retriever", description: "Gentle and affectionate" },
  { name: "Bulldog", description: "Calm and courageous" },
  { name: "Beagle", description: "Merry and curious" },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
          <Paw className="mr-2" /> Doggopedia <Paw className="ml-2" />
        </h1>
        <p className="text-xl text-gray-600">Your ultimate guide to man's best friend</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Dogs are Amazing</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Loyal companions that offer unconditional love</li>
          <li>Can improve your physical and mental health</li>
          <li>Highly trainable and can learn various tasks</li>
          <li>Come in a wide variety of breeds, sizes, and personalities</li>
          <li>Provide security and protection for homes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Dog Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dogBreeds.map((breed) => (
            <div
              key={breed.name}
              className="border rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedBreed(breed)}
            >
              <h3 className="text-lg font-medium mb-2">{breed.name}</h3>
              <p className="text-gray-600">{breed.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedBreed && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h3 className="text-2xl font-bold mb-2">{selectedBreed.name}</h3>
            <p className="mb-4">{selectedBreed.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedBreed(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="mt-12 text-center text-gray-600">
        <p>Made with <Heart className="inline-block text-red-500" /> for dog lovers everywhere</p>
      </footer>
    </div>
  );
};

export default Index;
