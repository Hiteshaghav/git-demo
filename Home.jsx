import React from 'react';
import "./Home.css"
const Home = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="hero-image" style={{ position: 'relative'}}>
        {/* <img src="" className="img-fluid w-100" alt="Delicious Recipe"  /> */}
        <div className="hero-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', fontSize: '3rem', padding: '10px', borderRadius: '5px' }}>Welcome to TadkaTales</h1>

          <p>Your go-to place for delicious recipes!</p>
        </div>
      </div>

      {/* Recipe Cards Section */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div className="col">
          <div className="card">
            <img src="/recipe2.png" className="card-img-top" alt="Puran Poli" />
            <div className="card-body">
              <h5 className="card-title">Puran Poli</h5>
              <p className="card-text">Puran Poli is a traditional Maharashtrian sweet flatbread made with a stuffing of jaggery, chana dal (split Bengal gram), and cardamom, encased in soft wheat dough. It’s rolled out and cooked on a griddle with ghee, enjoyed especially during festivals like Holi and Ganesh Chaturthi.</p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card">
            <div style={{ position: 'relative' }}>
              <img src="/recipe3.png" className="card-img-top" alt="Dosa" />
               
            </div>

            <div className="card-body">
              <h5 className="card-title">Dosa</h5>
              <p className="card-text">Dosa is a popular South Indian crispy crepe made from a fermented batter of rice and urad dal (black gram). Typically served with coconut chutney and sambar, it's a light yet filling breakfast or snack option.</p>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card">
            <div style={{ position: 'relative' }}>
              <img src="/recipe4.png" className="card-img-top" alt="Festive Special" />
              <h5 className="card-title">Festive Special</h5>
              <p className="card-text">Indian Diwali festive special recipes include a variety of sweet and savory treats like chakli, shankarpali, chivda, and ladoos. These traditional snacks are prepared to celebrate the festival with joy, sharing, and delicious flavors.</p>
            </div>
            
            </div>
          </div>


          <div className='col'>
            <div className="card">
            <div className="card-body">
            <img src="/recipe1.png" className="card-img-top" alt="Sprouts" />
            <h5 className="card-title">Sprouts</h5>
              <p className="card-text">Sprouts salad is a healthy, protein-rich dish made by mixing boiled sprouts with chopped vegetables like tomatoes, onions, and cucumbers, seasoned with lemon juice, salt, and chaat masala. It's a refreshing, nutrient-packed snack perfect for weight loss and boosting immunity.</p>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    
  );
};
export default Home;
