import React from 'react';
import './styles/globals.css';
import Link from "next/link";

const Home = () => {
  return (
      <div>
      <h1 className="text-5xl mb-8 font-bold">Hobbies Around the Lou</h1>
          <Link href="counter" className="btn btn-neutral">
              Start
          </Link>
      </div>
  );
};

export default Home;