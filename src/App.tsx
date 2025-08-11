import './App.css'
import ProductCard from './components/card/ProductCard'
import data from './data.json';

function App() {
  return (
  <div className="page">
    <h1 className="mainHeading">List of Products</h1>
    <div style={{ padding: 16 }}>
      <div className='productGrid'>
      {data.map((p) => (
        <ProductCard key={p.id} product={p} />
      
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
