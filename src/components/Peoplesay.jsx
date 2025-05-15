import { useEffect, useState } from 'react';

const PeopleSaySection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error loading testimonials:', err));
  }, []);

  return (
    <section className="fontStyle py-16 bg-base-200" id="people-say">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-gray-500 mb-10">Real words from real users who love EventeXplorer.</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl p-6 rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="avatar mb-4 mx-auto">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={t.image} alt={t.name} />
                </div>
              </div>
              <p className="italic text-gray-600 mb-2">"{t.comment}"</p>
              <h3 className="font-bold text-primary">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSaySection;
