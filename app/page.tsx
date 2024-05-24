import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to My Website!</h1>
        <p className="text-lg text-gray-600">Discover amazing things here.</p>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="list-disc pl-4">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

