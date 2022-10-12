import React, { useEffect, useState } from 'react'
import { Route, Link, useParams } from 'react-router-dom'

export interface IHouseDetailsProps {}
type houseProps = {
  name: string;
  region: string;
  coatOfArms: string;
};

const HouseDetails: React.FunctionComponent<IHouseDetailsProps> = (props)=> {
  const [house, setHouse] = useState<houseProps>();
  const { id } = useParams();
  useEffect(() => {
    const api = async () => {
      const data = await fetch(`https://anapioficeandfire.com/api/houses/${id}`, {
        method: "GET"
      });
      if(data.ok) {
        const jsonData = await data.json();
        setHouse(jsonData);
      }
     
    };
    api();
  }, []);

  console.log(house);

  return <div> <main className="main">
  <div className="responsive-wrapper">
    <div className="main-header">
      <h1>House</h1>
    </div>
    <div className="content">
      <div className="content-main">
          {/* house card */}
          {house &&
            <article className="card">
              <div className="card-header">
                <div>
                  <h3>{house?.name}</h3>
                </div>
              </div>
              <div className="card-body">
                <p>{house?.coatOfArms}</p>
              </div>
              <div className="card-footer">
              <Link to={`/`}> back to houses</Link>
              </div>
            </article>}

            {!house &&
            <article className="card">
              <div className="card-header">
                <div>
                  <h3>This house number does not exist</h3>
                </div>
              </div>
              <div className="card-body">
                <p>Please double check this number</p>
              </div>
              <div className="card-footer">
              <Link to={`/`}> back to houses</Link>
              </div>
            </article>}
      </div>
    </div>
  </div>
</main></div>;
}

export default HouseDetails
