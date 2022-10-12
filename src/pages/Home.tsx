import { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

import './home.css';
type houseProps = {
  name: string;
  region: string;
};

export default function Home() {

  const [house, setHouse] = useState<houseProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://anapioficeandfire.com/api/houses", {
        method: "GET"
      });
      const jsonData = await data.json();
      setHouse(jsonData);
    };
    api();
  }, []);

  return (
        <main className="main">
          <div className="responsive-wrapper">
            <div className="main-header">
              <h1>House</h1>
            </div>
            <div className="content">
              <div className="content-main">
                <div className="card-grid">
                  {/* house card */}
                  {
                    house.map((house, index) => {
                      return  <article className="card" key={index}>
                      <div className="card-header">
                        <div>
                          <h3 id='header'>{house.name}</h3>
                        </div>
                      </div>
                      <div className="card-body">
                        <p>Region: {house.region} </p>
                      </div>
                      <div className="card-footer">
                      <Link to={`/house/${index+1}`}> View {house.name}</Link>
                      </div>
                    </article>})
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
  );
}

